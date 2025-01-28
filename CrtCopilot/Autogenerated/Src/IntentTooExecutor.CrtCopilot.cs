namespace Creatio.Copilot
{
	using System.Collections.Generic;

	#region Class: IntentToolExecutor

	/// <summary>
	/// Executor of the Intents tools.
	/// </summary>
	public class IntentToolExecutor : IToolExecutor
	{
		private readonly CopilotIntentSchema _instance;

		public IntentToolExecutor(CopilotIntentSchema instance) {
			_instance = instance;
		}

		public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments, 
				CopilotSession session) {
			session.SetCurrentIntent(_instance.UId);
			return new List<CopilotMessage> {
				CopilotMessage.FromTool($"Intent started: Name: {_instance.Name}, Caption: {_instance.Caption}, " +
					$"Description: {_instance.IntentDescription ?? _instance.Description}.", toolCallId),
				CopilotMessage.FromSystem(_instance.Prompt)
			};
		}
	}

	#endregion

}
