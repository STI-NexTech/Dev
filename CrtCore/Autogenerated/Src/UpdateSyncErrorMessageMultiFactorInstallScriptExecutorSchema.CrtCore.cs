namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema(UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e9fe00c6-7595-4940-abc5-175d3d3857ad");
			Name = "UpdateSyncErrorMessageMultiFactorInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6ded360-42cd-4008-9952-fcaf8207688b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,77,111,219,48,12,61,187,64,255,131,230,94,28,160,49,218,161,235,87,214,1,177,147,20,57,100,27,144,117,215,65,149,153,68,131,44,5,148,148,205,40,242,223,71,75,89,155,4,105,7,236,32,192,162,30,31,31,201,103,205,107,176,75,46,128,125,3,68,110,205,204,229,165,209,51,57,247,200,157,52,250,248,232,233,248,40,241,86,234,57,155,54,214,65,221,219,187,19,94,41,16,45,216,230,247,160,1,165,120,193,108,211,214,181,209,135,95,16,94,139,231,67,237,164,147,96,9,64,144,19,132,57,21,98,165,226,214,222,178,135,101,197,29,76,27,45,134,136,6,39,96,45,159,195,196,43,39,71,92,56,131,99,109,29,87,106,42,80,46,221,240,55,8,79,193,192,36,181,3,212,92,49,209,82,253,39,19,187,101,227,87,74,36,237,220,158,245,142,36,168,138,4,127,69,185,162,58,237,83,123,150,241,202,16,120,101,180,106,216,189,151,21,251,97,223,144,81,177,59,166,225,87,64,102,105,81,246,207,63,156,93,15,186,131,155,139,171,238,197,229,112,212,45,138,193,101,183,127,94,94,157,189,47,139,226,166,188,78,59,189,191,245,78,64,87,81,209,115,100,35,112,2,110,97,130,66,255,168,164,8,35,74,150,225,155,173,12,137,138,157,65,246,96,1,201,33,58,110,156,249,157,107,135,133,174,147,176,180,102,42,22,80,243,9,215,212,2,50,56,16,187,219,203,207,15,36,246,182,24,25,108,77,133,178,15,112,146,5,93,4,23,205,103,114,119,150,238,47,53,61,221,87,29,75,172,56,50,97,116,37,131,149,55,99,30,200,0,225,216,124,180,14,201,159,167,204,60,254,164,188,79,155,86,147,39,150,142,43,226,252,199,214,214,1,189,142,165,228,44,123,183,221,74,62,2,39,22,35,52,245,160,200,94,52,116,58,155,26,8,206,163,142,185,145,104,39,123,10,142,126,66,95,235,239,92,121,234,184,31,52,147,166,244,75,223,187,69,123,218,73,9,178,218,198,12,111,231,183,115,107,179,217,97,52,95,65,22,31,214,209,39,219,182,162,123,140,238,6,41,246,7,252,100,51,163,108,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e9fe00c6-7595-4940-abc5-175d3d3857ad"));
		}

		#endregion

	}

	#endregion

}

