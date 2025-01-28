define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "EventExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(EventExpansionPanel_title)#",
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
						"row": 60,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EventToolContainer",
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
				"parentName": "EventExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EventToolFlexContainer",
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
				"parentName": "EventToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EventRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(EventRefreshButton_caption)#",
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
							"dataSourceName": "EventListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "EventToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EventSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(EventSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "EventToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EventExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(EventExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "EventList"
						}
					},
					"visible": true
				},
				"parentName": "EventSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EventSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(EventSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"EventList"
					]
				},
				"parentName": "EventToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EventListContainer",
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
				"parentName": "EventExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EventList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$EventList",
					"primaryColumnName": "EventListDS_Id",
					"columns": [
						{
							"id": "9ccf001f-2e53-e32c-d9d5-1fabd8272007",
							"code": "EventListDS_Event",
							"path": "Event",
							"caption": "#ResourceString(EventListDS_Event)#",
							"dataValueType": 10,
							"referenceSchemaName": "Event",
							"width": 267
						},
						{
							"id": "21ac661f-e97c-6ff7-1f39-63c37c07257f",
							"code": "EventListDS_EventType",
							"path": "Event.Type",
							"caption": "#ResourceString(EventListDS_EventType)#",
							"dataValueType": 10,
							"referenceSchemaName": "EventType",
							"width": 149
						},
						{
							"id": "da0c3226-ad09-c099-e433-1254b3be1bc3",
							"code": "EventListDS_EventResponse",
							"path": "EventResponse",
							"caption": "#ResourceString(EventListDS_EventResponse)#",
							"dataValueType": 10,
							"referenceSchemaName": "EventResponse",
							"width": 168
						},
						{
							"id": "00d79382-bffc-82d4-4696-bfc9a192d6b8",
							"code": "EventListDS_EventEndDate",
							"path": "Event.EndDate",
							"caption": "#ResourceString(EventListDS_EventEndDate)#",
							"dataValueType": 8,
							"width": 140
						},
						{
							"id": "69aa1f96-4ce4-351b-c5a5-275fd0e14dc0",
							"code": "EventListDS_EventStartDate",
							"path": "Event.StartDate",
							"caption": "#ResourceString(EventListDS_EventStartDate)#",
							"dataValueType": 8,
							"width": 134
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
				"parentName": "EventListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"EventList": {
					"isCollection": true,
					"modelConfig": {
						"path": "EventListDS"
					},
					"viewModelConfig": {
						"attributes": {
							"EventListDS_Event": {
								"modelConfig": {
									"path": "EventListDS.Event"
								}
							},
							"EventListDS_EventType": {
								"modelConfig": {
									"path": "EventListDS.EventType"
								}
							},
							"EventListDS_EventResponse": {
								"modelConfig": {
									"path": "EventListDS.EventResponse"
								}
							},
							"EventListDS_EventEndDate": {
								"modelConfig": {
									"path": "EventListDS.EventEndDate"
								}
							},
							"EventListDS_EventStartDate": {
								"modelConfig": {
									"path": "EventListDS.EventStartDate"
								}
							},
							"EventListDS_Id": {
								"modelConfig": {
									"path": "EventListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"EventListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "EventTarget",
						"attributes": {
							"Event": {
								"path": "Event"
							},
							"EventType": {
								"path": "Event.Type",
								"type": "ForwardReference"
							},
							"EventResponse": {
								"path": "EventResponse"
							},
							"EventEndDate": {
								"path": "Event.EndDate",
								"type": "ForwardReference"
							},
							"EventStartDate": {
								"path": "Event.StartDate",
								"type": "ForwardReference"
							}
						}
					}
				}
			},
			"dependencies": {
				"EventListDS": [
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