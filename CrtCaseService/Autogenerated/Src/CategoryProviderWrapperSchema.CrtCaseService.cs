﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CategoryProviderWrapperSchema

	/// <exclude/>
	public class CategoryProviderWrapperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CategoryProviderWrapperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CategoryProviderWrapperSchema(CategoryProviderWrapperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2272a076-8542-4a0e-8470-6c7ba6e30fc1");
			Name = "CategoryProviderWrapper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b11d550e-0087-4f53-ae17-fb00d41102cf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,193,110,155,64,16,61,219,146,255,97,74,46,88,170,224,158,196,72,41,74,173,28,34,89,77,170,30,170,30,54,48,208,173,96,23,205,46,105,104,229,127,239,178,44,4,99,155,250,130,216,55,143,153,55,111,134,21,172,68,85,177,4,225,25,137,152,146,153,14,98,41,50,158,215,196,52,151,98,181,252,187,90,46,106,197,69,14,79,141,210,88,222,12,231,51,159,156,38,16,26,220,68,174,8,115,67,130,184,96,74,93,67,204,52,230,146,154,29,201,87,158,34,125,35,86,85,72,150,26,134,33,220,170,186,44,25,53,145,59,187,56,100,146,76,12,17,18,194,108,227,77,211,120,97,20,244,25,194,81,138,170,126,41,120,2,73,91,252,92,109,184,134,135,179,178,22,173,29,67,19,38,108,80,205,209,116,178,179,169,173,240,35,229,22,248,170,76,238,68,10,129,73,107,83,48,16,199,2,123,133,45,57,30,184,211,163,21,177,200,81,223,216,151,138,248,171,17,12,202,1,251,25,21,125,71,214,193,196,181,9,25,201,18,84,93,85,146,52,148,140,23,240,34,223,102,5,78,29,58,6,38,34,39,226,174,80,164,157,139,238,220,239,133,20,74,83,157,104,73,151,152,250,32,184,230,172,224,127,16,4,254,6,110,62,102,194,172,179,204,230,214,195,141,211,109,201,137,38,45,82,49,98,37,8,243,139,108,188,250,96,0,94,52,29,230,109,104,217,115,14,185,162,254,100,150,135,153,215,206,182,9,105,51,161,93,226,228,35,234,159,50,189,196,196,45,234,255,172,194,165,54,17,38,188,226,40,180,242,162,47,195,59,96,155,71,125,132,95,146,11,76,205,148,192,204,216,220,16,7,182,217,100,132,186,38,161,162,152,41,28,52,25,90,143,143,252,221,214,60,109,165,247,62,127,54,194,159,58,221,143,166,220,39,249,230,119,85,224,93,85,111,111,23,248,254,99,20,138,101,81,12,110,191,195,193,142,145,194,251,182,129,187,212,248,172,148,191,14,158,229,157,185,217,26,127,221,173,54,207,192,63,90,255,15,27,16,117,81,244,21,23,93,7,71,91,17,216,14,20,110,29,238,159,82,228,234,236,237,211,37,106,219,15,238,203,74,55,51,203,208,161,99,112,177,90,238,255,1,72,17,213,4,246,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2272a076-8542-4a0e-8470-6c7ba6e30fc1"));
		}

		#endregion

	}

	#endregion

}

