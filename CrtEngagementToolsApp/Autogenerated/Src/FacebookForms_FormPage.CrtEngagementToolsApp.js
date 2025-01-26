define("FacebookForms_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"entitySchemaName": "GeneratedWebForm"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "GeneratedWebForm",
					"columns": [
						{
							"id": "ab1c2ac0-3a72-4496-8cad-17fc5a4a1fb2",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "SideAreaTopContainer",
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
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Name_label)#",
					"control": "$Name",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaTopContainer",
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
					"label": "#ResourceString(FacebookPage_label)#",
					"labelPosition": "auto",
					"control": "$StringAttribute_xvl036j",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaTopContainer",
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
					"label": "$Resources.Strings.LookupAttribute_f7vtwoc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_f7vtwoc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaTopContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ylkaogm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SideAreaTopContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ReconnectFormButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(ReconnectFormButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"icon": "facebook-button-icon",
					"visible": true,
					"displayType": "text",
					"clicked": {
						"request": "crt.ReconnectFacebookFormRequest",
						"params": {
							"landingId": "$Id"
						}
					},
					"clickMode": "default"
				},
				"parentName": "GridContainer_ylkaogm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaLowerContainer",
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
				"name": "SideAreaLowerContainerLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
				"parentName": "SideAreaLowerContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_w8tbsfc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_w8tbsfc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Type_tooltip)#",
					"readonly": true
				},
				"parentName": "SideAreaLowerContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IdentificationProcess",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_k5b07wi",
					"labelPosition": "auto",
					"control": "$LookupAttribute_k5b07wi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(IdentificationProcess_tooltip)#",
					"mode": "List",
					"readonly": false
				},
				"parentName": "SideAreaLowerContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_10jx8o5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SideAreaLowerContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SearchProcessSettingsButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
				"parentName": "GridContainer_10jx8o5",
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
				"name": "TotalSubmissionsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalSubmissionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_vvjef4p_c3b084aff35e2c0d2980f9807caa0cfe",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "FormSubmit"
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
						"text": {
							"template": "#ResourceString(TotalSubmissionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTodayIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(SubmissionsTodayIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ContactsCreatedIndicatorWidget_eb01729b0b956e753756397fda1f02ac",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {
											"a6817d6b-7fe3-495e-8269-2fb23cb189f8": {
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
										"rootSchemaName": "FormSubmit"
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
						"text": {
							"template": "#ResourceString(SubmissionsTodayIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LatestSubmittionIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(LatestSubmittionIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "LatestSubmittionIndicatorWidget_f59c2b29606df084a9307146d99a97af",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "FormSubmit"
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
										"relationPath": "PDS.Id"
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
							"template": "#ResourceString(LatestSubmittionIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "WidgetGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DefaultValuesTab",
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
				"name": "DefaultValuesExpansionPanel",
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
				"parentName": "DefaultValuesExpansionPanel",
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
				"name": "DefaultValuesDetailAddBtn",
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
							"entityName": "LandingObjectDefaults",
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
				"parentName": "DefaultValuesExpansionPanel",
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
					"items": "$DefaultValuesTabGridDetail",
					"selectionState": "$DefaultValuesTabGridDetail_SelectionState",
					"_selectionOptions": {
						"attribute": "DefaultValuesTabGridDetail_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DefaultValuesTabGridDetailDS_Id",
					"columns": [
						{
							"id": "6fa51230-9375-b775-af31-8fcb5311850e",
							"code": "DefaultValuesTabGridDetailDS_ColumnCaption",
							"caption": "#ResourceString(DefaultValuesTabGridDetailDS_ColumnCaption)#",
							"dataValueType": 28,
							"width": 260
						},
						{
							"id": "247ab125-236b-a2f9-7c9b-77c62a81edaa",
							"code": "DefaultValuesTabGridDetailDS_DisplayValue",
							"path": "DisplayValue",
							"caption": "#ResourceString(DefaultValuesTabGridDetailDS_DisplayValue)#",
							"dataValueType": 30,
							"width": 260
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
									"itemsAttributeName": "DefaultValuesTabGridDetail",
									"recordId": "$DefaultValuesTabGridDetail.DefaultValuesTabGridDetailDS_Id"
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
							"filters": "$DefaultValuesTabGridDetail | crt.ToCollectionFilters : 'DefaultValuesTabGridDetail' : $DefaultValuesTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $DefaultValuesTabGridDetail_SelectionState"
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
							"filters": "$DefaultValuesTabGridDetail | crt.ToCollectionFilters : 'DefaultValuesTabGridDetail' : $DefaultValuesTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $DefaultValuesTabGridDetail_SelectionState"
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
					"caption": "#ResourceString(TabContainer_Submissions_caption)#",
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
				"name": "SubmissionsTabExpansionPanel",
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
					"title": "#ResourceString(SubmissionsTabExpansionPanel_title)#",
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
				"name": "SubmissionsTabContainerGridContainer",
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
				"parentName": "SubmissionsTabExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabContainerFlexContainer",
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
				"parentName": "SubmissionsTabContainerGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetailRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubmissionsTabGridDetailRefreshBtn_caption)#",
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
							"dataSourceName": "SubmissionsTabGridDetailDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubmissionsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetailSettingsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubmissionsTabGridDetailSettingsBtn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "SubmissionsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetailExportDataBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubmissionsTabGridDetailExportDataBtn_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubmissionsTabGridDetail",
							"filters": "$SubmissionsTabGridDetail | crt.ToCollectionFilters : 'SubmissionsTabGridDetail' : $SubmissionsTabGridDetail_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "SubmissionsTabGridDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetailImportDataBtn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubmissionsTabGridDetailImportDataBtn_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "FormSubmit"
						}
					},
					"visible": true
				},
				"parentName": "SubmissionsTabGridDetailSettingsBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetailSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SubmissionsTabGridDetailSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"SubmissionsTabGridDetail"
					]
				},
				"parentName": "SubmissionsTabContainerFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridContainer",
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
				"parentName": "SubmissionsTabExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetail",
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
					"items": "$SubmissionsTabGridDetail",
					"selectionState": "$SubmissionsTabGridDetail_SelectionState",
					"_selectionOptions": {
						"attribute": "SubmissionsTabGridDetail_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "SubmissionsTabGridDetailDS_Id",
					"columns": [
						{
							"id": "d6ae1fdc-0ad6-2d5a-4737-e9b969e24792",
							"code": "SubmissionsTabGridDetailDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "ff2b3d8c-fecf-ae6f-756e-dd24ff58d10e",
							"code": "SubmissionsTabGridDetailDS_FullName",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_FullName)#",
							"dataValueType": 28
						},
						{
							"id": "d2a558bc-ab22-e5b4-1ac6-716b5b28965c",
							"code": "SubmissionsTabGridDetailDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "41041e53-e39d-984b-2558-8ae347e2386a",
							"code": "SubmissionsTabGridDetailDS_Email",
							"path": "Email",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_Email)#",
							"dataValueType": 28
						},
						{
							"id": "a45cd25e-57b7-5b80-1828-3b0088f415c3",
							"code": "SubmissionsTabGridDetailDS_PhoneNumber",
							"path": "PhoneNumber",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_PhoneNumber)#",
							"dataValueType": 28
						},
						{
							"id": "d4366f71-3f24-3cea-48be-3336a47c11ee",
							"code": "SubmissionsTabGridDetailDS_Country",
							"path": "Country",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country"
						},
						{
							"id": "ba587d07-0e38-148e-2772-8c1feb0d2fe2",
							"code": "SubmissionsTabGridDetailDS_UtmMediumStr",
							"path": "UtmMediumStr",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_UtmMediumStr)#",
							"dataValueType": 30
						},
						{
							"id": "ba023f59-dd99-c355-cab5-fb361267f460",
							"code": "SubmissionsTabGridDetailDS_UtmSourceStr",
							"path": "UtmSourceStr",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_UtmSourceStr)#",
							"dataValueType": 30
						},
						{
							"id": "e8d342c9-71ac-4064-2bb6-fbc601067781",
							"code": "SubmissionsTabGridDetailDS_UtmCampaignStr",
							"path": "UtmCampaignStr",
							"caption": "#ResourceString(SubmissionsTabGridDetailDS_UtmCampaignStr)#",
							"dataValueType": 30
						}
					],
					"bulkActions": []
				},
				"parentName": "SubmissionsTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetail_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "SubmissionsTabGridDetailDS",
							"filters": "$SubmissionsTabGridDetail | crt.ToCollectionFilters : 'SubmissionsTabGridDetail' : $SubmissionsTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $SubmissionsTabGridDetail_SelectionState"
						}
					}
				},
				"parentName": "SubmissionsTabGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmissionsTabGridDetail_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubmissionsTabGridDetail",
							"filters": "$SubmissionsTabGridDetail | crt.ToCollectionFilters : 'SubmissionsTabGridDetail' : $SubmissionsTabGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $SubmissionsTabGridDetail_SelectionState"
						}
					}
				},
				"parentName": "SubmissionsTabGridDetail",
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
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"LookupAttribute_f7vtwoc": {
						"modelConfig": {
							"path": "PDS.State"
						}
					},
					"LookupAttribute_w8tbsfc": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"LookupAttribute_k5b07wi": {
						"modelConfig": {
							"path": "PDS.IdentificationProcess"
						}
					},
					"DefaultValuesTabGridDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "DefaultValuesTabGridDetailDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DisplayValue"
									}
								]
							}
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
					"SubmissionsTabGridDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "SubmissionsTabGridDetailDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"SubmissionsTabGridDetailDS_CreatedOn": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.CreatedOn"
									}
								},
								"SubmissionsTabGridDetailDS_FullName": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.FullName"
									}
								},
								"SubmissionsTabGridDetailDS_Contact": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.Contact"
									}
								},
								"SubmissionsTabGridDetailDS_Email": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.Email"
									}
								},
								"SubmissionsTabGridDetailDS_PhoneNumber": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.PhoneNumber"
									}
								},
								"SubmissionsTabGridDetailDS_Country": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.Country"
									}
								},
								"SubmissionsTabGridDetailDS_UtmMediumStr": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.UtmMediumStr"
									}
								},
								"SubmissionsTabGridDetailDS_UtmSourceStr": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.UtmSourceStr"
									}
								},
								"SubmissionsTabGridDetailDS_UtmCampaignStr": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.UtmCampaignStr"
									}
								},
								"SubmissionsTabGridDetailDS_Id": {
									"modelConfig": {
										"path": "SubmissionsTabGridDetailDS.Id"
									}
								}
							}
						}
					},
					"StringAttribute_2xkjewu": {
						"modelConfig": {
							"path": "PageParameters.PageNameParameter"
						}
					},
					"StringAttribute_xvl036j": {
						"modelConfig": {
							"path": "PDS.WebPageName"
						}
					},
					"IdentificationProcessSysProcess": {
						"modelConfig": {
							"path": "PDS.IdentificationProcessSysProcess"
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
						"DefaultValuesTabGridDetailDS": [
							{
								"attributePath": "Landing",
								"relationPath": "PDS.Id"
							}
						],
						"SubmissionsTabGridDetailDS": [
							{
								"attributePath": "WebForm",
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
							"entitySchemaName": "GeneratedWebForm",
							"attributes": {
								"IdentificationProcessSysProcess": {
									"path": "IdentificationProcess.SysProcess",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"DefaultValuesTabGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LandingObjectDefaults",
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
					"SubmissionsTabGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "FormSubmit",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"FullName": {
									"path": "FullName"
								},
								"Contact": {
									"path": "Contact"
								},
								"Email": {
									"path": "Email"
								},
								"PhoneNumber": {
									"path": "PhoneNumber"
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
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "GeneratedWebFormFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});