﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseCountTermSchema

	/// <exclude/>
	public class BaseCountTermSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseCountTermSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseCountTermSchema(BaseCountTermSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2bc19a40-e2b8-4afc-a039-d55edec8109f");
			Name = "BaseCountTerm";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,85,77,79,219,64,16,61,7,137,255,48,13,151,32,33,231,206,135,37,26,90,132,212,74,168,132,246,188,177,39,102,213,245,110,180,187,14,74,17,255,189,51,187,89,199,9,56,112,160,234,5,180,235,247,60,111,158,223,76,180,168,209,45,68,129,48,69,107,133,51,115,159,77,140,158,203,170,177,194,75,163,179,137,80,168,75,97,221,225,193,211,225,193,160,113,82,87,112,183,114,30,235,179,157,51,49,149,194,130,105,46,187,70,141,86,22,27,76,79,1,2,16,228,200,98,69,7,152,40,225,28,156,194,103,225,112,98,26,237,137,85,7,196,120,60,134,115,215,212,181,176,171,124,125,14,8,240,4,129,25,17,160,96,118,150,192,227,14,122,209,204,148,44,64,204,156,183,162,240,17,185,91,101,240,20,42,181,98,110,173,89,160,245,18,221,41,220,134,23,196,231,187,82,162,22,22,192,68,174,192,141,65,41,60,102,45,190,171,38,201,89,74,235,27,161,224,138,144,83,89,35,252,232,240,249,18,216,242,193,160,66,127,6,142,254,240,233,121,143,136,59,111,44,186,232,72,33,84,209,168,40,69,153,202,237,151,194,14,76,54,140,111,166,10,239,234,189,239,23,118,68,113,137,6,110,187,249,29,253,131,41,217,74,107,60,165,4,203,248,124,145,142,173,29,75,35,75,160,74,157,186,55,154,122,90,10,229,70,55,95,116,83,163,21,51,133,231,55,41,156,87,98,149,147,223,43,119,2,165,161,134,16,60,217,121,89,243,183,61,94,107,149,115,24,245,117,243,233,2,116,163,84,130,14,52,62,190,210,121,133,182,239,13,199,217,87,169,212,43,130,71,81,85,71,78,240,138,205,122,175,99,240,142,244,93,163,231,15,30,204,128,71,196,223,14,68,29,167,195,64,197,163,216,31,198,112,179,16,86,212,160,105,29,92,12,89,242,48,79,222,6,95,179,243,113,64,188,78,160,62,27,28,230,63,249,31,23,76,209,195,151,52,139,190,177,218,229,209,12,48,243,168,150,128,233,73,39,148,237,184,74,130,82,139,191,24,26,6,246,205,24,48,35,200,58,62,219,99,219,101,193,129,147,127,112,99,30,211,97,110,108,119,126,254,153,113,229,122,240,3,169,157,214,133,92,26,191,69,220,245,35,76,72,43,158,218,118,35,139,115,120,203,148,118,207,164,186,123,205,73,146,54,112,152,173,90,163,254,187,39,31,145,194,86,22,207,231,27,25,108,205,107,125,249,160,16,82,176,105,101,63,196,157,5,141,150,190,111,87,191,104,57,125,140,97,62,125,216,100,120,191,77,244,147,38,105,171,68,202,250,208,239,208,180,213,4,5,15,222,251,6,149,89,247,76,26,181,182,236,24,148,180,158,108,133,54,121,156,182,103,158,4,38,3,119,86,101,92,160,219,151,207,127,1,57,153,132,145,212,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2bc19a40-e2b8-4afc-a039-d55edec8109f"));
		}

		#endregion

	}

	#endregion

}

