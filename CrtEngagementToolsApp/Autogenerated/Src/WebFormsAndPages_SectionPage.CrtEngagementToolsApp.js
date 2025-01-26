define("WebFormsAndPages_SectionPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeaderTop",
				"values": {
					"justifyContent": "start",
					"wrap": "wrap",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"direction": "row",
					"alignItems": "stretch",
					"gap": "small"
				}
			},
			{
				"operation": "remove",
				"name": "TitleContainer"
			},
			{
				"operation": "remove",
				"name": "BackButton"
			},
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#ResourceString(PageTitle_caption)#",
					"labelEllipsis": false,
					"visible": true
				}
			},
			{
				"operation": "move",
				"name": "PageTitle",
				"parentName": "MainHeaderTop",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ActionButtonsContainer"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
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
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentWrapper"
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "remove",
				"name": "CenterContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "remove",
				"name": "Tabs"
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
				"operation": "remove",
				"name": "CardToggleTabPanel"
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
				"name": "MainFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"stretch": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"298px",
						"minmax(64px, 1fr)"
					],
					"rows": "1fr",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "large",
						"right": "none",
						"bottom": "large",
						"left": "large"
					},
					"stretch": true,
					"alignItems": "stretch"
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_MainTabPanel",
				"values": {
					"for": "MainTabPanel",
					"gap": "medium",
					"size": "large",
					"direction": "column",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "MainGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MainTabPanel",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"isToggleTabHeaderVisible": false,
					"allowToggleClose": false,
					"selectedTab": {
						"value": "LandingiTabContainer"
					}
				},
				"parentName": "MainGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(LandingiTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "landingi-icon"
				},
				"parentName": "MainTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_b0nk7hq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "LandingiTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"fitContent": true
				},
				"parentName": "LandingiTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiLogoRow",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap",
					"stretch": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiLogo",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(LandingiLogo_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/basic.svg",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "200px",
					"customHeight": "29px",
					"borderRadius": "none",
					"positioning": "cover",
					"visible": true,
					"tooltip": "",
					"layoutConfig": {}
				},
				"parentName": "LandingiLogoRow",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"layoutConfig": {}
				},
				"parentName": "LandingiFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow1Item ",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow1Item_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingiGuideRow1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"layoutConfig": {}
				},
				"parentName": "LandingiFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow2Item",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow2Item_caption)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingiGuideRow2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "medium",
					"wrap": "nowrap",
					"layoutConfig": {}
				},
				"parentName": "LandingiFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3GridContainer1",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3GridContainer1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1Number",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item1Number_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item1NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LandingiGuideRow3GridContainer1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1SignUp",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(LandingiGuideRow3Item1SignUp_caption)#",
					"href": "https://landingi.com/pricing/",
					"target": "_blank",
					"visible": true,
					"linkType": "body"
				},
				"parentName": "LandingiGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1Text1",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item1Text1_caption)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingiGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1LogIn",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(LandingiGuideRow3Item1LogIn_caption)#",
					"href": "https://new.landingi.com/",
					"target": "_blank",
					"visible": true,
					"linkType": "body"
				},
				"parentName": "LandingiGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item1Text2",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item1Text2_caption)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingiGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3GridContainer2",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item2NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3GridContainer2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item2Number",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item2Number_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item2NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item2TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LandingiGuideRow3GridContainer2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item2Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(LandingiGuideRow3Item2Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item2TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3GridContainer3",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item3NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3GridContainer3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item3Number",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item3Number_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item3NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item3TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LandingiGuideRow3GridContainer3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item3Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(LandingiGuideRow3Item3Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingiGuideRow3Item3TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3GridContainer4",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item4NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3GridContainer4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item4Number",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiGuideRow3Item4Number_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item4NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item4TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "LandingiGuideRow3GridContainer4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiRow3Item4Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(LandingiRow3Item4Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item4TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiRow3Item4LearnMore",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(LandingiRow3Item4LearnMore_caption)#",
					"href": "https://academy.creatio.com/documents?id=2414",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "LandingiGuideRow3Item4TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3ButtonApiKey",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowLandingi | crt.ToBoolean | crt.InvertBooleanValue",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LandingiButtonApiKey",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LandingiButtonApiKey_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.GetApiKeyRequest",
						"params": {
							"integrationName": "Webhook Account Service Identity",
							"webhookSource": "Landingi.com",
							"resultShowAttributeName": "ApiKeyShowLandingi",
							"resultValueAttributeName": "ApiKeyLandingi",
							"isInternalIntegration": true
						}
					},
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3ButtonApiKey",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3InputApiKey",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowLandingi | crt.ToBoolean",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "flex-end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LandingiInputApiKey",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(LandingiInputApiKey_label)#",
					"control": "$ApiKeyLandingi",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"visible": true,
					"layoutConfig": {
						"width": "500"
					}
				},
				"parentName": "LandingiGuideRow3InputApiKey",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiButtonCopyApiKey",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LandingiButtonCopyApiKey_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "copy-icon",
					"clicked": {
						"request": "crt.CopyClipboardRequest",
						"params": {
							"value": "$ApiKeyLandingi"
						}
					},
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3InputApiKey",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3GridContainer5",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item5NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "LandingiGuideRow3GridContainer5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiRow3Item5Number",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(LandingiRow3Item5Number_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item5NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiGuideRow3Item5TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LandingiGuideRow3GridContainer5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiRow3Item5Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(LandingiRow3Item5Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3Item5TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingiRow3Item5LearnMore",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(LandingiRow3Item5LearnMore_caption)#",
					"href": "https://academy.creatio.com/documents?id=2414",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "LandingiGuideRow3Item5TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingiRow3ButtonOpenLandingi",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "center",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {}
				},
				"parentName": "LandingiGuideRow3",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LandingiButtonOpenLandingi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LandingiButtonOpenLandingi_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.OpenLandingi"
					}
				},
				"parentName": "LandingiRow3ButtonOpenLandingi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(WordPressTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "wordpress-icon"
				},
				"parentName": "MainTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_h9glbge",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "WordPressTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_6bbra8j",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(Label_6bbra8j_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FlexContainer_h9glbge",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "WordPressTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressLogoRow",
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
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressLogo",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(WordPressLogo_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/WordPress.svg",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "157px",
					"customHeight": "32px",
					"borderRadius": "none",
					"positioning": "cover",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "WordPressLogoRow",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressDescription",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressDescriptionItem",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressDescriptionItem_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressDescription",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "WordPressFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow1Item",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_WordPressGuideRow1Item)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "WordPressFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow2Item",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow2Item_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "medium",
					"padding": {
						"top": "medium",
						"bottom": "large"
					}
				},
				"parentName": "WordPressFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer1",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item1Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item1NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1SignUp",
				"values": {
					"type": "crt.Link",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item1SignUp_caption)#)#",
					"href": "https://wordpress.com/start/user",
					"target": "_blank",
					"linkType": "body",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1Text1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item1Text1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1SignIn",
				"values": {
					"type": "crt.Link",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item1SignIn_caption)#)#",
					"href": "https://wordpress.com/log-in",
					"target": "_blank",
					"linkType": "body",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item1Text2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item1Text2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item1TextContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer2",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item2NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item2Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item2Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item2NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item2TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item2Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item2Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item2TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer3",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item3NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item3Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_9rcoo5z_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item3NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item3TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item3Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item3Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item3TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer4",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item4NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item4Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item4Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item4NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item4TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item4Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item4Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item4TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer5",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item5NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item5Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item5Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item5NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item5TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item5Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item5Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item5TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3ButtonWebhookURL",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowWordPress | crt.ToBoolean | crt.InvertBooleanValue",
					"fitContent": true,
					"padding": {
						"left": "medium"
					}
				},
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "WordPressButtonWebhookURL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WordPressButtonWebhookURL_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.GetApiKeyRequest",
						"params": {
							"integrationName": "Webhook Account Service Identity",
							"webhookSource": "WordPress.com",
							"resultShowAttributeName": "ApiKeyShowWordPress",
							"resultValueAttributeName": "ApiKeyWordPress",
							"isInternalIntegration": false
						}
					}
				},
				"parentName": "WordPressGuideRow3ButtonWebhookURL",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3InputApiKey",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowWordPress | crt.ToBoolean",
					"fitContent": true,
					"padding": {
						"left": "medium",
						"top": "none",
						"right": "none",
						"bottom": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"justifyContent": "start",
					"alignItems": "flex-end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "WordPressInputWebhookURL",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(WordPressInputWebhookURL_label)#",
					"control": "$ApiKeyWordPress",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"layoutConfig": {
						"width": "500"
					},
					"visible": true
				},
				"parentName": "WordPressGuideRow3InputApiKey",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressButtonCopyApiKey",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WordPressButtonCopyApiKey_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "copy-icon",
					"clicked": {
						"request": "crt.CopyClipboardRequest",
						"params": {
							"value": "$ApiKeyWordPress"
						}
					}
				},
				"parentName": "WordPressGuideRow3InputApiKey",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3GridContainer6",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item6NumberContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item6Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item6Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item6NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item6TextContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3GridContainer6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WordPressGuideRow3Item6Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WordPressGuideRow3Item6Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WordPressGuideRow3Item6TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WordPressRow3ButtonOpenWordPress",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "WordPressGuideRow3",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "WordPressButtonOpenWordPress",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WordPressButtonOpenWordPress_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.OpenWordPress"
					}
				},
				"parentName": "WordPressRow3ButtonOpenWordPress",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(OtherTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "globe-icon"
				},
				"parentName": "MainTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mg446oo",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "OtherTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_efcfpm8",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(Label_efcfpm8_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FlexContainer_mg446oo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": false,
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"fitContent": true
				},
				"parentName": "OtherTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "OtherFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow1Item",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow1Item_caption)#)#",
					"labelType": "large-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "OtherGuideRow1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": []
				},
				"parentName": "OtherFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow2Item",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow2Item_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "OtherGuideRow2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": []
				},
				"parentName": "OtherFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow3Item",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow3Item_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "OtherGuideRow3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "medium",
					"wrap": "nowrap",
					"stretch": true
				},
				"parentName": "OtherFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4GridContainer1",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "OtherGuideRow4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item1NumberContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item1Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item1Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FD3F11",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item1NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item1TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item1Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item1Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item1TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4GridContainer2",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "OtherGuideRow4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item2NumberContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item2Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item2Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FD3F11",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item2NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item2TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item2Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item2Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item2TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item2LearnMore",
				"values": {
					"type": "crt.Link",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item2LearnMore_caption)#)#",
					"href": "https://academy.creatio.com/documents?id=2412",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "OtherGuideRow4Item2TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4GridContainer3",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"20px",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
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
				"parentName": "OtherGuideRow4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item3NumberContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item3Number",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item3Number_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FD3F11",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item3NumberContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item3TextContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
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
				"parentName": "OtherGuideRow4GridContainer3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item3Text",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item3Text_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "OtherGuideRow4Item3TextContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4Item3LearnMore",
				"values": {
					"type": "crt.Link",
					"caption": "#MacrosTemplateString(#ResourceString(OtherGuideRow4Item3LearnMore_caption)#)#",
					"href": "https://academy.creatio.com/documents?id=2412",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "OtherGuideRow4Item3TextContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4ButtonWebhookURL",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowOther | crt.ToBoolean | crt.InvertBooleanValue",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "OtherGuideRow4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OtherButtonWebhookURL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OtherButtonWebhookURL_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.GetApiKeyRequest",
						"params": {
							"integrationName": "Webhook Account Service Identity",
							"webhookSource": "Other",
							"resultShowAttributeName": "ApiKeyShowOther",
							"resultValueAttributeName": "ApiKeyOther",
							"isInternalIntegration": false
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OtherGuideRow4ButtonWebhookURL",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherGuideRow4InputWebhookURL",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": "$ApiKeyShowOther | crt.ToBoolean",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "flex-end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "OtherGuideRow4",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OtherInputWebhookURL",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(OtherInputWebhookURL_label)#",
					"control": "$ApiKeyOther",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"layoutConfig": {
						"width": "500"
					},
					"visible": true
				},
				"parentName": "OtherGuideRow4InputWebhookURL",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OtherButtonCopyWebhookURL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OtherButtonCopyWebhookURL_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "copy-icon",
					"clicked": {
						"request": "crt.CopyClipboardRequest",
						"params": {
							"value": "$ApiKeyOther"
						}
					},
					"clickMode": "default"
				},
				"parentName": "OtherGuideRow4InputWebhookURL",
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
					"ApiKeyShowLandingi": {
						"value": false
					},
					"ApiKeyLandingi": {
						"value": "",
						"modelConfig": {}
					},
					"ApiKeyShowOther": {
						"value": false
					},
					"ApiKeyOther": {
						"value": ""
					},
					"ApiKeyShowWordPress": {
						"value": false
					},
					"ApiKeyWordPress": {
						"value": "",
						"modelConfig": {}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.OpenLandingi",
				handler: async (request, next) => {
					window.open('https://landingi.com/landing/creatio','_blank').focus();
				}
			},
			{
				request: "usr.OpenWordPress",
				handler: async (request, next) => {
					window.open('https://wordpress.com/','_blank').focus();
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});