define("SelectAdAccountsLookupPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "MainHeader"
			},
			{
				"operation": "remove",
				"name": "TitleContainer"
			},
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "remove",
				"name": "ActionButtonsContainer"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "remove",
				"name": "SearchContainer"
			},
			{
				"operation": "remove",
				"name": "SearchFilterMain"
			},
			{
				"operation": "remove",
				"name": "DataGridMainContainer"
			},
			{
				"operation": "remove",
				"name": "DataGridMain"
			},
			{
				"operation": "remove",
				"name": "FooterContainer"
			},
			{
				"operation": "remove",
				"name": "FooterLeftColumnContainer"
			},
			{
				"operation": "remove",
				"name": "NewButton"
			},
			{
				"operation": "remove",
				"name": "FooterRightColumnContainer"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SelectButton"
			},
			{
				"operation": "insert",
				"name": "InfoTextFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainInfoText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(MainInfoText_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "InfoTextFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdditionalInfoText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdditionalInfoText_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "InfoTextFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGridMain",
				"values": {
					"headerToolbarItems": [],
					"layoutConfig": {},
					"type": "crt.DataGrid",
					"items": "$DataGridMain",
					"primaryColumnName": "MainDS_Id",
					"columns": [
						{
							"id": "644c364a-7864-8257-7719-ec326988f719",
							"code": "MainDS_Name",
							"caption": "#ResourceString(MainDS_Name)#",
							"dataValueType": 28
						}
					],
					"visible": true,
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"columns": {
							"adding": false
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false,
							"toolbar": false
						}
					},
					"fitContent": true,
					"rowDoubleClick": {
						"request": "crt.LookupPageDataGridRowDoubleClickRequest",
						"params": {
							"rowId": "@event.rowId",
							"itemsAttributeName": "DataGridMain"
						}
					},
					"selectionState": "$DataGridMain_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGridMain_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FooterFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CancelButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"caption": "#ResourceString(CancelButton_caption)#",
					"visible": true,
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"layoutConfig": {},
					"selected": false
				},
				"parentName": "FooterFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SelectButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.SelectLookupPageRequest",
						"params": {
							"viewName": "DataGridMain",
							"filters": "$DataGridMain | crt.ToCollectionFilters : 'DataGridMain' : $DataGridMain_SelectionState"
						}
					},
					"color": "primary",
					"caption": "#ResourceString(SelectButton_caption)#",
					"visible": true,
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default",
					"layoutConfig": {},
					"selected": true
				},
				"parentName": "FooterFlexContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGridMain_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "DataGridMain_PredefinedFilter"
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"MainDS_Name": {
						"modelConfig": {
							"path": "MainDS.Name"
						}
					},
					"MainDS_Id": {
						"modelConfig": {
							"path": "MainDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"MainDS",
					"config"
				],
				"values": {
					"entitySchemaName": "VirtualAdAccount"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"MainDS",
					"config",
					"attributes"
				],
				"values": {
					"Name": {
						"path": "Name"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});