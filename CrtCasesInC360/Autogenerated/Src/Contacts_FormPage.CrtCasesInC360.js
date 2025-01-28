define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddressToolsContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "AddressListContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "RegisteredOn",
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Priority",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": {
									"column": 10,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Symptoms",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Case",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "Owner"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ServiceTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ServiceTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CasesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CasesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"visible": true
				},
				"parentName": "ServiceTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "CasesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "CasesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CasesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Case",
							"defaultValues": [
								{
									"attributeName": "Contact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CasesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CasesRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "CasesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CasesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CasesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CasesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "CasesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CasesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CasesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CasesList"
						}
					},
					"visible": true
				},
				"parentName": "CasesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CasesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Case"
						}
					},
					"visible": true
				},
				"parentName": "CasesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CasesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(CasesSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"CasesList"
					]
				},
				"parentName": "CasesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CasesListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "CasesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CasesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$CasesList",
					"primaryColumnName": "CasesListDS_Id",
					"columns": [
						{
							"id": "7e6dfd3c-b4a5-67f8-c43f-49034ad0c1e8",
							"code": "CasesListDS_Number",
							"caption": "#ResourceString(CasesListDS_Number)#",
							"dataValueType": 27,
							"width": 114
						},
						{
							"id": "41b53f0c-7a90-4d34-6a57-665ebac31132",
							"code": "CasesListDS_Subject",
							"path": "Subject",
							"caption": "#ResourceString(CasesListDS_Subject)#",
							"dataValueType": 30,
							"width": 422
						},
						{
							"id": "dd5c14a5-0358-0827-ad93-ccd36b0f82ff",
							"code": "CasesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(CasesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "c1ee90ca-c7de-9a16-507b-ed678bb39e7f",
							"code": "CasesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CasesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 125
						},
						{
							"id": "da5dec06-156a-2994-de43-6a7547ca6017",
							"code": "CasesListDS_SolutionDate",
							"path": "SolutionDate",
							"caption": "#ResourceString(CasesListDS_SolutionDate)#",
							"dataValueType": 7,
							"width": 165
						}
					],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"fitContent": true
				},
				"parentName": "CasesListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"CasesList": {
					"isCollection": true,
					"modelConfig": {
						"path": "CasesListDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "SolutionDate"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"CasesListDS_Number": {
								"modelConfig": {
									"path": "CasesListDS.Number"
								}
							},
							"CasesListDS_Subject": {
								"modelConfig": {
									"path": "CasesListDS.Subject"
								}
							},
							"CasesListDS_Owner": {
								"modelConfig": {
									"path": "CasesListDS.Owner"
								}
							},
							"CasesListDS_Status": {
								"modelConfig": {
									"path": "CasesListDS.Status"
								}
							},
							"CasesListDS_SolutionDate": {
								"modelConfig": {
									"path": "CasesListDS.SolutionDate"
								}
							},
							"CasesListDS_Id": {
								"modelConfig": {
									"path": "CasesListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"CasesListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Case",
						"attributes": {
							"Number": {
								"path": "Number"
							},
							"Subject": {
								"path": "Subject"
							},
							"Owner": {
								"path": "Owner"
							},
							"Status": {
								"path": "Status"
							},
							"SolutionDate": {
								"path": "SolutionDate"
							}
						}
					}
				}
			},
			"dependencies": {
				"CasesListDS": [
					{
						"attributePath": "Contact",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});