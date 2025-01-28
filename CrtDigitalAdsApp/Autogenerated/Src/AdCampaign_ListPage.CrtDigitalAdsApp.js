define("AdCampaign_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
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
					"borderRadius": "none",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "TitleContainer",
				"values": {
					"justifyContent": "space-between",
					"alignItems": "stretch",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "remove",
				"name": "ActionButtonsContainer"
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
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
				"name": "MainFilterContainer",
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
						"left": "none"
					},
					"justifyContent": "space-between",
					"alignItems": "center",
					"gap": "small",
					"wrap": "wrap"
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
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"folderTree": "FolderTree",
					"layoutConfig": {}
				},
				"parentName": "FilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(AdAccountsQuickFilter_config_caption)#",
						"hint": "",
						"icon": "filter-funnel-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "AdAccount",
						"recordsFilter": null
					},
					"layoutConfig": {},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AdAccountsQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "AdAccount"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "AdAccountsQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "FilterContainer",
				"propertyName": "items",
				"index": 1
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
						"iconPosition": "left-icon",
						"defaultValue": "[#currentMonth#]"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DateRangeQuickFilter_ImpressionsIndicatorWidget_df7608a779d36e176797a430652e9ca9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ImpressionsIndicatorWidget_df7608a779d36e176797a430652e9ca9",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_ClicksIndicatorWidget_24f7993d33602b0eb1625d7f2538717f",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ClicksIndicatorWidget_24f7993d33602b0eb1625d7f2538717f",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_AmountSpentIndicatorWidget_3fb8377aaba48f64dbc94173e191afb5",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AmountSpentIndicatorWidget_3fb8377aaba48f64dbc94173e191afb5",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_AmountSpentChartWidget_8d349afc9bc2864c729927c7a9cf9736",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AmountSpentChartWidget_8d349afc9bc2864c729927c7a9cf9736",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_ClicksChartWidget_464ebdbca5479fa5904323ba79f2b68c",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ClicksChartWidget_464ebdbca5479fa5904323ba79f2b68c",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_ImpressionsChartWidget_23f80117b7e0e10d4ca240b136864f87",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ImpressionsChartWidget_23f80117b7e0e10d4ca240b136864f87",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_AmountSpentChartWidget_6095b5a2e572058da9ed0fa920e71c7f",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AmountSpentChartWidget_6095b5a2e572058da9ed0fa920e71c7f",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_ClicksChartWidget_cc23d85bef3ec26d1a004cffeb1ac963",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ClicksChartWidget_cc23d85bef3ec26d1a004cffeb1ac963",
													"filterColumn": "DataRangeDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateRangeQuickFilter_ImpressionsChartWidget_c8ce443881362c406769310334c06068",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ImpressionsChartWidget_c8ce443881362c406769310334c06068",
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
					"visible": true
				},
				"parentName": "FilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_7h1gv0i",
				"values": {
					"for": "CardToggleTabPanel",
					"layoutConfig": {},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "AdCampaign",
					"layoutConfig": {
						"width": 328
					},
					"classes": [
						"section-folder-tree"
					],
					"borderRadius": "medium",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": ["AdCampaign"]
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"fitContent": false,
					"color": "transparent",
					"items": [],
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": false
				},
				"parentName": "DataFlexContainer",
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
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ImpressionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ImpressionsIndicatorWidget_df7608a779d36e176797a430652e9ca9",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {
											"98565d5c-de13-47f0-a064-7a614c25cfef": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AdCampaign.AdAccountCurrency"
												},
												"isAggregative": false,
												"dataValueType": 1,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 1,
														"value": "USD"
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
									},
									"filterAttributes": [
										{
											"attribute": "DateRangeQuickFilter_ImpressionsIndicatorWidget_df7608a779d36e176797a430652e9ca9",
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
										"attributePath": "AdCampaign",
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
							"entitySchemaName": "AdCampaign",
							"attributes": {
								"CampaignName": {
									"path": "CampaignName"
								},
								"Status": {
									"path": "Status"
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
								"AmountSpent": {
									"path": "AmountSpent"
								}
							}
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
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClicksIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ClicksIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ClicksIndicatorWidget_24f7993d33602b0eb1625d7f2538717f",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {
											"ab7445f7-8cdf-45c9-80c2-091c59edeec1": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AdCampaign.AdAccountCurrency"
												},
												"isAggregative": false,
												"dataValueType": 1,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 1,
														"value": "USD"
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
									},
									"filterAttributes": [
										{
											"attribute": "DateRangeQuickFilter_ClicksIndicatorWidget_24f7993d33602b0eb1625d7f2538717f",
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
										"attributePath": "AdCampaign",
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
							"entitySchemaName": "AdCampaign",
							"attributes": {
								"CampaignName": {
									"path": "CampaignName"
								},
								"Status": {
									"path": "Status"
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
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AmountSpentIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AmountSpentIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "AmountSpentIndicatorWidget_3fb8377aaba48f64dbc94173e191afb5",
								"schemaName": "AdCampaignDailyInsights",
								"filters": {
									"filter": {
										"items": {
											"818acd88-a1e2-4b88-91b8-2a706fd716fd": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AdCampaign.AdAccountCurrency"
												},
												"isAggregative": false,
												"dataValueType": 1,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 1,
														"value": "USD"
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdCampaignDailyInsights"
									},
									"filterAttributes": [
										{
											"attribute": "DateRangeQuickFilter_AmountSpentIndicatorWidget_3fb8377aaba48f64dbc94173e191afb5",
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
										"attributePath": "AdCampaign",
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
							"entitySchemaName": "AdCampaign",
							"attributes": {
								"CampaignName": {
									"path": "CampaignName"
								},
								"Platform": {
									"path": "Platform"
								},
								"Status": {
									"path": "Status"
								},
								"PrimaryAmountSpent": {
									"path": "PrimaryAmountSpent"
								},
								"AdAccountCurrency": {
									"path": "AdAccountCurrency"
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
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "DataGridContainer",
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
						"rowSpan": 1
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
					"stretch": true
				},
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AmountSpentTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AmountSpentTabConteiner_caption)#",
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
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(AmountSpentChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "AmountSpentChartWidget_8d349afc9bc2864c729927c7a9cf9736",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"ad7ec3e6-0490-4eaf-9ccb-c1639f5f0eed": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Facebook",
																		"Id": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"value": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"displayValue": "Facebook"
																	}
																}
															}
														]
													},
													"f1d15611-3de9-4215-8fa3-9ab063ab91a5": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.AdAccountCurrency"
														},
														"isAggregative": false,
														"dataValueType": 1,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 1,
																"value": "USD"
															}
														}
													},
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
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_AmountSpentChartWidget_8d349afc9bc2864c729927c7a9cf9736",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
							},
							{
								"color": "dark-green",
								"type": "spline",
								"label": "#ResourceString(AmountSpentChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "AmountSpentChartWidget_6095b5a2e572058da9ed0fa920e71c7f",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"ad7ec3e6-0490-4eaf-9ccb-c1639f5f0eed": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Google",
																		"Id": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"value": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"displayValue": "Google"
																	}
																}
															}
														]
													},
													"f1d15611-3de9-4215-8fa3-9ab063ab91a5": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.AdAccountCurrency"
														},
														"isAggregative": false,
														"dataValueType": 1,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 1,
																"value": "USD"
															}
														}
													},
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
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_AmountSpentChartWidget_6095b5a2e572058da9ed0fa920e71c7f",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
				"name": "ImpressionsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Impressions_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ChartsTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ImpressionsGridContainer",
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
				"parentName": "ImpressionsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ImpressionsChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ImpressionsChartWidget_title)#",
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
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(ImpressionsChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ImpressionsChartWidget_23f80117b7e0e10d4ca240b136864f87",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"2703bfcb-0cd6-48a9-b32e-18dcda2fcc00": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Facebook",
																		"Id": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"value": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"displayValue": "Facebook"
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
											},
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_ImpressionsChartWidget_23f80117b7e0e10d4ca240b136864f87",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
								"label": "#ResourceString(ImpressionsChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ImpressionsChartWidget_c8ce443881362c406769310334c06068",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"2703bfcb-0cd6-48a9-b32e-18dcda2fcc00": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Google",
																		"Id": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"value": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"displayValue": "Google"
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
											},
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_ImpressionsChartWidget_c8ce443881362c406769310334c06068",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "ImpressionsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClicksTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Clicks_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ChartsTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ClicksGridContainer",
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
				"parentName": "ClicksTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClicksChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ClicksChartWidget_title)#",
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
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(ClicksChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ClicksChartWidget_464ebdbca5479fa5904323ba79f2b68c",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"2556526e-bad0-4572-a382-f719e56c3646": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Facebook",
																		"Id": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"value": "111c1ea6-f147-4711-b34d-5a7718211f0c",
																		"displayValue": "Facebook"
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
											},
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_ClicksChartWidget_464ebdbca5479fa5904323ba79f2b68c",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
								"label": "#ResourceString(ClicksChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ClicksChartWidget_cc23d85bef3ec26d1a004cffeb1ac963",
										"schemaName": "AdCampaignDailyInsights",
										"filters": {
											"filter": {
												"items": {
													"2556526e-bad0-4572-a382-f719e56c3646": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdCampaign.Platform"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "AdPlatform",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Google",
																		"Id": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"value": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
																		"displayValue": "Google"
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
															"columnPath": "DataRangeDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdCampaignDailyInsights"
											},
											"filterAttributes": [
												{
													"attribute": "DateRangeQuickFilter_ClicksChartWidget_cc23d85bef3ec26d1a004cffeb1ac963",
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
												"attributePath": "AdCampaign",
												"relationPath": "PDS.Id"
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
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "ClicksGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdCampaignListGridContainer",
				"values": {
					"layoutConfig": {},
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
				"parentName": "DataFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdCampaignListHeader",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
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
				"parentName": "AdCampaignListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdCampaignListLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdCampaignListLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AdCampaignListHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdCampaignListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ListActionButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true
				},
				"parentName": "AdCampaignListHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdCampaignExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_ExcelExport_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AdCampaignList",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $AdCampaignList_SelectionState"
						}
					},
					"icon": "export-button-icon"
				},
				"parentName": "AdCampaignListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdCampaignStartSyncButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AdCampaignStartSyncButton_caption)#",
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
				"parentName": "AdCampaignListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdCampaignListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					],
					"layoutConfig": {},
					"iconOnly": true
				},
				"parentName": "AdCampaignListHeader",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AdCampaignList",
				"values": {
					"type": "crt.DataGrid",
					"columns": [
						{
							"id": "e0fe3ed4-41f3-f9aa-0934-3bfdb8cf2044",
							"code": "PDS_CampaignName",
							"path": "CampaignName",
							"caption": "#ResourceString(PDS_CampaignName)#",
							"dataValueType": 28,
							"width": 284,
							"sticky": true
						},
						{
							"id": "aecb307a-27b9-ccf0-3140-68d2b66d3367",
							"code": "PDS_Platform",
							"path": "Platform",
							"caption": "#ResourceString(PDS_Platform)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdPlatform",
							"width": 143
						},
						{
							"id": "6861802f-1f7e-2e16-03cf-64f8b81acbfd",
							"code": "PDS_Status",
							"path": "Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdCampaignStatus",
							"width": 131
						},
						{
							"id": "dc989460-d330-8830-6a7c-fc642565aa27",
							"code": "PDS_PrimaryAmountSpent",
							"path": "PrimaryAmountSpent",
							"caption": "#ResourceString(PDS_PrimaryAmountSpent)#",
							"dataValueType": 32,
							"width": 160
						},
						{
							"id": "f6949ca9-a1b7-b143-7aa9-a6c5e3ea6460",
							"code": "PDS_AdAccountCurrency",
							"path": "AdAccountCurrency",
							"caption": "#ResourceString(PDS_AdAccountCurrency)#",
							"dataValueType": 27,
							"width": 114
						},
						{
							"id": "b60911bd-9b83-405c-dabe-edc5b9f1c98d",
							"code": "PDS_Impressions",
							"path": "Impressions",
							"caption": "#ResourceString(PDS_Impressions)#",
							"dataValueType": 4,
							"width": 138
						},
						{
							"id": "7fd6ff23-44d4-33ac-40cc-7d86a8e7ea83",
							"code": "PDS_Clicks",
							"path": "Clicks",
							"caption": "#ResourceString(PDS_Clicks)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "94eeb71a-939c-45be-5801-0a6ca808d591",
							"code": "PDS_CPM",
							"path": "CPM",
							"caption": "#ResourceString(PDS_CPM)#",
							"dataValueType": 32,
							"width": 114
						},
						{
							"id": "58c7405e-16ce-d2f7-a596-2e9dadf2ca5d",
							"code": "PDS_CTR",
							"path": "CTR",
							"caption": "#ResourceString(PDS_CTR)#",
							"dataValueType": 32,
							"width": 114
						},
						{
							"id": "52cbfadb-6d89-bd9c-fba9-c4e20d96e67c",
							"code": "PDS_CPC",
							"path": "CPC",
							"caption": "#ResourceString(PDS_CPC)#",
							"dataValueType": 32,
							"width": 114
						}
					],
					"items": "$Items",
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "DataGrid.RowToolbar.Open",
							"icon": "edit-row-action",
							"visible": true,
							"clicked": {
								"request": "crt.UpdateRecordRequest",
								"params": {
									"itemsAttributeName": "Items",
									"recordId": "$Items.PDS_Id"
								},
								"useRelativeContext": true
							}
						}
					],
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 6
					},
					"classes": [
						"section-data-grid"
					],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "icon",
								"icon": "empty-search-result"
							},
							"title": "#ResourceString(FilteredEmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(FilteredEmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoFilteredItems"
						},
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "cat"
							},
							"title": "#ResourceString(EmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(EmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoItems"
						}
					],
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"stretch": true,
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"visible": true,
					"fitContent": true,
					"selectionState": "$AdCampaignList_SelectionState",
					"_selectionOptions": {
						"attribute": "AdCampaignList_SelectionState"
					}
				},
				"parentName": "AdCampaignListGridContainer",
				"propertyName": "items",
				"index": 1
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
					},
					"selectedTab": {
						"value": "AdAccountsTabContainer"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
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
					"icon": "open-book-tab-icon"
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
					"caption": "#MacrosTemplateString(#ResourceString(Label_Help_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "HelpTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerMainLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerFlexContainerMainLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerDescriptionLabel1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerFlexContainerDescriptionLabel1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerDescriptionLabel2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerFlexContainerDescriptionLabel2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerDescriptionLabel3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerFlexContainerDescriptionLabel3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainerDescriptionLearnMore",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(HelpTabContainerFlexContainerDescription_caption)#",
					"href": "https://academy.creatio.com/documents?id=2461",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(AdAccountsTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "settings-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "AdAccountsTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdAccountsTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AdAccountsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"fitContent": true,
					"gap": "large",
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
					"wrap": "nowrap"
				},
				"parentName": "AdAccountsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": false
				},
				"parentName": "AdAccountsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookContainerLabelContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": false,
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
					"wrap": "nowrap"
				},
				"parentName": "AdAccountsTabContainerFacebookContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookContainerImage",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageInput_FacebookImage_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/facebook.png",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "16px",
					"customHeight": "16px",
					"borderRadius": "small",
					"positioning": "cover",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "AdAccountsTabContainerFacebookContainerLabelContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookContainerMainLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdAccountsTabContainerFacebookContainerMainLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "AdAccountsTabContainerFacebookContainerLabelContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookContainerDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdAccountsTabContainerFacebookContainerDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AdAccountsTabContainerFacebookContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FacebookGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"styles": {
						"display": "inline"
					},
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": "$AdAccountsTabContainerFacebookGrid_NoItems | crt.InvertBooleanValue",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"layoutConfig": {},
					"alignItems": "stretch"
				},
				"parentName": "AdAccountsTabContainerFacebookContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerFacebookGrid",
				"values": {
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_AdAccountsTabContainerFacebookGrid",
					"primaryColumnName": "DataGrid_AdAccountsTabContainerFacebookGridDS_Id",
					"columns": [
						{
							"id": "a6f9b66b-1144-eabe-2306-b1c372a3a1a7",
							"code": "DataGrid_AdAccountsTabContainerFacebookGridDS_Name",
							"caption": "#ResourceString(DataGrid_AdAccountsTabContainerFacebookGridDS_Name)#",
							"dataValueType": 28,
							"width": 180
						},
						{
							"id": "dfe21d5a-a3b5-61f2-c887-ed1f4b8de4eb",
							"code": "DataGrid_AdAccountsTabContainerFacebookGridDS_ConnectionStatus",
							"path": "ConnectionStatus",
							"caption": "#ResourceString(DataGrid_AdAccountsTabContainerFacebookGridDS_ConnectionStatus)#",
							"dataValueType": 10,
							"width": 130,
							"referenceSchemaName": "AdAccountConnectionState"
						}
					],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {},
							"title": "#ResourceString(EmptyFacebookAdAccountPlaceholderTitle)#",
							"subhead": null,
							"visible": "$AdAccountsTabContainerFacebookGrid_NoItems"
						}
					],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"rows": {
							"numeration": false,
							"toolbar": false
						},
						"header": {
							"visible": false
						}
					},
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 4
					}
				},
				"parentName": "FacebookGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsFacebookContainerAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "$AdAccountsTabContainerFacebookGrid_NoItems | crt.BooleanToStringValue : '#ResourceString(AdAccountsFacebookContainerAddButton_caption)#' : '#ResourceString(AdAccountsManageConnectionButton_caption)#'",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"icon": "$AdAccountsTabContainerFacebookGrid_NoItems | crt.BooleanToStringValue : 'add-button-icon' : 'gear-button-icon'",
					"visible": true,
					"clicked": {
						"request": "crt.AdPlatformLogin",
						"params": {
							"platform": "facebook",
							"app": "digital_ads"
						}
					},
					"clickMode": "default"
				},
				"parentName": "AdAccountsTabContainerFacebookContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": false,
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
				"parentName": "AdAccountsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleContainerLabelContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": false,
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
					"wrap": "nowrap"
				},
				"parentName": "AdAccountsTabContainerGoogleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleContainerImage",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageInput_FacebookImage_label)#",
					"value": "https://academy.creatio.com/docs/sites/en/files/images/Demo/google.png",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "16px",
					"customHeight": "16px",
					"borderRadius": "small",
					"positioning": "cover",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "AdAccountsTabContainerGoogleContainerLabelContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleContainerMainLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdAccountsTabContainerGoogleContainerMainLabel_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "AdAccountsTabContainerGoogleContainerLabelContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleContainerDescriptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AdAccountsTabContainerGoogleContainerDescriptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AdAccountsTabContainerGoogleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GoogleGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"styles": {
						"display": "inline"
					},
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": "$AdAccountsTabContainerGoogleGrid_NoItems | crt.InvertBooleanValue",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"layoutConfig": {},
					"alignItems": "stretch"
				},
				"parentName": "AdAccountsTabContainerGoogleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AdAccountsTabContainerGoogleGrid",
				"values": {
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_AdAccountsTabContainerGoogleGrid",
					"primaryColumnName": "DataGrid_AdAccountsTabContainerGoogleGridDS_Id",
					"columns": [
						{
							"id": "3919a496-9281-8c7a-2eb9-0ae21676fa7b",
							"code": "DataGrid_AdAccountsTabContainerGoogleGridDS_Name",
							"caption": "#ResourceString(DataGrid_AdAccountsTabContainerGoogleGridDS_Name)#",
							"dataValueType": 28,
							"width": 180
						},
						{
							"id": "81bc8d8a-968e-bc86-9403-2a9145598bbb",
							"code": "DataGrid_AdAccountsTabContainerGoogleGridDS_ConnectionStatus",
							"path": "ConnectionStatus",
							"caption": "#ResourceString(DataGrid_AdAccountsTabContainerGoogleGridDS_ConnectionStatus)#",
							"dataValueType": 10,
							"width": 130,
							"referenceSchemaName": "AdAccountConnectionState"
						}
					],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {},
							"title": "#ResourceString(EmptyFacebookAdAccountPlaceholderTitle)#",
							"subhead": null,
							"visible": "$AdAccountsTabContainerGoogleGrid_NoItems"
						}
					],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"rows": {
							"numeration": false,
							"toolbar": false
						},
						"header": {
							"visible": false
						}
					},
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 4
					}
				},
				"parentName": "GoogleGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdAccountsGoogleContainerAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "$AdAccountsTabContainerGoogleGrid_NoItems | crt.BooleanToStringValue : '#ResourceString(AdAccountsGoogleContainerAddButton_caption)#' : '#ResourceString(AdAccountsManageConnectionButton_caption)#'",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"icon": "$AdAccountsTabContainerGoogleGrid_NoItems | crt.BooleanToStringValue : 'add-button-icon' : 'gear-button-icon'",
					"visible": true,
					"clicked": {
						"request": "crt.AdPlatformLogin",
						"params": {
							"platform": "google",
							"app": "digital_ads"
						}
					},
					"clickMode": "default"
				},
				"parentName": "AdAccountsTabContainerGoogleContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AdAccountsTabContainerFacebookGrid_NoItems": {
						"from": [
							"DataGrid_AdAccountsTabContainerFacebookGrid"
						],
						"converter": "crt.DataGridHasNoItems"
					},
					"AdAccountsTabContainerGoogleGrid_NoItems": {
						"from": [
							"DataGrid_AdAccountsTabContainerGoogleGrid"
						],
						"converter": "crt.DataGridHasNoItems"
					},
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "AdCampaign"
										}
									}
								}
							}
						}
					},
					"DataGrid_AdAccountsTabContainerFacebookGrid": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_AdAccountsTabContainerFacebookGridDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_AdAccountsTabContainerFacebookGrid_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_AdAccountsTabContainerFacebookGridDS_Name": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerFacebookGridDS.Name"
									}
								},
								"DataGrid_AdAccountsTabContainerFacebookGridDS_ConnectionStatus": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerFacebookGridDS.ConnectionStatus"
									}
								},
								"DataGrid_AdAccountsTabContainerFacebookGridDS_Id": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerFacebookGridDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_AdAccountsTabContainerFacebookGrid_PredefinedFilter": {
						"value": {
							"items": {
								"239c1fdc-bf7d-41cc-ab96-d0721d940b3e": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "AdPlatform"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Facebook",
													"Id": "111c1ea6-f147-4711-b34d-5a7718211f0c",
													"value": "111c1ea6-f147-4711-b34d-5a7718211f0c",
													"displayValue": "Facebook"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "AdAccount"
						}
					},
					"Connect_account_button_enabled": {
						"value": true
					},
					"ErrorMessages": {},
					"DataGrid_AdAccountsTabContainerGoogleGrid": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_AdAccountsTabContainerGoogleGridDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_AdAccountsTabContainerGoogleGrid_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_AdAccountsTabContainerGoogleGridDS_Name": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerGoogleGridDS.Name"
									}
								},
								"DataGrid_AdAccountsTabContainerGoogleGridDS_ConnectionStatus": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerGoogleGridDS.ConnectionStatus"
									}
								},
								"DataGrid_AdAccountsTabContainerGoogleGridDS_Id": {
									"modelConfig": {
										"path": "DataGrid_AdAccountsTabContainerGoogleGridDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_AdAccountsTabContainerGoogleGrid_PredefinedFilter": {
						"value": {
							"items": {
								"d39e149f-2fd6-4bb2-bb44-ddd14180da49": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "AdPlatform"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "AdPlatform",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Google",
													"Id": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
													"value": "51c8cbfd-c16e-4e53-9cfe-c6d769884ac4",
													"displayValue": "Google"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "AdAccount"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "Impressions"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "AdAccountsQuickFilter_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_CampaignName": {
						"modelConfig": {
							"path": "PDS.CampaignName"
						}
					},
					"PDS_Platform": {
						"modelConfig": {
							"path": "PDS.Platform"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_PrimaryAmountSpent": {
						"modelConfig": {
							"path": "PDS.PrimaryAmountSpent"
						}
					},
					"PDS_AdAccountCurrency": {
						"modelConfig": {
							"path": "PDS.AdAccountCurrency"
						}
					},
					"PDS_Impressions": {
						"modelConfig": {
							"path": "PDS.Impressions"
						}
					},
					"PDS_Clicks": {
						"modelConfig": {
							"path": "PDS.Clicks"
						}
					},
					"PDS_CPM": {
						"modelConfig": {
							"path": "PDS.CPM"
						}
					},
					"PDS_CTR": {
						"modelConfig": {
							"path": "PDS.CTR"
						}
					},
					"PDS_CPC": {
						"modelConfig": {
							"path": "PDS.CPC"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"config": {
								"entitySchemaName": "AdCampaign",
								"attributes": {
									"CampaignName": {
										"path": "CampaignName"
									},
									"Platform": {
										"path": "Platform"
									},
									"Status": {
										"path": "Status"
									},
									"PrimaryAmountSpent": {
										"path": "PrimaryAmountSpent"
									},
									"AdAccountCurrency": {
										"path": "AdAccountCurrency"
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
							},
							"scope": "viewElement"
						},
						"DataGrid_AdAccountsTabContainerFacebookGridDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "AdAccount",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"ConnectionStatus": {
										"path": "ConnectionStatus"
									}
								}
							}
						},
						"DataGrid_AdAccountsTabContainerGoogleGridDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "AdAccount",
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
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
