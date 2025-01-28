namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IntentTooExecutorSchema

	/// <exclude/>
	public class IntentTooExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IntentTooExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IntentTooExecutorSchema(IntentTooExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("32ac06c1-0074-47df-915e-c3c36f9ad7a3");
			Name = "IntentTooExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,83,203,78,195,48,16,60,187,82,255,97,85,56,180,34,74,239,165,180,135,240,80,37,64,72,133,51,114,157,165,53,114,236,200,118,128,170,202,191,99,199,14,77,212,114,138,246,49,51,187,179,177,164,5,154,146,50,132,76,35,181,92,165,153,42,185,80,118,56,56,12,7,164,50,92,110,97,189,55,22,11,87,17,2,153,235,145,38,125,64,137,154,179,235,225,192,117,93,104,220,186,44,100,130,26,51,131,149,180,40,237,171,82,226,238,7,89,101,149,110,186,166,211,41,204,77,85,20,84,239,23,49,110,27,64,125,128,221,97,132,26,176,14,108,210,22,52,237,160,202,106,35,56,3,230,165,206,40,129,147,239,43,19,191,7,41,53,255,162,22,193,45,153,43,41,246,16,215,12,12,107,182,195,130,194,59,151,198,82,201,48,172,213,106,157,170,140,207,161,91,240,4,26,69,242,199,6,55,208,33,38,164,238,177,63,114,99,231,145,239,9,141,161,91,92,68,95,112,108,172,246,7,240,118,100,84,136,85,158,192,45,111,78,224,236,152,135,106,2,106,243,233,238,178,0,170,183,85,225,253,75,160,153,128,68,218,181,163,245,247,49,225,219,14,24,195,116,141,54,171,180,118,192,176,207,248,111,242,244,109,149,79,154,153,137,70,91,105,9,18,191,207,79,124,232,41,198,116,122,175,85,225,141,27,95,142,2,55,56,98,109,49,159,193,179,251,243,102,112,56,106,249,68,157,64,70,75,191,95,175,20,115,174,58,130,171,32,68,46,71,183,104,152,230,167,221,65,169,83,133,229,242,120,219,180,83,168,211,81,210,49,119,146,252,187,68,120,2,29,103,94,92,178,180,147,6,80,183,103,141,167,189,64,153,135,39,225,195,250,23,90,164,102,60,100,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("32ac06c1-0074-47df-915e-c3c36f9ad7a3"));
		}

		#endregion

	}

	#endregion

}

