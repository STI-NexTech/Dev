define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "SubscriptionsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(SubscriptionsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UnsubscribeInfoContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 5
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "flex-start",
					"justifyContent": "space-between",
					"gap": "small",
					"wrap": "wrap",
					"selected": true
				},
				"parentName": "SubscriptionsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnsubcribeInfoTextContainer",
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
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "UnsubscribeInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnsubscribeInfoLargeText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(UnsubscribeInfoLargeText_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {},
					"selected": true
				},
				"parentName": "UnsubcribeInfoTextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnsubscribeInfoText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(UnsubscribeInfoText_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "UnsubcribeInfoTextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubscribeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubscribeButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"layoutConfig": {},
					"selected": true,
					"visible": true,
					"icon": "message-composer-checkmark",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "MarkContactSubscribedToBulkEmailsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ContactId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "UnsubscribeInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubscribeInfoContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"selected": true,
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "flex-start",
					"justifyContent": "space-between",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "SubscriptionsTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubcribeInfoTextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "SubscribeInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubscribeInfoLargeText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SubscribeInfoLargeText_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"selected": true,
					"visible": true
				},
				"parentName": "SubcribeInfoTextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubscribeInfoText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SubscribeInfoText_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {},
					"selected": true
				},
				"parentName": "SubcribeInfoTextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UnsubscribeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(UnsubscribeButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "close-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "MarkContactUnsubscribedFromBulkEmailsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ContactId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SubscribeInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(BulkEmailSubscriptionExpansionPanel_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": "20",
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SubscriptionsTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionToolsContainer",
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
					},
					"alignItems": "stretch",
					"layoutConfig": {},
					"selected": false,
					"dragging": false
				},
				"parentName": "BulkEmailSubscriptionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionToolFlexContainer",
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
				"parentName": "BulkEmailSubscriptionToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5t2bcqx_caption)#",
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
							"dataSourceName": "GridDetail_guswpo0DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "BulkEmailSubscriptionToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_u0u7hoc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "BulkEmailSubscriptionToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_23fe8ko",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_23fe8ko_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_guswpo0"
						}
					},
					"visible": true
				},
				"parentName": "BulkEmailSubscriptionSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_su2a5tm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_su2a5tm_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "BulkEmailSubscription"
						}
					},
					"visible": true
				},
				"parentName": "BulkEmailSubscriptionSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hnf9dix_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_guswpo0"
					]
				},
				"parentName": "BulkEmailSubscriptionToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l6s3pge",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "BulkEmailSubscriptionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionNote",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(BulkEmailSubscriptionNote_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {},
					"selected": true
				},
				"parentName": "FlexContainer_l6s3pge",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
					},
					"alignItems": "stretch"
				},
				"parentName": "BulkEmailSubscriptionExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BulkEmailSubscriptionList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						}
					},
					"items": "$GridDetail_guswpo0",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_guswpo0DS_Id",
					"columns": [
						{
							"id": "a7c6bc09-a9d8-4a93-0b1e-e3095bc8ac36",
							"code": "GridDetail_guswpo0DS_BulkEmailType",
							"path": "BulkEmailType",
							"caption": "#ResourceString(GridDetail_guswpo0DS_BulkEmailType)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailType",
							"width": 280
						},
						{
							"id": "936cbb67-95bb-358f-cdb3-5bc79581157c",
							"code": "GridDetail_guswpo0DS_BulkEmailSubsStatus",
							"caption": "#ResourceString(GridDetail_guswpo0DS_BulkEmailSubsStatus)#",
							"dataValueType": 10
						}
					],
					"activeRow": "$GridDetail_guswpo0_ActiveRow",
					"selectionState": "$GridDetail_guswpo0_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_guswpo0_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "BulkEmailSubscriptionListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_guswpo0_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_guswpo0DS",
							"filters": "$GridDetail_guswpo0 | crt.ToCollectionFilters : 'GridDetail_guswpo0' : $GridDetail_guswpo0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_guswpo0_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "BulkEmailSubscriptionList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_guswpo0_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_guswpo0DS",
							"filters": "$GridDetail_guswpo0 | crt.ToCollectionFilters : 'GridDetail_guswpo0' : $GridDetail_guswpo0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_guswpo0_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_guswpo0_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_guswpo0_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_guswpo0",
							"filters": "$GridDetail_guswpo0 | crt.ToCollectionFilters : 'GridDetail_guswpo0' : $GridDetail_guswpo0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_guswpo0_SelectionState"
						}
					}
				},
				"parentName": "BulkEmailSubscriptionList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_guswpo0_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_guswpo0DS",
							"filters": "$GridDetail_guswpo0 | crt.ToCollectionFilters : 'GridDetail_guswpo0' : $GridDetail_guswpo0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_guswpo0_SelectionState"
						}
					}
				},
				"parentName": "BulkEmailSubscriptionList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BulkEmailExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(BulkEmailExpansionPanel_title)#",
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
						"row": 45,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailToolContainer",
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
				"parentName": "BulkEmailExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailToolFlexContainer",
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
				"parentName": "BulkEmailToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BulkEmailRefreshButton_caption)#",
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
							"dataSourceName": "BulkEmailListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BulkEmailSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BulkEmailExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(BulkEmailExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "BulkEmailList"
						}
					},
					"visible": true
				},
				"parentName": "BulkEmailSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(BulkEmailSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"BulkEmailList"
					]
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BulkEmailListContainer",
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
				"parentName": "BulkEmailExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$BulkEmailList",
					"primaryColumnName": "BulkEmailListDS_Id",
					"columns": [
						{
							"id": "8bd7491f-6e03-01bb-b662-c27b4dab5ccd",
							"code": "BulkEmailListDS_BulkEmail",
							"path": "BulkEmail",
							"caption": "#ResourceString(BulkEmailListDS_BulkEmail)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmail",
							"width": 314
						},
						{
							"id": "d96e6f8c-9b4a-3cc8-ff95-13b2bd43897e",
							"code": "BulkEmailListDS_BulkEmailType",
							"path": "BulkEmail.Type",
							"caption": "#ResourceString(BulkEmailList_d96e6f8c)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailType",
							"width": 133
						},
						{
							"id": "34550b7c-65dc-3285-6283-949b95f88ba5",
							"code": "BulkEmailListDS_BulkEmailResponse",
							"path": "BulkEmailResponse",
							"caption": "#ResourceString(BulkEmailListDS_BulkEmailResponse)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailResponse",
							"width": 156
						},
						{
							"id": "2fc71465-ee9c-c4fa-0b3e-1d919fcdf0ae",
							"code": "BulkEmailListDS_ResponseReason",
							"path": "ResponseReason",
							"caption": "#ResourceString(BulkEmailListDS_ResponseReason)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailResponseReason"
						},
						{
							"id": "59f54b50-19e3-e5dc-2d66-8881a21d64f9",
							"code": "BulkEmailListDS_BulkEmailStartDate",
							"path": "BulkEmail.StartDate",
							"caption": "#ResourceString(BulkEmailList_59f54b50)#",
							"dataValueType": 7,
							"width": 152
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": false
							},
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true,
					"selectionState": "$BulkEmailList_SelectionState",
					"_selectionOptions": {
						"attribute": "BulkEmailList_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "BulkEmailListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailList_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "BulkEmailListDS",
							"filters": "$BulkEmailList | crt.ToCollectionFilters : 'BulkEmailList' : $BulkEmailList_SelectionState | crt.SkipIfSelectionEmpty : $BulkEmailList_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "BulkEmailList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailList_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "BulkEmailListDS",
							"filters": "$BulkEmailList | crt.ToCollectionFilters : 'BulkEmailList' : $BulkEmailList_SelectionState | crt.SkipIfSelectionEmpty : $BulkEmailList_SelectionState"
						}
					}
				},
				"parentName": "BulkEmailList_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "BulkEmailList",
							"filters": "$BulkEmailList | crt.ToCollectionFilters : 'BulkEmailList' : $BulkEmailList_SelectionState | crt.SkipIfSelectionEmpty : $BulkEmailList_SelectionState"
						}
					}
				},
				"parentName": "BulkEmailList",
				"propertyName": "bulkActions",
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
					"BulkEmailList": {
						"isCollection": true,
						"modelConfig": {
							"path": "BulkEmailListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "BulkEmail"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"BulkEmailListDS_BulkEmail": {
									"modelConfig": {
										"path": "BulkEmailListDS.BulkEmail"
									}
								},
								"BulkEmailListDS_BulkEmailType": {
									"modelConfig": {
										"path": "BulkEmailListDS.BulkEmailType"
									}
								},
								"BulkEmailListDS_BulkEmailResponse": {
									"modelConfig": {
										"path": "BulkEmailListDS.BulkEmailResponse"
									}
								},
								"BulkEmailListDS_ResponseReason": {
									"modelConfig": {
										"path": "BulkEmailListDS.ResponseReason"
									}
								},
								"BulkEmailListDS_BulkEmailStartDate": {
									"modelConfig": {
										"path": "BulkEmailListDS.BulkEmailStartDate"
									}
								},
								"BulkEmailListDS_Id": {
									"modelConfig": {
										"path": "BulkEmailListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_guswpo0": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_guswpo0DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "BulkEmailType"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_guswpo0DS_BulkEmailType": {
									"modelConfig": {
										"path": "GridDetail_guswpo0DS.BulkEmailType"
									}
								},
								"GridDetail_guswpo0DS_BulkEmailSubsStatus": {
									"modelConfig": {
										"path": "GridDetail_guswpo0DS.BulkEmailSubsStatus"
									}
								},
								"GridDetail_guswpo0DS_Id": {
									"modelConfig": {
										"path": "GridDetail_guswpo0DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"sortingConfig": {
						"default": [
							{
								"direction": "asc",
								"columnName": "AddressType"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CareerList",
					"modelConfig"
				],
				"values": {
					"sortingConfig": {
						"default": [
							{
								"direction": "asc",
								"columnName": "Account"
							}
						]
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
					"BulkEmailListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "VwBulkEmailAudience",
							"attributes": {
								"BulkEmail": {
									"path": "BulkEmail"
								},
								"BulkEmailType": {
									"path": "BulkEmail.Type",
									"type": "ForwardReference"
								},
								"BulkEmailResponse": {
									"path": "BulkEmailResponse"
								},
								"ResponseReason": {
									"path": "ResponseReason"
								},
								"BulkEmailStartDate": {
									"path": "BulkEmail.StartDate",
									"type": "ForwardReference"
								}
							}
						}
					},
					"GridDetail_guswpo0DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "BulkEmailSubscription",
							"attributes": {
								"BulkEmailType": {
									"path": "BulkEmailType"
								},
								"BulkEmailSubsStatus": {
									"path": "BulkEmailSubsStatus"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"BulkEmailListDS": [
						{
							"attributePath": "Contact",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_guswpo0DS": [
						{
							"attributePath": "Contact",
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