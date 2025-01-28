define("ServiceAgreements_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "ServicePactInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "ServicePact"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "ServicePact",
					"columns": [
						{
							"id": "f0fe53d6-d972-48b4-80a7-384c913bb598",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "GeneralInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralInfoLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Name",
					"control": "$Name",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ik7ivkh",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ik7ivkh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vnc2ec7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vnc2ec7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_6gm9v3i",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_6gm9v3i"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_iw2qoqb",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_iw2qoqb"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Calendar",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_3fck48g",
					"labelPosition": "auto",
					"control": "$LookupAttribute_3fck48g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_r9mqul2",
					"labelPosition": "auto",
					"control": "$LookupAttribute_r9mqul2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ServiceRecipientsExpansionPanel_title)#",
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
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsToolsContainer",
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
				"parentName": "ServiceRecipientsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsToolsFlexContainer",
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
				"parentName": "ServiceRecipientsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceRecipientsRefreshButton_caption)#",
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
							"dataSourceName": "ServiceRecipientsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ServiceRecipientsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceRecipientsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ServiceRecipientsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceRecipientsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ServiceRecipientsList"
						}
					},
					"visible": true
				},
				"parentName": "ServiceRecipientsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceRecipientsImportDataButton_caption)#",
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
				"parentName": "ServiceRecipientsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ServiceRecipientsSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"ServiceRecipientsList"
					]
				},
				"parentName": "ServiceRecipientsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7tdxges",
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
				"parentName": "ServiceRecipientsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceRecipientsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$ServiceRecipientsList",
					"primaryColumnName": "ServiceRecipientsListDS_Id",
					"columns": [
						{
							"id": "8f34422f-d589-954d-a542-2aeec89d2014",
							"code": "ServiceRecipientsListDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(ServiceRecipientsListDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 411
						},
						{
							"id": "04ad3dbc-bdfa-2f7e-d1f4-81187e1d252f",
							"code": "ServiceRecipientsListDS_Account",
							"caption": "#ResourceString(ServiceRecipientsListDS_Account)#",
							"dataValueType": 10,
							"width": 381
						},
						{
							"id": "3c951088-a069-2f40-fdad-f4ff9a7cbcdc",
							"code": "ServiceRecipientsListDS_Department",
							"path": "Department",
							"caption": "#ResourceString(ServiceRecipientsListDS_Department)#",
							"dataValueType": 10,
							"referenceSchemaName": "Department"
						}
					]
				},
				"parentName": "GridContainer_7tdxges",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ServicesExpansionPanel_title)#",
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
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicesToolsContainer",
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
				"parentName": "ServicesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesToolsFlexContainer",
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
				"parentName": "ServicesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServicesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ServiceInServicePact",
							"defaultValues": [
								{
									"attributeName": "ServicePact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "ServicesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServicesRefreshButton_caption)#",
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
							"dataSourceName": "ServicesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ServicesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServicesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ServicesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ServicesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServicesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ServicesList"
						}
					},
					"visible": true
				},
				"parentName": "ServicesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServicesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ServiceInServicePact"
						}
					},
					"visible": true
				},
				"parentName": "ServicesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ServicesSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"ServicesList"
					]
				},
				"parentName": "ServicesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_si1u790",
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
				"parentName": "ServicesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$ServicesList",
					"primaryColumnName": "ServicesListDS_Id",
					"columns": [
						{
							"id": "310bc671-d34f-a3b4-1545-24880e776393",
							"code": "ServicesListDS_ConcatName",
							"path": "ConcatName",
							"caption": "#ResourceString(ServicesList_310bc671)#",
							"dataValueType": 30,
							"changed": true,
							"width": 411
						},
						{
							"id": "7c35fcd0-a9c7-ea4f-b4d1-dee3e382675c",
							"code": "ServicesListDS_ServiceItemStatus",
							"path": "ServiceItem.Status",
							"caption": "#ResourceString(ServicesListDS_ServiceItemStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServiceStatus"
						},
						{
							"id": "3efc7528-0f74-fb10-3800-47c222eaf01f",
							"code": "ServicesListDS_ServiceItemCategory",
							"path": "ServiceItem.Category",
							"caption": "#ResourceString(ServicesListDS_ServiceItemCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServiceCategory",
							"width": 183
						},
						{
							"id": "8e395052-4932-5ef1-a053-03a884f58cb9",
							"code": "ServicesListDS_ServiceItemReactionTime",
							"path": "ServiceItem.ReactionTime",
							"caption": "#ResourceString(ServicesListDS_ServiceItemReactionTime)#",
							"dataValueType": 28,
							"width": 149
						},
						{
							"id": "785839d9-c6a7-aa33-018c-03a23cea8ea1",
							"code": "ServicesListDS_ServiceItemSolutionTime",
							"path": "ServiceItem.SolutionTime",
							"caption": "#ResourceString(ServicesListDS_ServiceItemSolutionTime)#",
							"dataValueType": 28,
							"width": 157
						}
					],
					"visible": true,
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "GridContainer_si1u790",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseHistoryTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_6ipl1ss_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
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
					"fitContent": true,
					"visible": true
				},
				"parentName": "CaseHistoryTab",
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
				"index": 0
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
				"index": 1
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ceptd5f",
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
					"items": "$CasesList",
					"primaryColumnName": "CasesListDS_Id",
					"columns": [
						{
							"id": "aed17e93-a871-9426-7d68-17831cf424d1",
							"code": "CasesListDS_Number",
							"caption": "#ResourceString(CasesListDS_Number)#",
							"dataValueType": 27,
							"width": 118
						},
						{
							"id": "2048b46b-2dbb-9af8-03ee-9a035b6b95c0",
							"code": "CasesListDS_Subject",
							"path": "Subject",
							"caption": "#ResourceString(CasesListDS_Subject)#",
							"dataValueType": 30,
							"width": 328
						},
						{
							"id": "065814bf-4614-0183-6e7d-e26723fda2b1",
							"code": "CasesListDS_Category",
							"path": "Category",
							"caption": "#ResourceString(CasesListDS_Category)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseCategory",
							"width": 141
						},
						{
							"id": "f7eaf278-4d47-013e-058b-69152e98dadc",
							"code": "CasesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(CasesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 168
						},
						{
							"id": "07710a8f-e9ff-2fde-f548-20eee6b5b652",
							"code": "CasesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CasesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 162
						},
						{
							"id": "f02dd840-4675-72d7-8ddb-6f627d233844",
							"code": "CasesListDS_SolutionDate",
							"path": "SolutionDate",
							"caption": "#ResourceString(CasesListDS_SolutionDate)#",
							"dataValueType": 7
						}
					],
					"visible": true,
					"features": {
						"editable": false
					},
					"fitContent": true
				},
				"parentName": "GridContainer_ceptd5f",
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
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"LookupAttribute_ik7ivkh": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"LookupAttribute_vnc2ec7": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"DateTimeAttribute_6gm9v3i": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"DateTimeAttribute_iw2qoqb": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"LookupAttribute_3fck48g": {
						"modelConfig": {
							"path": "PDS.Calendar"
						}
					},
					"LookupAttribute_r9mqul2": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"GridDetail_t3qfnfc": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_t3qfnfcDS",
							"filterAttributes": [
								{
									"name": "GridDetail_t3qfnfc_PredefinedFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_t3qfnfcDS_Account": {
									"modelConfig": {
										"path": "GridDetail_t3qfnfcDS.Account"
									}
								},
								"GridDetail_t3qfnfcDS_Id": {
									"modelConfig": {
										"path": "GridDetail_t3qfnfcDS.Id"
									}
								}
							}
						}
					},
					"ServiceRecipientsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ServiceRecipientsListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"ServiceRecipientsListDS_Contact": {
									"modelConfig": {
										"path": "ServiceRecipientsListDS.Contact"
									}
								},
								"ServiceRecipientsListDS_Account": {
									"modelConfig": {
										"path": "ServiceRecipientsListDS.Account"
									}
								},
								"ServiceRecipientsListDS_Department": {
									"modelConfig": {
										"path": "ServiceRecipientsListDS.Department"
									}
								},
								"ServiceRecipientsListDS_Id": {
									"modelConfig": {
										"path": "ServiceRecipientsListDS.Id"
									}
								}
							}
						}
					},
					"ServicesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ServicesListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"ServicesListDS_ConcatName": {
									"modelConfig": {
										"path": "ServicesListDS.ConcatName"
									}
								},
								"ServicesListDS_ServiceItemStatus": {
									"modelConfig": {
										"path": "ServicesListDS.ServiceItemStatus"
									}
								},
								"ServicesListDS_ServiceItemCategory": {
									"modelConfig": {
										"path": "ServicesListDS.ServiceItemCategory"
									}
								},
								"ServicesListDS_ServiceItemReactionTime": {
									"modelConfig": {
										"path": "ServicesListDS.ServiceItemReactionTime"
									}
								},
								"ServicesListDS_ServiceItemSolutionTime": {
									"modelConfig": {
										"path": "ServicesListDS.ServiceItemSolutionTime"
									}
								},
								"ServicesListDS_Id": {
									"modelConfig": {
										"path": "ServicesListDS.Id"
									}
								}
							}
						}
					},
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
								"CasesListDS_Category": {
									"modelConfig": {
										"path": "CasesListDS.Category"
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
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_t3qfnfcDS": [
							{
								"attributePath": "ServicePact",
								"relationPath": "PDS.Id"
							}
						],
						"ServiceRecipientsListDS": [
							{
								"attributePath": "ServicePact",
								"relationPath": "PDS.Id"
							}
						],
						"ServicesListDS": [
							{
								"attributePath": "ServicePact",
								"relationPath": "PDS.Id"
							}
						],
						"CasesListDS": [
							{
								"attributePath": "ServicePact",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "ServicePact"
						},
						"scope": "page"
					},
					"GridDetail_t3qfnfcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ServiceObject",
							"attributes": {
								"Account": {
									"path": "Account"
								}
							}
						}
					},
					"ServiceRecipientsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ServiceObject",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"Account": {
									"path": "Account"
								},
								"Department": {
									"path": "Department"
								}
							}
						}
					},
					"ServicesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ServiceInServicePact",
							"attributes": {
								"ConcatName": {
									"path": "ConcatName"
								},
								"ServiceItemStatus": {
									"type": "ForwardReference",
									"path": "Status"
								},
								"ServiceItemCategory": {
									"type": "ForwardReference",
									"path": "ServiceItem.Category"
								},
								"ServiceItemReactionTime": {
									"type": "ForwardReference",
									"path": "ReactionTime"
								},
								"ServiceItemSolutionTime": {
									"type": "ForwardReference",
									"path": "SolutionTime"
								}
							}
						}
					},
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
								"Category": {
									"path": "Category"
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
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "ServicePactFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});