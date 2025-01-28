namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: UpdateSyncErrorMessageMultiFactorInstallScriptExecutor

	internal class UpdateSyncErrorMessageMultiFactorInstallScriptExecutor : IInstallScriptExecutor
	{
		#region Fields: Private
		
		private readonly Guid _syncErrorMessageMultiFactorId = new Guid("BCA1508D-D947-46EF-BBD6-A1C702CBB9C8");
		
		#endregion
		
		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity errorMessage = entitySchemaManager.GetEntityByName("SyncErrorMessage", userConnection);
			var conditions = new Dictionary<string, object> {
				{ "Id", _syncErrorMessageMultiFactorId }
			};
			if(!errorMessage.FetchFromDB(conditions)){
				return;
			}
			errorMessage.SetColumnValue("Action", "OAuthAuthenticate");
			errorMessage.SetColumnValue("Name", " ");
			errorMessage.Save();
		}

		#endregion

	}

	#endregion

}

