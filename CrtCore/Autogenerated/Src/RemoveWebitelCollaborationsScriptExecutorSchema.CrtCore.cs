namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: RemoveWebitelCollaborationsScriptExecutorSchema

	/// <exclude/>
	public class RemoveWebitelCollaborationsScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public RemoveWebitelCollaborationsScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public RemoveWebitelCollaborationsScriptExecutorSchema(RemoveWebitelCollaborationsScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("15e57145-c30a-4fd4-b6ac-29edc4bd1ad9");
			Name = "RemoveWebitelCollaborationsScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6ded360-42cd-4008-9952-fcaf8207688b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,82,219,138,219,48,16,125,118,32,255,32,252,228,192,42,248,150,88,237,182,133,110,247,66,160,219,135,77,75,159,117,25,57,2,91,14,146,146,54,148,253,247,74,214,102,55,9,107,236,17,158,153,51,58,231,72,154,246,96,183,148,3,250,9,198,80,59,72,55,255,54,104,169,218,157,161,78,13,122,58,249,55,157,36,59,171,116,139,214,7,235,160,191,158,78,144,127,78,83,30,210,117,192,67,191,157,63,128,6,163,248,89,219,233,112,3,190,20,139,74,59,48,154,118,136,119,212,90,244,4,253,176,135,223,192,148,131,46,140,164,108,136,44,236,154,27,181,117,119,127,129,239,220,96,208,71,180,90,105,235,104,215,93,20,2,217,100,187,99,157,226,104,63,40,129,98,5,178,95,22,140,23,166,35,75,79,235,244,119,22,113,201,158,26,100,128,15,70,172,132,69,159,145,134,63,232,187,178,238,211,195,78,137,47,47,77,73,200,134,68,150,230,176,168,1,74,138,11,42,115,92,75,34,49,17,64,176,104,234,197,178,106,88,35,9,75,103,87,151,176,37,84,101,197,234,28,231,20,106,92,231,101,129,153,244,3,42,246,129,20,130,72,88,72,254,14,140,147,146,83,86,48,76,8,173,112,45,4,193,132,21,2,47,155,60,47,5,52,213,178,44,211,217,136,122,190,30,151,49,72,239,56,229,27,148,133,41,175,242,188,247,111,82,143,250,71,3,64,59,229,14,94,253,185,71,243,187,49,191,230,27,232,233,35,213,180,5,227,207,218,197,244,205,225,135,191,73,89,234,239,195,163,109,131,217,107,112,206,31,189,77,175,46,205,142,220,34,185,36,238,54,247,136,175,162,87,250,73,181,27,23,172,151,180,179,112,214,169,36,202,94,186,239,193,241,205,189,25,250,219,155,236,40,98,246,42,226,56,243,22,58,240,39,127,220,239,57,58,19,98,8,254,243,239,127,178,161,57,126,0,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("15e57145-c30a-4fd4-b6ac-29edc4bd1ad9"));
		}

		#endregion

	}

	#endregion

}

