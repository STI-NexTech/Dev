namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotSessionManagerSchema

	/// <exclude/>
	public class ICopilotSessionManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotSessionManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotSessionManagerSchema(ICopilotSessionManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e947f22a-dded-4d56-a11b-5ff87b914929");
			Name = "ICopilotSessionManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,144,65,10,194,48,16,69,215,45,120,135,44,43,136,23,80,4,45,90,178,112,37,30,32,38,95,9,164,73,205,36,130,72,239,110,106,235,162,69,220,205,252,121,255,207,48,86,212,160,70,72,176,210,67,4,237,150,165,107,180,113,97,150,191,102,121,22,73,219,27,59,61,41,160,94,77,250,68,26,3,153,60,150,150,21,44,188,150,137,73,84,19,47,70,75,166,109,128,191,118,217,124,8,61,129,40,225,71,97,197,13,62,145,221,142,108,60,100,91,165,138,137,36,71,237,188,187,36,123,56,173,216,185,81,34,160,168,98,170,199,16,87,11,246,145,61,238,17,20,184,234,109,147,228,131,182,106,247,228,234,119,68,111,225,123,27,107,120,113,49,88,143,237,27,86,33,108,211,11,30,24,20,234,131,34,193,127,237,159,67,75,227,232,203,252,217,213,118,255,107,217,27,96,177,185,224,150,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e947f22a-dded-4d56-a11b-5ff87b914929"));
		}

		#endregion

	}

	#endregion

}

