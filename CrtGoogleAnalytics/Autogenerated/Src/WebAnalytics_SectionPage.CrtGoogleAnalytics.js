define("WebAnalytics_SectionPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"direction": "column",
					"justifyContent": "start",
					"alignItems": "stretch",
					"visible": true,
					"borderRadius": "medium",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "TitleContainer",
				"values": {
					"justifyContent": "space-between",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"gap": "none",
					"wrap": "wrap"
				}
			},
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "ActionButtonsContainer",
				"values": {
					"justifyContent": "space-between",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "center",
					"gap": "medium"
				}
			},
			{
				"operation": "remove",
				"name": "AddButton"
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "remove",
				"name": "ActionButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ExportToExcel"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"direction": "row",
					"color": "transparent",
					"gap": "small",
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "remove",
				"name": "MainFilterContainer"
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainer"
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainerInner"
			},
			{
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
			},
			{
				"operation": "remove",
				"name": "SearchFilter"
			},
			{
				"operation": "remove",
				"name": "RightFilterContainer"
			},
			{
				"operation": "remove",
				"name": "DataTable_Summaries"
			},
			{
				"operation": "remove",
				"name": "RefreshButton"
			},
			{
				"operation": "merge",
				"name": "ContentContainer",
				"values": {
					"direction": "column",
					"gap": "small",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start"
				}
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "remove",
				"name": "SectionContentWrapper"
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "DataUpdatesInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(DataUpdatesInfoLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WidgetsQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(WidgetsQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "WidgetsQuickFilter_ContactsIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ContactsIndicatorWidget_Data",
													"filterColumnStart": "CreatedOn",
													"filterColumnEnd": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_0",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "UserActionDynamicsChartWidget_SeriesData_0",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "UserActionDynamicsChartWidget_SeriesData_1",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_2",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "UserActionDynamicsChartWidget_SeriesData_2",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_3",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "UserActionDynamicsChartWidget_SeriesData_3",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_IndicatorWidget_h77wmml_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_h77wmml_Data",
													"filterColumnStart": "StartDate",
													"filterColumnEnd": "StartDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "WidgetsQuickFilter_IndicatorWidget_rzmz3eu_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_rzmz3eu_Data",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "WidgetsQuickFilter_Value"
					},
					"visible": true,
					"filterType": "date-range"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_fve9lpt",
				"values": {
					"for": "CardToggleTabPanel",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserActionDynamicsChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(UserActionDynamicsChartWidget_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
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
								"color": "bright-red",
								"type": "spline",
								"label": "#ResourceString(UserActionDynamicsChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "UserActionDynamicsChartWidget_SeriesData_0",
										"schemaName": "WebAnalyticsAction",
										"filters": {
											"filter": {
												"items": {
													"e49c7ed5-2fbe-499e-975b-8fb601bca816": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Type"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "TouchActionType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Form submission",
																		"Id": "d4f57a02-8279-4fe6-879c-e5d230641bec",
																		"value": "d4f57a02-8279-4fe6-879c-e5d230641bec",
																		"displayValue": "Form submission"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "WebAnalyticsAction"
											},
											"filterAttributes": [
												{
													"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_0",
													"loadOnChange": true
												}
											]
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							},
							{
								"color": "blue",
								"type": "spline",
								"label": "#ResourceString(UserActionDynamicsChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "UserActionDynamicsChartWidget_SeriesData_1",
										"schemaName": "WebAnalyticsAction",
										"filters": {
											"filter": {
												"items": {
													"97169bfc-eb3d-4d74-9aaa-aab6c3e27f67": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Type"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "TouchActionType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Outlink",
																		"Id": "3dcc3085-fc1e-41b4-a2b1-d5e5aaa64d00",
																		"value": "3dcc3085-fc1e-41b4-a2b1-d5e5aaa64d00",
																		"displayValue": "Outlink"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "WebAnalyticsAction"
											},
											"filterAttributes": [
												{
													"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_1",
													"loadOnChange": true
												}
											]
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							},
							{
								"color": "dark-green",
								"type": "spline",
								"label": "#ResourceString(UserActionDynamicsChartWidget_series_2)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "UserActionDynamicsChartWidget_SeriesData_2",
										"schemaName": "WebAnalyticsAction",
										"filters": {
											"filter": {
												"items": {
													"6010a394-8bc9-494e-abcb-bdbe17b2cc0a": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Type"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "TouchActionType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Downloading",
																		"Id": "5da3521e-6715-4c72-86b2-367364b1b672",
																		"value": "5da3521e-6715-4c72-86b2-367364b1b672",
																		"displayValue": "Downloading"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "WebAnalyticsAction"
											},
											"filterAttributes": [
												{
													"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_2",
													"loadOnChange": true
												}
											]
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							},
							{
								"color": "violet",
								"type": "spline",
								"label": "#ResourceString(UserActionDynamicsChartWidget_series_3)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "UserActionDynamicsChartWidget_SeriesData_3",
										"schemaName": "WebAnalyticsAction",
										"filters": {
											"filter": {
												"items": {
													"9293acd4-eacb-431a-ac8e-fec00606184a": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Type"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "TouchActionType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Site search",
																		"Id": "ffae9a0b-9ad5-400e-8c30-56bbacfcd56e",
																		"value": "ffae9a0b-9ad5-400e-8c30-56bbacfcd56e",
																		"displayValue": "Site search"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "WebAnalyticsAction"
											},
											"filterAttributes": [
												{
													"attribute": "WidgetsQuickFilter_UserActionDynamicsChartWidget_SeriesData_3",
													"loadOnChange": true
												}
											]
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ActionDate"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {
							"border": {
								"hidden": true
							}
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataSummaryFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 8
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"alignItems": "stretch",
					"justifyContent": "center",
					"gap": "medium",
					"wrap": "nowrap"
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataSummaryLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(DataSummaryLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "DataSummaryFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ContactsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ContactsIndicatorWidget_Data",
								"schemaName": "Contact",
								"filters": {
									"filter": {
										"items": {
											"7860cc2d-b68f-464c-ae36-62520cbfc121": {
												"filterType": 5,
												"comparisonType": 15,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "[Touch:Contact].[TouchAction:Touch].Id"
												},
												"isAggregative": true,
												"dataValueType": 0,
												"subFilters": {
													"items": {},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "TouchAction",
													"key": "1195e680-b7d8-4ea9-845f-396968916352"
												}
											},
											"fcf866e2-5358-4afd-974e-96551beab3c5": {
												"filterType": 5,
												"comparisonType": 15,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "[WebAnalyticsVisitor:Contact].[Touch:WebAnalyticsVisitor].Id"
												},
												"isAggregative": true,
												"dataValueType": 0,
												"subFilters": {
													"items": {},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "Touch",
													"key": "32d5ab16-6953-48a7-8ead-236f9a8990a5"
												}
											}
										},
										"logicalOperation": 1,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contact"
									},
									"filterAttributes": [
										{
											"attribute": "WidgetsQuickFilter_ContactsIndicatorWidget_Data",
											"loadOnChange": true
										}
									]
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
						"text": {
							"template": "#ResourceString(ContactsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "contact-icon",
								"color": "celestial-blue"
							}
						},
						"theme": "transparent"
					},
					"visible": true
				},
				"parentName": "DataSummaryFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionsIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ActionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_rzmz3eu_Data",
								"schemaName": "TouchAction",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "TouchAction"
									},
									"filterAttributes": [
										{
											"attribute": "WidgetsQuickFilter_IndicatorWidget_rzmz3eu_Data",
											"loadOnChange": true
										}
									]
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
						"text": {
							"template": "#ResourceString(ActionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "flag-icon",
								"color": "turquoise"
							}
						},
						"theme": "transparent"
					},
					"visible": true
				},
				"parentName": "DataSummaryFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SessionsIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(SessionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_h77wmml_Data",
								"schemaName": "Touch",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Touch"
									},
									"filterAttributes": [
										{
											"attribute": "WidgetsQuickFilter_IndicatorWidget_h77wmml_Data",
											"loadOnChange": true
										}
									]
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
						"text": {
							"template": "#ResourceString(SessionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "fire-icon",
								"color": "orange-red"
							}
						},
						"theme": "transparent"
					},
					"visible": true
				},
				"parentName": "DataSummaryFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6jd009c",
				"values": {
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
						"rowGap": "small"
					},
					"items": [],
					"fitContent": false,
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch",
					"stretch": true
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebPageInsightsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_6jd009c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebPageInsightsLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WebPageInsightsLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WebPageInsightsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebPageInsightsHintLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(WebPageInsightsHintLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "WebPageInsightsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebPageToolsFlexContainer",
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
						"left": "large"
					},
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_6jd009c",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebPagesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebPagesSearchFilter_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "WebPagesSearchFilter_WebAnalyticsAction",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"WebAnalyticsActionList"
										]
									}
								]
							},
							{
								"attribute": "WebPagesSearchFilter_WebPageList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"WebPageList"
										]
									}
								]
							}
						],
						"from": [
							"WebPagesSearchFilter_SearchValue",
							"WebPagesSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "WebPageToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionsToolsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 1,
						"row": 2
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
						"left": "large"
					},
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_6jd009c",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ActionStartDateQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(ActionStartDateQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ActionStartDateQuickFilter_WebAnalyticsActionList",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WebAnalyticsActionList",
													"filterColumnStart": "ActionDate",
													"filterColumnEnd": "ActionDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "ActionStartDateQuickFilter_Value"
					},
					"visible": true,
					"filterType": "date-range"
				},
				"parentName": "WebActionsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionTypeQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(ActionTypeQuickFilter_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "TouchActionType",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ActionTypeQuickFilter_WebAnalyticsActionList",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WebAnalyticsActionList",
													"filterColumn": "Type"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "ActionTypeQuickFilter_Value"
					},
					"visible": true,
					"filterType": "lookup"
				},
				"parentName": "WebActionsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebActionsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebActionsSearchFilter_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "WebActionsSearchFilter_WebAnalyticsAction",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"WebAnalyticsActionList"
										]
									}
								]
							},
							{
								"attribute": "WebActionsSearchFilter_WebAnalyticsActionList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"WebAnalyticsActionList"
										]
									}
								]
							}
						],
						"from": [
							"WebActionsSearchFilter_SearchValue",
							"WebActionsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "WebActionsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebPageDataGrid",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$WebPageList",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "WebPageDS_Id",
					"columns": [
						{
							"id": "0b401bca-f564-9bd9-fc88-ee7f032324fe",
							"code": "WebPageDS_Name",
							"caption": "#ResourceString(WebPageDS_Name)#",
							"dataValueType": 28,
							"width": 220
						},
						{
							"id": "5409aeee-d24f-e7d4-4258-b7247da88d08",
							"code": "WebPageDS_Url",
							"caption": "#ResourceString(WebPageDS_Url)#",
							"dataValueType": 29,
							"width": 300
						}
					],
					"activeRow": "$WebPage_ActiveRow",
					"selectionState": "$WebPage_SelectionState",
					"bulkActions": [],
					"_filterOptions": {
						"from": [
							"WebPageList",
							"WebPage_ActiveRow"
						],
						"expose": [
							{
								"attribute": "WebPageDataGrid_ee9df00b_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"WebPageList",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"WebPage"
										]
									}
								]
							}
						]
					}
				},
				"parentName": "GridContainer_6jd009c",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WebActionsDataGrid",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$WebAnalyticsActionList",
					"activeRow": "$WebAnalyticsAction_ActiveRow",
					"selectionState": "$WebAnalyticsAction_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "PDS_Id",
					"columns": [
						{
							"id": "c6059643-3ce4-eb87-fbaa-a3719fc1576c",
							"code": "PDS_ActionDate",
							"caption": "#ResourceString(PDS_ActionDate)#",
							"dataValueType": 7,
							"width": 160
						},
						{
							"id": "027659be-f8b7-d062-917b-6356af175c8b",
							"code": "PDS_Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "b7eb2da4-bb94-35a2-817a-d6dd9fc484bd",
							"code": "PDS_WebPage",
							"caption": "#ResourceString(PDS_WebPage)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "90c8dfe7-3c9f-e531-df2d-0e1db4787b45",
							"code": "PDS_TouchWebAnalyticsVisitorContact",
							"caption": "#ResourceString(PDS_TouchWebAnalyticsVisitorContact)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_6jd009c",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"layoutConfig": {
						"width": 368
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "HelpTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(HelpTabContainer_caption)#",
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
				"name": "HelpTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "HelpTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "HelpTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerFlexContainerDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpConnectGoogleAnalyticsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(HelpConnectGoogleAnalyticsExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
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
					},
					"alignItems": "stretch"
				},
				"parentName": "HelpConnectGoogleAnalyticsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsLabel1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpGoogleAnalyticsLabel1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ScriptDetailsButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(ScriptDetailsButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "ScriptModalPage"
						}
					},
					"clickMode": "default",
					"icon": "document-button-icon"
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsLabel2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpGoogleAnalyticsLabel2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 3
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DimensionParametersButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 4
					},
					"type": "crt.Button",
					"caption": "#ResourceString(DimensionParametersButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "DimensionParametersModalPage"
						}
					},
					"clickMode": "default",
					"icon": "settings-button-icon"
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsLabel3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpGoogleAnalyticsLabel3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 5
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ConnectFormLearnMoreLink",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(LearnMore_caption)#",
					"href": "https://academy.creatio.com/documents?id=2505",
					"target": "_blank",
					"visible": true,
					"linkType": "body",
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsLabel4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpGoogleAnalyticsLabel4_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 7
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "HelpGoogleAnalyticsLabel5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpGoogleAnalyticsLabel5_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 8
					}
				},
				"parentName": "HelpGoogleAnalyticsGridContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "HelpConnectMatomoExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(HelpConnectMatomoExpansionPanel_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": false,
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
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "HelpMatomoGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
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
					},
					"alignItems": "stretch"
				},
				"parentName": "HelpConnectMatomoExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpMatomoDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpMatomoDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "HelpMatomoGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MatomoReadGuideLink",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(MatomoReadGuideLink_caption)#",
					"href": "https://academy.creatio.com/documents?id=2520",
					"target": "_blank",
					"visible": true,
					"linkType": "body",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "HelpMatomoGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerHeader",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(SettingsTabContainerHeader_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "settings"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "SettingsTabContainerHeader",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SettingsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
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
					"justifyContent": "start",
					"gap": "large",
					"wrap": "nowrap",
					"fitContent": false
				},
				"parentName": "SettingsTabContainerHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerGoogleAnalyticsContainer",
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
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"fitContent": false
				},
				"parentName": "SettingsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerGoogleAnalyticsContainerMainLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsTabContainerGoogleAnalyticsContainerMainLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SettingsTabContainerGoogleAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerGoogleAnalyticsContainerDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsTabContainerGoogleAnalyticsContainerDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true
				},
				"parentName": "SettingsTabContainerGoogleAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GoogleAnalyticsAccountsListGrid",
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
					"visible": "$WebAnalyticsAccountsList_NoItems | crt.InvertBooleanValue",
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
				"parentName": "SettingsTabContainerGoogleAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GoogleAnalyticsAccountsList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false,
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"header": {
							"visible": false
						}
					},
					"items": "$WebAnalyticsAccountList",
					"activeRow": "$WebAnalyticsAccount_ActiveRow",
					"selectionState": "$WebAnalyticsAccount_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "WebAnalyticsAccountDS_Id",
					"columns": [
						{
							"id": "a659a899-c69a-28ec-6e33-eea55921735a",
							"code": "WebAnalyticsAccountDS_Name",
							"caption": "#ResourceString(WebAnalyticsAccountDS_Name)#",
							"dataValueType": 28,
							"width": 220
						},
						{
							"id": "0f64e390-04f2-adc6-9976-528ee2451f25",
							"code": "WebAnalyticsAccountDS_ConnectionStatus",
							"caption": "#ResourceString(WebAnalyticsAccountDS_ConnectionStatus)#",
							"dataValueType": 10,
							"width": 120
						}
					],
					"placeholder": false
				},
				"parentName": "GoogleAnalyticsAccountsListGrid",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GoogleAnalyticsConnectButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GoogleAnalyticsConnectButton_caption)#",
					"color": "outline",
					"disabled": "$Connect_account_button_enabled | crt.InvertBooleanValue",
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.GoogleAnalyticsLogin",
						"params": {
							"platform": "google",
							"app": "web_analytics"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SettingsTabContainerGoogleAnalyticsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerMatomoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
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
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"fitContent": false
				},
				"parentName": "SettingsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerMatomoContainerMainLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsTabContainerMatomoContainerMainLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SettingsTabContainerMatomoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerMatomoContainerDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsTabContainerMatomoContainerDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "justify",
					"visible": true
				},
				"parentName": "SettingsTabContainerMatomoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SettingsTabContainerFlexContainerDescriptionFollowGuide",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(SettingsTabContainerFlexContainerDescriptionFollowGuide_caption)#",
					"href": "https://academy.creatio.com/documents?id=2520",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "SettingsTabContainerMatomoContainer",
				"propertyName": "items",
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
					"Connect_account_button_enabled": {
						"value": true
					},
					"WebAnalyticsActionList": {
						"isCollection": true,
						"modelConfig": {
							"path": "PDS",
							"filterAttributes": [
								{
									"name": "WebPagesSearchFilter_WebAnalyticsAction",
									"loadOnChange": true
								},
								{
									"name": "WebActionsSearchFilter_WebAnalyticsAction",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "WebAnalyticsActionList_PredefinedFilter"
								},
								{
									"name": "WebPageDataGrid_ee9df00b_ExposeFilter",
									"loadOnChange": true
								},
								{
									"name": "ActionStartDateQuickFilter_WebAnalyticsActionList",
									"loadOnChange": true
								},
								{
									"name": "ActionTypeQuickFilter_WebAnalyticsActionList",
									"loadOnChange": true
								},
								{
									"name": "WebActionsSearchFilter_WebAnalyticsActionList",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ActionDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"PDS_ActionDate": {
									"modelConfig": {
										"path": "PDS.ActionDate"
									}
								},
								"PDS_Type": {
									"modelConfig": {
										"path": "PDS.Type"
									}
								},
								"PDS_WebPage": {
									"modelConfig": {
										"path": "PDS.WebPage"
									}
								},
								"PDS_TouchWebAnalyticsVisitorContact": {
									"modelConfig": {
										"path": "PDS.TouchWebAnalyticsVisitorContact"
									}
								},
								"PDS_Id": {
									"modelConfig": {
										"path": "PDS.Id"
									}
								}
							}
						}
					},
					"WebPageList": {
						"isCollection": true,
						"modelConfig": {
							"path": "WebPageDS",
							"filterAttributes": [
								{
									"name": "WebPagesSearchFilter_WebPageList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"WebPageDS_Name": {
									"modelConfig": {
										"path": "WebPageDS.Name"
									}
								},
								"WebPageDS_Url": {
									"modelConfig": {
										"path": "WebPageDS.Url"
									}
								},
								"WebPageDS_Id": {
									"modelConfig": {
										"path": "WebPageDS.Id"
									}
								}
							}
						}
					},
					"WebAnalyticsAction_PredefinedFilter": {
						"value": null
					},
					"WebAnalyticsAccountList": {
						"isCollection": true,
						"modelConfig": {
							"path": "WebAnalyticsAccountDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "WebAnalyticsAccount_PredefinedFilter"
								},
								{
									"loadOnChange": true,
									"name": "WebAnalyticsAccountList_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"WebAnalyticsAccountDS_Name": {
									"modelConfig": {
										"path": "WebAnalyticsAccountDS.Name"
									}
								},
								"WebAnalyticsAccountDS_ConnectionStatus": {
									"modelConfig": {
										"path": "WebAnalyticsAccountDS.ConnectionStatus"
									}
								},
								"WebAnalyticsAccountDS_Id": {
									"modelConfig": {
										"path": "WebAnalyticsAccountDS.Id"
									}
								}
							}
						}
					},
					"WebAnalyticsAccountsList_NoItems": {
						"from": [
							"WebAnalyticsAccountList"
						],
						"converter": "crt.DataGridHasNoItems"
					},
					"WebAnalyticsAccount_PredefinedFilter": {
						"value": {
							"items": {
								"637809e3-6ead-461a-b245-69b361b533b6": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "WebAnalyticsPlatform"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "TouchEventTracking",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Google Analytics",
													"Id": "310174ae-1df5-4bb1-8955-474548d52666",
													"value": "310174ae-1df5-4bb1-8955-474548d52666",
													"displayValue": "Google Analytics"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "WebAnalyticsAccount"
						}
					},
					"WebAnalyticsAccountList_PredefinedFilter": {
						"value": {
							"items": {
								"bdfd7db9-2e18-46fe-93f3-12f573f6bff5": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "WebAnalyticsPlatform"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "TouchEventTracking",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Google Analytics",
													"Id": "310174ae-1df5-4bb1-8955-474548d52666",
													"value": "310174ae-1df5-4bb1-8955-474548d52666",
													"displayValue": "Google Analytics"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "WebAnalyticsAccount"
						}
					},
					"WebAnalyticsActionList_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Columns"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dependencies": {
						"PDS": [
							{
								"attributePath": "WebPage",
								"relationPath": "WebPageDS.Id"
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
					"WebPageDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "WebPage",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Url": {
									"path": "Url"
								}
							}
						}
					},
					"WebAnalyticsAccountDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "WebAnalyticsAccount",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"ConnectionStatus": {
									"path": "ConnectionStatus"
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
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "TouchAction",
					"attributes": {
						"ActionDate": {
							"path": "ActionDate"
						},
						"Type": {
							"path": "Type"
						},
						"WebPage": {
							"path": "WebPage"
						},
						"TouchWebAnalyticsVisitorContact": {
							"type": "ForwardReference",
							"path": "Touch.WebAnalyticsVisitor.Contact"
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