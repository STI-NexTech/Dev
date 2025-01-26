define("SubmittedForms_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddButton"
			},
			{
				"operation": "merge",
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#",
					"color": "primary"
				}
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "merge",
				"name": "OpenLandingDesigner",
				"values": {
					"caption": "#ResourceString(OpenLandingDesigner_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"wrap": "wrap",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"alignItems": "center"
				}
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainerInner"
			},
			{
				"operation": "move",
				"name": "FolderTreeActions",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "LookupQuickFilterByTag",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "move",
				"name": "SearchFilter",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "RefreshButton",
				"values": {
					"caption": "#ResourceString(RefreshButton_caption)#",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": [
											"FormSubmit"
										]
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					},
					"rootSchemaName": "FormSubmit"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
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
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "insert",
				"name": "SubmittedFormQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_yb7swvq_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SubmittedFormQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "SubmittedFormQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
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
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_WebForm": {
						"modelConfig": {
							"path": "PDS.WebForm"
						}
					},
					"PDS_Contact": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Email": {
						"modelConfig": {
							"path": "PDS.Email"
						}
					},
					"PDS_PhoneNumber": {
						"modelConfig": {
							"path": "PDS.PhoneNumber"
						}
					},
					"PDS_CountryStr": {
						"modelConfig": {
							"path": "PDS.CountryStr"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
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
							"name": "SubmittedFormQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
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
					"config"
				],
				"values": {
					"entitySchemaName": "FormSubmit",
					"attributes": {
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"WebForm": {
							"path": "WebForm"
						},
						"Contact": {
							"path": "Contact"
						},
						"Email": {
							"path": "Email"
						},
						"PhoneNumber": {
							"path": "PhoneNumber"
						},
						"CountryStr": {
							"path": "CountryStr"
						},
						"Account": {
							"path": "Account"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});