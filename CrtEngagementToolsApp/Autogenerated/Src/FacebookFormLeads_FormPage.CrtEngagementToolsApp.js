define("FacebookFormLeads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "CenterContainer",
				"values": {
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
					"gap": "small"
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
					"multiline": false,
					"label": "#ResourceString(Name_label)#",
					"labelPosition": "auto",
					"control": "$StringAttribute_ijbh8rx",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FacebookPage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(FacebookPage_label)#",
					"labelPosition": "auto",
					"control": "$StringAttribute_ey7geo4",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "State",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kpgtnm7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_kpgtnm7",
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
				"name": "SideAreaProfileContainerFlexContainer",
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
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ReconnectFormButton",
				"values": {
					"layoutConfig": {},
					"type": "crt.Button",
					"caption": "#ResourceString(ReconnectFormButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "facebook-button-icon",
					"displayType": "text",
					"clicked": {
						"request": "crt.ReconnectFacebookFormRequest",
						"params": {
							"landingId": "$Id"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SideAreaProfileContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaLowerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
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
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SideAreaLowerContainerLabel",
				"values": {
					"layoutConfig": {},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SideAreaLowerContainerLabel_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideAreaLowerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_3skkcic",
					"labelPosition": "auto",
					"control": "$LookupAttribute_3skkcic",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Type_tooltip)#",
					"readonly": true
				},
				"parentName": "SideAreaLowerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreateContact",
				"values": {
					"layoutConfig": {},
					"type": "crt.Checkbox",
					"label": "#ResourceString(CreateContact_label)#",
					"labelPosition": "right",
					"control": "$BooleanAttribute_5kscfag",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaLowerFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IdentificationProcess",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zbgykgz",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zbgykgz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"placeholder": "",
					"tooltip": "#ResourceString(IdentificationProcess_tooltip)#",
					"layoutConfig": {},
					"mode": "List",
					"readonly": false
				},
				"parentName": "SideAreaLowerFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SideAreaLowerContainerFlexContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "SideAreaLowerFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SearchProcessSettingsButton",
				"values": {
					"layoutConfig": {},
					"type": "crt.Button",
					"caption": "#ResourceString(SearchProcessSettingsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "gear-button-icon",
					"displayType": "text",
					"clicked": {
						"request": "crt.UpdateRecordRequest",
						"params": {
							"entityName": "VwProcessLib",
							"recordId": "$IdentificationProcessSysProcess"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SideAreaLowerContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WidgetGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					}
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TotalLeadsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalLeadsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TotalLeadsIndicatorWidget_7e4a6a6a130fdabd8620b3e68df32eb6",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
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
										"attributePath": "WebForm",
										"relationPath": "GeneratedWebFormDS.Id"
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
							"entitySchemaName": "GeneratedWebForm"
						},
						"text": {
							"template": "#ResourceString(TotalLeadsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTodayIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(LeadsTodayIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "LeadsTodayIndicatorWidget_30cd7d312516acc9b5b0ee4baac884f2",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {
											"98d3d1cb-47e1-48ce-b3b6-1df960c7b39f": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 4
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
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
										"attributePath": "WebForm",
										"relationPath": "GeneratedWebFormDS.Id"
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
							"template": "#ResourceString(LeadsTodayIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LatestLeadIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(LatestLeadIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "LatestLeadIndicatorWidget_88d96e9cae2fdfb1294ebf616b3cc3ab",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
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
												"columnPath": "CreatedOn"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "WebForm",
										"relationPath": "GeneratedWebFormDS.Id"
									}
								]
							},
							"formatting": {
								"type": "datetime",
								"date": {
									"display": true
								},
								"time": {
									"display": false
								}
							}
						},
						"text": {
							"template": "#ResourceString(LatestLeadIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTab",
				"values": {
					"caption": "#ResourceString(DefaultValuesTab_caption)#",
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
				"name": "DefaultValuesTabContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
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
				"parentName": "DefaultValuesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(DefaultValuesTabExpansionPanel_title)#",
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
				"parentName": "DefaultValuesTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabContainerGridContainer",
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
				"parentName": "DefaultValuesTabExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabContainerFlexContainer",
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
				"parentName": "DefaultValuesTabContainerGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabGridDetailAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DefaultValuesTabGridDetailAddBtn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "LandingLeadDefaults",
							"defaultValues": [
								{
									"attributeName": "Landing",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DefaultValuesTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabGridContainer",
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
				"parentName": "DefaultValuesTabExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabGridDetail",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_v4avyuf",
					"selectionState": "$GridDetail_v4avyuf_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_v4avyuf_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DefaultValuesTabGridDetailDS_Id",
					"columns": [
						{
							"id": "37ff159c-fab0-b3ba-4685-c03f802a928e",
							"code": "DefaultValuesTabGridDetailDS_ColumnCaption",
							"path": "ColumnCaption",
							"caption": "#ResourceString(DefaultValuesTabGridDetailDS_ColumnCaption)#",
							"dataValueType": 28
						},
						{
							"id": "9af164e0-d245-0357-2fe4-c90cbfe38af4",
							"code": "DefaultValuesTabGridDetailDS_DisplayValue",
							"caption": "#ResourceString(DefaultValuesTabGridDetailDS_DisplayValue)#",
							"dataValueType": 30
						}
					],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DefaultValuesTabGridDetail_DeleteRowItem)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteRecordRequest",
								"params": {
									"itemsAttributeName": "GridDetail_v4avyuf",
									"recordId": "$GridDetail_v4avyuf.DefaultValuesTabGridDetailDS_Id"
								}
							}
						}
					],
					"bulkActions": []
				},
				"parentName": "DefaultValuesTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabGridDetail_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DefaultValuesTabGridDetailDS",
							"filters": "$GridDetail_v4avyuf | crt.ToCollectionFilters : 'GridDetail_v4avyuf' : $GridDetail_v4avyuf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_v4avyuf_SelectionState"
						}
					}
				},
				"parentName": "DefaultValuesTabGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTabGridDetail_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DefaultValuesTabGridDetail",
							"filters": "$GridDetail_v4avyuf | crt.ToCollectionFilters : 'GridDetail_v4avyuf' : $GridDetail_v4avyuf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_v4avyuf_SelectionState"
						}
					}
				},
				"parentName": "DefaultValuesTabGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmissionsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(SubmissionsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabContainer",
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
				"parentName": "SubmissionsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(LeadsTabExpansionPanel_title)#",
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
				"parentName": "SubmissionsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabContainerGridContainer",
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
				"parentName": "LeadsTabExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabContainerFlexContainer",
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
				"parentName": "LeadsTabContainerGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetailRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsTabGridDetailRefreshBtn_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "LeadsTabGridDetailDS"
						}
					}
				},
				"parentName": "LeadsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetailSettingsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsTabGridDetailSettingsBtn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "LeadsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetailExportDataBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsTabGridDetailExportDataBtn_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LeadsTabGridDetail",
							"filters": "$LeadsTabGridDetail | crt.ToCollectionFilters : 'LeadsTabGridDetail' : $LeadsTabGridDetail_SelectionState"
						}
					}
				},
				"parentName": "LeadsTabGridDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetailImportDataBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsTabGridDetailImportDataBtn_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Lead"
						}
					}
				},
				"parentName": "LeadsTabGridDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetailSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(LeadsTabGridDetailSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"LeadsTabGridDetail"
					]
				},
				"parentName": "LeadsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridContainer",
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
				"parentName": "LeadsTabExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetail",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$LeadsTabGridDetail",
					"selectionState": "$LeadsTabGridDetail_SelectionState",
					"_selectionOptions": {
						"attribute": "LeadsTabGridDetail_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "LeadsTabGridDetailDS_Id",
					"columns": [
						{
							"id": "6d5e2a33-6e96-5b6d-5e15-470c98257e86",
							"code": "LeadsTabGridDetailDS_LeadName",
							"caption": "#ResourceString(LeadsTabGridDetailDS_LeadName)#",
							"dataValueType": 30
						},
						{
							"id": "6364ca33-7743-92e0-f607-6d555025732f",
							"code": "LeadsTabGridDetailDS_QualifiedContact",
							"path": "QualifiedContact",
							"caption": "#ResourceString(LeadsTabGridDetailDS_QualifiedContact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "a32cd00b-4a4e-f201-69f6-6f7098208179",
							"code": "LeadsTabGridDetailDS_QualifiedAccount",
							"path": "QualifiedAccount",
							"caption": "#ResourceString(LeadsTabGridDetailDS_QualifiedAccount)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						},
						{
							"id": "cf780ca5-be41-f5a0-d14c-8231dc13fdfc",
							"code": "LeadsTabGridDetailDS_Email",
							"path": "Email",
							"caption": "#ResourceString(LeadsTabGridDetailDS_Email)#",
							"dataValueType": 28
						},
						{
							"id": "4923ecee-5c64-0562-053b-36a49e9924c7",
							"code": "LeadsTabGridDetailDS_MobilePhone",
							"path": "MobilePhone",
							"caption": "#ResourceString(LeadsTabGridDetailDS_MobilePhone)#",
							"dataValueType": 28
						},
						{
							"id": "281e2aae-0aa0-5c86-8153-98d0b47b2020",
							"code": "LeadsTabGridDetailDS_Country",
							"path": "Country",
							"caption": "#ResourceString(LeadsTabGridDetailDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country"
						},
						{
							"id": "ab9920c9-747e-5450-337f-ad777c16619e",
							"code": "LeadsTabGridDetailDS_UtmMediumStr",
							"path": "UtmMediumStr",
							"caption": "#ResourceString(LeadsTabGridDetailDS_UtmMediumStr)#",
							"dataValueType": 30
						},
						{
							"id": "0c305c5a-eb53-fa24-3666-cc1d3a154fc8",
							"code": "LeadsTabGridDetailDS_UtmSourceStr",
							"path": "UtmSourceStr",
							"caption": "#ResourceString(LeadsTabGridDetailDS_UtmSourceStr)#",
							"dataValueType": 30
						},
						{
							"id": "71ed8397-89d6-ee06-6d8c-7aefc26c0ed3",
							"code": "LeadsTabGridDetailDS_UtmCampaignStr",
							"path": "UtmCampaignStr",
							"caption": "#ResourceString(LeadsTabGridDetailDS_UtmCampaignStr)#",
							"dataValueType": 30
						}
					],
					"bulkActions": []
				},
				"parentName": "LeadsTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetail_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "LeadsTabGridDetailDS",
							"filters": "$LeadsTabGridDetail | crt.ToCollectionFilters : 'LeadsTabGridDetail' : $LeadsTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $LeadsTabGridDetail_SelectionState"
						}
					}
				},
				"parentName": "LeadsTabGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsTabGridDetail_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LeadsTabGridDetail",
							"filters": "$LeadsTabGridDetail | crt.ToCollectionFilters : 'LeadsTabGridDetail' : $LeadsTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $LeadsTabGridDetail_SelectionState"
						}
					}
				},
				"parentName": "LeadsTabGridDetail",
				"propertyName": "bulkActions",
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
					"StringAttribute_ijbh8rx": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.Name"
						}
					},
					"LookupAttribute_kpgtnm7": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.State"
						}
					},
					"LookupAttribute_3skkcic": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.Type"
						}
					},
					"LookupAttribute_zbgykgz": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.IdentificationProcess"
						}
					},
					"BooleanAttribute_5kscfag": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.CreateContact"
						}
					},
					"GridDetail_v4avyuf": {
						"isCollection": true,
						"modelConfig": {
							"path": "DefaultValuesTabGridDetailDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DefaultValuesTabGridDetailDS_ColumnCaption": {
									"modelConfig": {
										"path": "DefaultValuesTabGridDetailDS.ColumnCaption"
									}
								},
								"DefaultValuesTabGridDetailDS_DisplayValue": {
									"modelConfig": {
										"path": "DefaultValuesTabGridDetailDS.DisplayValue"
									}
								},
								"DefaultValuesTabGridDetailDS_Id": {
									"modelConfig": {
										"path": "DefaultValuesTabGridDetailDS.Id"
									}
								}
							}
						}
					},
					"LeadsTabGridDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "LeadsTabGridDetailDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "QualifiedContact"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"LeadsTabGridDetailDS_LeadName": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.LeadName"
									}
								},
								"LeadsTabGridDetailDS_QualifiedContact": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.QualifiedContact"
									}
								},
								"LeadsTabGridDetailDS_QualifiedAccount": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.QualifiedAccount"
									}
								},
								"LeadsTabGridDetailDS_Email": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.Email"
									}
								},
								"LeadsTabGridDetailDS_MobilePhone": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.MobilePhone"
									}
								},
								"LeadsTabGridDetailDS_Country": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.Country"
									}
								},
								"LeadsTabGridDetailDS_UtmMediumStr": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.UtmMediumStr"
									}
								},
								"LeadsTabGridDetailDS_UtmSourceStr": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.UtmSourceStr"
									}
								},
								"LeadsTabGridDetailDS_UtmCampaignStr": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.UtmCampaignStr"
									}
								},
								"LeadsTabGridDetailDS_Id": {
									"modelConfig": {
										"path": "LeadsTabGridDetailDS.Id"
									}
								}
							}
						}
					},
					"StringAttribute_ey7geo4": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.WebPageName"
						}
					},
					"IdentificationProcessSysProcess": {
						"modelConfig": {
							"path": "GeneratedWebFormDS.IdentificationProcessSysProcess"
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
					"primaryDataSourceName": "GeneratedWebFormDS",
					"dependencies": {
						"LeadsTabGridDetailDS": [
							{
								"attributePath": "WebForm",
								"relationPath": "GeneratedWebFormDS.Id"
							}
						],
						"DefaultValuesTabGridDetailDS": [
							{
								"attributePath": "Landing",
								"relationPath": "GeneratedWebFormDS.Id"
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
					"GeneratedWebFormDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "GeneratedWebForm",
							"attributes": {
								"IdentificationProcessSysProcess": {
									"path": "IdentificationProcess.SysProcess",
									"type": "ForwardReference"
								}
							}
						}
					},
					"DefaultValuesTabGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LandingLeadDefaults",
							"attributes": {
								"ColumnCaption": {
									"path": "ColumnCaption"
								},
								"DisplayValue": {
									"path": "DisplayValue"
								}
							}
						}
					},
					"LeadsTabGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead",
							"attributes": {
								"LeadName": {
									"path": "LeadName"
								},
								"QualifiedContact": {
									"path": "QualifiedContact"
								},
								"QualifiedAccount": {
									"path": "QualifiedAccount"
								},
								"Email": {
									"path": "Email"
								},
								"MobilePhone": {
									"path": "MobilePhone"
								},
								"Country": {
									"path": "Country"
								},
								"UtmMediumStr": {
									"path": "UtmMediumStr"
								},
								"UtmSourceStr": {
									"path": "UtmSourceStr"
								},
								"UtmCampaignStr": {
									"path": "UtmCampaignStr"
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