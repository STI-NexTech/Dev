namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Security;
	using System.Threading;
	using System.Threading.Tasks;
	using System.Text.RegularExpressions;
	using Creatio.Copilot.Actions;
	using Creatio.Copilot.Metadata;
	using Creatio.FeatureToggling;
	using Terrasoft.Common;
	using Terrasoft.Configuration.GenAI;
	using Terrasoft.Core;
	using Terrasoft.Core.Applications.GenAI;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Requests;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;
	using global::Common.Logging;
	using Terrasoft.Common.Threading;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Store;

	[DefaultBinding(typeof(ICopilotEngine))]
	internal class CopilotEngine : ICopilotEngine
	{

		#region Constants: Private

		private const string SystemPrompt = @"
# You are the professional agent named Creatio Copilot, designed to operate within the no-code platform Creatio, powered by an advanced LLM model.
## Global settings
You don't train any models or store customers' data. You are GDPR and HIPAA compliant. Your primary task is to assist users with their daily operations. To achieve this, you are equipped with the following capabilities:
* Contextual Response Generation: Use the provided context to generate appropriate responses and call necessary functions.
* Intent Execution: Utilize the functions and intents sent to you. An intent is a complex, sequential action on the platform aimed at fulfilling the user's goal. It comprises a prompt and a set of functions to be executed. Intent is provided for you as the tool which ends with suffix ""_intent"" (i.e. CreateVacation_intent). To start the intent you should invoke the corresponding tool. An intent is started when the corresponding tool returns a value starting with ""Intent started: Name: ..."". Until no intent has been started and no other system message instruction  has been given, suggest to users all tools you have (prioritize tools based on relevance), but don't answer any of the user's questions, that are not connected with descriptions of these tools. The name of the intent is technical information, so use user-friendly caption and description of intent instead. Initial state: no intent has been started.
## Rules for Interaction:
* Topic Restrictions: Do not answer questions that are unrelated to work, such as personal preferences (e.g., pizza vs pasta). Avoid responding to queries that could harm or offend the user. Only discuss Creatio-related platforms. Refrain from discussing the cost of using Creatio. Avoid topics related to gender equality, religion or politics.
* Information Requests: When needing specific information, ask for the record number or the name of the entity, not the record ID.
* Communication Standards: Maintain politeness and professionalism at all times. Be specific and concise in your responses, ensuring clarity and relevance.
* Respond in the language the user addressed you in. Switch to another language if the user switches or requests a translation.";

		private const string ApiSystemPrompt = @"
# You are the professional agent named Creatio Copilot, designed to operate within the API based no-code platform Creatio powered by an advanced LLM model. 
## Global Settings
You are GDPR and HIPAA compliant, not training any models not storing customers data. 
## Rules for Interaction
Do not expect any clarifications. Do your best to provide answer with data available. Use language the user`s query is in unless the user explicitly specifies response language.
## Rules for Response generation
Must be direct, specific, relevant and efficiently fulfilling the user`s request and concisely solving the request. Must maintain politeness and professionalism at all times. Must accurately use official Creatio terminology. Must be standalone and based solely on the current query. Cannot contain any extra phrases like “Here is the answer”. Cannot contain repeated question.
## Response Topic Restrictions (cannot be answered by you under any conditions).
Gender equality, religion, philosophy, politics, medicine, financial, tax, regulations or legal advices, Costs of using Creatio. Topics concerning business automation platforms not related to Creatio. Queries that could physically or mentally harm or offend users. Unrelated to work, such as personal preferences (e.g., pizza vs pasta).";
		private const string CanDevelopCopilotIntentsOperation = "CanDevelopCopilotIntents";
		private const string CanRunCopilotOperation = "CanRunCopilot";
		private const string CanRunCopilotApiOperation = "CanRunCopilotApi";
		private const string ApiSystemPromptCode = "ApiSystem";
		private const string SystemPromptCode = "System";

		#endregion

		#region Fields: Private

		private readonly ILog _log = LogManager.GetLogger("Copilot");
		private readonly UserConnection _userConnection;
		private readonly IGenAICompletionServiceProxy _completionService;
		private readonly ICopilotSessionManager _sessionManager;
		private readonly ICopilotRequestLogger _requestLogger;
		private readonly ICopilotMsgChannelSender _copilotMsgChannelSender;
		private readonly ICopilotContextBuilder _contextBuilder;
		private readonly IList<ToolDefinition> _emptyToolList = new List<ToolDefinition>();

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotEngine"/>
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="completionService">GenAI Completion service.</param>
		/// <param name="copilotSessionManager">Copilot session manager.</param>
		/// <param name="copilotMsgChannelSender">Copilot message sender.</param>
		/// <param name="contextBuilder">Copilot context builder.</param>
		/// <param name="requestLogger">Copilot request logger.</param>
		public CopilotEngine(UserConnection userConnection, IGenAICompletionServiceProxy completionService,
				ICopilotSessionManager copilotSessionManager, ICopilotMsgChannelSender copilotMsgChannelSender,
				ICopilotContextBuilder contextBuilder, ICopilotRequestLogger requestLogger) {
			_userConnection = userConnection;
			_completionService = completionService;
			_sessionManager = copilotSessionManager;
			_copilotMsgChannelSender = copilotMsgChannelSender;
			_contextBuilder = contextBuilder;
			_requestLogger = requestLogger;
		}

		#endregion

		#region Properties: Private

		private CopilotIntentSchema _systemIntent;
		private CopilotIntentSchema SystemIntent =>
			_systemIntent ?? (_systemIntent = IntentSchemaManager.FindSystemIntent());

		private CopilotIntentSchemaManager IntentSchemaManager => _userConnection.GetIntentSchemaManager();

		#endregion

		#region Methods: Private

		private static string GetBaseApplicationUrl() {
			HttpRequest request = HttpContext.Current.Request;
			var baseApplicationUrl = WebUtilities.GetBaseApplicationUrl(request);
			baseApplicationUrl = Regex.Replace(baseApplicationUrl.TrimEnd(), @"/[0-9]/?$", "");
			var uri = new Uri(baseApplicationUrl);
			return uri.AbsolutePath.TrimEnd('/');
		}

		private CopilotSession CreateSession() {
			string systemPrompt = GetCopilotPrompt(SystemPromptCode, SystemPrompt);
			CopilotMessage message = CopilotMessage.FromSystem(systemPrompt);
			message.IsFromSystemPrompt = true;
			var messages = new List<CopilotMessage> { message };
			var session = new CopilotSession(_userConnection.CurrentUser.Id, messages, null);
			_sessionManager.Add(session);
			return session;
		}

		private void AdjustSessionSystemIntentPrompt(CopilotSession copilotSession) {
			if (copilotSession.CurrentIntentId.IsNullOrEmpty()) {
				return;
			}
			if (copilotSession.Messages.Any(copilotMessage => copilotMessage.IsFromSystemIntent)) {
				return;
			}
			string baseApplicationUrl = GetBaseApplicationUrl();
			var parameters = new Dictionary<string, object> {{"BaseAppUrl", baseApplicationUrl}};
			string systemIntentPrompt = GenerateIntentPrompt(parameters, SystemIntent, new List<string>());
			CopilotMessage message = CopilotMessage.FromSystem(systemIntentPrompt);
			message.IsFromSystemIntent = true;
			copilotSession.AddMessage(message);
		}

		private Guid SaveRequestInfo(DateTime? start, DateTime? end, UsageResponse usage, string error, bool isFailed) {
			start = start ?? DateTime.Now;
			end = end ?? DateTime.Now;
			var duration = (long)(end - start).Value.TotalMilliseconds;
			var requestInfo = new CopilotRequestInfo {
				StartDate = start.Value,
				Error = error,
				TotalTokens = usage?.TotalTokens ?? 0,
				PromptTokens = usage?.PromptTokens ?? 0,
				CompletionTokens = usage?.CompletionTokens,
				Duration = duration,
				IsFailed = isFailed
			};
			return _requestLogger.SaveCopilotRequest(requestInfo);
		}

		private void HandleCompletionResponse(ChatCompletionResponse completionResponse, CopilotSession session) {
			if (completionResponse?.Choices == null) {
				return;
			}
			List<CopilotMessage> assistantMessages = GetAssistantMessagesWithoutToolCalls(completionResponse);
			session.AddMessages(assistantMessages);
			SendMessagesToClient(session);
		}

		private void SendMessagesToClient(CopilotSession copilotSession) {
			var messagesToSend = copilotSession.Messages.Where(message => !message.IsSentToClient)
				.Cast<BaseCopilotMessage>().ToList();
			if (messagesToSend.IsNullOrEmpty()) {
				return;
			}
			var copilotChatPart = new CopilotChatPart(messagesToSend, copilotSession);
			_copilotMsgChannelSender.SendMessages(copilotChatPart);
			messagesToSend.ForEach(message => message.IsSentToClient = true);
		}

		private static List<CopilotMessage> GetAssistantMessagesWithoutToolCalls(
				ChatCompletionResponse completionResponse) {
			List<CopilotMessage> assistantMessages = GetResponsesWithMessage(completionResponse)
				.Select(response => new CopilotMessage(response.Message, skipToolCalls: true))
				.ToList();
			return assistantMessages;
		}

		private static void SetErrorResponse(CopilotIntentCallResult response, string errorMessage,
				IntentCallStatus status = IntentCallStatus.FailedToExecute) {
			response.ErrorMessage = errorMessage;
			response.Status = status;
		}

		private static string GetCopilotMessage(ChatCompletionResponse completionResponse) {
			IEnumerable<string> messages = GetResponsesWithMessage(completionResponse)
				.Select(response => response.Message.Content);
			return string.Join(" ", messages);
		}

		private static IEnumerable<ChatChoiceResponse> GetResponsesWithMessage(
				ChatCompletionResponse completionResponse) {
			return completionResponse.Choices.Where(response => response.Message.Content.IsNotNullOrEmpty());
		}

		private static IEnumerable<string> FilterActiveIntents(string[] names,
				IEnumerable<CopilotIntentSchema> activeIntents) {
			HashSet<string> allActiveIntentNames = activeIntents.Select(intent => intent.Name.ToLower()).ToHashSet();
			return names.Where(name => allActiveIntentNames.Contains(name.ToLower()));
		}

		private void HandleToolCallsCompleted(List<CopilotMessage> toolMessages, CopilotSession session,
				CopilotContext copilotContext = null) {
			if (toolMessages.IsNullOrEmpty()) {
				return;
			}
			AdjustSessionSystemIntentPrompt(session);
			session.AddMessages(toolMessages);
			UpdateContext(copilotContext, session);
			SendSession(session, copilotContext);
		}

		private bool CanRunCopilotApi() {
			if (Features.GetIsDisabled<GenAIFeatures.EnableStandaloneApi>()) {
				return false;
			}
			return _userConnection.DBSecurityEngine.GetCanExecuteOperation(CanRunCopilotApiOperation);
		}

		private bool CanUseCopilotChat() {
			return _userConnection.DBSecurityEngine.GetCanExecuteOperation(CanRunCopilotOperation);
		}

		private IEnumerable<CopilotIntentSchema> FindCommonIntentsForChat(Guid? currentIntentId) {
			IEnumerable<CopilotIntentSchema> items = FindCommonIntents()
				.Where(intent => !intent.Behavior.SkipForChat);
			if (currentIntentId != null) {
				items = items.Where(x => x.UId != currentIntentId);
			}
			return items;
		}

		private IEnumerable<CopilotIntentSchema> FindCommonIntentsForApi() {
			return FindCommonIntents().Where(intent => intent.Behavior.SkipForChat);
		}

		private IEnumerable<CopilotIntentSchema> FindCommonIntents() {
			var intentItems = IntentSchemaManager.GetItems() ??
				new List<ISchemaManagerItem<CopilotIntentSchema>>();
			bool canDevelopIntents = _userConnection.DBSecurityEngine.GetCanExecuteOperation(
				CanDevelopCopilotIntentsOperation, new GetCanExecuteOperationOptions {
					ThrowExceptionIfNotFound = false
				});
			return intentItems
				.Select(x => x.Instance)
				.Where(x => x.Type != CopilotIntentType.Default &&
					(x.Status == CopilotIntentStatus.Active
						|| x.Status == CopilotIntentStatus.InDevelopment && canDevelopIntents));
		}

		private LocalizableString GetLocalizableString(string localizableStringName) {
			string lsv = "LocalizableStrings." + localizableStringName + ".Value";
			return new LocalizableString(_userConnection.Workspace.ResourceStorage, nameof(CopilotEngine), lsv);
		}

		private IEnumerable<CopilotActionMetaItem> GetActionsMetaItems(Guid? currentIntentId) {
			var actionMetaItems = new List<CopilotActionMetaItem>();
			if (currentIntentId != SystemIntent?.UId) {
				var currentIntentActionsMetaItems = GetCurrentIntentActionsMetaItems(currentIntentId);
				actionMetaItems.AddRange(currentIntentActionsMetaItems);
			}
			if (!currentIntentId.IsNullOrEmpty()) {
				CopilotActionMetaItemCollection systemActionMetaItems = SystemIntent?.Actions;
				if (systemActionMetaItems != null && systemActionMetaItems.IsNotNullOrEmpty()) {
					actionMetaItems.AddRange(systemActionMetaItems);
				}
			}
			return actionMetaItems;
		}

		private IEnumerable<CopilotActionMetaItem> GetCurrentIntentActionsMetaItems(Guid? intentId) {
			if (intentId.IsNullOrEmpty()) {
				return new List<CopilotActionMetaItem>();
			}
			CopilotIntentSchema intent = IntentSchemaManager.FindInstanceByUId(intentId.Value);
			List<CopilotActionMetaItem> actions = intent?.Actions?.ToList();
			return actions ?? new List<CopilotActionMetaItem>();
		}

		private (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> toolMapping) GetToolDefinitions(
				Guid? intentId) {
			IEnumerable<CopilotIntentSchema> commonIntents = FindCommonIntentsForChat(intentId);
			IEnumerable<CopilotActionMetaItem> actionMetaItems = GetActionsMetaItems(intentId);
			var (tools, toolMapping) =
				CopilotToolProcessor.GetToolDefinitions(_userConnection, actionMetaItems, commonIntents);
			return (tools, toolMapping);
		}

		private ChatCompletionRequest CreateCompletionRequest(IEnumerable<CopilotMessage> sessionMessages,
				IList<ToolDefinition> tools = null) {
			List<ChatMessage> messages = sessionMessages
				.Select(msg => msg.ToCompletionApiMessage())
				.ToList();
			var completionRequest = new ChatCompletionRequest {
				Messages = messages,
				Tools = tools ?? _emptyToolList,
				Temperature = null
			};
			return completionRequest;
		}

		private bool IsActiveIntent(CopilotIntentSchema intent) {
			bool canDevelopIntents = _userConnection.DBSecurityEngine.GetCanExecuteOperation(
				CanDevelopCopilotIntentsOperation, new GetCanExecuteOperationOptions {
					ThrowExceptionIfNotFound = false
				});
			return intent.Status != CopilotIntentStatus.Deactivated &&
				(canDevelopIntents || intent.Status != CopilotIntentStatus.InDevelopment);
		}

		private async Task<(DateTime? start, DateTime? end, ChatCompletionResponse response)> ProcessCompletionRequest(
				ChatCompletionRequest request, bool sync = true, CancellationToken token = default) {
			DateTime? start = DateTime.Now;
			ChatCompletionResponse response;
			if (sync) {
				response = _completionService.ChatCompletion(request);
			} else {
				response = await _completionService.ChatCompletionAsync(request, token).ConfigureAwait(false);
			}
			DateTime? end = DateTime.Now;
			return (start, end, response);
		}

		private void HandleToolCalls(CopilotSession session, ChatCompletionResponse response,
			Dictionary<string, IToolExecutor> mapping, CopilotContext copilotContext) {
			List<CopilotMessage> messages =
				CopilotToolProcessor.HandleToolCalls(_userConnection, response, session, mapping);
			HandleToolCallsCompleted(messages, session, copilotContext);
		}

		private static (string errorMessage, string errorCode) GetErrorInfo(Exception e) {
			if (e is GenAIException genAiException) {
				return (genAiException.RawError, genAiException.ErrorCode);
			}
			return (e.Message, CopilotServiceErrorCode.UnknownError);
		}

		private void SendSession(CopilotSession session, CopilotContext copilotContext = null) {
			lock (session) {
				DateTime? startDate = null, endDate = null;
				ChatCompletionResponse completionResponse = null;
				var errorMessage = string.Empty;
				(List<ToolDefinition> tools, Dictionary<string, IToolExecutor> toolMapping) = GetToolDefinitions(session.CurrentIntentId);
				ChatCompletionRequest completionRequest = CreateCompletionRequest(session.Messages, tools);
				var isFailed = false;
				try {
					SendMessagesToClient(session);
					(startDate, endDate, completionResponse) = ProcessCompletionRequest(completionRequest)
						.GetAwaiter()
						.GetResult();
					HandleCompletionResponse(completionResponse, session);
				} catch (Exception e) {
					(errorMessage, _) = GetErrorInfo(e);
					isFailed = true;
					throw;
				} finally {
					UsageResponse usage = completionResponse?.Usage;
					var requestId = SaveRequestInfo(startDate, endDate, usage, errorMessage, isFailed);
					_sessionManager.Update(session.Id, requestId);
				}
				HandleToolCalls(session, completionResponse, toolMapping, copilotContext);
			}
		}

		private async Task<CopilotIntentCallResult> GetIntentCompletion(ChatCompletionRequest completionRequest,
				CopilotIntentCallResult response, CancellationToken token) {
			DateTime? startDate = null;
			DateTime? endDate = null;
			ChatCompletionResponse completionResponse = null;
			try {
				(startDate, endDate, completionResponse) = await ProcessCompletionRequest(completionRequest,
						false, token)
					.ConfigureAwait(true);
				MapIntentResponse(completionResponse, response);
			} catch (Exception e) {
				(response.ErrorMessage, _) = GetErrorInfo(e);
				response.Status = IntentCallStatus.FailedToExecute;
			} finally {
				UsageResponse usage = completionResponse?.Usage;
				SaveRequestInfo(startDate, endDate, usage, response.ErrorMessage, !response.IsSuccess);
			}
			return response;
		}

		private static void MapIntentResponse(ChatCompletionResponse copilotResponse, CopilotIntentCallResult intentResponse) {
			if (copilotResponse?.Choices == null) {
				intentResponse.Status = IntentCallStatus.CantGenerateGoodResponse;
				return;
			}
			intentResponse.Status = IntentCallStatus.ExecutedSuccessfully;
			intentResponse.Content = GetCopilotMessage(copilotResponse);
		}

		private string GenerateIntentPrompt(IDictionary<string, object> parameterValues, CopilotIntentSchema intent,
				List<string> warnings) {
			if (parameterValues == null) {
				parameterValues = new Dictionary<string, object>();
			}
			ValidateInputParameters(parameterValues, intent, warnings);
			var formattingContext = new PromptTemplateFormattingContext(_userConnection) {
				VariableValues = parameterValues
			};
			return intent.PromptTemplate.Format(formattingContext);
		}

		private void ValidateInputParameters(IDictionary<string, object> parameterValues,
				CopilotIntentSchema intent, List<string> warnings) {
			HashSet<string> providedParameterNames = parameterValues.Keys.ToHashSet();
			List<string> inputParameterNames = intent.InputParameters.Select(x => x.Name).ToList();
			var notSpecified = new HashSet<string>(inputParameterNames);
			notSpecified.ExceptWith(providedParameterNames);
			if (notSpecified.Any()) {
				string warning = GetLocalizableString("WarningParameterValueNotSpecified")
					.Format(string.Join(",", notSpecified));
				warnings.Add(warning);
			}
			providedParameterNames.ExceptWith(inputParameterNames);
			if (providedParameterNames.Any()) {
				string warning = GetLocalizableString("WarningParameterNotExist")
					.Format(string.Join(",", providedParameterNames));
				warnings.Add(warning);
			}
		}

		private List<CopilotMessage> CreateCopilotApiIntentMessages(string prompt) {
			string apiSystemPrompt = GetCopilotPrompt(ApiSystemPromptCode, ApiSystemPrompt);
			CopilotMessage systemMessage = CopilotMessage.FromSystem(apiSystemPrompt);
			CopilotMessage message = CopilotMessage.FromUser(prompt);
			return new List<CopilotMessage> {
				systemMessage,
				message
			};
		}

		private void UpdateContext(CopilotContext copilotContext, CopilotSession session) {
			if (session.CurrentIntentId.IsNullOrEmpty()) {
				return;
			}
			session.UpdateContext(copilotContext, _contextBuilder);
		}

		private EntityCollection FetchCopilotPrompt(string code) {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "CopilotPrompt") {
				PrimaryQueryColumn = {
					IsAlwaysSelect = true
				},
				Cache = _userConnection.SessionCache.WithLocalCaching("CopilotPromptCache"),
				CacheItemName = $"Copilot{code}PromptCacheItem"
			};
			esq.AddColumn("Prompt");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Code", code));
			EntityCollection entityCollection = esq.GetEntityCollection(_userConnection);
			return entityCollection;
		}

		private string GetCopilotPrompt(string code, string fallbackPrompt) {
			EntityCollection entityCollection = FetchCopilotPrompt(code);
			string prompt = string.Join(Environment.NewLine,
				entityCollection?.Select(x => x?.GetTypedColumnValue<string>("Prompt") ?? string.Empty) ??
				Array.Empty<string>());
			return prompt.IsNotNullOrEmpty() ? prompt : fallbackPrompt;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc/>
		public CopilotChatPart SendUserMessage(string content, Guid? copilotSessionId = null,
				CopilotContext copilotContext = null) {
			_userConnection.DBSecurityEngine.CheckCanExecuteOperation(CanRunCopilotOperation);
			CopilotSession session = null;
			if (copilotSessionId.HasValue && copilotSessionId.Value.IsNotEmpty()) {
				session = _sessionManager.FindById(copilotSessionId.Value);
			}
			if (session == null) {
				session = CreateSession();
			}
			UpdateContext(copilotContext, session);
			CopilotMessage userMessage = CopilotMessage.FromUser(content);
			session.AddMessage(userMessage);
			DateTime lastMessageDate = userMessage.Date;
			string errorMessage = null;
			string errorCode = null;
			try {
				SendSession(session, copilotContext);
			} catch (Exception e) {
				(errorMessage, errorCode) = GetErrorInfo(e);
				_log.Error(e);
			}
			List<BaseCopilotMessage> lastMessages = session.Messages
				.Where(message => message.Date >= lastMessageDate)
				.Cast<BaseCopilotMessage>().ToList();
			return new CopilotChatPart(lastMessages, session, errorMessage, errorCode);
		}

		/// <inheritdoc/>
		public void CompleteAction(Guid copilotSessionId, string actionInstanceUId,
				CopilotActionExecutionResult result) {
			CopilotSession session = _sessionManager.FindById(copilotSessionId);
			if (session?.State != CopilotSessionState.Active) {
				return;
			}
			string resultContent = result.Status == CopilotActionExecutionStatus.Completed
				? result.Response ?? "Ok"
				: result.ErrorMessage ?? "Unknown error occurred";
			List<CopilotMessage> toolMessages = session.CreateToolCallMessages(actionInstanceUId, resultContent);
			HandleToolCallsCompleted(toolMessages, session);
		}

		/// <inheritdoc/>
		public async Task<CopilotIntentCallResult> ExecuteIntentAsync(CopilotIntentCall call,
				CancellationToken token = default) {
			call.CheckArgumentNull(nameof(call));
			var response = new CopilotIntentCallResult();
			try {
				try {
					_userConnection.DBSecurityEngine.CheckCanExecuteOperation(CanRunCopilotApiOperation);
				} catch (SecurityException e) {
					SetErrorResponse(response, e.GetFullMessage(), IntentCallStatus.InsufficientPermissions);
					return response;
				}
				if (Features.GetIsDisabled<GenAIFeatures.EnableStandaloneApi>()) {
					SetErrorResponse(response, GetLocalizableString("StandaloneApiFeatureOff"),
						IntentCallStatus.InsufficientPermissions);
					return response;
				}
				CopilotIntentSchema intent = IntentSchemaManager.FindInstanceByName(call.IntentName);
				if (intent == null) {
					LocalizableString ls = GetLocalizableString("IntentNotFound");
					SetErrorResponse(response, ls.Format(call.IntentName), IntentCallStatus.IntentNotFound);
					return response;
				}
				if (!IsActiveIntent(intent)) {
					LocalizableString ls = GetLocalizableString("InactiveIntent");
					SetErrorResponse(response, ls.Format(call.IntentName), IntentCallStatus.InactiveIntent);
					return response;
				}
				if (!intent.Behavior.SkipForChat) {
					LocalizableString ls = GetLocalizableString("WrongIntentMode");
					SetErrorResponse(response, ls.Format(call.IntentName, CopilotIntentMode.Chat),
						IntentCallStatus.WrongIntentMode);
					return response;
				}
				var warnings = new List<string>();
				response.Warnings = warnings;
				string prompt = GenerateIntentPrompt(call.Parameters, intent, warnings);
				if (!string.IsNullOrWhiteSpace(call.AdditionalPromptText)) {
					prompt = $"{prompt}{Environment.NewLine}{call.AdditionalPromptText}";
				}
				List<CopilotMessage> messages = CreateCopilotApiIntentMessages(prompt);
				ChatCompletionRequest completionRequest = CreateCompletionRequest(messages);
				return await GetIntentCompletion(completionRequest, response, token)
					.ConfigureAwait(false);
			} catch (Exception e) {
				SetErrorResponse(response, e.GetFullMessage());
				return response;
			}
		}

		/// <inheritdoc/>
		public IList<string> GetAvailableIntents(CopilotIntentMode mode, params string[] names) {
			if ((mode == CopilotIntentMode.Api && !CanRunCopilotApi()) ||
					(mode == CopilotIntentMode.Chat && !CanUseCopilotChat())) {
				return new List<string>();
			}
			IEnumerable<CopilotIntentSchema> activeIntents = mode == CopilotIntentMode.Api ?
				FindCommonIntentsForApi() :
				FindCommonIntentsForChat(null);
			IList<string> availableIntentNames = names.Any() ?
				FilterActiveIntents(names, activeIntents).ToList() :
				activeIntents.Select(intent => intent.Name).ToList();
			return availableIntentNames;
		}

		/// <inheritdoc/>
		public CopilotIntentCallResult ExecuteIntent(CopilotIntentCall call) {
			return AsyncPump.Run(() => ExecuteIntentAsync(call, CancellationToken.None));
		}

		#endregion

	}

}

