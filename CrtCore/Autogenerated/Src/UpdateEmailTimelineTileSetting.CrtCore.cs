 namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
    using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
    using Newtonsoft.Json;

	public class UpdateEmailTimelineTileSetting : IInstallScriptExecutor
	{

		private readonly Guid _emailTileSettingId = Guid.Parse("09A70391-B767-40AB-97B8-6D1B538ADBE6");
        private readonly String _config = "{\r\n\t\"entitySchemaName\": \"Activity\",\r\n\t\"typeColumnValue\": \"e2831dec-cfc0-df11-b00f-001d60e938c6\",\r\n\t\"viewModelClassName\": \"Terrasoft.EmailTimelineItemViewModel\",\r\n\t\"viewClassName\": \"Terrasoft.EmailTimelineItemView\",\r\n\t\"orderColumnName\": \"SendDate\",\r\n\t\"authorColumnName\": \"SenderContact\",\r\n\t\"messageColumnName\": \"Body\",\r\n\t\"filters\": {\r\n\t\t\"ownerFilter\": {\r\n\t\t\t\"comparisonType\": 15,\r\n\t\t\t\"existsFilterColumnName\": \"[ActivityParticipant:Activity].Id\",\r\n\t\t\t\"subFilterColumnName\": \"Participant\"\r\n\t\t}\r\n\t},\r\n\t\"columns\": [{\r\n\t\t\"columnName\": \"Title\",\r\n\t\t\"isSearchEnabled\": true,\r\n\t\t\"columnAlias\": \"Subject\"\r\n\t},\r\n\t{\r\n\t\t\"columnName\": \"Sender\",\r\n\t\t\"columnAlias\": \"AuthorEmail\"\r\n\t},\r\n\t{\r\n\t\t\"columnName\": \"Recepient\",\r\n\t\t\"columnAlias\": \"RecipientEmail\"\r\n\t},\r\n\t{\r\n\t\t\"columnName\": \"[ActivityParticipant:Activity:Id].Participant\",\r\n\t\t\"columnAlias\": \"Participant\"\r\n\t},\r\n\t{\r\n\t\t\"columnName\": \"[ActivityParticipant:Activity:Id].Role\",\r\n\t\t\"columnAlias\": \"ParticipantRole\"\r\n\t},\r\n\t{\r\n\t\t\"columnName\": \"[ActivityParticipant:Activity:Id].Participant.Email\",\r\n\t\t\"columnAlias\": \"ParticipantEmail\"\r\n\t}]\r\n}";

		private void UpdateSetting(UserConnection userConnection) {
			var update = new Update(userConnection, "TimelineTileSetting")
				.Set("Data", Column.Parameter(Encoding.UTF8.GetBytes(_config)))
				.Where("Id").IsEqual(Column.Parameter(_emailTileSettingId));
			update.Execute();
		}

		public void Execute(UserConnection userConnection) {
			UpdateSetting(userConnection);
		}
	}
}
