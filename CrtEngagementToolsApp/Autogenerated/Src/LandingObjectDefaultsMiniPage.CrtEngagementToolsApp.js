define("LandingObjectDefaultsMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ContinueInOtherPageButton",
				"values": {
					"color": "default"
				}
			},
			{
				"operation": "insert",
				"name": "ValueControlsFlexContainer",
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ColumnCaption",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ColumnCaption",
					"labelPosition": "above",
					"control": "$ColumnCaption",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DisplayValue",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DisplayValue",
					"labelPosition": "above",
					"control": "$DisplayValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingComboBox",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Landing",
					"labelPosition": "above",
					"control": "$Landing",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {},
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CrtColumn",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(CrtColumn_label)#",
					"ariaLabel": "#ResourceString(ComboBox_ObjectColumnLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"items": "$ObjectColumns",
					"control": "$CrtColumn",
					"showList": {
						"request": "crt.PrepareColumnsBySchemaUIdRequest",
						"params": {
							"entitySchemaUId": "$LandingTypeSchemaUid",
							"attributeToSetColumns": "ObjectColumns",
							"primaryDisplayFilterValue": "@event.filterValue"
						}
					},
					"paginationChange": {},
					"tooltip": "",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TextValueInput",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(Value_label)#",
					"labelPosition": "above",
					"control": "$TextValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "IntegerValueInput",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(Value_label)#",
					"labelPosition": "above",
					"control": "$IntegerValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FloatValueInput",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(Value_label)#",
					"labelPosition": "above",
					"control": "$FloatValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BooleanValueInput",
				"values": {
					"type": "crt.Checkbox",
					"label": "#ResourceString(Value_label)#",
					"labelPosition": "above",
					"control": "$BooleanValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LookupValueInput",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(Value_label)#",
					"ariaLabel": "#ResourceString(ComboBox_LookupValueLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CrtLookupValueAttribute",
					"items": "$CrtLookupValueCollection",
					"visible": false,
					"placeholder": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "DateTimeValueInput",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(Value_label)#",
					"labelPosition": "above",
					"control": "$DateTimeValue",
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ValueControlsFlexContainer",
				"propertyName": "items",
				"index": 9
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"CrtLookupValueAttribute": {
						"value": null,
						"change": {
							"request": "crt.SetGuidValueRequest",
							"params": {
								"guidValueAttributeName": "GuidValue",
								"lookupValueAttributeName": "CrtLookupValueAttribute"
							}
						}
					},
					"CrtColumn": {
						"change": {
							"request": "crt.ChangeObjectColumnRequest",
							"params": {
								"controlAttributeName": "CrtLookupValueAttribute",
								"controlItemsAttributeName": "CrtLookupValueCollection"
							}
						},
						"validators": {
							"required": {
								"type": "crt.Required",
							}
						}
					},
					"CrtLookupValueCollection": {
						"value": null,
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {}
						}
					},
					"DataValueType": {
						"caption": "DataValueType",
						"dataValueType": 4,
						"value": -1
					},
					"ObjectColumns": {},
					"ColumnCaption": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.ColumnCaption"
						}
					},
					"DisplayValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.DisplayValue"
						}
					},
					"Landing": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.Landing"
						}
					},
					"TextValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.TextValue"
						}
					},
					"IntegerValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.IntegerValue"
						}
					},
					"FloatValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.FloatValue"
						}
					},
					"BooleanValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.BooleanValue"
						}
					},
					"GuidValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.GuidValue"
						}
					},
					"ColumnUIdAttribute": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.ColumnUId"
						}
					},
					"LandingTypeSchemaUid": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.LandingTypeSchemaUid"
						}
					},
					"DateTimeValue": {
						"modelConfig": {
							"path": "LandingObjectDefaultsDS.DateTimeValue"
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
						"LandingObjectDefaultsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "LandingObjectDefaults",
								"attributes": {
									"LandingTypeSchemaUid": {
										"path": "Landing.Type.SchemaUid.UId",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "LandingObjectDefaultsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});