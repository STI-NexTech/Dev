﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DeleteWeekFirstDayRegionalFormatBasedSchema

	/// <exclude/>
	public class DeleteWeekFirstDayRegionalFormatBasedSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DeleteWeekFirstDayRegionalFormatBasedSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DeleteWeekFirstDayRegionalFormatBasedSchema(DeleteWeekFirstDayRegionalFormatBasedSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("50a38718-1c3e-4188-9cc4-e0e0669a0bfe");
			Name = "DeleteWeekFirstDayRegionalFormatBased";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2c3f70d-d3a5-4d15-9bc6-62f67312edb1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,223,111,218,48,16,126,166,82,255,135,83,182,135,32,65,52,90,198,175,106,15,227,87,21,169,157,170,49,212,71,228,198,71,176,230,216,204,118,96,8,241,191,207,137,3,75,74,145,120,178,238,124,247,221,119,223,221,9,146,160,94,147,8,225,23,42,69,180,92,154,96,36,197,146,197,169,34,134,73,113,123,179,191,189,169,165,154,137,24,102,59,109,48,121,56,217,229,20,133,151,252,193,120,248,255,43,230,242,141,240,193,96,36,147,68,138,224,73,198,177,117,219,127,27,241,73,97,108,43,194,136,19,173,7,48,70,142,6,95,17,127,79,153,210,102,76,118,63,243,127,194,167,82,37,196,12,137,70,154,39,174,211,55,206,34,136,178,188,235,210,96,0,97,40,180,33,156,207,34,197,214,102,242,23,163,212,72,101,209,246,57,230,137,205,148,33,167,150,206,139,98,27,98,208,125,174,157,1,10,9,149,130,239,32,180,157,192,130,219,118,80,193,55,176,214,51,17,196,26,193,35,154,167,220,237,123,87,81,243,234,15,31,86,208,70,101,2,46,116,180,194,132,252,176,115,179,117,188,50,152,247,113,226,99,202,40,44,20,70,82,209,144,218,36,129,219,220,233,123,216,185,251,218,189,235,244,155,221,101,55,106,182,59,228,190,217,107,223,183,154,248,165,213,234,147,62,237,245,104,59,231,147,11,130,130,58,77,170,2,61,163,89,201,139,10,109,164,173,62,226,72,84,153,170,63,215,168,236,158,9,140,178,37,131,180,98,214,33,219,185,90,109,190,166,25,68,234,30,71,220,249,252,106,66,3,60,187,155,223,105,194,196,92,48,83,72,88,115,137,193,12,141,95,17,42,164,94,3,70,146,167,137,8,94,136,178,82,26,59,30,145,114,110,129,50,101,188,122,21,225,117,133,10,207,48,234,65,168,39,127,82,194,253,51,172,147,220,71,32,38,140,157,136,78,185,177,125,20,168,110,231,208,47,66,138,237,9,66,177,148,254,103,207,53,74,97,239,210,14,224,32,117,3,182,25,27,168,146,129,45,209,176,63,149,61,20,18,28,174,29,93,126,65,197,228,220,53,229,131,59,82,188,106,92,231,83,126,23,231,250,220,16,5,40,12,51,187,76,138,74,68,48,201,253,179,124,197,75,7,228,220,195,93,182,245,126,233,2,26,239,153,20,98,47,193,119,21,130,41,154,104,53,85,50,25,15,203,67,41,24,215,138,40,119,152,199,65,28,46,43,231,188,85,231,225,31,206,240,51,76,68,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("50a38718-1c3e-4188-9cc4-e0e0669a0bfe"));
		}

		#endregion

	}

	#endregion

}

