namespace Terrasoft.Configuration
{
	using System;
    using System.Collections.Generic;
    using Terrasoft.Core;

    internal class RemoveWebitelCollaborationsScriptExecutor : IInstallScriptExecutor {
		public void Execute(UserConnection userConnection) {
			var recordIds = new List<Guid> {
				new Guid("0e54ee2a-1af0-4f8f-8de8-d745637b7f8b"),
				new Guid("6e323b40-0ae4-4021-bff0-3b981d8fe5fc"),
				new Guid("c82cab1b-88a3-4dd8-8b1d-67002de73622")
			};
			
			foreach (Guid recordId in recordIds) {
				var entity = userConnection.EntitySchemaManager.GetEntityByName("SysMsgUserSettings", userConnection);
				
				entity.UseAdminRights = false;
				
				if (entity.FetchFromDB(recordId)) {
					entity.Delete();
				}
			}
		}
	}
}

