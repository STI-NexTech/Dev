define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ServiceAgreementsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ServiceAgreementsExpansionPanel_title)#",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsToolsContainer",
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
				"parentName": "ServiceAgreementsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsToolsFlexContainer",
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
				"parentName": "ServiceAgreementsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceAgreementsRefreshButton_caption)#",
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
							"dataSourceName": "ServiceAgreementsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ServiceAgreementsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceAgreementsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ServiceAgreementsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceAgreementsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ServiceAgreementsList"
						}
					},
					"visible": true
				},
				"parentName": "ServiceAgreementsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceAgreementsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ServiceObject"
						}
					},
					"visible": true
				},
				"parentName": "ServiceAgreementsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ServiceAgreementsSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"ServiceAgreementsList"
					]
				},
				"parentName": "ServiceAgreementsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsListContainer",
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
				"parentName": "ServiceAgreementsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceAgreementsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$ServiceAgreementsList",
					"primaryColumnName": "ServiceAgreementsListDS_Id",
					"columns": [
						{
							"id": "29d0f833-c745-ce99-7f69-54d61371f08b",
							"code": "ServiceAgreementsListDS_ServicePact",
							"path": "ServicePact",
							"caption": "#ResourceString(ServiceAgreementsListDS_ServicePact)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServicePact",
							"width": 319
						},
						{
							"id": "86478300-b48f-874f-9bca-a20384dc53c9",
							"code": "ServiceAgreementsListDS_ServicePactStatus",
							"path": "ServicePact.Status",
							"caption": "#ResourceString(ServiceAgreementsList_86478300)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServicePactStatus",
							"width": 217
						},
						{
							"id": "623c7fb3-5a5d-e2fd-df31-e408e4d095ec",
							"code": "ServiceAgreementsListDS_ServicePactOwner",
							"path": "ServicePact.Owner",
							"caption": "#ResourceString(ServiceAgreementsList_623c7fb3)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "ServiceAgreementsListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ServiceAgreementsList": {
					"isCollection": true,
					"modelConfig": {
						"path": "ServiceAgreementsListDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "desc",
									"columnName": "ServicePactNumber"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"ServiceAgreementsListDS_ServicePact": {
								"modelConfig": {
									"path": "ServiceAgreementsListDS.ServicePact"
								}
							},
							"ServiceAgreementsListDS_ServicePactStatus": {
								"modelConfig": {
									"path": "ServiceAgreementsListDS.ServicePactStatus"
								}
							},
							"ServiceAgreementsListDS_ServicePactOwner": {
								"modelConfig": {
									"path": "ServiceAgreementsListDS.ServicePactOwner"
								}
							},
							"ServiceAgreementsListDS_Id": {
								"modelConfig": {
									"path": "ServiceAgreementsListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"ServiceAgreementsListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "ServiceObject",
						"attributes": {
							"ServicePact": {
								"path": "ServicePact"
							},
							"ServicePactStatus": {
								"path": "ServicePact.Status",
								"type": "ForwardReference"
							},
							"ServicePactOwner": {
								"path": "ServicePact.Owner",
								"type": "ForwardReference"
							}
						}
					}
				}
			},
			"dependencies": {
				"ServiceAgreementsListDS": [
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