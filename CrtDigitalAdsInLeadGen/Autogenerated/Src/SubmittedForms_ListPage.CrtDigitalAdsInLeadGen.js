define("SubmittedForms_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"sticky": true
						},
						{
							"id": "35859f55-7a13-2cc8-8a0b-4ec1f3688d73",
							"code": "PDS_WebForm",
							"path": "WebForm",
							"caption": "#ResourceString(PDS_WebForm)#",
							"dataValueType": 10,
							"referenceSchemaName": "GeneratedWebForm",
							"sticky": true,
							"width": 226
						},
						{
							"id": "3a65c5cb-dd5c-5e04-1a7f-bd637c900a0a",
							"code": "PDS_AdCampaign",
							"path": "AdCampaign",
							"caption": "#ResourceString(PDS_AdCampaign)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdCampaign",
							"width": 231
						},
						{
							"id": "125dfdf9-70dc-e2ff-8c6e-879f45de1ffb",
							"code": "PDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(PDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "edacecab-59fa-9320-2e96-3f590df5df5a",
							"code": "PDS_Email",
							"path": "Email",
							"caption": "#ResourceString(PDS_Email)#",
							"dataValueType": 28
						},
						{
							"id": "63395aac-5079-f906-c0d8-a53fb78b87c1",
							"code": "PDS_PhoneNumber",
							"path": "PhoneNumber",
							"caption": "#ResourceString(PDS_PhoneNumber)#",
							"dataValueType": 28
						},
						{
							"id": "32270185-8a00-2d1a-ddab-ba366f6e6ce9",
							"code": "PDS_CountryStr",
							"path": "CountryStr",
							"caption": "#ResourceString(PDS_CountryStr)#",
							"dataValueType": 28
						},
						{
							"id": "6f227dae-d1fc-a6e5-96cc-81072da6e34b",
							"code": "PDS_Account",
							"path": "Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 28
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "AdCampaignQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterAdCampaign_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "AdCampaign",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AdCampaignQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "AdCampaign"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "AdCampaignQuickFilter_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_AdCampaign": {
						"modelConfig": {
							"path": "PDS.AdCampaign"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_yb7swvq_Items",
							"loadOnChange": true
						},
						{
							"name": "AdCampaignQuickFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
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