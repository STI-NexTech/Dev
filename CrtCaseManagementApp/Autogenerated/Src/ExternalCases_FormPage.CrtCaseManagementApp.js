define("ExternalCases_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
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
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
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
				"name": "CardContentContainer",
				"values": {
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "medium",
					"wrap": "nowrap"
				}
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
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"padding": {
						"left": "small",
						"right": "small"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProgressBar",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "Case",
					"visible": true
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_0zkfh5o_caption)#",
					"label": "#ResourceString(Timeline_0zkfh5o_label)#"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_ak0x8i4",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "SendDate",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_hnbib6y",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"allowFeedExternalPost": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_ksz68v7",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true,
						"isDeleted": true
					},
					"isDefault": true,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_2dvy8pp",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true,
						"isDeleted": true
					},
					"isDefault": true,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MessageComposer",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					],
					"visible": true,
					"defaultChannel": null
				},
				"parentName": "Timeline",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "a6834ab4-abc3-729c-a2f0-cb1fd700fe73",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Case",
					"dataSourceName": "PDS",
					"allowExternalPost": true
				},
				"parentName": "MessageComposer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedbackContainer",
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
					"layoutConfig": {},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": false
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedbackLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ckm678z_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SatisfactionLevel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_a92xx97",
					"labelPosition": "above",
					"control": "$LookupAttribute_a92xx97",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SatisfactionLevelComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "#ResourceString(SatisfactionLevelComment_label)#",
					"labelPosition": "above",
					"control": "$StringAttribute_fkfck3d",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubmitFeedbackButtonFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
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
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "center",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SubmitFeedbackButton",
				"values": {
					"layoutConfig": {},
					"type": "crt.Button",
					"caption": "#ResourceString(SubmitFeedbackButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.SaveRecordRequest"
					},
					"clickMode": "default",
					"icon": "message-composer-checkmark"
				},
				"parentName": "SubmitFeedbackButtonFlexContainer",
				"propertyName": "items",
				"index": 0
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
					"caption": "#MacrosTemplateString(#ResourceString(Label_cq117yc_caption)#)#",
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
				"name": "ResponseTimeFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
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
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResponseDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_23o2pyz",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_23o2pyz",
					"readonly": true
				},
				"parentName": "ResponseTimeFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResponseTimerFlexContainer",
				"values": {
					"layoutConfig": {},
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
					"justifyContent": "center",
					"alignItems": "center",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "ResponseTimeFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResponseTimer",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timer",
					"caption": "#ResourceString(ResponseTimer_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#098401",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"timerType": "countdown-to-specific-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#FD3F11",
					"positiveTextColor": "#098401",
					"positiveTextValue": "#ResourceString(ResponseTimer_positiveTextValue)#",
					"negativeTextValue": "#ResourceString(ResponseTimer_negativeTextValue)#",
					"label": "$Resources.Strings.DateTimeAttribute_23o2pyz",
					"readonly": false,
					"control": "$DateTimeAttribute_23o2pyz",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ResponseTimerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResolutionTimeFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
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
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SolutionDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_ih77ukq",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_ih77ukq",
					"readonly": true
				},
				"parentName": "ResolutionTimeFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResolutionTimerFlexContainer",
				"values": {
					"layoutConfig": {},
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
					"justifyContent": "center",
					"alignItems": "center",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "ResolutionTimeFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResolutionTimer",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timer",
					"caption": "#ResourceString(ResolutionTimer_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#098401",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"timerType": "countdown-to-specific-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#FD3F11",
					"positiveTextColor": "#098401",
					"positiveTextValue": "#ResourceString(ResolutionTimer_positiveTextValue)#",
					"negativeTextValue": "#ResourceString(ResolutionTimer_negativeTextValue)#",
					"label": "$Resources.Strings.DateTimeAttribute_ih77ukq",
					"readonly": false,
					"control": "$DateTimeAttribute_ih77ukq",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ResolutionTimerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseInfoContainer",
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
				"name": "CaseInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_9sli4x1_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Priority",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xjpyrnz",
					"labelPosition": "above",
					"control": "$LookupAttribute_xjpyrnz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Category",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_b629i1m",
					"labelPosition": "above",
					"control": "$LookupAttribute_b629i1m",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ServicePact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_pxwkrh9",
					"labelPosition": "above",
					"control": "$LookupAttribute_pxwkrh9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ServiceItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_153sd7q",
					"labelPosition": "above",
					"control": "$LookupAttribute_153sd7q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"DateTimeAttribute_23o2pyz": {
					"modelConfig": {
						"path": "PDS.ResponseDate"
					}
				},
				"DateTimeAttribute_ih77ukq": {
					"modelConfig": {
						"path": "PDS.SolutionDate"
					}
				},
				"LookupAttribute_xjpyrnz": {
					"modelConfig": {
						"path": "PDS.Priority"
					}
				},
				"LookupAttribute_b629i1m": {
					"modelConfig": {
						"path": "PDS.Category"
					}
				},
				"LookupAttribute_pxwkrh9": {
					"modelConfig": {
						"path": "PDS.ServicePact"
					}
				},
				"LookupAttribute_153sd7q": {
					"modelConfig": {
						"path": "PDS.ServiceItem"
					}
				},
				"LookupAttribute_a92xx97": {
					"modelConfig": {
						"path": "PDS.SatisfactionLevel"
					}
				},
				"StringAttribute_fkfck3d": {
					"modelConfig": {
						"path": "PDS.SatisfactionLevelComment"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "Case"
					},
					"scope": "page"
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});