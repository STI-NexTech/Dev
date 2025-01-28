namespace Creatio.Copilot
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core.Factories;
	using Terrasoft.Messaging.Common;

	[DefaultBinding(typeof(ICopilotMsgChannelSender))]
	internal class CopilotMsgChannelSender: ICopilotMsgChannelSender
	{

		#region Methods: Public

		public void SendMessages(CopilotChatPart copilotChatPart) {
			copilotChatPart.CheckArgumentNull(nameof(copilotChatPart));
			if (!MsgChannelManager.IsRunning) {
				return;
			}
			var simpleMessage = new SimpleMessage {
				Body = new CopilotSendUserMessageResultDto(copilotChatPart),
				Id = Guid.NewGuid(),
				Header = {
					BodyTypeName = nameof(CopilotChatPart),
					Sender = nameof(CopilotMsgChannelSender)
				}
			};
			MsgChannelManager.Instance.Post(new []{ copilotChatPart.CopilotSession.UserId }, simpleMessage);
		}

		#endregion

	}
}

