define("CopilotIntents_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SetRecordRightsButton",
				"values": {
					"caption": "#ResourceString(SetRecordRightsButton_caption)#",
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "MainHeaderBottom",
				"values": {
					"justifyContent": "end",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"gap": {
						"columnGap": "medium",
						"rowGap": "small"
					},
					"padding": {
						"left": "none",
						"right": "none",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "CardContentWrapper",
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "large",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
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
					"padding": {
						"top": "11px",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CenterContainer",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "CardContentContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
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
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(Title_label)#",
					"labelPosition": "auto",
					"control": "$PDS_Name",
					"visible": true,
					"readonly": false,
					"tooltip": "#ResourceString(Title_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(Code_label)#",
					"labelPosition": "auto",
					"control": "$PDS_Code"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Description",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "#ResourceString(Description_label)#",
					"labelPosition": "auto",
					"control": "$PDS_Description",
					"tooltip": "#ResourceString(Description_tooltip)#"
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
					"label": "#ResourceString(Status_label)#",
					"ariaLabel": "#ResourceString(Status_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"readonly": "$PDS_Type | crt.ToObjectProp : 'value' | crt.IsEqual : '35f3b644-4fa3-4d1e-8e62-5c3fdc4d3e52'",
					"control": "$PDS_Status",
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Mode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(Mode_label)#",
					"tooltip": "#ResourceString(Mode_tooltip)#",
					"labelPosition": "auto",
					"control": "$PDS_Mode",
					"readonly": "$PDS_Type | crt.ToObjectProp : 'value' | crt.IsEqual : '35f3b644-4fa3-4d1e-8e62-5c3fdc4d3e52'",
					"showValueAsLink": true,
					"isAddAllowed": true,
					"controlActions": [],
					"listActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RightSideContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "13px",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PromptExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(PromptExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PromptContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "32px"
					},
					"alignItems": "stretch"
				},
				"parentName": "PromptExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Prompt",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Prompt_label)#",
					"control": "$PDS_Prompt",
					"placeholder": "#ResourceString(Prompt_placeholder)#",
					"readonly": false,
					"multiline": true,
					"labelPosition": "hidden",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "PromptContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"visible": "$IsApiMode | crt.InvertBooleanValue",
					"title": "#ResourceString(ActionsExpansionPanel_title)#",
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
					"fitContent": true
				},
				"parentName": "RightSideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionsGridContainer",
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
				"parentName": "ActionsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsFlexContainer",
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
				"parentName": "ActionsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddActionBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddActionBtn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CopilotAction",
							"defaultValues": [
								{
									"attributeName": "Intent",
									"value": "$Id"
								},
								{
									"attributeName": "Code",
									"value": "$ActionsDetail | crt.GenerateCopilotActionCode : 'ActionsDetailDS_Code'"
								},
								{
									"attributeName": "PackageUId",
									"value": "$PDS_PackageUId"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ActionsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshActionsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshActionsBtn_caption)#",
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
							"dataSourceName": "ActionsDetailDS"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "ActionsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGridContainer",
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
				"parentName": "ActionsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionsDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false,
							"toolbar": false
						},
						"columns": {
							"sorting": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$ActionsDetail",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ActionsDetailDS_Id",
					"columns": [
						{
							"id": "ab3b73d7-2ec5-b54e-a5af-6fb20347f95c",
							"code": "ActionsDetailDS_Name",
							"caption": "#ResourceString(ActionsDetailDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "934f65bb-4ac7-76c0-5231-c4afc3b29de0",
							"code": "ActionsDetailDS_Description",
							"caption": "#ResourceString(ActionsDetailDS_Description)#",
							"dataValueType": 28,
							"width": 369
						}
					],
					"placeholder": false
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Helper",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_Helper_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "book-open-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9tlbbq3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_Helper",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IntentHelpTabLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(IntentHelpTabLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_9tlbbq3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_helper",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_Helper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_vjl127g",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_vjl127g_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_AcademyLink",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tbdtke3_caption)#",
					"color": "default",
					"disabled": false,
					"size": "small",
					"iconPosition": "right-icon",
					"visible": true,
					"clicked": {
                        "request": "crt.AcademyHelpLinkRequest",
						"params": {
							"contextHelpCode": "CopilotIntents"
						}
                    },
					"clickMode": "default",
					"icon": "open-button-icon"
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_9k5w1jp",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_9k5w1jp_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_099dh7q",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_099dh7q_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Label_1v910ch",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_1v910ch_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Label_b2fx4vr",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_b2fx4vr_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Label_aklt9zb",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_aklt9zb_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Label_51mzska",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_51mzska_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Label_d7websz",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_d7websz_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Label_3rz059f",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_3rz059f_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Label_si5462l",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_si5462l_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Label_1s9n19j",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_1s9n19j_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Label_5t1rr63",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5t1rr63_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Label_ca6jrmu",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ca6jrmu_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_helper",
				"propertyName": "items",
				"index": 13
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Code": {
						"modelConfig": {
							"path": "PDS.Code"
						},
						"validators": {
							"CodeMaxLength": {
								"type": "crt.MaxLength",
								"params": {
									"maxLength": 41
								}
							},
							"CodePrefixValidator": {
								"type": "crt.SchemaNamePrefix"
							},
							"CodeAllowedSymbolsValidator": {
								"type": "crt.SchemaNameAllowedSymbols"
							}
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_Mode": {
						"modelConfig": {
							"path": "PDS.Mode"
						}
					},
					"PDS_Prompt": {
						"modelConfig": {
							"path": "PDS.Prompt"
						}
					},
					"PDS_PackageUId": {
						"modelConfig": {
							"path": "PDS.PackageUId"
						}
					},
					"PDS_Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"ActionsDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "ActionsDetailDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ActionsDetail_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ActionsDetailDS_Name": {
									"modelConfig": {
										"path": "ActionsDetailDS.Name"
									}
								},
								"ActionsDetailDS_Code": {
									"modelConfig": {
										"path": "ActionsDetailDS.Code"
									}
								},
								"ActionsDetailDS_Description": {
									"modelConfig": {
										"path": "ActionsDetailDS.Description"
									}
								},
								"ActionsDetailDS_Id": {
									"modelConfig": {
										"path": "ActionsDetailDS.Id"
									}
								}
							}
						}
					},
					"ActionsDetail_PredefinedFilter": {
						"value": null
					},
					"IsApiMode": {
						"value": false
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
						"ActionsDetailDS": [
							{
								"attributePath": "Intent",
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
						"type": "crt.CopilotIntentDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "CopilotIntent",
							"attributes": {
								"Id": {
									"path": "Id"
								},
								"Name": {
									"path": "Name"
								},
								"Description": {
									"path": "Description"
								},
								"Status": {
									"path": "Status"
								},
								"Prompt": {
									"path": "Prompt"
								},
								"PackageUId": {
									"path": "PackageUId"
								},
								"Type": {
									"path": "Type"
								},
								"Mode": {
									"path": "Mode"
								}
							}
						}
					},
					"ActionsDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotAction",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Description": {
									"path": "Description"
								},
								"Code": {
									"path": "Code"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});