define("Cases_FormPage", /**SCHEMA_DEPS*/["ActionDashboardComponent"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"tagInRecordSourceSchemaName": "CaseInTag",
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
					"entitySchemaName": "Case",
					"visible": true,
					"allowExternalPost": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Case",
					"columns": [
						{
							"id": "8af5601c-1d33-3098-19ea-c8bbc7fe85a8",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "1c57fbe5-28da-0b14-95ef-dd1b7732b779",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "45d9a761-0435-c7d1-9f60-0ffef3310291",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "926455a2-c8ee-c7f7-6a7f-ef44e7affb02",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
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
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {}
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
					"entityName": "Case",
					"layoutConfig": {},
					"visible": true,
					"saveOnChange": true,
					"askUserToChangeSchema": true
				},
				"parentName": "ProgressBarContainer",
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
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TermsLabel_caption)#)#",
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
				"name": "TermsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
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
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResolutionMainTimerContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "column",
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
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "TermsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimeLeftForResolutionLabel",
				"values": {
					"layoutConfig": {},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TimeLeftForResolutionLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ResolutionMainTimerContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResolutionMainTimer",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timer",
					"caption": "#ResourceString(ResolutionMainTimer_caption)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#098401",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"timerType": "countdown-to-specific-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#FD3F11",
					"positiveTextColor": "#098401",
					"positiveTextValue": "#ResourceString(ResolutionMainTimer_positiveTextValue)#",
					"negativeTextValue": "#ResourceString(ResolutionMainTimer_negativeTextValue)#",
					"label": "$Resources.Strings.DateTimeAttribute_26hjo04",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"dateMode": "daysAndHoursAndMinutes",
					"readonly": false,
					"control": "$DateTimeAttribute_26hjo04"
				},
				"parentName": "ResolutionMainTimerContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kkwpg1v",
					"labelPosition": "above",
					"control": "$LookupAttribute_kkwpg1v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Group",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_bsl9tmh",
					"labelPosition": "above",
					"control": "$LookupAttribute_bsl9tmh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TermsRegisteredOn",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_o4oc223",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_o4oc223",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EscalateAssignToMeButtonsContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EscalateButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(EscalateButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "horn-button-icon",
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "CaseEscalationPage",
							"modelInitConfigs": [
								{
									"action": "edit",
									"recordId": "$Id"
								}
							]
						}
					},
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "EscalateAssignToMeButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AssignToMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AssignToMeButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "person-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "SetCaseAssignee",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "CaseId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "EscalateAssignToMeButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CaseInfoContainer",
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
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
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
					"caption": "#MacrosTemplateString(#ResourceString(CaseInfoLabel_caption)#)#",
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
				"name": "CaseInfoFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
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
				"parentName": "CaseInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ctwt6pv",
					"labelPosition": "above",
					"control": "$LookupAttribute_ctwt6pv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ij355ic",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ij355ic_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Contact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Account",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_c08bwtk",
					"labelPosition": "above",
					"control": "$LookupAttribute_c08bwtk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_sai31tf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sai31tf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Account",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Priority",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ffqlbcd",
					"labelPosition": "above",
					"control": "$LookupAttribute_ffqlbcd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ServicePact",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_y15wp7h",
					"labelPosition": "above",
					"control": "$LookupAttribute_y15wp7h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Category",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_yfj24p1",
					"labelPosition": "above",
					"control": "$LookupAttribute_yfj24p1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ServiceItem",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_651gjhe",
					"labelPosition": "above",
					"control": "$LookupAttribute_651gjhe",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CaseInfoSolutionDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_26hjo04",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_26hjo04",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ReclassifyButtonContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ReclassifyButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ReclassifyButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "gear-button-icon",
					"layoutConfig": {},
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "CaseReclassificationPage",
							"modelInitConfigs": [
								{
									"action": "edit",
									"recordId": "$Id"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "ReclassifyButtonContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline",
				"values": {
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_vqv4ozm_caption)#",
					"label": "#ResourceString(Timeline_vqv4ozm_label)#",
					"filters": [],
					"masterEntitySchemaName": "Case"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_548qk7u",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
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
				"name": "TimelineTile_rhy2h9z",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "StartDate",
					"ownerColumn": "Owner",
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
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_bnwq6j6",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "StartDate",
					"ownerColumn": "Contact",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 13,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_w72ihmu",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_39c4hey",
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
					"allowFeedExternalPost": true,
					"linkedColumn": "Case"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_facbbfh",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Case",
					"sortedByColumn": "CreatedOn",
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							}
						],
						"schemaName": "OmniChat",
						"isDefault": false
					},
					"isDefault": true,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "Contact"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_xjnot7r",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "ParentCase",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Priority",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": "{\"column\": 10,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Symptoms",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Case",
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MessageComposer",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "f80b7f5b-ad11-09ed-189a-6190abb76340",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.CaseSenderComposerRequest",
					"entitySchemaName": "Case",
					"bindingColumns": [],
					"visible": true
				},
				"parentName": "MessageComposer",
				"propertyName": "items",
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
						"uId": "44da7b70-dc9f-6844-2a75-f1a9c78bb32d",
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
					"visible": true,
					"allowExternalPost": true
				},
				"parentName": "MessageComposer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CaseGeneralInfoTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(CaseGeneralInfoTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Subject",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_owqjs07",
					"labelPosition": "auto",
					"control": "$StringAttribute_owqjs07"
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Symptoms",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_ntidmah",
					"labelPosition": "auto",
					"control": "$StringAttribute_ntidmah",
					"readonly": false,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "CaseFile",
						"recordColumnName": "Case",
						"recordEntitySchemaName": "Case"
					},
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GeneralInfoFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
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
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Origin",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_h823ge0",
					"labelPosition": "auto",
					"control": "$LookupAttribute_h823ge0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SupportLevel",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_j8la87t",
					"labelPosition": "auto",
					"control": "$LookupAttribute_j8la87t",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "GeneralInfoFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TermsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(TermsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": "50",
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"visible": true
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TermsToolsContainer",
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
				"parentName": "TermsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TermsToolsFlexContainer",
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
				"parentName": "TermsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TermsFieldsContainer",
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
				"parentName": "TermsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegisteredOn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_o4oc223",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_o4oc223",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SolutionDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_26hjo04",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_26hjo04",
					"readonly": true
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResponseDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_ql7d86w",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_ql7d86w",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FirstSolutionProvidedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_8may6rw",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_8may6rw",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RespondedOn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_4hinv2l",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_4hinv2l",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SolutionProvidedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_cv9ru2m",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_cv9ru2m",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimersContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
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
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "TermsFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ResponseTimerMainFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "TimersContainer",
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
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "ResponseTimerMainFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ResponseTimer",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timer",
					"caption": "#ResourceString(ResolutionTimer_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
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
					"label": "$Resources.Strings.DateTimeAttribute_ql7d86w",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"dateMode": "daysAndHoursAndMinutes",
					"readonly": false,
					"control": "$DateTimeAttribute_ql7d86w"
				},
				"parentName": "ResponseTimerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClosureDate",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_eurb20a",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_eurb20a",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ResponseTimerMainFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResolutionTimerFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
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
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "TimersContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ResolutionTimer",
				"values": {
					"layoutConfig": {},
					"type": "crt.Timer",
					"caption": "#ResourceString(ResponseTimer_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
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
					"label": "$Resources.Strings.DateTimeAttribute_26hjo04",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"dateMode": "daysAndHoursAndMinutes",
					"readonly": false,
					"control": "$DateTimeAttribute_26hjo04"
				},
				"parentName": "ResolutionTimerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CaseLifecycleExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleToolsContainer",
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
				"parentName": "CaseLifecycleExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleToolsFlexContainer",
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
				"parentName": "CaseLifecycleToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CaseLifecycleRefreshButton_caption)#",
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
							"dataSourceName": "CaseLifecycleListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CaseLifecycleToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CaseLifecycleSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "CaseLifecycleToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CaseLifecycleExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CaseLifecycleList"
						}
					},
					"visible": true
				},
				"parentName": "CaseLifecycleSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CaseLifecycleImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "CaseLifecycle"
						}
					},
					"visible": true
				},
				"parentName": "CaseLifecycleSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": null,
					"targetAttributes": [
						"CaseLifecycleList"
					],
					"iconOnly": true
				},
				"parentName": "CaseLifecycleToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "CaseLifecycleExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CaseLifecycleList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$CaseLifecycleList",
					"primaryColumnName": "CaseLifecycleListDS_Id",
					"columns": [
						{
							"id": "59e88c95-4a99-193c-2fd9-1d4916985cf0",
							"code": "CaseLifecycleListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(CaseLifecycleListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 124
						},
						{
							"id": "46503fd2-fa39-591b-200a-7e7c884ffdc0",
							"code": "CaseLifecycleListDS_StateDurationInMinutes",
							"path": "StateDurationInMinutes",
							"caption": "#ResourceString(CaseLifecycleListDS_StateDurationInMinutes)#",
							"dataValueType": 4,
							"width": 143
						},
						{
							"id": "1fe4967b-7088-c6c3-eb32-1b0c24c19eee",
							"code": "CaseLifecycleListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(CaseLifecycleListDS_StartDate)#",
							"dataValueType": 7,
							"width": 162
						},
						{
							"id": "7e17b26c-3ed0-4428-aeb7-7dabbacc11da",
							"code": "CaseLifecycleListDS_EndDate",
							"path": "EndDate",
							"caption": "#ResourceString(CaseLifecycleListDS_EndDate)#",
							"dataValueType": 7,
							"width": 156
						},
						{
							"id": "03d94b51-14df-c0cc-67fb-751bf51f0803",
							"code": "CaseLifecycleListDS_SupportLevel",
							"path": "SupportLevel",
							"caption": "#ResourceString(CaseLifecycleListDS_SupportLevel)#",
							"dataValueType": 10,
							"referenceSchemaName": "RoleInServiceTeam",
							"width": 163
						},
						{
							"id": "35358c8b-8410-20f2-9fa9-021add49556e",
							"code": "CaseLifecycleListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(CaseLifecycleListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 172
						},
						{
							"id": "4b0d2f8b-5afd-96ad-096d-27d6dc95160c",
							"code": "CaseLifecycleListDS_Group",
							"path": "Group",
							"caption": "#ResourceString(CaseLifecycleListDS_Group)#",
							"dataValueType": 10,
							"referenceSchemaName": "SysAdminUnit"
						}
					],
					"features": {
						"editable": false
					},
					"fitContent": true
				},
				"parentName": "CaseLifecycleListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SubordinateCasesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesToolsContainer",
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
				"parentName": "SubordinateCasesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesToolsFlexContainer",
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
				"parentName": "SubordinateCasesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateCasesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Case",
							"defaultValues": [
								{
									"attributeName": "ParentCase",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubordinateCasesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateCasesRefreshButton_caption)#",
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
							"dataSourceName": "SubordinateCasesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubordinateCasesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateCasesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "SubordinateCasesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubordinateCasesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubordinateCasesList"
						}
					},
					"visible": true
				},
				"parentName": "SubordinateCasesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubordinateCasesImportDataButton_caption)#",
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
				"parentName": "SubordinateCasesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SubordinateCasesSearchFilter_placeholder)#",
					"targetAttributes": [
						"SubordinateCasesList"
					],
					"iconOnly": true
				},
				"parentName": "SubordinateCasesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "SubordinateCasesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateCasesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$SubordinateCasesList",
					"primaryColumnName": "SubordinateCasesListDS_Id",
					"columns": [
						{
							"id": "91f7a7e1-b5de-fd7e-da59-206a37afbe53",
							"code": "SubordinateCasesListDS_Number",
							"caption": "#ResourceString(SubordinateCasesListDS_Number)#",
							"dataValueType": 27,
							"width": 120
						},
						{
							"id": "a2d3d4b8-0606-9e51-fa38-2706d23e29f3",
							"code": "SubordinateCasesListDS_Subject",
							"path": "Subject",
							"caption": "#ResourceString(SubordinateCasesListDS_Subject)#",
							"dataValueType": 30,
							"width": 465
						},
						{
							"id": "c66a34e8-86db-4987-be28-ec75aa2ac2c2",
							"code": "SubordinateCasesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(SubordinateCasesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 162
						},
						{
							"id": "6140c215-361a-2c8e-5a5c-3d3fa70d3400",
							"code": "SubordinateCasesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(SubordinateCasesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "CaseStatus",
							"width": 172
						},
						{
							"id": "f5faabb1-fb5b-73c8-7db1-ec7705345a35",
							"code": "SubordinateCasesListDS_SolutionDate",
							"path": "SolutionDate",
							"caption": "#ResourceString(SubordinateCasesListDS_SolutionDate)#",
							"dataValueType": 7,
							"width": 161
						}
					],
					"features": {
						"editable": false
					},
					"fitContent": true
				},
				"parentName": "SubordinateCasesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ActivitiesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "CaseGeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ActivitiesToolsContainer",
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
				"parentName": "ActivitiesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesToolsFlexContainer",
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
				"parentName": "ActivitiesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActivitiesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Activity",
							"defaultValues": [
								{
									"attributeName": "Case",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ActivitiesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActivitiesRefreshButton_caption)#",
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
							"dataSourceName": "ActivitiesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ActivitiesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActivitiesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActivitiesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ActivitiesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ActivitiesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ActivitiesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ActivitiesList"
						}
					},
					"visible": true
				},
				"parentName": "ActivitiesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ActivitiesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Activity"
						}
					},
					"visible": true
				},
				"parentName": "ActivitiesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActivitiesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ActivitiesSearchFilter_placeholder)#",
					"targetAttributes": [
						"ActivitiesList"
					],
					"iconOnly": true
				},
				"parentName": "ActivitiesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ActivitiesListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "ActivitiesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivitiesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$ActivitiesList",
					"primaryColumnName": "ActivitiesListDS_Id",
					"columns": [
						{
							"id": "bea48db8-a905-e59b-7479-c0f4886815af",
							"code": "ActivitiesListDS_Title",
							"caption": "#ResourceString(ActivitiesListDS_Title)#",
							"dataValueType": 30,
							"width": 410
						},
						{
							"id": "a06e3ce8-74e3-414d-001a-8ccd8a4713a3",
							"code": "ActivitiesListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(ActivitiesListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 337
						},
						{
							"id": "b7769e02-1c3a-aa67-4aa9-106ce5860d9c",
							"code": "ActivitiesListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(ActivitiesListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "ActivityStatus",
							"width": 173
						},
						{
							"id": "895c8a73-1481-a7fa-a26d-32ea31da4319",
							"code": "ActivitiesListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(ActivitiesListDS_DueDate)#",
							"dataValueType": 7,
							"width": 172
						}
					]
				},
				"parentName": "ActivitiesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PerformanceTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(PerformanceTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PerformanceContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "medium",
						"rowGap": "large"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					}
				},
				"parentName": "PerformanceTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimeInProgressIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TimeInProgressIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TimeInProgressIndicatorWidget_38a8db2c8ee7f5bb469fae41c0a9324b",
								"schemaName": "CaseLifecycle",
								"filters": {
									"filter": {
										"items": {
											"fef3df6e-0cfb-49b9-b5ba-bd28f4c45c7b": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CaseStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In progress",
																"Id": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
																"Image": "",
																"value": "7e9f1204-f46b-1410-fb9a-0050ba5d6c38",
																"displayValue": "In progress"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CaseLifecycle"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "StateDurationInHours"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Case",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Case"
						},
						"text": {
							"template": "#ResourceString(TimeInProgressIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "PerformanceContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimeToFirstResponseIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TimeToFirstResponseIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TimeToFirstResponseIndicatorWidget_51e967c7abe899a2c81e4651e1290dd2",
								"schemaName": "CaseLifecycle",
								"filters": {
									"filter": {
										"items": {
											"deb66eaf-093d-4781-a904-4d37c40e9785": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CaseStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "New",
																"Id": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																"Image": "",
																"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																"displayValue": "New"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CaseLifecycle"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "StateDurationInHours"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Case",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Case"
						},
						"text": {
							"template": "#ResourceString(TimeToFirstResponseIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "PerformanceContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberOfReopeningsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(NumberOfReopeningsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "NumberOfReopeningsIndicatorWidget_847832c8eaebe6f6b53e9508e483b646",
								"schemaName": "CaseLifecycle",
								"filters": {
									"filter": {
										"items": {
											"236fb69c-20a5-4195-9cac-176f7a616665": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CaseStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Reopened",
																"Id": "f063ebbe-fdc6-4982-8431-d8cfa52fedcf",
																"Image": "",
																"value": "f063ebbe-fdc6-4982-8431-d8cfa52fedcf",
																"displayValue": "Reopened"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CaseLifecycle"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Case",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Case"
						},
						"text": {
							"template": "#ResourceString(NumberOfReopeningsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "PerformanceContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimeOnSupportLinesChartWidget",
				"values": {
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(TimeOnSupportLinesChartWidget_title)#",
						"color": "orange",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(TimeOnSupportLinesChartWidget_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(TimeOnSupportLinesChartWidget_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(TimeOnSupportLinesChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "TimeOnSupportLinesChartWidget_c15bea33afc2da85ca5986c8500b6445",
										"schemaName": "CaseLifecycle",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SupportLevel"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "CaseLifecycle"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "StateDurationInHours"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "Case",
												"relationPath": "PDS.Id"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "SupportLevel"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 7
					}
				},
				"parentName": "PerformanceContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ClosureAndFeedbackTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ClosureAndFeedbackTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ClosureAndFeedbackFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
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
					}
				},
				"parentName": "ClosureAndFeedbackTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Solution",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_qmmwoms",
					"labelPosition": "auto",
					"control": "$StringAttribute_qmmwoms",
					"readonly": false,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "CaseFile",
						"recordColumnName": "Case",
						"recordEntitySchemaName": "Case"
					},
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "ClosureAndFeedbackFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClosureCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ck7fmvs",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ck7fmvs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ClosureAndFeedbackFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ParentCase",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ec6krvo",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ec6krvo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ClosureAndFeedbackFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SolvedOnSupportLevel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_uxme97k",
					"labelPosition": "auto",
					"control": "$LookupAttribute_uxme97k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "ClosureAndFeedbackFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FeedbackExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(FeedbackExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "ClosureAndFeedbackTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeedbackContainer",
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
				"parentName": "FeedbackExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SatisfactionLevel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_9ccrce6",
					"labelPosition": "auto",
					"control": "$LookupAttribute_9ccrce6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(SatisfactionLevel_tooltip)#",
					"readonly": true
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SatisfactionLevelComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_v5f5yms",
					"labelPosition": "auto",
					"control": "$StringAttribute_v5f5yms",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(SatisfactionLevelComment_tooltip)#"
				},
				"parentName": "FeedbackContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(KnowledgeBaseArticlesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "ClosureAndFeedbackTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesToolsContainer",
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
				"parentName": "KnowledgeBaseArticlesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesToolsFlexContainer",
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
				"parentName": "KnowledgeBaseArticlesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(KnowledgeBaseArticlesRefreshButton_caption)#",
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
							"dataSourceName": "KnowledgeBaseArticlesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "KnowledgeBaseArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(KnowledgeBaseArticlesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "KnowledgeBaseArticlesList"
						}
					},
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "KnowledgeBaseInCase"
						}
					},
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(KnowledgeBaseArticlesSearchFilter_placeholder)#",
					"targetAttributes": [
						"KnowledgeBaseArticlesList"
					],
					"iconOnly": true
				},
				"parentName": "KnowledgeBaseArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "KnowledgeBaseArticlesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$KnowledgeBaseArticlesList",
					"primaryColumnName": "KnowledgeBaseArticlesListDS_Id",
					"columns": [
						{
							"id": "3237f1d5-6c9e-b081-ea81-84226eb6e2db",
							"code": "KnowledgeBaseArticlesListDS_KnowledgeBase",
							"path": "KnowledgeBase",
							"caption": "#ResourceString(KnowledgeBaseArticlesListDS_KnowledgeBase)#",
							"dataValueType": 10,
							"referenceSchemaName": "KnowledgeBase",
							"width": 439
						},
						{
							"id": "f072da67-f705-341b-b682-1c61f2bb9a10",
							"code": "KnowledgeBaseArticlesListDS_KnowledgeBaseType",
							"path": "KnowledgeBase.Type",
							"caption": "#ResourceString(KnowledgeBaseArticlesListDS_KnowledgeBaseType)#",
							"dataValueType": 10,
							"referenceSchemaName": "KnowledgeBaseType",
							"width": 197
						},
						{
							"id": "89c4504d-33f0-300a-8733-a13a724e8458",
							"code": "KnowledgeBaseArticlesListDS_KnowledgeBaseViewsCount",
							"path": "KnowledgeBase.ViewsCount",
							"caption": "#ResourceString(KnowledgeBaseArticlesList_89c4504d)#",
							"dataValueType": 4,
							"width": 292,
							"changed": true
						}
					]
				},
				"parentName": "KnowledgeBaseArticlesListContainer",
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
					"LookupAttribute_kkwpg1v": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"LookupAttribute_bsl9tmh": {
						"modelConfig": {
							"path": "PDS.Group"
						}
					},
					"DateTimeAttribute_o4oc223": {
						"modelConfig": {
							"path": "PDS.RegisteredOn"
						}
					},
					"LookupAttribute_ffqlbcd": {
						"modelConfig": {
							"path": "PDS.Priority"
						}
					},
					"LookupAttribute_yfj24p1": {
						"modelConfig": {
							"path": "PDS.Category"
						}
					},
					"DateTimeAttribute_26hjo04": {
						"modelConfig": {
							"path": "PDS.SolutionDate"
						}
					},
					"StringAttribute_owqjs07": {
						"modelConfig": {
							"path": "PDS.Subject"
						}
					},
					"LookupAttribute_c08bwtk": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"DateTimeAttribute_ql7d86w": {
						"modelConfig": {
							"path": "PDS.ResponseDate"
						}
					},
					"DateTimeAttribute_4hinv2l": {
						"modelConfig": {
							"path": "PDS.RespondedOn"
						}
					},
					"DateTimeAttribute_8may6rw": {
						"modelConfig": {
							"path": "PDS.FirstSolutionProvidedOn"
						}
					},
					"DateTimeAttribute_cv9ru2m": {
						"modelConfig": {
							"path": "PDS.SolutionProvidedOn"
						}
					},
					"DateTimeAttribute_eurb20a": {
						"modelConfig": {
							"path": "PDS.ClosureDate"
						}
					},
					"CaseLifecycleList": {
						"isCollection": true,
						"modelConfig": {
							"path": "CaseLifecycleListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "StartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"CaseLifecycleListDS_Status": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.Status"
									}
								},
								"CaseLifecycleListDS_StateDurationInMinutes": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.StateDurationInMinutes"
									}
								},
								"CaseLifecycleListDS_StartDate": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.StartDate"
									}
								},
								"CaseLifecycleListDS_EndDate": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.EndDate"
									}
								},
								"CaseLifecycleListDS_SupportLevel": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.SupportLevel"
									}
								},
								"CaseLifecycleListDS_Owner": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.Owner"
									}
								},
								"CaseLifecycleListDS_Group": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.Group"
									}
								},
								"CaseLifecycleListDS_Id": {
									"modelConfig": {
										"path": "CaseLifecycleListDS.Id"
									}
								}
							}
						}
					},
					"SubordinateCasesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "SubordinateCasesListDS",
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
								"SubordinateCasesListDS_Number": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.Number"
									}
								},
								"SubordinateCasesListDS_Subject": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.Subject"
									}
								},
								"SubordinateCasesListDS_Owner": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.Owner"
									}
								},
								"SubordinateCasesListDS_Status": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.Status"
									}
								},
								"SubordinateCasesListDS_SolutionDate": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.SolutionDate"
									}
								},
								"SubordinateCasesListDS_Id": {
									"modelConfig": {
										"path": "SubordinateCasesListDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_651gjhe": {
						"modelConfig": {
							"path": "PDS.ServiceItem"
						}
					},
					"ActivitiesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ActivitiesListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "DueDate"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ActivitiesList_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ActivitiesListDS_Title": {
									"modelConfig": {
										"path": "ActivitiesListDS.Title"
									}
								},
								"ActivitiesListDS_Owner": {
									"modelConfig": {
										"path": "ActivitiesListDS.Owner"
									}
								},
								"ActivitiesListDS_Status": {
									"modelConfig": {
										"path": "ActivitiesListDS.Status"
									}
								},
								"ActivitiesListDS_DueDate": {
									"modelConfig": {
										"path": "ActivitiesListDS.DueDate"
									}
								},
								"ActivitiesListDS_Id": {
									"modelConfig": {
										"path": "ActivitiesListDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_ec6krvo": {
						"modelConfig": {
							"path": "PDS.ParentCase"
						}
					},
					"LookupAttribute_ck7fmvs": {
						"modelConfig": {
							"path": "PDS.ClosureCode"
						}
					},
					"StringAttribute_qmmwoms": {
						"modelConfig": {
							"path": "PDS.Solution"
						}
					},
					"LookupAttribute_9ccrce6": {
						"modelConfig": {
							"path": "PDS.SatisfactionLevel"
						}
					},
					"StringAttribute_v5f5yms": {
						"modelConfig": {
							"path": "PDS.SatisfactionLevelComment"
						}
					},
					"KnowledgeBaseArticlesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "KnowledgeBaseArticlesListDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "KnowledgeBaseArticlesList_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "KnowledgeBaseViewsCount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"KnowledgeBaseArticlesListDS_KnowledgeBase": {
									"modelConfig": {
										"path": "KnowledgeBaseArticlesListDS.KnowledgeBase"
									}
								},
								"KnowledgeBaseArticlesListDS_KnowledgeBaseType": {
									"modelConfig": {
										"path": "KnowledgeBaseArticlesListDS.KnowledgeBaseType"
									}
								},
								"KnowledgeBaseArticlesListDS_KnowledgeBaseViewsCount": {
									"modelConfig": {
										"path": "KnowledgeBaseArticlesListDS.KnowledgeBaseViewsCount"
									}
								},
								"KnowledgeBaseArticlesListDS_Id": {
									"modelConfig": {
										"path": "KnowledgeBaseArticlesListDS.Id"
									}
								}
							}
						}
					},
					"KnowledgeBaseArticlesList_PredefinedFilter": {
						"value": null
					},
					"DataGrid_k060vne": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_k060vneDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_k060vneDS_Status": {
									"modelConfig": {
										"path": "DataGrid_k060vneDS.Status"
									}
								},
								"DataGrid_k060vneDS_StateDurationInMinutes": {
									"modelConfig": {
										"path": "DataGrid_k060vneDS.StateDurationInMinutes"
									}
								},
								"DataGrid_k060vneDS_StartDate": {
									"modelConfig": {
										"path": "DataGrid_k060vneDS.StartDate"
									}
								},
								"DataGrid_k060vneDS_EndDate": {
									"modelConfig": {
										"path": "DataGrid_k060vneDS.EndDate"
									}
								},
								"DataGrid_k060vneDS_Id": {
									"modelConfig": {
										"path": "DataGrid_k060vneDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_uxme97k": {
						"modelConfig": {
							"path": "PDS.SolvedOnSupportLevel"
						}
					},
					"StringAttribute_ntidmah": {
						"modelConfig": {
							"path": "PDS.Symptoms"
						}
					},
					"LookupAttribute_y15wp7h": {
						"modelConfig": {
							"path": "PDS.ServicePact"
						}
					},
					"LookupAttribute_ctwt6pv": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"LookupAttribute_h823ge0": {
						"modelConfig": {
							"path": "PDS.Origin"
						}
					},
					"LookupAttribute_j8la87t": {
						"modelConfig": {
							"path": "PDS.SupportLevel"
						}
					},
					"ActivitiesList_PredefinedFilter": {
						"value": {
							"items": {
								"1702052d-5fdd-44f7-9e7c-b1a1307d2e23": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Email",
													"Id": "8038a396-7825-e011-8165-00155d043204",
													"value": "8038a396-7825-e011-8165-00155d043204",
													"displayValue": "Email"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
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
						"CaseLifecycleListDS": [
							{
								"attributePath": "Case",
								"relationPath": "PDS.Id"
							}
						],
						"SubordinateCasesListDS": [
							{
								"attributePath": "ParentCase",
								"relationPath": "PDS.Id"
							}
						],
						"ActivitiesListDS": [
							{
								"attributePath": "Case",
								"relationPath": "PDS.Id"
							}
						],
						"KnowledgeBaseArticlesListDS": [
							{
								"attributePath": "Case",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_k060vneDS": [
							{
								"attributePath": "Case",
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
							"entitySchemaName": "Case"
						},
						"scope": "page"
					},
					"CaseLifecycleListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CaseLifecycle",
							"attributes": {
								"Status": {
									"path": "Status"
								},
								"StateDurationInMinutes": {
									"path": "StateDurationInMinutes"
								},
								"StartDate": {
									"path": "StartDate"
								},
								"EndDate": {
									"path": "EndDate"
								},
								"SupportLevel": {
									"path": "SupportLevel"
								},
								"Owner": {
									"path": "Owner"
								},
								"Group": {
									"path": "Group"
								}
							}
						}
					},
					"SubordinateCasesListDS": {
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
					"ActivitiesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"Owner": {
									"path": "Owner"
								},
								"Status": {
									"path": "Status"
								},
								"DueDate": {
									"path": "DueDate"
								}
							}
						}
					},
					"KnowledgeBaseArticlesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "KnowledgeBaseInCase",
							"attributes": {
								"KnowledgeBase": {
									"path": "KnowledgeBase"
								},
								"KnowledgeBaseType": {
									"path": "KnowledgeBase.Type",
									"type": "ForwardReference"
								},
								"KnowledgeBaseViewsCount": {
									"path": "KnowledgeBase.ViewsCount",
									"type": "ForwardReference"
								}
							}
						}
					},
					"DataGrid_k060vneDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CaseLifecycle",
							"attributes": {
								"Status": {
									"path": "Status"
								},
								"StateDurationInMinutes": {
									"path": "StateDurationInMinutes"
								},
								"StartDate": {
									"path": "StartDate"
								},
								"EndDate": {
									"path": "EndDate"
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
					"entitySchemaName": "CaseFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});