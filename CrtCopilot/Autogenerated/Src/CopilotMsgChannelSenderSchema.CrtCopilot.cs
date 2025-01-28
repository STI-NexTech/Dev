namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotMsgChannelSenderSchema

	/// <exclude/>
	public class CopilotMsgChannelSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotMsgChannelSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotMsgChannelSenderSchema(CopilotMsgChannelSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("536757cd-f909-4133-9259-97971ebdf9fd");
			Name = "CopilotMsgChannelSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,82,77,75,195,64,16,61,167,224,127,88,241,146,64,201,15,104,241,160,17,181,135,148,210,214,147,120,88,147,73,186,184,153,13,59,155,150,82,250,223,157,100,87,165,31,66,72,50,31,111,102,222,155,65,217,0,181,178,0,145,89,144,78,153,52,51,173,210,198,221,140,14,55,163,168,35,133,181,88,237,201,65,51,253,181,215,96,173,36,83,57,78,110,26,131,215,35,22,210,103,89,56,99,21,208,181,140,28,136,100,205,190,191,42,156,245,254,4,149,236,180,123,84,88,114,44,118,251,22,76,21,207,194,88,57,213,217,70,34,130,94,1,150,96,147,228,131,65,10,29,88,148,90,20,90,18,137,127,114,39,226,191,42,92,226,48,116,143,238,44,212,202,160,200,193,109,76,73,19,177,232,62,181,42,124,176,29,254,197,214,168,82,244,64,207,0,40,14,101,185,166,91,72,235,68,113,106,39,162,215,50,138,206,220,105,182,129,226,235,193,214,93,3,232,230,157,214,49,242,58,152,237,57,62,153,14,120,85,137,248,246,111,246,92,34,119,183,233,140,150,29,34,139,245,211,39,178,224,58,139,30,116,28,222,91,105,5,169,166,213,16,134,22,247,2,97,39,86,39,190,0,127,52,229,62,196,3,179,158,237,27,129,13,137,75,32,94,209,147,51,23,147,142,125,133,89,201,248,151,78,149,233,28,118,253,55,254,137,188,130,100,193,57,26,122,13,205,214,188,228,57,83,239,155,122,5,178,235,117,35,191,175,139,188,139,179,240,233,158,251,209,11,113,69,56,36,39,177,128,116,97,200,197,61,221,247,143,195,249,242,210,95,9,136,248,50,210,94,6,166,119,28,159,234,233,87,116,12,87,196,67,248,67,26,108,246,242,243,13,89,53,222,113,107,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("536757cd-f909-4133-9259-97971ebdf9fd"));
		}

		#endregion

	}

	#endregion

}

