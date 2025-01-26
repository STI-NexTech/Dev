define("Events_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "EventInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
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
					"iconPosition": "only-text"
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
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "Event"
				}
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
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
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Status",
					"labelPosition": "auto",
					"control": "$Status",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
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
					"label": "$Resources.Strings.Type",
					"labelPosition": "auto",
					"control": "$Type",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.StartDate",
					"labelPosition": "auto",
					"control": "$StartDate"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.EndDate",
					"labelPosition": "auto",
					"control": "$EndDate"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_fobqmjt",
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
				"name": "ExpansionPanel_gsnbj9z",
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
					"title": "#ResourceString(ExpansionPanel_gsnbj9z_title)#",
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
				"parentName": "GridContainer_fobqmjt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_3vumg78",
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
				"parentName": "ExpansionPanel_gsnbj9z",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u5vq7pf",
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
				"parentName": "GridContainer_3vumg78",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_xu7fft7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
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
				"parentName": "ExpansionPanel_gsnbj9z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ParticipantsWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_0abkvqz_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_0abkvqz_ab056a0a8e3a51ba8e7a095b400abb54",
								"schemaName": "Event",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Event"
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
												"columnPath": "RecipientCount"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
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
							"entitySchemaName": "Event"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_0abkvqz_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "purple"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_xu7fft7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ConfirmedWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_ce35ynf_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ce35ynf_d21cf230253413b359706202487f1989",
								"schemaName": "EventTarget",
								"filters": {
									"filter": {
										"items": {
											"e501f5a4-565a-4df4-9539-ef77d81556ff": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "EventResponse"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EventResponse",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Подтверждено участие",
																"Id": "22e4a8ae-17b6-4ffe-bc6f-a6f560217eb9",
																"value": "22e4a8ae-17b6-4ffe-bc6f-a6f560217eb9",
																"displayValue": "Подтверждено участие"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "EventTarget"
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
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Event"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_ce35ynf_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "light-green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_xu7fft7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ParticipatedWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"rowSpan": 1,
						"row": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_yhv69iw_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_yhv69iw_e9d5c2450e48d1909f5176ec21b74fb9",
								"schemaName": "EventTarget",
								"filters": {
									"filter": {
										"items": {
											"e501f5a4-565a-4df4-9539-ef77d81556ff": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "EventResponse"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EventResponse",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Участвовал(а)",
																"Id": "b1e144c1-116c-4265-ae5d-edfbf6254a23",
																"value": "b1e144c1-116c-4265-ae5d-edfbf6254a23",
																"displayValue": "Участвовал(а)"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "EventTarget"
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
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Event"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_yhv69iw_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "dark-green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_xu7fft7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotParticipatedWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"rowSpan": 1,
						"row": 4
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_9plotd1_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_9plotd1_4ee1d9ddac74457bb6cd28a734ed76a8",
								"schemaName": "EventTarget",
								"filters": {
									"filter": {
										"items": {
											"e501f5a4-565a-4df4-9539-ef77d81556ff": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "EventResponse"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EventResponse",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Отменено",
																"Id": "2ea76342-b8cb-4b7d-86ce-19e14f350617",
																"value": "2ea76342-b8cb-4b7d-86ce-19e14f350617",
																"displayValue": "Отменено"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Нет отклика",
																"Id": "89852f69-e57c-4ad4-b627-cbac83a6c927",
																"value": "89852f69-e57c-4ad4-b627-cbac83a6c927",
																"displayValue": "Нет отклика"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "В планах",
																"Id": "c6eae023-2778-49c6-8273-6b015c1cc611",
																"value": "c6eae023-2778-49c6-8273-6b015c1cc611",
																"displayValue": "В планах"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "EventTarget"
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
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Event"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_9plotd1_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "bright-red"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_xu7fft7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Goal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.Goal",
					"labelPosition": "auto",
					"control": "$Goal",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Industry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Industry",
					"labelPosition": "auto",
					"control": "$Industry",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActualResponse",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ActualResponse",
					"labelPosition": "auto",
					"control": "$ActualResponse"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BudgetAndRevenueExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_v0wiwg3_title)#",
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
				"name": "GridContainer_ixenzm7",
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
				"parentName": "BudgetAndRevenueExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5olgq8u",
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
				"parentName": "GridContainer_ixenzm7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BudgetAndRevenueGridContainer",
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
				"parentName": "BudgetAndRevenueExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryBudgetedCost",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PrimaryBudgetedCost",
					"labelPosition": "auto",
					"control": "$PrimaryBudgetedCost"
				},
				"parentName": "BudgetAndRevenueGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryActualCost",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PrimaryActualCost",
					"labelPosition": "auto",
					"control": "$PrimaryActualCost"
				},
				"parentName": "BudgetAndRevenueGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpectedRevenueBase",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_cfqqm4p",
					"labelPosition": "auto",
					"control": "$NumberAttribute_cfqqm4p"
				},
				"parentName": "BudgetAndRevenueGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PrimaryActualRevenue",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PrimaryActualRevenue",
					"labelPosition": "auto",
					"control": "$PrimaryActualRevenue"
				},
				"parentName": "BudgetAndRevenueGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TeamDetailExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_xnpn8td_title)#",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_sovboe8",
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
				"parentName": "TeamDetailExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0rgf0fl",
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
				"parentName": "GridContainer_sovboe8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TeamDetailAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qgexkin_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "EventTeam"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_0rgf0fl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TeamDetailRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_b3drz4z_caption)#",
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
							"dataSourceName": "TeamDetailDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_0rgf0fl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TeamDetailSettingsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_hb18e3p_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0rgf0fl",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8pwynr1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_8pwynr1_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "TeamDetailGrid"
						}
					}
				},
				"parentName": "TeamDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_j31c69t",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_j31c69t_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "EventTeam"
						}
					}
				},
				"parentName": "TeamDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TeamDetailSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_3ujy9x5_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"TeamDetail"
					]
				},
				"parentName": "FlexContainer_0rgf0fl",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TeamDetailGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "TeamDetailExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TeamDetailGrid",
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
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$TeamDetail",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "TeamDetailDS_Id",
					"columns": [
						{
							"id": "7ada01d8-9981-2616-878d-c4ffd38a846a",
							"code": "TeamDetailDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(TeamDetailDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 256
						},
						{
							"id": "31f00c19-2409-6111-2e31-c8cdbace52bb",
							"code": "TeamDetailDS_Account",
							"caption": "#ResourceString(TeamDetailDS_Account)#",
							"dataValueType": 10,
							"width": 257
						},
						{
							"id": "58e6c44e-27b4-59b0-a323-b1e6654d1227",
							"code": "TeamDetailDS_Role",
							"path": "Role",
							"caption": "#ResourceString(TeamDetailDS_Role)#",
							"dataValueType": 10,
							"referenceSchemaName": "EventTeamRoles",
							"width": 147
						},
						{
							"id": "5a7f0c7b-1317-3d6a-1e32-75bcf16bcc25",
							"code": "TeamDetailDS_Notes",
							"path": "Notes",
							"caption": "#ResourceString(TeamDetailDS_Notes)#",
							"dataValueType": 29,
							"width": 276
						}
					]
				},
				"parentName": "TeamDetailGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_rosg5ys",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_rosg5ys_caption)#",
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
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					}
				},
				"parentName": "TabContainer_rosg5ys",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AudienceToolsLeftFlexContainer",
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
						"left": "small"
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
				"name": "ImportContactsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ImportContactsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.AddEventAudienceRequest",
						"params": {
							"eventId": "$Id"
						}
					},
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clickMode": "default",
					"layoutConfig": {}
				},
				"parentName": "AudienceToolsLeftFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddContactsQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_rluze26_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "EventResponse",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddContactsQuickFilter_EventAudience",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "EventAudience",
													"filterColumn": "EventResponse"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "AddContactsQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "AudienceToolsLeftFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AudienceSearchFilter",
				"values": {
					"layoutConfig": {},
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_na5imcx_placeholder)#",
					"targetAttributes": [
						"EventAudience"
					],
					"iconOnly": true
				},
				"parentName": "AudienceToolsLeftFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AudienceToolsRightFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
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
						"left": "medium"
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
				"name": "AudienceExportToExcelButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_8jmm34g_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "EventAudience",
							"filters": "$EventAudience | crt.ToCollectionFilters : 'EventAudience' : $EventAudience_SelectionState"
						}
					},
					"clickMode": "default",
					"icon": "export-button-icon"
				},
				"parentName": "AudienceToolsRightFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AudienceRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AudienceRefreshButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "EventAudienceDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "AudienceToolsRightFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EventAudience",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$EventAudience",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "EventAudienceDS_Id",
					"columns": [
						{
							"id": "46e8d2c4-8f9e-3e13-c53d-4ea79ab665cd",
							"code": "EventAudienceDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(EventAudienceDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 342
						},
						{
							"id": "2e2f6a96-043e-c221-1c71-66c9962f6886",
							"code": "EventAudienceDS_EventResponse",
							"path": "EventResponse",
							"caption": "#ResourceString(EventAudienceDS_EventResponse)#",
							"dataValueType": 10,
							"referenceSchemaName": "EventResponse",
							"width": 286
						},
						{
							"id": "a47dc084-94d5-b964-94f7-36eec2736e5f",
							"code": "EventAudienceDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(EventAudienceDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "cb324185-d67b-9ab2-f00b-9dc948e924bc",
							"code": "EventAudienceDS_CreatedBy",
							"path": "CreatedBy",
							"caption": "#ResourceString(EventAudienceDS_CreatedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 245
						}
					],
					"selectionState": "$EventAudience_SelectionState",
					"_selectionOptions": {
						"attribute": "EventAudience_SelectionState"
					}
				},
				"parentName": "TabContainer_rosg5ys",
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
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"StartDate": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"EndDate": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"Goal": {
						"modelConfig": {
							"path": "PDS.Goal"
						}
					},
					"Industry": {
						"modelConfig": {
							"path": "PDS.Industry"
						}
					},
					"ActualResponse": {
						"modelConfig": {
							"path": "PDS.ActualResponse"
						}
					},
					"PrimaryBudgetedCost": {
						"modelConfig": {
							"path": "PDS.PrimaryBudgetedCost"
						}
					},
					"NumberAttribute_cfqqm4p": {
						"modelConfig": {
							"path": "PDS.PrimaryExpectedRevenue"
						}
					},
					"PrimaryActualCost": {
						"modelConfig": {
							"path": "PDS.PrimaryActualCost"
						}
					},
					"PrimaryActualRevenue": {
						"modelConfig": {
							"path": "PDS.PrimaryActualRevenue"
						}
					},
					"TeamDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "TeamDetailDS"
						},
						"viewModelConfig": {
							"attributes": {
								"TeamDetailDS_Contact": {
									"modelConfig": {
										"path": "TeamDetailDS.Contact"
									}
								},
								"TeamDetailDS_Account": {
									"modelConfig": {
										"path": "TeamDetailDS.Account"
									}
								},
								"TeamDetailDS_Role": {
									"modelConfig": {
										"path": "TeamDetailDS.Role"
									}
								},
								"TeamDetailDS_Notes": {
									"modelConfig": {
										"path": "TeamDetailDS.Notes"
									}
								},
								"TeamDetailDS_Id": {
									"modelConfig": {
										"path": "TeamDetailDS.Id"
									}
								}
							}
						}
					},
					"EventAudience": {
						"isCollection": true,
						"modelConfig": {
							"path": "EventAudienceDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Contact"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "AddContactsQuickFilter_EventAudience",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"EventAudienceDS_Contact": {
									"modelConfig": {
										"path": "EventAudienceDS.Contact"
									}
								},
								"EventAudienceDS_EventResponse": {
									"modelConfig": {
										"path": "EventAudienceDS.EventResponse"
									}
								},
								"EventAudienceDS_CreatedOn": {
									"modelConfig": {
										"path": "EventAudienceDS.CreatedOn"
									}
								},
								"EventAudienceDS_CreatedBy": {
									"modelConfig": {
										"path": "EventAudienceDS.CreatedBy"
									}
								},
								"EventAudienceDS_Id": {
									"modelConfig": {
										"path": "EventAudienceDS.Id"
									}
								}
							}
						}
					},
					"NumberAttribute_jzxkmm8": {
						"modelConfig": {
							"path": "PDS.RecipientCount"
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
						"TeamDetailDS": [
							{
								"attributePath": "Event",
								"relationPath": "PDS.Id"
							}
						],
						"EventAudienceDS": [
							{
								"attributePath": "Event",
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
							"entitySchemaName": "Event"
						},
						"scope": "page"
					},
					"TeamDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EventTeam",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"Account": {
									"path": "Account"
								},
								"Role": {
									"path": "Role"
								},
								"Notes": {
									"path": "Notes"
								}
							}
						}
					},
					"EventAudienceDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "EventTarget",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"EventResponse": {
									"path": "EventResponse"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				"request": "crt.DeleteRecordsRequest",
				"handler": async (request, next) => {
					if (request.dataSourceName === "EventAudienceDS") {
						await request.$context.executeRequest({
							type: 'crt.RemoveEventAudienceRequest',
							eventId: await request.$context.Id,
							target: request.filters || request.recordIds
						});
					} else {
						await next?.handle(request);
					}
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});