namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookSourceConstantsSchema

	/// <exclude/>
	public class WebhookSourceConstantsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookSourceConstantsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookSourceConstantsSchema(WebhookSourceConstantsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5c4d12fa-2a84-42e8-8c1f-ddb1a7a5cd70");
			Name = "WebhookSourceConstants";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c57d96f3-f6a9-41c3-a651-44ed58ea0c9a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,144,65,79,195,48,12,133,207,171,212,255,96,109,247,246,206,0,9,237,186,3,82,145,118,246,178,180,68,44,206,100,39,160,106,218,127,199,75,73,25,28,144,56,69,182,243,222,247,108,66,111,229,132,198,194,139,101,70,9,125,108,54,129,122,55,36,198,232,2,213,213,185,174,22,73,28,13,208,141,18,173,95,215,149,118,218,182,133,123,73,222,35,143,143,95,181,10,35,58,18,248,176,251,215,16,222,64,66,98,181,22,203,239,78,95,19,72,34,82,148,166,24,180,55,14,167,180,63,58,3,230,136,34,176,155,28,186,108,176,41,58,253,117,206,244,197,138,237,160,233,96,30,221,193,115,214,79,227,223,233,114,99,247,51,85,31,24,182,72,7,221,204,53,179,232,54,209,28,233,10,1,137,124,61,66,145,192,3,44,103,185,9,126,185,254,3,221,125,35,145,198,114,159,127,80,159,84,165,192,2,89,89,58,76,23,200,245,165,174,46,159,198,12,46,149,202,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5c4d12fa-2a84-42e8-8c1f-ddb1a7a5cd70"));
		}

		#endregion

	}

	#endregion

}

