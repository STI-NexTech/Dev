define("Cases_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "CustomerProfileTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(CustomerProfileTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "default-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CustomerProfileTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerProfileTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(CustomerProfileTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "CustomerProfileTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactProfileContainer",
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
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_ctwt6pv"
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactJobTitle",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ContactJobTitle",
					"labelPosition": "auto",
					"control": "$ContactJobTitle",
					"readonly": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactPreferredLanguage",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactLanguage",
					"labelPosition": "auto",
					"control": "$ContactLanguage",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactMobilePhone",
				"values": {
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.ContactMobilePhone",
					"labelPosition": "auto",
					"control": "$ContactMobilePhone",
					"readonly": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactEmail",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.ContactEmail",
					"labelPosition": "auto",
					"control": "$ContactEmail",
					"readonly": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AccountProfileContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountInfoContainer",
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
						"bottom": "medium",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AccountInfoLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "AccountInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile",
				"values": {
					"type": "crt.AccountCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_c08bwtk"
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountWeb",
				"values": {
					"type": "crt.WebInput",
					"label": "$Resources.Strings.AccountWeb",
					"labelPosition": "auto",
					"control": "$AccountWeb",
					"readonly": true
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountCategory",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAccountCategory",
					"labelPosition": "auto",
					"control": "$AccountAccountCategory",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"layoutConfig": {},
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AccountIndustry",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountIndustry",
					"labelPosition": "auto",
					"control": "$AccountIndustry",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ContactJobTitle": {
					"modelConfig": {
						"path": "PDS.ContactJobTitle"
					}
				},
				"ContactLanguage": {
					"modelConfig": {
						"path": "PDS.ContactLanguage"
					}
				},
				"AccountAccountCategory": {
					"modelConfig": {
						"path": "PDS.AccountAccountCategory"
					}
				},
				"AccountIndustry": {
					"modelConfig": {
						"path": "PDS.AccountIndustry"
					}
				},
				"ContactMobilePhone": {
					"modelConfig": {
						"path": "PDS.ContactMobilePhone"
					}
				},
				"ContactEmail": {
					"modelConfig": {
						"path": "PDS.ContactEmail"
					}
				},
				"AccountWeb": {
					"modelConfig": {
						"path": "PDS.AccountWeb"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"config": {
						"attributes": {
							"ContactJobTitle": {
								"path": "Contact.JobTitle",
								"type": "ForwardReference"
							},
							"ContactLanguage": {
								"path": "Contact.Language",
								"type": "ForwardReference"
							},
							"AccountAccountCategory": {
								"path": "Account.AccountCategory",
								"type": "ForwardReference"
							},
							"AccountIndustry": {
								"path": "Account.Industry",
								"type": "ForwardReference"
							},
							"ContactMobilePhone": {
								"path": "Contact.MobilePhone",
								"type": "ForwardReference"
							},
							"ContactEmail": {
								"path": "Contact.Email",
								"type": "ForwardReference"
							},
							"AccountWeb": {
								"path": "Account.Web",
								"type": "ForwardReference"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});