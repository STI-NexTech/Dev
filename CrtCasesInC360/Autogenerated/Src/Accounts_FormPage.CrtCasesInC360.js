define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
									"attributeName": "Account",
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
							"id": "35dfd6a8-a564-b7c2-9b21-5dd7836a45dd",
							"code": "CasesListDS_Number",
							"caption": "#ResourceString(CasesListDS_Number)#",
							"dataValueType": 27,
							"width": 114
						},
						{
							"id": "faf9f902-736d-3283-08c1-01b6237cbfe6",
							"code": "CasesListDS_Subject",
							"path": "Subject",
							"caption": "#ResourceString(CasesListDS_Subject)#",
							"dataValueType": 30,
							"width": 423
						},
						{
							"id": "8fbdb44b-d6c8-e105-4612-913c63c0fdee",
							"code": "CasesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(CasesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e74b6fe2-aae0-91ae-4954-07ed92a89e67",
							"code": "CasesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CasesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 123
						},
						{
							"id": "05625d2c-ef40-efab-bbe9-76d0c5b7db66",
							"code": "CasesListDS_SolutionDate",
							"path": "SolutionDate",
							"caption": "#ResourceString(CasesListDS_SolutionDate)#",
							"dataValueType": 7,
							"width": 164
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
						"attributePath": "Account",
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