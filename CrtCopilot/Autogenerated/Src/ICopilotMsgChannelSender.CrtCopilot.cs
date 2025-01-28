namespace Creatio.Copilot
{

	/// <summary>
	/// Interface for sending messages created during conversation with Copilot.
	/// </summary>
	public interface ICopilotMsgChannelSender
	{
		/// <summary>
		/// Sends message to client.
		/// </summary>
		/// <param name="copilotChatPart">The part of a conversation.</param>
		void SendMessages(CopilotChatPart copilotChatPart);
	}

}

