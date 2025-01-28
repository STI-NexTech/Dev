define("Services_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
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
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "ServiceItemInTag",
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
					"entitySchemaName": "ServiceItem"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "ServiceItem",
					"columns": [
						{
							"id": "8406267a-5d12-5430-12c3-2657a4ae1b0d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "bdfa0ee1-e52c-4577-a724-c4203c1fcf1b",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "50563c74-1a06-0876-ef0d-8352874e7c30",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "f2ba6010-d9d8-6763-1a27-77d91909127c",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
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
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_avcsvhm",
					"labelPosition": "auto",
					"control": "$LookupAttribute_avcsvhm",
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
				"name": "Category",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_87542qh",
					"labelPosition": "auto",
					"control": "$LookupAttribute_87542qh",
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
				"name": "CaseCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_htz741g",
					"labelPosition": "auto",
					"control": "$LookupAttribute_htz741g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qh8x1bg",
					"labelPosition": "auto",
					"control": "$LookupAttribute_qh8x1bg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TermsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "small",
						"rowGap": "none"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TermsLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TermsLabel_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TermsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResponseTimeUnit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ResponseTimeUnit_label)#",
					"labelPosition": "auto",
					"control": "$LookupAttribute_bupq2te",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResponseTimeValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(ResponseTimeValue_label)#",
					"labelPosition": "auto",
					"control": "$NumberAttribute_08rnh2l",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ResolutionTimeUnit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ResolutionTimeUnit_label)#",
					"labelPosition": "auto",
					"control": "$LookupAttribute_5gaa6lx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ResolutionTimeValue",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(ResolutionTimeValue_label)#",
					"labelPosition": "auto",
					"control": "$NumberAttribute_out51mc",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ServiceTeamMemberExpansionPanel_title)#",
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
				"name": "ServiceTeamMemberToolsContainer",
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
				"parentName": "ServiceTeamMemberExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberToolsFlexContainer",
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
				"parentName": "ServiceTeamMemberToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceTeamMemberRefreshButton_caption)#",
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
							"dataSourceName": "ServiceTeamMemberListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ServiceTeamMemberToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServiceTeamMemberSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ServiceTeamMemberToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceTeamMemberExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ServiceTeamMemberList"
						}
					},
					"visible": true
				},
				"parentName": "ServiceTeamMemberSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServiceTeamMemberImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ServiceEngineer"
						}
					},
					"visible": true
				},
				"parentName": "ServiceTeamMemberSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ServiceTeamMemberSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"ServiceTeamMemberList"
					]
				},
				"parentName": "ServiceTeamMemberToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_x3agtxy",
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
				"parentName": "ServiceTeamMemberExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServiceTeamMemberList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$ServiceTeamMemberList",
					"primaryColumnName": "ServiceTeamMemberListDS_Id",
					"columns": [
						{
							"id": "b964561b-6501-c44f-525c-ca25201c102e",
							"code": "ServiceTeamMemberListDS_Engineer",
							"path": "Engineer",
							"caption": "#ResourceString(ServiceTeamMemberListDS_Engineer)#",
							"dataValueType": 10,
							"referenceSchemaName": "SysAdminUnit",
							"width": 445
						},
						{
							"id": "13ba17c5-f7db-1be1-e382-1798b9e5a281",
							"code": "ServiceTeamMemberListDS_SupportLevel",
							"path": "SupportLevel",
							"caption": "#ResourceString(ServiceTeamMemberListDS_SupportLevel)#",
							"dataValueType": 10,
							"referenceSchemaName": "RoleInServiceTeam"
						}
					]
				},
				"parentName": "GridContainer_x3agtxy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ServicePactExpansionPanel_title)#",
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
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicePactsToolsContainer",
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
				"parentName": "ServicePactExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactsToolsFlexContainer",
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
				"parentName": "ServicePactsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServicePactRefreshButton_caption)#",
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
							"dataSourceName": "ServicePactListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ServicePactsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ServicePactSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ServicePactsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicePactsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServicePactsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ServicePactList"
						}
					},
					"visible": true
				},
				"parentName": "ServicePactSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ServicePactsImportDataButton_caption)#",
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
				"parentName": "ServicePactSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServicePactSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ServicePactSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"ServicePactList"
					]
				},
				"parentName": "ServicePactsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_p488h31",
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
				"parentName": "ServicePactExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePactList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$ServicePactList",
					"primaryColumnName": "ServicePactListDS_Id",
					"columns": [
						{
							"id": "3a5766e9-278e-78d3-db25-1decebac47f1",
							"code": "ServicePactListDS_ServicePact",
							"path": "ServicePact",
							"caption": "#ResourceString(ServicePactListDS_ServicePact)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServicePact",
							"width": 445
						},
						{
							"id": "c3e95cb1-5a5e-c756-c333-18d945f63468",
							"code": "ServicePactListDS_ServicePactStatus",
							"path": "ServicePact.Status",
							"caption": "#ResourceString(ServicePactListDS_ServicePactStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "ServicePactStatus"
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
				"parentName": "GridContainer_p488h31",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseHistoryTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(HistoryTab_caption)#",
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
				"name": "GridContainer_k2ed6fi",
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
							"id": "0df2e7e5-f7f3-c66d-e1db-bc13d39fb03c",
							"code": "CasesListDS_Number",
							"caption": "#ResourceString(CasesListDS_Number)#",
							"dataValueType": 27,
							"width": 118
						},
						{
							"id": "3f09b54c-5a93-e2f4-7efd-5486e3902c7d",
							"code": "CasesListDS_Subject",
							"path": "Subject",
							"caption": "#ResourceString(CasesListDS_Subject)#",
							"dataValueType": 30,
							"width": 327
						},
						{
							"id": "551a98d0-16ae-6396-c41d-327c79098635",
							"code": "CasesListDS_Category",
							"path": "Category",
							"caption": "#ResourceString(CasesListDS_Category)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseCategory",
							"width": 143
						},
						{
							"id": "5c770daf-9f48-ad2a-30e7-4e6c141e97e0",
							"code": "CasesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(CasesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 165
						},
						{
							"id": "50b6def6-6716-f5a5-d951-3edaeee3e3b0",
							"code": "CasesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CasesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 164
						},
						{
							"id": "a4748ba0-9f6c-7548-f2ea-387598791d3f",
							"code": "CasesListDS_SolutionDate",
							"path": "SolutionDate",
							"caption": "#ResourceString(CasesListDS_SolutionDate)#",
							"dataValueType": 7,
							"width": 159
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
				"parentName": "GridContainer_k2ed6fi",
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
					"LookupAttribute_avcsvhm": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"LookupAttribute_87542qh": {
						"modelConfig": {
							"path": "PDS.Category"
						}
					},
					"LookupAttribute_htz741g": {
						"modelConfig": {
							"path": "PDS.CaseCategory"
						}
					},
					"LookupAttribute_qh8x1bg": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"LookupAttribute_bupq2te": {
						"modelConfig": {
							"path": "PDS.ReactionTimeUnit"
						}
					},
					"NumberAttribute_08rnh2l": {
						"modelConfig": {
							"path": "PDS.ReactionTimeValue"
						}
					},
					"NumberAttribute_out51mc": {
						"modelConfig": {
							"path": "PDS.SolutionTimeValue"
						}
					},
					"LookupAttribute_5gaa6lx": {
						"modelConfig": {
							"path": "PDS.SolutionTimeUnit"
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
					},
					"ServicePactList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ServicePactListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"ServicePactListDS_ServicePact": {
									"modelConfig": {
										"path": "ServicePactListDS.ServicePact"
									}
								},
								"ServicePactListDS_ServicePactStatus": {
									"modelConfig": {
										"path": "ServicePactListDS.ServicePactStatus"
									}
								},
								"ServicePactListDS_Id": {
									"modelConfig": {
										"path": "ServicePactListDS.Id"
									}
								}
							}
						}
					},
					"ServiceTeamMemberList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ServiceTeamMemberListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"ServiceTeamMemberListDS_Engineer": {
									"modelConfig": {
										"path": "ServiceTeamMemberListDS.Engineer"
									}
								},
								"ServiceTeamMemberListDS_SupportLevel": {
									"modelConfig": {
										"path": "ServiceTeamMemberListDS.SupportLevel"
									}
								},
								"ServiceTeamMemberListDS_Id": {
									"modelConfig": {
										"path": "ServiceTeamMemberListDS.Id"
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
						"CasesListDS": [
							{
								"attributePath": "ServiceItem",
								"relationPath": "PDS.Id"
							}
						],
						"ServicePactListDS": [
							{
								"attributePath": "ServiceItem",
								"relationPath": "PDS.Id"
							}
						],
						"ServiceTeamMemberListDS": [
							{
								"attributePath": "ServiceItem",
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
							"entitySchemaName": "ServiceItem"
						},
						"scope": "page"
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
					},
					"ServicePactListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ServiceInServicePact",
							"attributes": {
								"ServicePact": {
									"path": "ServicePact"
								},
								"ServicePactStatus": {
									"type": "ForwardReference",
									"path": "ServicePact.Status"
								}
							}
						}
					},
					"ServiceTeamMemberListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ServiceEngineer",
							"attributes": {
								"Engineer": {
									"path": "Engineer"
								},
								"SupportLevel": {
									"path": "SupportLevel"
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
					"entitySchemaName": "ServiceItemFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});