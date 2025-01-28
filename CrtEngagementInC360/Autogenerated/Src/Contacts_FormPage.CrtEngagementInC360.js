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
			},
			{
				"operation": "remove",
				"name": "GridContainer_74mryv5"
			},
			{
				"operation": "insert",
				"name": "WebActionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(WebActionExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {
						"column": 1,
						"row": 40,
						"colSpan": 1,
						"rowSpan": 1
					},
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "WebActionToolContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "WebActionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionToolFlexContainer",
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
				"parentName": "WebActionToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebActionRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "WebActionListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebActionSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebActionExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebActionExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "WebActionList"
						}
					},
					"visible": true
				},
				"parentName": "WebActionSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebActionImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "TouchAction"
						}
					},
					"visible": true
				},
				"parentName": "WebActionSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebActionSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebActionSearchFilter_placeholder)#",
					"targetAttributes": [
						"WebActionList"
					],
					"iconOnly": true
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebActionListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "WebActionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$WebActionList",
					"primaryColumnName": "WebActionListDS_Id",
					"columns": [
						{
							"id": "a9a6f0cb-2944-3af8-3136-257f50d08da5",
							"code": "WebActionListDS_ActionDate",
							"path": "ActionDate",
							"caption": "#ResourceString(WebActionList_a9a6f0cb)#",
							"dataValueType": 7,
							"width": 144
						},
						{
							"id": "e5a6a989-a26d-887c-2b23-6d683afff463",
							"code": "WebActionListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(WebActionListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "TouchActionType",
							"width": 154
						},
						{
							"id": "bc5102ac-fd60-b847-c1ec-62a2fed4b22f",
							"code": "WebActionListDS_WebPage",
							"path": "WebPage",
							"caption": "#ResourceString(WebActionListDS_WebPage)#",
							"dataValueType": 10,
							"referenceSchemaName": "WebPage",
							"width": 282
						},
						{
							"id": "f312b329-0a07-35f5-24e8-d92d1e022770",
							"code": "WebActionListDS_WebPageUrl",
							"path": "WebPage.Url",
							"caption": "#ResourceString(WebActionList_f312b329)#",
							"dataValueType": 29
						}
					],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "WebActionListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(WebSessionExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {
						"column": 1,
						"row": 30,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WebSessionToolContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "WebSessionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionToolFlexContainer",
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
				"parentName": "WebSessionToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebSessionRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "WebSessionListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebSessionSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebSessionExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebSessionExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "WebSessionList"
						}
					},
					"visible": true
				},
				"parentName": "WebSessionSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_tz82vh6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_tz82vh6_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Touch"
						}
					},
					"visible": true
				},
				"parentName": "WebSessionSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebSessionSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebSessionSearchFilter_placeholder)#",
					"targetAttributes": [
						"WebSessionList"
					],
					"iconOnly": true
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebSessionListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "WebSessionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$WebSessionList",
					"primaryColumnName": "WebSessionListDS_Id",
					"columns": [
						{
							"id": "50a6c11c-2ff6-db63-c5a7-7a9b693ba3c6",
							"code": "WebSessionListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(WebSessionList_50a6c11c)#",
							"dataValueType": 7,
							"width": 138
						},
						{
							"id": "bb96b5ea-67f4-ad9e-c4ee-42790cd6649f",
							"code": "WebSessionListDS_CountryStr",
							"path": "CountryStr",
							"caption": "#ResourceString(WebSessionList_bb96b5ea)#",
							"dataValueType": 28,
							"width": 154
						},
						{
							"id": "439c70ce-057f-adec-4a34-61db494b54ef",
							"code": "WebSessionListDS_CityStr",
							"path": "CityStr",
							"caption": "#ResourceString(WebSessionList_439c70ce)#",
							"dataValueType": 28,
							"width": 140
						},
						{
							"id": "b36f9897-6449-081f-18ad-51eace598bb4",
							"code": "WebSessionListDS_Source",
							"path": "Source",
							"caption": "#ResourceString(WebSessionListDS_Source)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadSource",
							"width": 147
						},
						{
							"id": "67d0266a-9808-5ad4-2b1c-c194f51d77be",
							"code": "WebSessionListDS_Channel",
							"path": "Channel",
							"caption": "#ResourceString(WebSessionListDS_Channel)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadMedium",
							"width": 132
						},
						{
							"id": "f96e40f1-35c1-48a5-e427-e46e6b5e65d5",
							"code": "WebSessionListDS_PageReferrer",
							"path": "PageReferrer",
							"caption": "#ResourceString(WebSessionListDS_PageReferrer)#",
							"dataValueType": 29,
							"width": 167
						},
						{
							"id": "1259aaa8-04c5-f8d1-1afa-403dbd4217f9",
							"code": "WebSessionListDS_Duration",
							"path": "Duration",
							"caption": "#ResourceString(WebSessionList_1259aaa8)#",
							"dataValueType": 4,
							"width": 134
						}
					],
					"features": {
						"rows": {
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "WebSessionListContainer",
				"propertyName": "items",
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
					"WebSessionList": {
						"isCollection": true,
						"modelConfig": {
							"path": "WebSessionListDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "WebSessionList_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "StartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"WebSessionListDS_StartDate": {
									"modelConfig": {
										"path": "WebSessionListDS.StartDate"
									}
								},
								"WebSessionListDS_CountryStr": {
									"modelConfig": {
										"path": "WebSessionListDS.CountryStr"
									}
								},
								"WebSessionListDS_CityStr": {
									"modelConfig": {
										"path": "WebSessionListDS.CityStr"
									}
								},
								"WebSessionListDS_Source": {
									"modelConfig": {
										"path": "WebSessionListDS.Source"
									}
								},
								"WebSessionListDS_Channel": {
									"modelConfig": {
										"path": "WebSessionListDS.Channel"
									}
								},
								"WebSessionListDS_PageReferrer": {
									"modelConfig": {
										"path": "WebSessionListDS.PageReferrer"
									}
								},
								"WebSessionListDS_Duration": {
									"modelConfig": {
										"path": "WebSessionListDS.Duration"
									}
								},
								"WebSessionListDS_Id": {
									"modelConfig": {
										"path": "WebSessionListDS.Id"
									}
								}
							}
						}
					},
					"WebSessionList_PredefinedFilter": {
						"value": null
					},
					"WebActionList": {
						"isCollection": true,
						"modelConfig": {
							"path": "WebActionListDS",
							"filterAttributes": [
								{
									"name": "WebActionList_PredefinedFilter",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ActionDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"WebActionListDS_ActionDate": {
									"modelConfig": {
										"path": "WebActionListDS.ActionDate"
									}
								},
								"WebActionListDS_Type": {
									"modelConfig": {
										"path": "WebActionListDS.Type"
									}
								},
								"WebActionListDS_WebPage": {
									"modelConfig": {
										"path": "WebActionListDS.WebPage"
									}
								},
								"WebActionListDS_WebPageUrl": {
									"modelConfig": {
										"path": "WebActionListDS.WebPageUrl"
									}
								},
								"WebActionListDS_Id": {
									"modelConfig": {
										"path": "WebActionListDS.Id"
									}
								}
							}
						}
					},
					"WebActionList_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_dm1myag",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"GridDetail_dm1myagDS_WebForm": {
						"modelConfig": {
							"path": "GridDetail_dm1myagDS.WebForm"
						}
					},
					"GridDetail_dm1myagDS_WebFormExternalURL": {
						"modelConfig": {
							"path": "GridDetail_dm1myagDS.WebFormExternalURL"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"WebSessionListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "WebAnalyticsTouch",
							"attributes": {
								"StartDate": {
									"path": "StartDate"
								},
								"CountryStr": {
									"path": "CountryStr"
								},
								"CityStr": {
									"path": "CityStr"
								},
								"Source": {
									"path": "Source"
								},
								"Channel": {
									"path": "Channel"
								},
								"PageReferrer": {
									"path": "PageReferrer"
								},
								"Duration": {
									"path": "Duration"
								}
							}
						}
					},
					"WebActionListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "WebAnalyticsAction",
							"attributes": {
								"ActionDate": {
									"path": "ActionDate"
								},
								"Type": {
									"path": "Type"
								},
								"WebPage": {
									"path": "WebPage"
								},
								"WebPageUrl": {
									"path": "WebPage.Url",
									"type": "ForwardReference"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"GridDetail_dm1myagDS",
					"config",
					"attributes"
				],
				"values": {
					"WebForm": {
						"path": "WebForm"
					},
					"WebFormExternalURL": {
						"type": "ForwardReference",
						"path": "WebForm.ExternalURL"
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"WebSessionListDS": [
						{
							"attributePath": "WebAnalyticsVisitor.Contact",
							"relationPath": "PDS.Id"
						}
					],
					"WebActionListDS": [
						{
							"attributePath": "Touch.WebAnalyticsVisitor.Contact",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
