namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotMsgChannelSenderSchema

	/// <exclude/>
	public class ICopilotMsgChannelSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotMsgChannelSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotMsgChannelSenderSchema(ICopilotMsgChannelSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248");
			Name = "ICopilotMsgChannelSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,144,193,110,194,48,12,134,207,84,234,59,88,156,182,75,243,0,99,92,122,226,128,52,105,123,1,47,117,219,72,173,83,57,41,19,66,188,59,78,40,8,198,37,82,172,223,223,103,155,113,164,48,161,37,168,133,48,58,95,213,126,114,131,143,101,113,42,139,178,88,25,99,96,19,230,113,68,57,110,151,255,142,35,73,155,154,90,47,16,136,27,199,29,40,40,96,71,1,108,34,81,3,205,44,169,110,61,31,72,66,130,51,252,185,216,195,162,168,110,120,243,192,159,230,223,193,89,112,119,197,110,73,239,67,87,247,200,76,195,183,10,73,52,171,19,174,94,6,204,133,20,9,183,137,32,122,176,131,35,206,198,87,229,181,50,161,224,8,172,247,248,92,219,171,82,125,241,11,37,174,183,63,61,129,6,34,248,22,240,105,163,106,99,114,103,6,29,188,107,178,123,191,220,226,173,126,38,193,63,242,251,135,182,157,211,161,245,185,0,239,233,67,231,140,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248"));
		}

		#endregion

	}

	#endregion

}

