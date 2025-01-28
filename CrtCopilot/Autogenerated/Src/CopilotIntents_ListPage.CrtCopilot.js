define("CopilotIntents_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CopilotIntent",
							"defaultValues": []
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "remove",
				"name": "ActionButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ExportToExcel"
			},
			{
				"operation": "merge",
				"name": "MainFilterContainer",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "RightFilterContainer",
				"values": {
					"padding": {
						"top": "small",
						"right": "large",
						"bottom": "none",
						"left": "none"
					},
					"gap": "small",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable_Summaries"
			},
			{
				"operation": "merge",
				"name": "RefreshButton",
				"values": {
					"caption": "#ResourceString(RefreshButton_caption)#",
					"size": "medium",
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
				"name": "ContentContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start"
				}
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "3770e176-9d2f-bb25-3ea5-3b0de11e7ad3",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "87927053-2480-61b4-8dad-095198fb097f",
							"code": "PDS_Description",
							"caption": "#ResourceString(PDS_Description)#",
							"dataValueType": 28,
							"width": 700
						}
					],
					"placeholder": false,
					"features": {
						"rows": {
							"toolbar": false,
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"columns": {
							"sorting": false
						}
					},
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Items_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_Type": {
						"modelConfig": {
							"path": "PDS.Type"
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
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "Description"
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
					"entitySchemaName": "CopilotIntent",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Description": {
							"path": "Description"
						},
						"Type": {
							"path": "Type"
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