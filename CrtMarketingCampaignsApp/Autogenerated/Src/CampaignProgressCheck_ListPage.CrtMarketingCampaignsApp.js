define("CampaignProgressCheck_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "remove",
				"name": "AddButton"
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
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
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
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"alignItems": "stretch",
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
							"id": "f512ae5d-47df-5c9f-74be-30810dde8c34",
							"code": "PDS_Campaign",
							"path": "Campaign",
							"caption": "#ResourceString(PDS_Campaign)#",
							"dataValueType": 10,
							"referenceSchemaName": "Campaign",
							"width": 280,
							"sticky": true
						},
						{
							"id": "0b6e44d6-3c2d-f57b-e4f5-6fdcf6f873ce",
							"code": "PDS_Action",
							"caption": "#ResourceString(PDS_Action)#",
							"dataValueType": 10,
							"width": 240
						},
						{
							"id": "bfc46cb5-c017-bd3c-47d0-ffbd974c9d73",
							"code": "PDS_CampaignItem",
							"path": "CampaignItem",
							"caption": "#ResourceString(PDS_CampaignItem)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignItem",
							"width": 260
						},
						{
							"id": "e1965b08-226b-8fe3-6dfa-c3eb94d437de",
							"code": "PDS_Status",
							"path": "Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignLogStatus",
							"width": 150
						},
						{
							"id": "c177f5ca-e3aa-0cce-9327-71923a8917b4",
							"code": "PDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(PDS_Amount)#",
							"dataValueType": 4,
							"width": 150
						},
						{
							"id": "cf7e53e5-c897-4cba-e392-c2e2aadd7226",
							"code": "PDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(PDS_StartDate)#",
							"dataValueType": 7,
							"width": 150
						},
						{
							"id": "5156f97c-4735-ffb2-5047-c36326ba8348",
							"code": "PDS_EndDate",
							"path": "EndDate",
							"caption": "#ResourceString(PDS_EndDate)#",
							"dataValueType": 7,
							"width": 150
						},
						{
							"id": "ea0c3c07-b27b-0a31-a6a4-757e678d2905",
							"code": "PDS_ErrorText",
							"path": "ErrorText",
							"caption": "#ResourceString(PDS_ErrorText)#",
							"dataValueType": 29,
							"width": 350
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false,
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"selectionState": "$DataTable_SelectionState",
					"_selectionOptions": {
						"attribute": "DataTable_SelectionState"
					},
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"placeholder"
				]
			},
			{
				"operation": "insert",
				"name": "BackButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BackButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "back-button-icon",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExportToExcelButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ExportToExcelButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "import-button-icon",
					"menuItems": [],
					"clickMode": "default",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState"
						}
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_Status",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_Status_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "CampaignLogStatus",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_Status_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_Status_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_CreatedOn",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_CreatedOn_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": "[#currentMonth#]"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_CreatedOn_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "StartDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_CreatedOn_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataTable_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState"
						}
					}
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 0
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
					"PDS_Campaign": {
						"modelConfig": {
							"path": "PDS.Campaign"
						}
					},
					"PDS_Action": {
						"modelConfig": {
							"path": "PDS.Action"
						}
					},
					"PDS_CampaignItem": {
						"modelConfig": {
							"path": "PDS.CampaignItem"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_Amount": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"PDS_StartDate": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"PDS_EndDate": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"PDS_ErrorText": {
						"modelConfig": {
							"path": "PDS.ErrorText"
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
							"name": "QuickFilter_Status_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_CreatedOn_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
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
					"entitySchemaName": "CampaignLog",
					"attributes": {
						"Campaign": {
							"path": "Campaign"
						},
						"Action": {
							"path": "Action"
						},
						"CampaignItem": {
							"path": "CampaignItem"
						},
						"Status": {
							"path": "Status"
						},
						"Amount": {
							"path": "Amount"
						},
						"StartDate": {
							"path": "StartDate"
						},
						"EndDate": {
							"path": "EndDate"
						},
						"ErrorText": {
							"path": "ErrorText"
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