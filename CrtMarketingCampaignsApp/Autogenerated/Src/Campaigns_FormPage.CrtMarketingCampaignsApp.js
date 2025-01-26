define("Campaigns_FormPage", /**SCHEMA_DEPS*/["CampaignViewerComponent"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "CampaignInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
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
				"operation": "remove",
				"name": "GeneralInfoTab"
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
					"entitySchemaName": "Campaign"
				}
			},
			{
				"operation": "insert",
				"name": "OpenCampaignDesignerButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.OpenCampaignDesignerRequest",
						"params": {
							"campaignId": "$Id",
							"campaignSchemaUId": "$CampaignSchemaUId"
						}
					},
					"color": "default",
					"caption": "#ResourceString(OpenCampaignDesignerButton_caption)#",
					"visible": true,
					"size": "large",
					"iconPosition": "left-icon",
					"clickMode": "default",
					"icon": "pencil-button-icon",
					"layoutConfig": {}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TopSideAreaProfileContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TopSideAreaGridContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "none"
					},
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
					}
				},
				"parentName": "TopSideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CampaignStatus",
					"labelPosition": "auto",
					"control": "$CampaignStatus",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopSideAreaGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainButtonsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"alignItems": "flex-start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "TopSideAreaGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "StartCampaignButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(StartCampaignButton_caption)#",
					"clicked": {
						"request": "crt.LaunchCampaignRequest",
						"params": {
							"campaignId": "$Id",
							"showConfirmation": true,
							"doRecordSave": true
						}
					},
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": false,
					"icon": "process-button-icon",
					"clickMode": "default"
				},
				"parentName": "MainButtonsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ScheduleCampaignButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ScheduleCampaignButton_caption)#",
					"clicked": {
						"request": "crt.LaunchCampaignRequest",
						"params": {
							"campaignId": "$Id",
							"showConfirmation": true,
							"isScheduledStart": true,
							"doRecordSave": true
						}
					},
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": false,
					"icon": "process-button-icon",
					"clickMode": "default"
				},
				"parentName": "MainButtonsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "StopCampaignButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(StopCampaignButton_caption)#",
					"clicked": {
						"request": "crt.StopCampaignRequest",
						"params": {
							"campaignId": "$Id",
							"showConfirmation": true
						}
					},
					"color": "warn",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": false,
					"icon": "close-button-icon",
					"clickMode": "default"
				},
				"parentName": "MainButtonsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CampaignInfoAreaGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
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
				"name": "CampaignInfoExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_wtuwle7_title)#",
					"toggleType": "material",
					"togglePosition": "after",
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
				"parentName": "CampaignInfoAreaGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignInfoGridContainer",
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
					}
				},
				"parentName": "CampaignInfoExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Name",
					"control": "$Name",
					"labelPosition": "auto",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"multiline": true
				},
				"parentName": "CampaignInfoGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TargetDescription",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_eqbd2y6",
					"labelPosition": "auto",
					"control": "$StringAttribute_eqbd2y6",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CampaignInfoGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UtmCampaign",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_pvpy0fr",
					"labelPosition": "auto",
					"control": "$StringAttribute_pvpy0fr",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CampaignInfoGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WorkflowSettingsAreaGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WorkflowSettingsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_69gkrwa_title)#",
					"toggleType": "material",
					"togglePosition": "after",
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
				"parentName": "WorkflowSettingsAreaGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WorkflowSettingsFlexContainer",
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "WorkflowSettingsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ScheduledStartMode",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ScheduledStartMode",
					"labelPosition": "auto",
					"control": "$ScheduledStartMode",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "WorkflowSettingsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ScheduledStartDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.ScheduledStartDate",
					"labelPosition": "auto",
					"control": "$ScheduledStartDate"
				},
				"parentName": "WorkflowSettingsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextFireTime",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.NextFireTime",
					"labelPosition": "auto",
					"control": "$NextFireTime",
					"visible": true,
					"readonly": true
				},
				"parentName": "WorkflowSettingsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ScheduledStopMode",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ScheduledStopMode",
					"labelPosition": "auto",
					"control": "$ScheduledStopMode",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "WorkflowSettingsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ScheduledStopDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.ScheduledStopDate",
					"labelPosition": "auto",
					"control": "$ScheduledStopDate"
				},
				"parentName": "WorkflowSettingsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CampaignFlowTab",
				"values": {
					"caption": "#ResourceString(GeneralInfoTab_caption)#",
					"type": "crt.TabContainer",
					"items": [],
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignViewer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 15
					},
					"type": "crt.CampaignViewer",
					"fitContent": true,
					"campaignId": "$Id",
					"title": "#ResourceString(CampaignViewer_fo92rqr_title)#"
				},
				"parentName": "CampaignFlowTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AudienceTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AudienceTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AudienceToolsGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "AudienceTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AudienceToolsLeftFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "AudienceToolsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignParticipantQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_u4joy08_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "CmpgnParticipantStatus",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CampaignParticipantQuickFilter_DataGrid_2mijioo",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_2mijioo",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "CampaignParticipantQuickFilter_Value"
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "AudienceToolsLeftFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignParticipantSearchFilter",
				"values": {
					"layoutConfig": {},
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_1y9katr_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CampaignParticipantSearchFilter_DataGrid_2mijioo",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_2mijioo"
										]
									}
								]
							}
						],
						"from": [
							"CampaignParticipantSearchFilter_SearchValue",
							"CampaignParticipantSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "AudienceToolsLeftFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AudienceToolsRightFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "AudienceToolsGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vcfqz29",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "AudienceToolsRightFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignParticipantExportDataBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_pes6ukn_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CampaignParticipantList",
							"filters": "$DataGrid_2mijioo | crt.ToCollectionFilters : 'DataGrid_2mijioo' : $DataGrid_2mijioo_SelectionState"
						}
					},
					"clickMode": "default",
					"menuItems": [],
					"layoutConfig": {}
				},
				"parentName": "FlexContainer_vcfqz29",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CampaignParticipantRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CampaignParticipantRefreshBtn_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "reload-button-icon",
					"layoutConfig": {},
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "DataGrid_2mijiooDS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vcfqz29",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CampaignParticipantList",
				"values": {
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_2mijioo",
					"primaryColumnName": "DataGrid_2mijiooDS_Id",
					"columns": [
						{
							"id": "28c1dd4e-993f-cfc9-e2d3-8749a9c23d4d",
							"code": "DataGrid_2mijiooDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(DataGrid_2mijiooDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 259
						},
						{
							"id": "d7d7ac34-0ad4-8289-1964-4d10b5df3c3c",
							"code": "DataGrid_2mijiooDS_CampaignItem",
							"path": "CampaignItem",
							"caption": "#ResourceString(DataGrid_2mijiooDS_CampaignItem)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignItem"
						},
						{
							"id": "e66c3ce6-7be0-529f-083b-46edbd2c239d",
							"code": "DataGrid_2mijiooDS_Status",
							"path": "Status",
							"caption": "#ResourceString(DataGrid_2mijiooDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CmpgnParticipantStatus",
							"width": 154
						},
						{
							"id": "213dda64-3f90-ebcb-7a60-a69a67f4ca67",
							"code": "DataGrid_2mijiooDS_StepCompleted",
							"path": "StepCompleted",
							"caption": "#ResourceString(DataGrid_2mijiooDS_StepCompleted)#",
							"dataValueType": 12,
							"width": 157
						},
						{
							"id": "bab094cb-895b-e78c-0112-0fa83298f148",
							"code": "DataGrid_2mijiooDS_StepCompletedOn",
							"path": "StepCompletedOn",
							"caption": "#ResourceString(DataGrid_2mijiooDS_StepCompletedOn)#",
							"dataValueType": 7
						},
						{
							"id": "dae947a4-95c0-b07b-2ff0-73f60d047e3f",
							"code": "DataGrid_2mijiooDS_StepModifiedOn",
							"path": "StepModifiedOn",
							"caption": "#ResourceString(DataGrid_2mijiooDS_StepModifiedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"rows": {
							"toolbar": false
						}
					},
					"selectionState": "$DataGrid_2mijioo_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_2mijioo_SelectionState"
					},
					"activeRow": "$DataGrid_2mijioo_ActiveRow",
					"bulkActions": [],
					"rowDoubleClick": {}
				},
				"parentName": "AudienceTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AssociatedEntitiesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_65ynjyk_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AssociatedEntitiesGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(max-content, 0)",
					"columns": [
						"minmax(32px, 1fr)"
					],
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
					},
					"alignItems": "stretch"
				},
				"parentName": "AssociatedEntitiesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lqgpovh_title)#",
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
					"alignItems": "stretch"
				},
				"parentName": "AssociatedEntitiesGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersToolsGridContainer",
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
					"alignItems": "stretch"
				},
				"parentName": "ContactFoldersExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersToolsFlexContainer",
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
				"parentName": "ContactFoldersToolsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactFoldersRefreshBtn_caption)#",
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
							"dataSourceName": "GridDetail_jlh029wDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactFoldersToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersSettingsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactFoldersSettingsBtn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ContactFoldersToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactFoldersExportDataBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactFoldersExportDataBtn_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContactFoldersList",
							"filters": "$GridDetail_jlh029w | crt.ToCollectionFilters : 'GridDetail_jlh029w' : $GridDetail_jlh029w_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ContactFoldersSettingsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContactFoldersSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactFoldersSearchFilter_GridDetail_jlh029w",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_jlh029w"
										]
									}
								]
							}
						],
						"from": [
							"ContactFoldersSearchFilter_SearchValue",
							"ContactFoldersSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ContactFoldersToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactFoldersGridContainer",
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
				"parentName": "ContactFoldersExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFoldersList",
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
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_jlh029w",
					"activeRow": "$GridDetail_jlh029w_ActiveRow",
					"selectionState": "$GridDetail_jlh029w_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_jlh029w_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_jlh029wDS_Id",
					"columns": [
						{
							"id": "d9f5ffa4-c74b-7db6-ecb4-66ff3456304b",
							"code": "GridDetail_jlh029wDS_ContactFolder",
							"path": "ContactFolder",
							"caption": "#ResourceString(GridDetail_jlh029wDS_ContactFolder)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactFolder",
							"width": 271
						},
						{
							"id": "96ca1ee8-6d2f-c713-59f6-b4cfa26b5e59",
							"code": "GridDetail_jlh029wDS_CampaignItem",
							"path": "CampaignItem",
							"caption": "#ResourceString(GridDetail_jlh029wDS_CampaignItem)#",
							"dataValueType": 10,
							"referenceSchemaName": "CampaignItem",
							"width": 219
						},
						{
							"id": "7d0bd544-1fe9-3b4e-c2eb-33ad56b781a7",
							"code": "GridDetail_jlh029wDS_FolderType",
							"path": "FolderType",
							"caption": "#ResourceString(GridDetail_jlh029wDS_FolderType)#",
							"dataValueType": 10,
							"referenceSchemaName": "FolderType"
						}
					],
					"bulkActions": []
				},
				"parentName": "ContactFoldersGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_jlh029w_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_jlh029wDS",
							"filters": "$GridDetail_jlh029w | crt.ToCollectionFilters : 'GridDetail_jlh029w' : $GridDetail_jlh029w_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_jlh029w_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "ContactFoldersList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_jlh029w_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_jlh029wDS",
							"filters": "$GridDetail_jlh029w | crt.ToCollectionFilters : 'GridDetail_jlh029w' : $GridDetail_jlh029w_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_jlh029w_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_jlh029w_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_jlh029w_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_jlh029w",
							"filters": "$GridDetail_jlh029w | crt.ToCollectionFilters : 'GridDetail_jlh029w' : $GridDetail_jlh029w_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_jlh029w_SelectionState"
						}
					}
				},
				"parentName": "ContactFoldersList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_jlh029w_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_jlh029wDS",
							"filters": "$GridDetail_jlh029w | crt.ToCollectionFilters : 'GridDetail_jlh029w' : $GridDetail_jlh029w_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_jlh029w_SelectionState"
						}
					}
				},
				"parentName": "ContactFoldersList",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"CampaignSchemaUId": {
						"modelConfig": {
							"path": "PDS.CampaignSchemaUId"
						}
					},
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"StringAttribute_eqbd2y6": {
						"modelConfig": {
							"path": "PDS.TargetDescription"
						}
					},
					"CampaignStatus": {
						"modelConfig": {
							"path": "PDS.CampaignStatus"
						}
					},
					"DataGrid_2mijioo": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_2mijiooDS",
							"filterAttributes": [
								{
									"name": "CampaignParticipantQuickFilter_DataGrid_2mijioo",
									"loadOnChange": true
								},
								{
									"name": "CampaignParticipantSearchFilter_DataGrid_2mijioo",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_2mijiooDS_Contact": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.Contact"
									}
								},
								"DataGrid_2mijiooDS_CampaignItem": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.CampaignItem"
									}
								},
								"DataGrid_2mijiooDS_Status": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.Status"
									}
								},
								"DataGrid_2mijiooDS_StepCompleted": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.StepCompleted"
									}
								},
								"DataGrid_2mijiooDS_StepCompletedOn": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.StepCompletedOn"
									}
								},
								"DataGrid_2mijiooDS_StepModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.StepModifiedOn"
									}
								},
								"DataGrid_2mijiooDS_Id": {
									"modelConfig": {
										"path": "DataGrid_2mijiooDS.Id"
									}
								}
							}
						}
					},
					"StringAttribute_pvpy0fr": {
						"modelConfig": {
							"path": "PDS.UtmCampaign"
						}
					},
					"ScheduledStartMode": {
						"modelConfig": {
							"path": "PDS.ScheduledStartMode"
						},
						"change": {
							"request": "crt.StartModeChange",
							"params": {}
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"ScheduledStopMode": {
						"modelConfig": {
							"path": "PDS.ScheduledStopMode"
						},
						"change": {
							"request": "crt.StopModeChange",
							"params": {}
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"ScheduledStartDate": {
						"modelConfig": {
							"path": "PDS.ScheduledStartDate"
						}
					},
					"ScheduledStopDate": {
						"modelConfig": {
							"path": "PDS.ScheduledStopDate"
						}
					},
					"NextFireTime": {
						"modelConfig": {
							"path": "PDS.NextFireTime"
						}
					},
					"GridDetail_jlh029w": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_jlh029wDS",
							"filterAttributes": [
								{
									"name": "ContactFoldersSearchFilter_GridDetail_jlh029w",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_jlh029wDS_ContactFolder": {
									"modelConfig": {
										"path": "GridDetail_jlh029wDS.ContactFolder"
									}
								},
								"GridDetail_jlh029wDS_CampaignItem": {
									"modelConfig": {
										"path": "GridDetail_jlh029wDS.CampaignItem"
									}
								},
								"GridDetail_jlh029wDS_FolderType": {
									"modelConfig": {
										"path": "GridDetail_jlh029wDS.FolderType"
									}
								},
								"GridDetail_jlh029wDS_Id": {
									"modelConfig": {
										"path": "GridDetail_jlh029wDS.Id"
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
						"DataGrid_2mijiooDS": [
							{
								"attributePath": "Campaign",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_jlh029wDS": [
							{
								"attributePath": "Campaign",
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
							"entitySchemaName": "Campaign"
						},
						"scope": "page"
					},
					"DataGrid_2mijiooDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CampaignParticipant",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"CampaignItem": {
									"path": "CampaignItem"
								},
								"Status": {
									"path": "Status"
								},
								"StepCompleted": {
									"path": "StepCompleted"
								},
								"StepCompletedOn": {
									"path": "StepCompletedOn"
								},
								"StepModifiedOn": {
									"path": "StepModifiedOn"
								}
							}
						}
					},
					"GridDetail_jlh029wDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "VwFolderInCampaign",
							"attributes": {
								"ContactFolder": {
									"path": "ContactFolder"
								},
								"CampaignItem": {
									"path": "CampaignItem"
								},
								"FolderType": {
									"path": "FolderType"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					const { $context } = request;
					const validationResult = await $context.executeRequest({type:'crt.ValidateCampaignRequest', $context});
					if (validationResult) {
						$context.executeRequest({
							type: 'crt.NotificationRequest',
							message: validationResult
						});
						return false;
					}
					return await next?.handle(request);
				}
			},
			{
				request: "crt.StartModeChange",
				handler: async(request, next) => {
					const { $context } = request;
					if ((await $context.ScheduledStartMode).value !== "5ee38934-d028-4c1e-a1c8-2b039991baea") {
						$context.ScheduledStartDate = null;
					}
					return await next?.handle(request);
				}
			},
			{
				request: "crt.StopModeChange",
				handler: async(request, next) => {
					const { $context } = request;
					if ((await $context.ScheduledStopMode).value !== "5ee38934-d028-4c1e-a1c8-2b039991baea") {
						$context.ScheduledStopDate = null;
					}
					return await next?.handle(request);
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});