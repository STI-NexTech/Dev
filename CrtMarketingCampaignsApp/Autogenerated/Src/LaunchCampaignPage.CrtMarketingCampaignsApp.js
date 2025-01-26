define("LaunchCampaignPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "$HeaderText"
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "crt.LaunchCampaignRequest",
						"params": {
							"campaignId": "$CampaignId",
							"ignoreWarnings": true
						}
					},
					"caption": "#ResourceString(SaveButton_caption)#",
					"visible": "$IsCampaignValid"
				}
			},
			{
				"operation": "insert",
				"name": "ErrorInput",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"control": "$ErrorText",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": true,
					"labelPosition": "hidden",
					"visible": true,
					"label": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"HeaderText": {
					"value": ""
				},
				"ErrorText": {
					"value": ""
				},
				"IsCampaignValid": {},
				"ErrorMessage": {
					"modelConfig": {
						"path": "PageParameters.ErrorMessage"
					}
				},
				"WarningMessage": {
					"modelConfig": {
						"path": "PageParameters.WarningMessage"
					}
				},
				"CampaignId": {
					"modelConfig": {
						"path": "PageParameters.CampaignId"
					},
					"change": {
						"request": "crt.SetupLaunchCampaignPage"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
                request: "crt.SetupLaunchCampaignPage",
                handler: async (request, next) => {
					await next?.handle(request);
					const { $context } = request;
					const errorMessage = await $context.ErrorMessage;
					const warningMessage = await $context.WarningMessage;
					$context.HeaderText = !!errorMessage ? await $context.Resources.Strings.HeaderText_ErrorCaption
						: await $context.Resources.Strings.HeaderText_WarningCaption;
					$context.ErrorText = errorMessage;
					if (errorMessage && errorMessage.length > 0  && warningMessage && warningMessage.length > 0) {
						$context.ErrorText = await $context.ErrorText + "\n";
					}
					$context.ErrorText = await $context.ErrorText + warningMessage;
					$context.IsCampaignValid = !errorMessage;
				}
			},
			{
				request: "crt.LaunchCampaignRequest",
				handler: async(request, next) => {
					await next?.handle(request);
					request.$context.executeRequest({
						type: 'crt.ClosePageRequest'
					});
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});