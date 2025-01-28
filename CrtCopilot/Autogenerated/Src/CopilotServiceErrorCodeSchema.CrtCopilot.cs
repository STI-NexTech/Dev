namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotServiceErrorCodeSchema

	/// <exclude/>
	public class CopilotServiceErrorCodeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotServiceErrorCodeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotServiceErrorCodeSchema(CopilotServiceErrorCodeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df");
			Name = "CopilotServiceErrorCode";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,142,77,10,2,49,12,133,215,22,122,135,44,117,227,5,196,133,148,241,2,226,1,106,26,165,88,147,210,118,252,65,188,187,153,65,80,68,16,178,72,242,222,251,18,246,39,170,217,35,129,43,228,91,148,185,147,28,147,52,107,238,214,76,114,191,75,17,161,54,149,16,48,249,90,225,101,216,80,57,71,164,174,20,41,78,2,169,123,72,124,69,20,26,132,211,77,231,18,249,0,91,62,178,92,120,76,193,18,88,207,203,126,250,185,157,45,254,83,86,168,159,114,119,37,236,135,102,237,99,162,240,198,253,148,71,238,195,26,173,39,101,4,176,190,245,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df"));
		}

		#endregion

	}

	#endregion

}

