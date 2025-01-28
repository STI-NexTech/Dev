define("AdCampaign_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"borderRadius": "none",
					"gap": "medium",
					"visible": true,
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "TitleContainer",
				"values": {
					"alignItems": "center",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"gap": "small"
				}
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
				"name": "TagSelect",
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
				"name": "MainContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
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
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": false,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
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
				"name": "FacebookImage",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageInput_FacebookImage_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/facebook.png",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "24px",
					"customHeight": "24px",
					"borderRadius": "small",
					"positioning": "cover",
					"visible": false,
					"tooltip": ""
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GoogleImage",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageInput_GoogleImage_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/google.png",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "24px",
					"customHeight": "24px",
					"borderRadius": "small",
					"positioning": "cover",
					"visible": false,
					"tooltip": ""
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"justifyContent": "start",
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
					"direction": "row",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap",
					"fitContent": true
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FilterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateRangeQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(DateRangeQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DateRangeQuickFilter_DataGrid_DailyInsightsList",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_DailyInsightsList",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "DateRangeQuickFilter_Value"
					},
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "FilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ImpressionsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ImpressionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ImpressionsIndicatorWidget_253942309790f8036660353d14192aa5",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
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
												"columnPath": "Impressions"
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
										"relationPath": "DataGrid_DailyInsightsListDS.Id"
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
							"entitySchemaName": "AdCampaign"
						},
						"text": {
							"template": "#ResourceString(ImpressionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "without-fill"
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClicksIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ClicksIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ClicksIndicatorWidget_c13eea90ca5c8d0034164a91045aafde",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
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
												"columnPath": "Clicks"
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
										"relationPath": "DataGrid_DailyInsightsListDS.Id"
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
						"text": {
							"template": "#ResourceString(ClicksIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "dark-green"
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AmountSpentIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 5,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AmountSpentIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "AmountSpentIndicatorWidget_640c417dda8a0f1692713c92883825dc",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
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
												"columnPath": "PrimaryAmountSpent"
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
										"relationPath": "DataGrid_DailyInsightsListDS.Id"
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
						"text": {
							"template": "#ResourceString(AmountSpentIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange"
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChartsTabPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 7,
						"rowSpan": 10
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": false,
					"visible": true,
					"stretch": false
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AmountSpentTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AmountSpentTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ChartsTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountSpentGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "none",
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
				"parentName": "AmountSpentTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountSpentChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(AmountSpentChartWidget_title)#",
						"color": "blue",
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
								"color": "dark-green",
								"type": "spline",
								"label": "#ResourceString(AmountSpentChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "AmountSpentChartWidget_5ac94afd82215be918d01270ef286b02",
										"schemaName": "AdCampaignDailyInsights",
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
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
														"columnPath": "Clicks"
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
												"relationPath": "DataGrid_DailyInsightsListDS.Id"
											}
										],
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
															"columnPath": "DataRangeDate"
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
															"columnPath": "DataRangeDate"
														},
														"functionType": 3,
														"datePartType": 3
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
															"columnPath": "DataRangeDate"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
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
									"display": null
								}
							},
							{
								"color": "orange",
								"type": "bar",
								"label": "#ResourceString(AmountSpentChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "AmountSpentChartWidget_878864e38b7496db5e44557242102fa7",
										"schemaName": "AdCampaignDailyInsights",
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
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
														"columnPath": "PrimaryAmountSpent"
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
												"relationPath": "DataGrid_DailyInsightsListDS.Id"
											}
										],
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
															"columnPath": "DataRangeDate"
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
															"columnPath": "DataRangeDate"
														},
														"functionType": 3,
														"datePartType": 3
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
															"columnPath": "DataRangeDate"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
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
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "AmountSpentGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DailyInsightsListGridContainer",
				"values": {
					"layoutConfig": {},
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					},
					"stretch": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DailyInsightsListHeader",
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
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "DailyInsightsListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DailyInsightsListLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(DailyInsightsListLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "DailyInsightsListHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DailyInsightsListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DailyInsightsListSettingsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "DailyInsightsListHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DailyInsightsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DailyInsightsExportDataButton_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DailyInsightsList"
						}
					},
					"icon": "export-button-icon"
				},
				"parentName": "DailyInsightsListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DailyInsightsStartSyncButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DailyInsightsStartSyncButton_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "SynchronizeAdCampaignData",
							"processRunType": "RegardlessOfThePage"
						}
					},
					"icon": "replace-squares-icon"
				},
				"parentName": "DailyInsightsListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DailyInsightsList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_DailyInsightsList",
					"primaryColumnName": "DataGrid_DailyInsightsListDS_Id",
					"columns": [
						{
							"id": "c272e952-7daf-9396-6be2-38555754a445",
							"code": "DataGrid_DailyInsightsListDS_DataRangeDate",
							"path": "DataRangeDate",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_DataRangeDate)#",
							"dataValueType": 8,
							"width": 140
						},
						{
							"id": "6f7aeaa3-4239-8cc1-7a4e-beaa4c45caac",
							"code": "DataGrid_DailyInsightsListDS_PrimaryAmountSpent",
							"path": "PrimaryAmountSpent",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_PrimaryAmountSpent)#",
							"dataValueType": 32,
							"width": 225
						},
						{
							"id": "e0412f7c-7e0f-e5fc-4c9d-ba967ef3ad4b",
							"code": "DataGrid_DailyInsightsListDS_Impressions",
							"path": "Impressions",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_Impressions)#",
							"dataValueType": 4,
							"width": 203
						},
						{
							"id": "5ad4171d-243a-c50b-dba1-507a26e8f36c",
							"code": "DataGrid_DailyInsightsListDS_Clicks",
							"path": "Clicks",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_Clicks)#",
							"dataValueType": 4,
							"width": 177
						},
						{
							"id": "239a7137-8eb1-8589-655d-45f1b400f2ef",
							"code": "DataGrid_DailyInsightsListDS_CPM",
							"path": "CPM",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_CPM)#",
							"dataValueType": 32,
							"width": 114
						},
						{
							"id": "dc138a1f-a35d-d516-e86b-1d7798b7d777",
							"code": "DataGrid_DailyInsightsListDS_CTR",
							"path": "CTR",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_CTR)#",
							"dataValueType": 32,
							"width": 114
						},
						{
							"id": "c9021c97-c6c1-1941-c761-024d1ef8094f",
							"code": "DataGrid_DailyInsightsListDS_CPC",
							"path": "CPC",
							"caption": "#ResourceString(DataGrid_DailyInsightsListDS_CPC)#",
							"dataValueType": 32,
							"width": 114
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
					"stretch": true
				},
				"parentName": "DailyInsightsListGridContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"Name": {
					"modelConfig": {
						"path": "PDS.Name"
					}
				},
				"DataGrid_DailyInsightsList": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_DailyInsightsListDS",
						"filterAttributes": [
							{
								"name": "DateRangeQuickFilter_DataGrid_DailyInsightsList",
								"loadOnChange": true
							}
						],
						"sortingConfig": {
							"default": [
								{
									"direction": "desc",
									"columnName": "DataRangeDate"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_DailyInsightsListDS_DataRangeDate": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.DataRangeDate"
								}
							},
							"DataGrid_DailyInsightsListDS_PrimaryAmountSpent": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.PrimaryAmountSpent"
								}
							},
							"DataGrid_DailyInsightsListDS_Impressions": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.Impressions"
								}
							},
							"DataGrid_DailyInsightsListDS_Clicks": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.Clicks"
								}
							},
							"DataGrid_DailyInsightsListDS_CPM": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.CPM"
								}
							},
							"DataGrid_DailyInsightsListDS_CTR": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.CTR"
								}
							},
							"DataGrid_DailyInsightsListDS_CPC": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.CPC"
								}
							},
							"DataGrid_DailyInsightsListDS_Id": {
								"modelConfig": {
									"path": "DataGrid_DailyInsightsListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "AdCampaign"
					},
					"scope": "page"
				},
				"DataGrid_ywt0qrdDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AdCampaignDailyInsights",
						"attributes": {
							"DataRangeDate": {
								"path": "DataRangeDate"
							},
							"Impressions": {
								"path": "Impressions"
							},
							"Clicks": {
								"path": "Clicks"
							},
							"CPM": {
								"path": "CPM"
							},
							"CTR": {
								"path": "CTR"
							},
							"CPC": {
								"path": "CPC"
							},
							"PrimaryAmountSpent": {
								"path": "PrimaryAmountSpent"
							}
						}
					}
				},
				"DataGrid_DailyInsightsListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AdCampaignDailyInsights",
						"attributes": {
							"DataRangeDate": {
								"path": "DataRangeDate"
							},
							"PrimaryAmountSpent": {
								"path": "PrimaryAmountSpent"
							},
							"Impressions": {
								"path": "Impressions"
							},
							"Clicks": {
								"path": "Clicks"
							},
							"CPM": {
								"path": "CPM"
							},
							"CTR": {
								"path": "CTR"
							},
							"CPC": {
								"path": "CPC"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"DataGrid_DailyInsightsListDS": [
					{
						"attributePath": "AdCampaign",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});