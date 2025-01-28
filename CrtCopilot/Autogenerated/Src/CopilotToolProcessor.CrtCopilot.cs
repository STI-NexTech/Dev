namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.Copilot.Metadata;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Store;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	public static class CopilotToolProcessor
	{

		#region Class: NotFoundToolExecutor

		private class NotFoundToolExecutor: IToolExecutor
		{
			public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
				CopilotSession session) {
				return new List<CopilotMessage> {
					new CopilotMessage(FnNotFoundMessage, CopilotMessageRole.Tool, toolCallId),
				};
			}
		}

		#endregion

		#region Constants: Private

		private const string FnNotFoundMessage = "Function not found. Use only suggested functions (tools)!";
		private const string SystemActionNamesCacheKey = "SystemActionNames";

		#endregion

		#region Methods: Private

		private static Dictionary<string, object> ParseArguments(string functionCallingArguments) {
			Dictionary<string, object> result = functionCallingArguments.IsNotNullOrWhiteSpace()
				? JsonConvert.DeserializeObject<Dictionary<string, object>>(functionCallingArguments)
				: null;
			return result ?? new Dictionary<string, object>();
		}

		private static bool IsSystemAction(string actionName, UserConnection userConnection) {
			ICacheStore cacheStore = userConnection.SessionCache.WithLocalCaching(nameof(CopilotToolProcessor));
			var systemActionNames = cacheStore.GetValue<HashSet<string>>(SystemActionNamesCacheKey);
			if (systemActionNames == null) {
				CopilotIntentSchemaManager intentSchemaManager = userConnection.GetIntentSchemaManager();
				CopilotIntentSchema systemIntent = intentSchemaManager.FindSystemIntent();
				systemActionNames =
					new HashSet<string>(systemIntent?.Actions.Select(systemAction => systemAction.Name) ??
						Array.Empty<string>());
				cacheStore[SystemActionNamesCacheKey] = systemActionNames;
			}
			return systemActionNames.Contains(actionName);
		}

		private static int GetAvailableFunctionCallingCount(UserConnection userConnection, List<CopilotMessage> messages) {
			int maxFunctionCallingCountPerCopilotRequest =
				SystemSettings.GetValue(userConnection, "MaxFunctionCallingCountPerCopilotRequest", 15);
			int lastUserIndex = messages.FindLastIndex(x => x.Role == CopilotMessageRole.User);
			int lastAssistantMessagesCount = messages
				.Skip(lastUserIndex + 1)
				.Count(m => m.Role == CopilotMessageRole.Assistant);
			int availableFunctionCallingCount = maxFunctionCallingCountPerCopilotRequest - lastAssistantMessagesCount;
			return availableFunctionCallingCount;
		}

		private static ToolDefinition GetToolDefinition(
				UserConnection userConnection,
				CopilotActionMetaItem actionMetaItem) {
			CopilotActionDescriptor actionDescriptor = actionMetaItem.Descriptor;
			string toolName = actionDescriptor.Name;
			if (!IsSystemAction(toolName, userConnection)) {
				toolName =  $"{toolName}_action";
			}
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, actionDescriptor.Description);
			var parameters = actionDescriptor.Parameters.Where(param => param.Direction == ParameterDirection.Input);
			foreach (ICopilotParameterMetaInfo parameterMetaInfo in parameters) {
				functionDefinitionBuilder = functionDefinitionBuilder.AddParameter(parameterMetaInfo.Name,
					GetToolParam(parameterMetaInfo), parameterMetaInfo.IsRequired);
			}
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		private static ToolDefinition GetToolDefinition(CopilotIntentSchema intentSchema) {
			string toolName = $"{intentSchema.Name}_intent";
			string description = intentSchema.IntentDescription;
			if (description.IsNullOrWhiteSpace()) {
				description = intentSchema.Description;
			}
			if (description.IsNullOrWhiteSpace()) {
				description = intentSchema.Caption;
			}
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, description);
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		private static PropertyDefinition DefineCompositeObjectListToolDefinition(
				ICopilotParameterMetaInfo parameterMetaInfo) {
			var properties = new Dictionary<string, PropertyDefinition>();
			foreach (ICopilotParameterMetaInfo internalParameterMetaInfo in parameterMetaInfo.ItemProperties) {
				properties[internalParameterMetaInfo.Name] = GetToolParam(internalParameterMetaInfo);
			}
			List<string> requiredProperties = parameterMetaInfo.ItemProperties.Where(param => param.IsRequired)
				.Select(param => param.Name).ToList();
			var objectDefinition = PropertyDefinition.DefineObject(properties, requiredProperties,
				parameterMetaInfo.Description, null);
			return PropertyDefinition.DefineArray(objectDefinition);
		}

		private static PropertyDefinition GetToolParam(ICopilotParameterMetaInfo parameterMetaInfo) {
			switch (parameterMetaInfo.DataValueType) {
				case TextDataValueType _:
				case GuidDataValueType _:
				case DateTimeDataValueType _:
					return PropertyDefinition.DefineString(parameterMetaInfo.Description);
				case FloatDataValueType _:
					return PropertyDefinition.DefineNumber(parameterMetaInfo.Description);
				case IntegerDataValueType _:
					return PropertyDefinition.DefineInteger(parameterMetaInfo.Description);
				case BooleanDataValueType _:
					return PropertyDefinition.DefineBoolean(parameterMetaInfo.Description);
				case null:
					return PropertyDefinition.DefineNull(parameterMetaInfo.Description);
				case CompositeObjectListDataValueType _:
					return DefineCompositeObjectListToolDefinition(parameterMetaInfo);
				default:
					throw new NotImplementedException(
						$"DataValueType {parameterMetaInfo.DataValueType.Name} is not supported yet");
			}
		}

		#endregion

		#region Methods: Public

		public static (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> mapping) GetToolDefinitions(
				UserConnection userConnection, IEnumerable<CopilotActionMetaItem> actionItems,
				IEnumerable<CopilotIntentSchema> intents) {
			List<ToolDefinition> tools = new List<ToolDefinition>();
			var mapping = new Dictionary<string, IToolExecutor>();
			foreach (CopilotIntentSchema intent in intents) {
				ToolDefinition toolDefinition = GetToolDefinition(intent);
				mapping[toolDefinition.Function.Name] = new IntentToolExecutor(intent);
				tools.Add(toolDefinition);
			}
			foreach (CopilotActionMetaItem actionItem in actionItems) {
				ToolDefinition toolDefinition = GetToolDefinition(userConnection, actionItem);
				mapping[toolDefinition.Function.Name] = new ActionToolExecutor(actionItem, userConnection);
				tools.Add(toolDefinition);
			}
			return (tools, mapping);
		}

		public static List<CopilotMessage> HandleToolCalls(UserConnection userConnection,
				ChatCompletionResponse completionResponse, CopilotSession session,
				Dictionary<string, IToolExecutor> toolMapping) {
			int availableFunctionCallingCount = GetAvailableFunctionCallingCount(userConnection, session.Messages.ToList());
			IEnumerable<ToolCall> toolCalls = completionResponse?.Choices?
				.SelectMany(choice => choice?.Message?.ToolCalls ?? new List<ToolCall>())
				.Where(toolCall => toolCall?.FunctionCall != null && toolCall.FunctionCall.Name.IsNotNullOrEmpty())
				.Take(availableFunctionCallingCount)
				.ToList();
			var resultMessages = new List<CopilotMessage>();
			if (toolCalls.IsNullOrEmpty() || toolMapping.IsNullOrEmpty()) {
				return resultMessages;
			}
			foreach (ToolCall toolCall in toolCalls) {
				Dictionary<string, object> arguments = ParseArguments(toolCall.FunctionCall.Arguments);
				string functionCallName = toolCall.FunctionCall.Name;
				resultMessages.Add(new CopilotMessage(toolCall));
				List<CopilotMessage> copilotMessages;
				if (!toolMapping.TryGetValue(functionCallName, out IToolExecutor executor)) {
					var notFoundToolExecutor = new NotFoundToolExecutor();
					copilotMessages = notFoundToolExecutor.Execute(toolCall.Id, arguments, session);
					resultMessages.AddRange(copilotMessages);
					continue;
				}
				copilotMessages = executor.Execute(toolCall.Id, arguments, session);
				resultMessages.AddRange(copilotMessages);
			}
			return resultMessages;
		}

		#endregion

	}
}

