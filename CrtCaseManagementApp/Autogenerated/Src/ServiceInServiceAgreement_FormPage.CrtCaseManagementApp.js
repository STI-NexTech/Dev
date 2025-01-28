define("ServiceInServiceAgreement_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "ServiceItem",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_cvknhjt",
					"labelPosition": "auto",
					"control": "$LookupAttribute_cvknhjt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(ServiceItem_tooltip)#"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_xprr53n",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xprr53n_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ServiceItem",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ReactionTimeUnit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ReactionTimeUnit_label)#",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zdom20f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ReactionTimeValue",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_413uwnq",
					"labelPosition": "hidden",
					"control": "$NumberAttribute_413uwnq",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SolutionTimeUnit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(SolutionTimeUnit_label)#",
					"labelPosition": "auto",
					"control": "$LookupAttribute_w8inpq4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SolutionTimeValue",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_jlwny6l",
					"labelPosition": "hidden",
					"control": "$NumberAttribute_jlwny6l",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_n76fxva",
					"labelPosition": "auto",
					"control": "$LookupAttribute_n76fxva",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Calendar",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_fxsaj21",
					"labelPosition": "auto",
					"control": "$LookupAttribute_fxsaj21",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_cvknhjt": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.ServiceItem"
					}
				},
				"LookupAttribute_zdom20f": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.ReactionTimeUnit"
					}
				},
				"NumberAttribute_413uwnq": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.ReactionTimeValue"
					}
				},
				"LookupAttribute_w8inpq4": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.SolutionTimeUnit"
					}
				},
				"NumberAttribute_jlwny6l": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.SolutionTimeValue"
					}
				},
				"LookupAttribute_n76fxva": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.Status"
					}
				},
				"LookupAttribute_fxsaj21": {
					"modelConfig": {
						"path": "ServiceInServicePactDS.Calendar"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"ServiceInServicePactDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "ServiceInServicePact"
					}
				}
			},
			"primaryDataSourceName": "ServiceInServicePactDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});