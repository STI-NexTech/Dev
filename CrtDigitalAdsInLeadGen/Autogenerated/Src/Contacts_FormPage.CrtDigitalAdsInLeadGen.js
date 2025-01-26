define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SubmittedFormList",
				"values": {
					"columns": [
						{
							"id": "0a984e77-d4c2-ce00-fd89-fefc1e0cc1d4",
							"code": "GridDetail_dm1myagDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_dm1myagDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 147
						},
						{
							"id": "e13ccb92-3c36-1e44-9ac6-cabdfaebab2f",
							"code": "GridDetail_dm1myagDS_WebForm",
							"path": "WebForm",
							"caption": "#ResourceString(GridDetail_dm1myagDS_WebForm)#",
							"dataValueType": 10,
							"referenceSchemaName": "GeneratedWebForm",
							"width": 156
						},
						{
							"id": "2af353cc-09ae-91ed-30d3-e07bc6775e04",
							"code": "GridDetail_dm1myagDS_WebFormExternalURL",
							"path": "WebForm.ExternalURL",
							"caption": "#ResourceString(GridDetail_dm1myagDS_WebFormExternalURL)#",
							"dataValueType": 29,
							"width": 168
						},
						{
							"id": "279f81f2-912c-f36e-c352-828e9ae8c315",
							"code": "GridDetail_dm1myagDS_FullName",
							"path": "FullName",
							"caption": "#ResourceString(GridDetail_dm1myagDS_FullName)#",
							"dataValueType": 28,
							"width": 144
						},
						{
							"id": "b0becb93-bd05-6555-c234-6b159940e95e",
							"code": "GridDetail_dm1myagDS_AdCampaign",
							"path": "AdCampaign",
							"caption": "#ResourceString(GridDetail_dm1myagDS_AdCampaign)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdCampaign"
						},
						{
							"id": "c887b45d-5d3e-70a5-43f6-50e8302942b7",
							"code": "GridDetail_dm1myagDS_Email",
							"path": "Email",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Email)#",
							"dataValueType": 28,
							"width": 168
						},
						{
							"id": "c4a0364c-1fad-15a5-b092-b0352624d910",
							"code": "GridDetail_dm1myagDS_PhoneNumber",
							"path": "PhoneNumber",
							"caption": "#ResourceString(GridDetail_dm1myagDS_PhoneNumber)#",
							"dataValueType": 28,
							"width": 198
						},
						{
							"id": "4ba54823-9f3f-30be-5b3c-a2404aaadb6a",
							"code": "GridDetail_dm1myagDS_Account",
							"path": "Account",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Account)#",
							"dataValueType": 28,
							"width": 185
						},
						{
							"id": "c950ad06-0433-fd73-6c18-8d35e9db8c47",
							"code": "GridDetail_dm1myagDS_Country",
							"path": "Country",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_dm1myag",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"GridDetail_dm1myagDS_AdCampaign": {
						"modelConfig": {
							"path": "GridDetail_dm1myagDS.AdCampaign"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"GridDetail_dm1myagDS",
					"config",
					"attributes"
				],
				"values": {
					"AdCampaign": {
						"path": "AdCampaign"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});