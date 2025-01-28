define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "CampaignExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CampaignExpansionPanel_title)#",
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
						"row": 70,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CampaignToolContainer",
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
				"parentName": "CampaignExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignToolFlexContainer",
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
				"parentName": "CampaignToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CampaignRefreshButton_caption)#",
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
							"dataSourceName": "CampaignListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CampaignToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CampaignSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "CampaignToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CampaignExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CampaignExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CampaignList"
						}
					},
					"visible": true
				},
				"parentName": "CampaignSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(CampaignSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"CampaignList"
					]
				},
				"parentName": "CampaignToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CampaignListContainer",
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
				"parentName": "CampaignExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$CampaignList",
					"primaryColumnName": "CampaignListDS_Id",
					"rowToolbarItems":[
						{
							type: 'crt.MenuItem',
							caption: "#ResourceString(CampaignList_OpenRowItemCaption)#",
							icon: 'edit-row-action',
							disabled: "$CampaignList.PrimaryModelMode | crt.IsEqual : 'create'",
							clicked: {
								request: 'crt.UpdateRecordRequest',
								params: {
									"itemsAttributeName": "CampaignList",
									"recordId": "$CampaignList.CampaignListDS_Id",
								},
								useRelativeContext: true,
							},
						},
					],
					"columns": [
						{
							"id": "5d82f0a9-f5e0-0bc4-fb2e-07d4b4d9772e",
							"code": "CampaignListDS_Campaign",
							"caption": "#ResourceString(CampaignListDS_Campaign)#",
							"dataValueType": 10,
							"width": 272
						},
						{
							"id": "258906ba-86af-dff3-95ef-23d6bf765626",
							"code": "CampaignListDS_CampaignCampaignStatus",
							"path": "Campaign.CampaignStatus",
							"caption": "#ResourceString(CampaignList_258906ba)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignStatus",
							"changed": true,
							"width": 149
						},
						{
							"id": "baf011b5-a83d-42c2-3e00-2fe7890501bc",
							"code": "CampaignListDS_CampaignStartDate",
							"path": "Campaign.StartDate",
							"caption": "#ResourceString(CampaignListDS_CampaignStartDate)#",
							"dataValueType": 7,
							"width": 163
						},
						{
							"id": "c48ae76b-8eff-b0db-0aaa-129b256af608",
							"code": "CampaignListDS_CampaignEndDate",
							"path": "Campaign.EndDate",
							"caption": "#ResourceString(CampaignListDS_CampaignEndDate)#",
							"dataValueType": 7,
							"width": 164
						},
						{
							"id": "a4608c16-e350-9db0-6224-99d8a7b7681f",
							"code": "CampaignListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CampaignList_a4608c16)#",
							"dataValueType": 10,
							"referenceSchemaName": "CmpgnParticipantStatus",
							"changed": true,
							"width": 150
						},
						{
							"id": "f9c6a381-5ee3-00fd-92ab-715d80087382",
							"code": "CampaignListDS_CampaignItem",
							"path": "CampaignItem",
							"caption": "#ResourceString(CampaignListDS_CampaignItem)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignItem",
							"width": 158
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "CampaignListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"CampaignList": {
					"isCollection": true,
					"modelConfig": {
						"path": "CampaignListDS"
					},
					"viewModelConfig": {
						"attributes": {
							"CampaignListDS_Campaign": {
								"modelConfig": {
									"path": "CampaignListDS.Campaign"
								}
							},
							"CampaignListDS_CampaignCampaignStatus": {
								"modelConfig": {
									"path": "CampaignListDS.CampaignCampaignStatus"
								}
							},
							"CampaignListDS_CampaignStartDate": {
								"modelConfig": {
									"path": "CampaignListDS.CampaignStartDate"
								}
							},
							"CampaignListDS_CampaignEndDate": {
								"modelConfig": {
									"path": "CampaignListDS.CampaignEndDate"
								}
							},
							"CampaignListDS_Status": {
								"modelConfig": {
									"path": "CampaignListDS.Status"
								}
							},
							"CampaignListDS_CampaignItem": {
								"modelConfig": {
									"path": "CampaignListDS.CampaignItem"
								}
							},
							"CampaignListDS_Id": {
								"modelConfig": {
									"path": "CampaignListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"CampaignListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "CampaignParticipant",
						"attributes": {
							"Campaign": {
								"path": "Campaign"
							},
							"CampaignCampaignStatus": {
								"path": "Campaign.CampaignStatus",
								"type": "ForwardReference"
							},
							"CampaignStartDate": {
								"path": "Campaign.StartDate",
								"type": "ForwardReference"
							},
							"CampaignEndDate": {
								"path": "Campaign.EndDate",
								"type": "ForwardReference"
							},
							"Status": {
								"path": "Status"
							},
							"CampaignItem": {
								"path": "CampaignItem"
							}
						}
					}
				}
			},
			"dependencies": {
				"CampaignListDS": [
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