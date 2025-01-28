/*jshint maxparams: 20 */
define("CasePage", ["ModalBox", "FormatUtils", "NetworkUtilities", "BusinessRuleModule",
		"ConfigurationEnums", "CasesEstimateLabel", "ServiceDeskConstants", "BaseFiltersGenerateModule",
		"TimezoneUtils", "RightUtilities", "CasePageUtilitiesV2", "CaseTermUtilities", "ESNHtmlEditModule",
		"css!CasesEstimateLabel", "css!CasePageCSS", "GoogleTagManagerMeasurementsUtilities"],
	function(ModalBox, FormatUtils, NetworkUtilities, BusinessRuleModule, Enums, CasesEstimateLabel,
			 ServiceDeskConstants, BaseFiltersGenerateModule, TimezoneUtils, RightUtilities) {
		return {
			entitySchemaName: "Case",
			mixins: {
				/**
				 * @class CasePageUtilitiesV2 implements quick save cards in one click.
				 */
				CasePageUtilitiesV2: "Terrasoft.CasePageUtilitiesV2",
				/**
				 * @class CaseTermUtilities implements work with terms on page.
				 */
				CaseTermUtilities: "Terrasoft.CaseTermUtilities",
				/**
				 * @class GoogleTagManagerMeasurementsUtilities Mixin for conducting measurements for sending
				 * this data to Google tag manager.
				 */
				GoogleTagManagerMeasurementsUtilities: "Terrasoft.GoogleTagManagerMeasurementsUtilities"
			},
			properties: {
				//TODO #SD-3725 Remove property after implementation of the task.
				/**
				 * @property {Boolean} Flag, indicates necessity of reload entity,
				 * if resolved button has clicked.
				 */
				isNeedToReloadEntity: false,
				/**
				 * @property {Object} trackCaseStatusConfig config for profiling case status changing.
				 * @property {Boolean} trackCaseStatusConfig.isTrackingStatusChanging status of profiling.
				 * @property {String} trackCaseStatusConfig.action current case status transition.
				 */
				trackCaseStatusConfig: {
					"isTrackingStatusChanging": false,
					"action": ""
				}
			},
			details: /**SCHEMA_DETAILS*/{
				"Files": {
					"schemaName": "FileDetailV2",
					"entitySchemaName": "CaseFile",
					"filter": {
						"masterColumn": "Id",
						"detailColumn": "Case"
					}
				},
				"Activity": {
					"schemaName": "CaseActivityDetail",
					"entitySchemaName": "Activity",
					"filter": {
						"detailColumn": "Case",
						"masterColumn": "Id"
					}
				},
				"KnowledgeBaseCase": {
					"schemaName": "KnowledgeBaseInCaseDetail",
					"entitySchemaName": "KnowledgeBaseInCase",
					"filter": {
						"detailColumn": "Case",
						"masterColumn": "Id"
					}
				}
			}/**SCHEMA_DETAILS*/,
			messages: {
				/**
				 * @message UpdateResolvedButtonMenu
				 * It is need to update the collection of menu items quick save button after changing status.
				 * @param {Object} config menu
				 */
				"UpdateResolvedButtonMenu": {
					mode: this.Terrasoft.MessageMode.PTP,
					direction: this.Terrasoft.MessageDirectionType.PUBLISH
				},

				/**
				 * @message CreateCaseFromHistory
				 * Informs publisher that create case from history message.
				 */
				"CreateCaseFromHistory": {
					mode: this.Terrasoft.MessageMode.PTP,
					direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
				},

				/**
				 * @message OnResolvedButtonMenuClick
				 * Event menu selection buttons quick save.
				 * @param {Object} config menu
				 */
				"OnResolvedButtonMenuClick": {
					mode: this.Terrasoft.MessageMode.PTP,
					direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
				},

				/**
				 * @message UpdateOpenCaseDetail
				 * Update changes about contact and account.
				 */
				"UpdateOpenCaseDetail": {
					mode: this.Terrasoft.MessageMode.PTP,
					direction: this.Terrasoft.MessageDirectionType.PUBLISH
				},

				/**
				 * @message GetCaseIdOpenCaseDetail
				 * Informs identifier of current case.
				 */
				"GetCaseIdOpenCaseDetail": {
					mode: this.Terrasoft.MessageMode.PTP,
					direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
				},
				/**
				 * @message CallCustomer
				 * Make a call for customer.
				 */
				"CallCustomer": {
					"mode": this.Terrasoft.MessageMode.PTP,
					"direction": this.Terrasoft.MessageDirectionType.PUBLISH
				}
			},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "ResolvedButton",
					"parentName": "LeftContainer",
					"propertyName": "items",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.BUTTON,
						"caption": {
							"bindTo": "ResolvedButtonMenuCaption"
						},
						"style": this.Terrasoft.controls.ButtonEnums.style.GREEN,
						"classes": {
							"textClass": ["actions-button-margin-right", "resolved-button-padding-border-right"],
							"wrapperClass": ["actions-button-margin-right"],
							"markerClass": ["resolved-button-pos-left"]
						},
						"click": {"bindTo": "onResolvedButtonMenuClick"},
						"menu": {
							"items": {"bindTo": "ResolvedButtonMenuItems"}
						},
						"visible": {
							"bindTo": "ResolvedButtonMenuVisible"
						}
					}
				},
				{
					"operation": "insert",
					"name": "CasePriority",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 24,
							"rowSpan": 1
						},
						"controlConfig": {
							"iconsVisible": true
						},
						"bindTo": "Priority",
						"contentType": this.Terrasoft.ContentType.ENUM
					},
					"alias": {
						"name": "Priority",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "ResoluitonContainer",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"items": [],
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 24,
							"rowSpan": 1
						}
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "ResolutionGridLayout",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.GRID_LAYOUT,
						"id": "ResolutionGridLayout",
						"selectors": {"wrapEl": "#ResolutionGridLayout"},
						"classes": {
							"wrapClassName": ["resolution-gridlayout"]
						},
						"items": [],
						"markerValue": "ResolutionGridLayout",
						"collapseEmptyRow": true
					},
					"parentName": "ResoluitonContainer",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "SolutionDateProfile",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 16,
							"rowSpan": 1
						},
						"bindTo": "SolutionDate",
						"enabled": false
					},
					"parentName": "ResolutionGridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionProfile",
					"values": {
						"layout": {
							"column": 16,
							"row": 0,
							"colSpan": 8,
							"rowSpan": 1
						},
						"markerValue": "SolutionCaptionContainerProfile",
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["profile-estimate-caption-container"],
						"items": []
					},
					"parentName": "ResolutionGridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionValueMinutesProfile",
					"parentName": "SolutionCaptionProfile",
					"propertyName": "items",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getSolutionDateMinute"
						},
						"markerValue": "SolutionCaptionValueMinutesProfile",
						"visible": {
							"bindTo": "isSolutionHourVisible"
						},
						"labelClass": ["estimate-caption-label"]
					}
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionValueMinutesDelimiterProfile",
					"parentName": "SolutionCaptionProfile",
					"propertyName": "items",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": ":",
						"markerValue": "SolutionCaptionValueMinutesDelimiterProfile",
						"visible": {
							"bindTo": "isSolutionHourVisible"
						},
						"labelClass": ["estimate-caption-label blink"]
					}
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionValueProfile",
					"parentName": "SolutionCaptionProfile",
					"propertyName": "items",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getSolutionDateDay"
						},
						"markerValue": "SolutionCaptionValueProfile",
						"visible": {
							"bindTo": "isSolutionCaptionVisible"
						},
						"labelClass": ["estimate-caption-label"],
						"hint": {
							"bindTo": "getSolutionCaptionHint"
						}
					}
				},
				{
					"operation": "insert",
					"name": "CaseContact",
					"values": {
						"layout": {
							"column": 0,
							"row": 2,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Contact"
					},
					"alias": {
						"name": "Contact",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseAccount",
					"values": {
						"layout": {
							"column": 0,
							"row": 3,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Account"
					},
					"alias": {
						"name": "Account",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseCategory",
					"values": {
						"layout": {
							"column": 0,
							"row": 5,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Category",
						"contentType": this.Terrasoft.ContentType.ENUM
					},
					"alias": {
						"name": "Category",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseGroup",
					"values": {
						"layout": {
							"column": 0,
							"row": 8,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Group"
					},
					"alias": {
						"name": "Group",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseOwner",
					"values": {
						"layout": {
							"column": 0,
							"row": 9,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Owner",
						"contentType": this.Terrasoft.ContentType.LOOKUP,
						"controlConfig": {
							"prepareList": {
								"bindTo": "onPrepareOwner"
							}
						}
					},
					"alias": {
						"name": "Owner",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseAssignToMeButton",
					"values": {
						"layout": {
							"column": 0,
							"row": 10,
							"colSpan": 24,
							"rowSpan": 1
						},
						"itemType": this.Terrasoft.ViewItemType.BUTTON,
						"caption": {
							"bindTo": "Resources.Strings.AssignToMeCaption"
						},
						"style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
						"classes": {
							"textClass": ["caseLinkButton", "assignToButton"]
						},
						"click": {"bindTo": "onAssignToMeClick"}
					},
					"alias": {
						"name": "AssignToMeButton",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "NewCaseProfileInfoContainer",
					"values": {
						"layout": {
							"column": 0,
							"row": 11,
							"colSpan": 24,
							"rowSpan": 1
						},
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"classes": {
							"wrapClassName": ["caseProfileInfoContainer"]
						},
						"items": []
					},
					"alias": {
						"name": "CaseProfileInfoContainer",
						"excludeProperties": ["layout"],
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "ProfileContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "CaseCreatedOnValue",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {"bindTo": "getCreatedOnDate"},
						"markerValue": {"bindTo": "CreatedOnValue"},
						"visible": {"bindTo": "isEditMode"}
					},
					"alias": {
						"name": "CreatedOnValue",
						"excludeOperations": ["remove", "move"]
					},
					"parentName": "NewCaseProfileInfoContainer",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionTab",
					"values": {
						"items": [],
						"caption": {
							"bindTo": "Resources.Strings.SolutionTabCaption"
						}
					},
					"parentName": "Tabs",
					"propertyName": "tabs",
					"index": 1
				},
				{
					"operation": "insert",
					"name": "SolutionTab_gridLayout",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.GRID_LAYOUT,
						"items": []
					},
					"parentName": "SolutionTab",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "ClosureCode",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "ClosureCode",
						"contentType": this.Terrasoft.ContentType.ENUM,
						"enabled": true
					},
					"parentName": "SolutionTab_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "FeedbackControlGroup",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTROL_GROUP,
						"items": [],
						"caption": {
							"bindTo": "Resources.Strings.FeedbackGroupCaption"
						}
					},
					"parentName": "SolutionTab",
					"propertyName": "items",
					"index": 1
				},
				{
					"operation": "insert",
					"name": "FeedbackControlGroup_GridLayout",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.GRID_LAYOUT,
						"items": []
					},
					"parentName": "FeedbackControlGroup",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "SatisfactionLevel",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 12,
							"rowSpan": 1
						},
						"tip": {
							"content": {"bindTo": "Resources.Strings.SatisfactionLevelTip"},
							"displayMode": Terrasoft.controls.TipEnums.displayMode.WIDE
						},
						"bindTo": "SatisfactionLevel",
						"enabled": {"bindTo": "CanChangeCaseSatisfactionLevel"},
						"contentType": this.Terrasoft.ContentType.ENUM
					},
					"parentName": "FeedbackControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SatisfactionLevelComment",
					"parentName": "FeedbackControlGroup_GridLayout",
					"propertyName": "items",
					"values": {
						"className": "Terrasoft.ESNHtmlEdit",
						"itemType": this.Terrasoft.ViewItemType.MODEL_ITEM,
						"dataValueType": this.Terrasoft.DataValueType.TEXT,
						"contentType": this.Terrasoft.ContentType.RICH_TEXT,
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 24
						},
						"value": {
							"bindTo": "SatisfactionLevelComment"
						},
						"tip": {
							"content": {
								"bindTo": "Resources.Strings.SatisfactionLevelCommentTip"
							},
							"displayMode": this.Terrasoft.controls.TipEnums.displayMode.WIDE
						},
						"enabled": {"bindTo": "CanChangeCaseSatisfactionLevel"},
						"markerValue": "satisfaction-level-comment",
						"controlConfig": {
							"height": "102px"
						}
					}
				},
				{
					"operation": "insert",
					"name": "KnowledgeBaseCase",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.DETAIL
					},
					"parentName": "SolutionTab",
					"propertyName": "items",
					"index": 2
				},
				{
					"operation": "insert",
					"name": "CaseInformationTab",
					"values": {
						"caption": {
							"bindTo": "Resources.Strings.CaseInformationTabCaption"
						},
						"items": []
					},
					"parentName": "Tabs",
					"propertyName": "tabs",
					"index": 2
				},
				{
					"operation": "insert",
					"name": "CaseInformation_gridLayout",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.GRID_LAYOUT,
						"items": [],
						"collapseEmptyRow": true
					},
					"parentName": "CaseInformationTab",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "Subject",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Subject"
					},
					"parentName": "CaseInformation_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "Symptoms",
					"parentName": "CaseInformation_gridLayout",
					"propertyName": "items",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 24,
							"rowSpan": 1
						},
						"className": "Terrasoft.MemoEdit",
						"itemType": this.Terrasoft.ViewItemType.MODEL_ITEM,
						"dataValueType": this.Terrasoft.DataValueType.TEXT,
						"contentType": this.Terrasoft.ContentType.RICH_TEXT,
						"value": {
							"bindTo": "Symptoms"
						}
					}
				},
				{
					"operation": "insert",
					"name": "Origin",
					"values": {
						"layout": {
							"column": 0,
							"row": 2,
							"colSpan": 24,
							"rowSpan": 1
						},
						"bindTo": "Origin",
						"contentType": this.Terrasoft.ContentType.ENUM
					},
					"parentName": "CaseInformation_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "TermsControlGroup",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTROL_GROUP,
						"items": [],
						"caption": {
							"bindTo": "Resources.Strings.TermsControlGroupCaption"
						}
					},
					"parentName": "CaseInformationTab",
					"propertyName": "items",
					"index": 1
				},
				{
					"operation": "insert",
					"name": "TermsControlGroup_GridLayout",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.GRID_LAYOUT,
						"items": []
					},
					"parentName": "TermsControlGroup",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "RegisteredOn",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "RegisteredOn",
						"enabled": false,
						"tip": {
							"content": {"bindTo": "setRegisteredOnTipContent"},
							"displayMode": Terrasoft.controls.TipEnums.displayMode.WIDE,
							"classes": {
								"wrapClass": ["registeredOn-wrapClass"]
							}
						}
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionDate",
					"values": {
						"layout": {
							"column": 12,
							"row": 0,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "SolutionDate",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "ResponseDate",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "ResponseDate",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "RespondedOn",
					"values": {
						"layout": {
							"column": 0,
							"row": 2,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "RespondedOn",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "FirstSolutionProvidedOn",
					"values": {
						"layout": {
							"column": 12,
							"row": 1,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "FirstSolutionProvidedOn",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionProvidedOn",
					"values": {
						"layout": {
							"column": 12,
							"row": 2,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "SolutionProvidedOn",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				/*ResponseLabel*/
				{
					"operation": "insert",
					"name": "ResponseTimerImageContainer",
					"parentName": "ResponseCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "ResponseTimerImageContainer",
						"selectors": {"wrapEl": "#ResponseTimerImageContainer"},
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["timer-image-container"],
						"visible": {
							"bindTo": "isResponseTimerImageVisible"
						},
						"markerValue": "ResponseTimerImageContainer",
						"afterrerender": {
							"bindTo": "renderCaptionStyle"
						},
						"afterrender": {
							"bindTo": "renderCaptionStyle"
						},
						"items": []
					},
					"index": 4
				},
				{
					"operation": "insert",
					"name": "ResponseMinutesCaption",
					"parentName": "ResponseCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "ResponseMinutesCaption",
						"labelClass": ["estimate-caption-label"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getResponseDateMinute"
						},
						"visible": {
							"bindTo": "isResponseHourVisible"
						}
					},
					"index": 3
				},
				{
					"operation": "insert",
					"name": "ResponseEstimateSeconds",
					"parentName": "ResponseCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "ResponseEstimateSeconds",
						"labelClass": ["estimate-caption-label blink"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": ":",
						"visible": {
							"bindTo": "isResponseHourVisible"
						}
					},
					"index": 2
				},
				{
					"operation": "insert",
					"name": "ResponseCaptionLabel",
					"parentName": "ResponseCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "ResponseCaptionLabel",
						"labelClass": ["estimate-caption-label day"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getResponseDateDay"
						},
						"visible": {
							"bindTo": "isResponseCaptionVisible"
						},
						"afterrerender": {"bindTo": "renderCaptionStyle"},
						"afterrender": {"bindTo": "renderCaptionStyle"}
					},
					"index": 1
				},
				{
					"operation": "insert",
					"name": "ResponseCaptionPrefix",
					"parentName": "ResponseCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "ResponseCaptionPrefix",
						"labelClass": ["estimate-caption-label prefix"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getResponseCaptionPrefix"
						},
						"visible": {
							"bindTo": "isResponseCaptionVisible"
						}
					},
					"index": 0
				},
				{
					"operation": "insert",
					"name": "ResponseCaptionContainer",
					"values": {
						"id": "ResponseCaptionContainer",
						"selectors": {"wrapEl": "#ResponseCaptionContainer"},
						"layout": {
							"column": 4,
							"row": 3,
							"colSpan": 6,
							"rowSpan": 1
						},
						"markerValue": "ResponseCaptionContainer",
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["estimate-caption-container"],
						"items": [],
						"afterrender": {
							"bindTo": "onResponseContainerRendered"
						}
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				/*SolutionLabel*/
				{
					"operation": "insert",
					"name": "TimerImageContainer",
					"parentName": "SolutionCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "TimerImageContainer",
						"selectors": {"wrapEl": "#TimerImageContainer"},
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["timer-image-container"],
						"visible": {
							"bindTo": "isSolutionTimerImageVisible"
						},
						"markerValue": "SolutionTimerImageContainer",
						"afterrerender": {
							"bindTo": "renderCaptionStyle"
						},
						"afterrender": {
							"bindTo": "renderCaptionStyle"
						},
						"items": []
					},
					"index": 4
				},
				{
					"operation": "insert",
					"name": "MinutesCaption",
					"parentName": "SolutionCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "MinutesCaption",
						"labelClass": ["estimate-caption-label"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getSolutionDateMinute"
						},
						"visible": {
							"bindTo": "isSolutionHourVisible"
						}
					},
					"index": 3
				},
				{
					"operation": "insert",
					"name": "EstimateSeconds",
					"parentName": "SolutionCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "EstimateSeconds",
						"labelClass": ["estimate-caption-label blink"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": ":",
						"visible": {
							"bindTo": "isSolutionHourVisible"
						}
					},
					"index": 2
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionLabel",
					"parentName": "SolutionCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "SolutionCaptionLabel",
						"labelClass": ["estimate-caption-label day"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getSolutionDateDay"
						},
						"visible": {
							"bindTo": "isSolutionCaptionVisible"
						},
						"afterrerender": {"bindTo": "renderCaptionStyle"},
						"afterrender": {"bindTo": "renderCaptionStyle"}
					},
					"index": 1
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionPrefix",
					"parentName": "SolutionCaptionContainer",
					"propertyName": "items",
					"values": {
						"id": "SolutionCaptionPrefix",
						"labelClass": ["estimate-caption-label prefix"],
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "getSolutionCaptionPrefix"
						},
						"visible": {
							"bindTo": "isSolutionCaptionVisible"
						}
					},
					"index": 0
				},
				{
					"operation": "insert",
					"name": "SolutionCaptionContainer",
					"values": {
						"id": "SolutionCaptionContainer",
						"selectors": {"wrapEl": "#SolutionCaptionContainer"},
						"layout": {
							"column": 16,
							"row": 3,
							"colSpan": 6,
							"rowSpan": 1
						},
						"markerValue": "SolutionCaptionContainer",
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["estimate-caption-container"],
						"items": [],
						"afterrender": {
							"bindTo": "onSolutionContainerRendered"
						}
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "ClosureDate",
					"values": {
						"layout": {
							"column": 0,
							"row": 4,
							"colSpan": 12,
							"rowSpan": 1
						},
						"bindTo": "ClosureDate",
						"enabled": false
					},
					"parentName": "TermsControlGroup_GridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "Activity",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.DETAIL
					},
					"parentName": "CaseInformationTab",
					"propertyName": "items",
					"index": 4
				},
				//NotesFilesTab
				{
					"operation": "remove",
					"name": "NotesControlGroup"
				},
				{
					"operation": "insert",
					"name": "NotesFilesTab",
					"values": {
						"items": [],
						"caption": {
							"bindTo": "Resources.Strings.NotesFilesTabCaption"
						}
					},
					"parentName": "Tabs",
					"propertyName": "tabs",
					"index": 3
				},
				{
					"operation": "insert",
					"name": "Files",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.DETAIL
					},
					"parentName": "NotesFilesTab",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "NotesControlGroup",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTROL_GROUP,
						"items": [],
						"caption": {
							"bindTo": "Resources.Strings.NotesGroupCaption"
						}
					},
					"parentName": "NotesFilesTab",
					"propertyName": "items",
					"index": 1
				},
				{
					"operation": "insert",
					"name": "Notes",
					"values": {
						"contentType": this.Terrasoft.ContentType.RICH_TEXT,
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 24
						},
						"labelConfig": {
							"visible": false
						},
						"controlConfig": {
							"imageLoaded": {
								"bindTo": "insertImagesToNotes"
							},
							"images": {
								"bindTo": "NotesImagesCollection"
							}
						}
					},
					"parentName": "NotesControlGroup",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "move",
					"name": "Header",
					"parentName": "LeftModulesContainer",
					"propertyName": "items",
					"index": 1
				},
				{
					"operation": "merge",
					"name": "Header",
					"parentName": "LeftModulesContainer",
					"values": {
						"classes": {
							"wrapClassName": ["profile-container", "autofill-layout"]
						}
					}
				},
				{
					"operation": "insert",
					"name": "SolutionFieldContainer",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 24,
							"rowSpan": 1
						},
						"wrapClass": ["control-width-15 control-left solution-field-container"],
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"items": []
					},
					"parentName": "SolutionTab_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionFieldLabel_wrap",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["label-wrap"],
						"items": []
					},
					"parentName": "SolutionFieldContainer",
					"propertyName": "items",
					"index": 0
				},
				{
					"operation": "insert",
					"name": "SolutionLabelValue",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "Resources.Strings.SolutionCaption"
						},
						"markerValue": "SolutionLabelValue"
					},
					"parentName": "SolutionFieldLabel_wrap",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "SolutionFieldControl_wrap",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["control-wrap solution-field-control"],
						"items": []
					},
					"parentName": "SolutionFieldContainer",
					"propertyName": "items",
					"index": 1
				},
				{
					"operation": "insert",
					"name": "Solution",
					"values": {
						"contentType": this.Terrasoft.ContentType.RICH_TEXT,
						"generator": "InlineTextEditViewGenerator.generate",
						"bindTo": "Solution",
						"markerValue": "Solution"
					},
					"parentName": "SolutionFieldControl_wrap",
					"propertyName": "items"
				}
			]/**SCHEMA_DIFF*/,
			attributes: {
				/**
				 * Reason closure code default.
				 */
				"SaveArguments": {
					dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT
				},
				/**
				 * Reason closure code default.
				 */
				"DefCaseClosureCode": {
					dataValueType: this.Terrasoft.DataValueType.GUID,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
				},
				/**
				 * Close card after save.
				 */
				"IsCloseOnSave": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					value: false
				},
				/**
				 * Close executed on process.
				 */
				"ProcessCardSavedArgument": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					value: true
				},
				/**
				 * Caption for ResolvedMenu button.
				 */
				"ResolvedButtonMenuCaption": {
					dataValueType: this.Terrasoft.DataValueType.TEXT,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
				},
				/**
				 * Resolved button menu visibility.
				 */
				"ResolvedButtonMenuVisible": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
					value: false
				},
				/**
				 *  Collection name drop-down menu in the function button.
				 */
				"ResolvedButtonMenuItems": {
					dataValueType: this.Terrasoft.DataValueType.COLLECTION
				},
				/**
				 * Informs the name of active tab of open cases.
				 */
				"ActiveOpenCasesTabName": {
					dataValueType: this.Terrasoft.DataValueType.TEXT,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
				},
				/**
				 * CanManageWorkplaceSetting edit flag.
				 */
				"CanManageWorkplaceSetting": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * CanChangeCaseSatisfactionLevel enable flag.
				 */
				"CanChangeCaseSatisfactionLevel": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * IsSolutionOverdue column flag.
				 */
				"IsSolutionOverdue": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * IsResponseOverdue column flag.
				 */
				"IsResponseOverdue": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * SatisfactionLevel column value.
				 */
				"SatisfactionLevel": {
					lookupListConfig: {
						filter: function() {
							return Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
								"IsActive", "1");
						},
						columns: ["Point"],
						orders: [
							{
								columnPath: "Point",
								direction: this.Terrasoft.OrderDirection.DESC
							}
						]
					}
				},
				/**
				 * RespondedOn column value.
				 */
				"RespondedOn": {
					dependencies: [
						{
							columns: ["Status"],
							methodName: "onStatusChanged"
						}
					]
				},
				/**
				 * SolutionDate column caption value.
				 */
				"SolutionDateCaption": {
					dataValueType: this.Terrasoft.DataValueType.COLLECTION,
					dependencies: [
						{
							columns: ["SolutionDate"],
							methodName: "onPlanedDateChanged"
						},
						{
							columns: ["Status"],
							methodName: "onPlanedDateChanged"
						}
					]
				},
				/**
				 * ResponseDate column caption value.
				 */
				"ResponseDateCaption": {
					dataValueType: this.Terrasoft.DataValueType.COLLECTION,
					dependencies: [
						{
							columns: ["ResponseDate"],
							methodName: "onPlanedDateChanged"
						},
						{
							columns: ["Status"],
							methodName: "onPlanedDateChanged"
						}
					]
				},
				/**
				 * Priority column value.
				 */
				"Priority": {
					dataValueType: this.Terrasoft.DataValueType.LOOKUP,
					lookupListConfig: {
						orders: [
							{
								columnPath: "Priority"
							}
						]
					}
				},
				/**
				 * Owner column value.
				 */
				"Owner": {
					dataValueType: this.Terrasoft.DataValueType.LOOKUP,
					lookupListConfig: {
						hideActions: true,
						filter: BaseFiltersGenerateModule.OwnerFilter
					}
				},
				/**
				 * Group column value.
				 */
				"Group": {
					lookupListConfig: {
						hideActions: true,
						filter: function() {
							return this.Terrasoft.createColumnInFilterWithParameters("SysAdminUnitTypeValue", [
								ServiceDeskConstants.SysAdminUnitType.Organization.Value,
								ServiceDeskConstants.SysAdminUnitType.Division.Value,
								ServiceDeskConstants.SysAdminUnitType.Managers.Value,
								ServiceDeskConstants.SysAdminUnitType.Team.Value
							]);
						}
					}
				},
				/**
				 * Status column value.
				 */
				"Status": {
					lookupListConfig: {
						columns: ["IsFinal", "IsResolved", "IsPaused"],
						filter: function() {
							var status = this.get("OriginalStatus");
							var filterGroup = new this.Terrasoft.createFilterGroup();
							if (!status || status.IsFinal) {
								filterGroup.add("emptyFilter", this.Terrasoft.createColumnIsNullFilter("Id"));
								return filterGroup;
							}
							filterGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.OR;
							filterGroup.add("StatusFilter", this.Terrasoft.createColumnFilterWithParameter(
								this.Terrasoft.ComparisonType.EQUAL,
								"[CaseNextStatus:NextStatus].Status", this.get("OriginalStatus").value));
							filterGroup.add("StatusFilterCurrent", this.Terrasoft.createColumnFilterWithParameter(
								this.Terrasoft.ComparisonType.EQUAL,
								"Id", this.get("OriginalStatus").value));
							return filterGroup;
						}
					}
				},
				"CurrentUserDate": {
					dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT
				},
				/**
				 * Cached system settings "ClearAssigneeOnCaseReopening" value.
				 */
				"ClearAssigneeOnCaseReopening": {
					dataValueType: this.Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * Object contains columns and bound entities values.
				 */
				"CopyContext": {
					dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT
				}
			},
			methods: {

				/**
				 * Get user Operation Right and set RegisteredOnTipContent.
				 * @protected
				 */
				getUserSettingsOperationRight: function() {
					var operationsToRequest = [];
					operationsToRequest.push("CanManageWorkplaceSettings");
					operationsToRequest.push("CanChangeCaseSatisfactionLevel");
					RightUtilities.checkCanExecuteOperations(operationsToRequest, function(result) {
						if (result) {
							this.set("CanManageWorkplaceSetting", result.CanManageWorkplaceSettings);
							this.set("CanChangeCaseSatisfactionLevel", result.CanChangeCaseSatisfactionLevel);
						}
						this.setRegisteredOnTipContent();
					}, this);
				},

				/**
				 * Set ToolTip RegisteredOn value.
				 * @protected
				 */
				setRegisteredOnTipContent: function() {
					if (this.get("CanManageWorkplaceSetting")) {
						return this.get("Resources.Strings.TimeZoneSysSettingMessage");
					} else {
						return this.get("Resources.Strings.TimeZoneUserProfileMessage");
					}
				},

				/**
				 * Sets Solution Time for Solution field.
				 * @protected
				 * @param {Object} name field wich set
				 * @param {string} time current user time
				 */
				setSolutionTimeIfEmpty: function(name, time) {
					if (!this.get(name)) {
						this.set(name, time);
					}
				},

				/**
				 * Sets CurrentUser Time for Solution Status.
				 * @protected
				 * @param {Object} response from service
				 */
				setSolutionsTime: function(response) {
					var time = response && response.GetContactTimezoneResult ?
							this.Terrasoft.utils.date.parseDate(response.GetContactTimezoneResult) :
							null;
					this.set("SolutionProvidedOn", time);
					this.setSolutionTimeIfEmpty("FirstSolutionProvidedOn", time);
				},

				/**
				 * Get Current User Time
				 * @protected
				 * @param {Guid} contactId contact id
				 * @param {Function} callback function that use CurrentTime
				 */
				getContactTimeAsync: function(contactId, callback) {
					var config = {
						serviceName: "CaseTimezoneService",
						methodName: "GetContactTimezone",
						scope: this,
						data: {
							contactId: contactId
						}
					};
					this.callService(config, callback, this);
				},

				/**
				 * On solution term container render handler.
				 * @protected
				 */
				onSolutionContainerRendered: function() {
					this.afterTermContainerRendered("SolutionCaptionRendered");
				},

				/**
				 * On response term container render handler.
				 * @protected
				 */
				onResponseContainerRendered: function() {
					this.afterTermContainerRendered("ResponseCaptionRendered");
				},

				/**
				 * Checks need to change the owner and if so replace.
				 * @obsolete
				 * @param {Object} status The new status.
				 */
				/* jshint ignore:start */
				/*ignore jslint start*/
				changeOwner: function(status) {
					var obsoleteMessage = Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage;
					this.log(Ext.String.format(obsoleteMessage, "changeOwner", "autochangeOwner"));
					this.autochangeOwner();
				},
				/*ignore jslint end*/
				/* jshint ignore:end */

				/**
				 * Checks need to change the owner and if so replace.
				 */
				autochangeOwner: function() {
					var status = this.get("Status");
					var previousStatus = this.get("PreviousStatus");
					if ((status.value === ServiceDeskConstants.CaseState.Reopened) &&
						(status.value !== previousStatus.value) && this.get("ClearAssigneeOnCaseReopening")) {
						this.set("Owner", null);
					} else if (status.value === ServiceDeskConstants.CaseState.InProgress &&
						(status.value !== previousStatus.value)) {
						var owner = this.get("Owner");
						var contact = this.Terrasoft.SysValue.CURRENT_USER_CONTACT;
						if (!owner) {
							this.set("Owner", contact);
						}
					}
				},

				/**
				 * Sets the Number of Case.
				 * @protected
				 */
				setCaseNumber: function() {
					if (this.isAddMode() || this.isCopyMode()) {
						if (!this.get("Number")) {
							this.getIncrementCode(function(response) {
								this.set("Number", response);
							});
						}
					}
				},

				/**
				 * @inheritDoc BasePageV2#asyncValidate
				 * @overridden
				 */
				asyncValidate: function(callback, scope) {
					this.callParent([function(response) {
						if (!this.validateResponse(response)) {
							return;
						}
						Terrasoft.chain(
							function(next) {
								this.validateAccountOrContactFilling(function(response) {
									if (this.validateResponse(response)) {
										next();
									}
								}, this);
							},
							function(next) {
								callback.call(scope, response);
								next();
							}, this);
					}, this]);
				},

				/**
				 * Non-empty field check for "Contact" and "Account".
				 * @param {Function} callback callback function.
				 * @param {Terrasoft.BaseSchemaViewModel} scope Execution context of callback-function
				 */
				validateAccountOrContactFilling: function(callback, scope) {
					var account = this.get("Account");
					var contact = this.get("Contact");
					var result = {
						success: true
					};
					if (this.Ext.isEmpty(account) && this.Ext.isEmpty(contact)) {
						result.message = this.get("Resources.Strings.RequiredContactOrAccountMessage");
						result.success = false;
					}
					callback.call(scope || this, result);
				},

				/**
				 * The handler that checks whether the status is resolved.
				 * @protected
				 * @virtual
				 * @param {Object} status Case status.
				 */
				handleResolvedStatus: function(status) {
					if (status.IsResolved) {
						this.getContactTimeAsync(this.Terrasoft.SysValue.CURRENT_USER_CONTACT.value,
							this.setSolutionsTime);
					}
				},

				/**
				 * Clears "SolutionProvidedOn" if the status has been changes from "IsResolved" to not "IsFinal".
				 * @param {Object} status Case status.
				 * @deprecated
				 */
				clearSolutionProvidedOn: function(status) {
					var previousStatus = this.get("PreviousStatus");
					if (!status.IsFinal && previousStatus.IsResolved && this.get("SolutionProvidedOn")) {
						this.set("SolutionProvidedOn", 0);
					}
				},

				/**
				 * The handler that checks whether the status "IsFinal".
				 * @param {Object} status Case status
				 */
				handleFinalStatus: function(status) {
					if (status.IsFinal && !this.get("ClosureDate")) {
						this.getContactTimeAsync(this.Terrasoft.SysValue.CURRENT_USER_CONTACT.value,
							function(response) {
								if (response && response.GetContactTimezoneResult) {
									this.set("ClosureDate", this.Terrasoft.utils.date.parseDate(response.GetContactTimezoneResult));
								}
							});
						if (this.get("OriginalSolutionProvidedOn")) {
							var originalSolutionProvidedOn = this.get("OriginalSolutionProvidedOn");
							this.set("SolutionProvidedOn", originalSolutionProvidedOn);
						}
					} else {
						this.set("ClosureDate", null);
					}
				},

				/**
				 * The handler set closure code in null.
				 */
				handleReopenStatus: function() {
					this.set("ClosureCode", null);
				},

				/**
				 * Get "Status" properties.
				 * @protected
				 */
				getStatusProperties: function() {
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						"rootSchemaName": "CaseStatus",
						"serverESQCacheParameters": {
							cacheLevel: Terrasoft.ESQServerCacheLevels.SESSION,
							cacheGroup: "CasePage",
							cacheItemName: "CaseStatus"
						}
					});
					esq.addColumn("Id", "value");
					esq.addColumn("IsFinal");
					esq.addColumn("Name", "displayValue");
					esq.addColumn("IsResolved");
					esq.addColumn("IsPaused");
					esq.getEntityCollection(function(response) {
						if (response && response.success) {
							var status = response.collection.findByFn(function(item) {
								return item.values.value === this.get("Status").value;
							}, this);
							if (status) {
								this.set("Status", status.values, {silent: true});
							}
						}
					}, this);
				},

				/**
				 * The handler that checks whether the status is equal to "IsPaused".
				 * If the is "IsPaused", status is cleared
				 * @param {Object} status Case status
				 */
				handlePausedStatus: this.Terrasoft.emptyFn,

				/**
				 * "Status" change event handler.
				 * Changing the status from initial status to any other, sets the "RespondedOn" field by current date and time.
				 * @protected
				 */
				onStatusChanged: function() {
					var status = this.get("Status");
					if (!status) {
						return;
					}
					this.autochangeOwner();
					if (this.Ext.isEmpty(status.IsFinal) || this.Ext.isEmpty(status.IsResolved) ||
						this.Ext.isEmpty(status.IsPaused)) {
						this.getStatusProperties(status);
						return;
					}
					if (this.isStatusDef() === false && !this.get("RespondedOn")) {
						this.getContactTimeAsync(this.Terrasoft.SysValue.CURRENT_USER_CONTACT.value,
							function(response) {
								if (response && response.GetContactTimezoneResult) {
									this.set("RespondedOn", this.Terrasoft.utils.date.parseDate(response.GetContactTimezoneResult));
								}
							});
					}
					var originalStatus = this.get("OriginalStatus");
					if (!originalStatus) {
						return;
					}
					if (this.isNew || originalStatus !== status) {
						this.handleFinalStatus(status);
						this.handlePausedStatus(status);
					}
					var previousStatus = this.get("PreviousStatus");
					if (previousStatus.IsResolved && !(status.IsResolved || status.IsFinal)) {
						this.handleReopenStatus();
					}
					this.set("PreviousStatus", status);
				},

				/**
				 * Checks whether the field "RespondedOn" is not empty or it has been changed.
				 * @protected
				 * @returns {Boolean} RespondedOn updating flag
				 */
				needUpdateRespondedOn: function() {
					return this.get("RespondedOn") && this.changedValues && this.changedValues.RespondedOn;
				},

				/**
				 * Checks whether the field "SolutionProvidedOn" is not empty or it has been changed.
				 * @protected
				 * @returns {Boolean} SolutionProvidedOn updating flag
				 */
				needUpdateSolutionProvidedOn: function() {
					return this.get("SolutionProvidedOn") && this.changedValues && this.changedValues.SolutionProvidedOn;
				},

				/**
				 * Checks whether the field "FirstSolutionProvidedOn" is not empty or it has been changed.
				 * @protected
				 * @returns {Boolean} FirstSolutionProvidedOn updating flag
				 */
				needUpdateFirstSolutionProvidedOn: function() {
					return this.get("FirstSolutionProvidedOn") && this.changedValues && this.changedValues.FirstSolutionProvidedOn;
				},

				/**
				 * Checks whether "Status" column value and system settings "StatusDefSysSettingsValue" value are equal.
				 * @protected
				 * @returns {Boolean} Default status flag
				 */
				isStatusDef: function() {
					var status = this.get("Status");
					var statusDefSysSettingsValue = this.get("StatusDefSysSettingsValue");
					if (!status || !statusDefSysSettingsValue) {
						return;
					}
					return statusDefSysSettingsValue.value === status.value;
				},

				/**
				 * Start tracking case status changes via GoogleTagManager.
				 * @private
				 */
				_startPerformanceAnalyzer: function() {
					this.trackCaseStatusConfig.isTrackingStatusChanging = true;
					var performanceManagerLabel = this.get("PreviousStatus").displayValue +
						"_" + this.get("Status").displayValue;
					var action = performanceManagerLabel.replace(/ /g, "_");
					this.trackCaseStatusConfig.action = action;
					this.startGoogleTagManagerMeasurements();
				},

				/**
				 * Stop tracking case status changes via GoogleTagManager.
				 * @private
				 */
				_stopPerformanceAnalyzer: function() {
					this.stopGoogleTagManagerMeasurements();
					this.trackCaseStatusConfig.isTrackingStatusChanging = false;
				},

				/**
				 * @inheritdoc Terrasoft.BaseSchemaViewModel#getGoogleTagManagerData
				 * @overridden
				 */
				getGoogleTagManagerData: function() {
					var data = this.callParent(arguments);
					if (this.trackCaseStatusConfig.isTrackingStatusChanging) {
						this.Ext.apply(data, {
							action: this.trackCaseStatusConfig.action
						});
					}
					return data;
				},
				
				/**
				 * Check status changing.
				 * @private
				 * @returns {Boolean} True, if status was changed.
				 */
				_isStatusChanged: function () {
					var previousStatus = this.get("PreviousStatus");
					var currentStatus = this.get("Status");
					if (previousStatus && currentStatus) {
						return previousStatus.value !== currentStatus.value;
					}
					return false;
				},

				/**
				 * Checks the rights, validates values, saves values.
				 * If necessary, recalculates the value of the "RespondedOn" before saving.
				 * @protected
				 * @virtual
				 * @param {Object} config Config menu.
				 * @param {Object} status Status object.
				 */
				save: function(config, status) {
					if (this._isStatusChanged()) {
						var currentUserDateTime = this.get("CurrentUserDate");
						if (this.Ext.isEmpty(currentUserDateTime) && this.getIsFeatureEnabled("ShowTimeZonePopup")) {
							this.showTimeZoneSetupDialog();
							return;
						}
					}
					if (!this.trackCaseStatusConfig.isTrackingStatusChanging) {
						this._startPerformanceAnalyzer();
					}
					var argumentsToSave = [];
					if (this.Ext.isEmpty(arguments)) {
						argumentsToSave = this.get("SaveArguments");
					} else {
						argumentsToSave = arguments;
					}
					if (!this.get("IsStatusActualized")) {
						if (this.needToSetActualStatus(status)) {
							this.setActualStatus(status);
						} else {
							this.set("IsStatusActualized", true);
							this.setStatusIsCloseOnSave(status);
						}
						this.saveCard();
					}
					if (this.get("IsCloseOnSave")) {
						if (!this.get("IsNeedToCallParent")) {
							this.set("SaveArguments", arguments);
							this.getContactTimeAsync(this.Terrasoft.SysValue.CURRENT_USER_CONTACT.value,
								this.setSolutionDates);
							return;
						}
					}
					this.setSolutionRemains();
					this.setIsCategoryEnabled();
					this.updateOriginals();
					this.callParent(argumentsToSave);
					this.set("IsNeedToCallParent", false);
					this.set("IsStatusActualized", false);
					this.set("SaveArguments", null);
				},

				/**
				 * Sets actual status.
				 * If status is undefined gets it from flatCaseStatusCache.
				 * @protected
				 * @param {Object} status Status object.
				 */
				setActualStatus: function(status) {
					status = status || this.get("Status");
					var flatCaseStatusCache = this.getFlatCaseStatusCache();
					var actualStatus;
					if (status) {
						actualStatus = this.getIsFeatureEnabled("CaseStagesFromDCM") ?
							this.getCaseStatusFromStatusCache(status) : flatCaseStatusCache[status.value];
					}
					actualStatus = actualStatus || this.get("StatusDefSysSettingsValue");
					this.set("Status", actualStatus);
					this.set("IsStatusActualized", true);
				},

				/**
				 * Checks necessity of call setActualStatus method.
				 * @protected
				 * @param {Object} status Status object.
				 */
				needToSetActualStatus: function(status) {
					status = status || this.get("Status");
					return this.isNew || !this.Terrasoft.isEqual(this.get("PreviousStatus"), status);
				},

				/**
				 * Checks IsCloseOnSave of status and sets it if it`s empty.
				 * If status is undefined gets it from flatCaseStatusCache.
				 * @protected
				 * @param {Object} status Status object.
				 */
				setStatusIsCloseOnSave: function(status) {
					status = status || this.get("Status");
					if (status && this.Ext.isEmpty(status.IsCloseOnSave)) {
						var flatCaseStatusCache = this.getFlatCaseStatusCache();
						var flatStatus = flatCaseStatusCache[status.value];
						if (flatStatus) {
							status.IsCloseOnSave = flatStatus.IsCloseOnSave;
						}
					}
				},

				/**
				 * Sets solution remains.
				 * @protected
				 */
				setSolutionRemains: function() {
					var solutionRemainsSetter = this.get("SolutionRemainsSetter");
					if (solutionRemainsSetter) {
						this.set("SolutionRemains", solutionRemainsSetter);
					} else {
						this.set("SolutionRemains", 0);
					}
				},

				/**
				 * Sets IsCategoryEnabled property.
				 * @protected
				 */
				setIsCategoryEnabled: function() {
					var isCategoryEnabled = this.isNew || !this.get("Category");
					this.set("IsCategoryEnabled", isCategoryEnabled);
				},

				/**
				 * Sets the date if necessary.
				 * @protected
				 * @param {Object} response Response from service.
				 */
				setSolutionDates: function(response) {
					var responseTime = response && response.GetContactTimezoneResult ?
							this.Terrasoft.utils.date.parseDate(response.GetContactTimezoneResult) :
							null;
					if (this.needUpdateRespondedOn()) {
						this.set("RespondedOn", responseTime);
					}
					if (this.needUpdateSolutionProvidedOn()) {
						this.set("SolutionProvidedOn", responseTime);
					}
					if (this.needUpdateFirstSolutionProvidedOn()) {
						this.set("FirstSolutionProvidedOn", responseTime);
					}
					this.set("IsNeedToCallParent", true);
					this.save();
				},

				/**
				 * Processing saving case after selecting menu item quick save button.
				 * @protected
				 */
				saveCard: function() {
					var status = this.get("Status");
					if (this.getIsFeatureDisabled("CommonCaseClosureCode")) {
						var closureCode = status.ClosureCode;
						if (closureCode && !this.get("ClosureCode")) {
							this.set("ClosureCode", closureCode);
						}
					}
					this.set("IsCloseOnSave", status.IsCloseOnSave);
					this.autochangeOwner();
				},

				/**
				 * @inheritDoc BasePageV2#onCloseCardButtonClick
				 * @overridden
				 */
				onCloseCardButtonClick: function() {
					this.hideBodyMask({
						uniqueMaskId: "case"
					});
					this.callParent(arguments);
				},

				/**
				 * Processing selecting menu item quick save button.
				 * @protected
				 * @param {Object} config Config menu.
				 */
				onResolvedButtonMenuClick: function(config) {
					this._startPerformanceAnalyzer();
					config = config || this.handleButtonCaptionClick();
					var status = config.Status;
					if (!status) {
						return;
					}
					//TODO #SD-3725 Remove property setting after implementation of the task.
					this.isNeedToReloadEntity = true;
					this.save(config, status);
				},

				handleButtonCaptionClick: function() {
					var config = {isSilent: true};
					if (!this.resolvedButtonMenuItems.isEmpty()) {
						Ext.apply(config, this.resolvedButtonMenuItems.getByIndex(0).get("Tag"));
					}
					return config;
				},

				/**
				 * @inheritdoc Terrasoft.BasePageV2#onProcessCardSaved
				 * @overridden
				 */
				onProcessCardSaved: function() {
					this.callParent(arguments);
					this.set("ProcessCardSavedArgument", arguments[0]);
				},

				/**
				 * @inheritdoc Terrasoft.BasePageV2#onSaved
				 * @overridden
				 */
				onSaved: function() {
					this._stopPerformanceAnalyzer();
					this.callParent(arguments);
					var response = arguments[0];
					this.hideBodyMask({
						uniqueMaskId: "case"
					});
					if (!response.success) {
						return;
					}
					this.createBoundEntities();
					if (this.get("IsCloseOnSave") && !this.get("NextPrcElReady")) {
						if (this.get("ProcessCardSavedArgument") && !this.$IsProcessMode) {
							this.onCloseCardButtonClick();
						}
					} else {
						if (!this.isNewMode()) {
							this.set("PrimaryColumnValue", this.get("Id"));
							this.initResolvedButton();
							//TODO #SD-3725 Remove all "if" block after implementation of the task.
							if (this.isNeedToReloadEntity) {
								this.reloadEntity();
								this.isNeedToReloadEntity = false;
							}
						}
					}
				},

				/**
				 * Create bound entities after main entity saved.
				 * @protected
				 */
				createBoundEntities: function() {
					var defValues = this.get("CopyContext");
					if (!defValues || !(defValues.dependendEntities)) {
						return;
					}
					var dependendEntities = defValues.dependendEntities;
					var insertBatchQuery = this.Ext.create("Terrasoft.BatchQuery");
					for (var i = 0; i < dependendEntities.length; i++) {
						insertBatchQuery.add(this._getBoundEntityInsert(dependendEntities[i]));
					}
					insertBatchQuery.execute();
					delete defValues.dependendEntities;
				},

				/**
				 * Create insert query from config.
				 * @param dependendEntities Config for depended entities.
				 * @returns {Terrasoft.InsertQuery}
				 * @private
				 */
				_getBoundEntityInsert: function(dependendEntities) {
					var insert = this.Ext.create("Terrasoft.InsertQuery", {
						rootSchemaName: dependendEntities.entitySchemaName
					});
					for (var j = 0; j < dependendEntities.columnValues.length; j++) {
						var column = dependendEntities.columnValues[j];
						insert.setParameterValue(column.name, column.value, column.dataValueType);
					}
					return insert;
				},

				/**
				 * Updates information about initial object data.
				 * @protected
				 * @param {Boolean} isNull Cleaning flag of initial data
				 */
				updateOriginals: function(isNull) {
					var status = isNull ? null : this.get("Status");
					this.set("OriginalStatus", status);
					if (status) {
						this.set("IsOriginalStatusPaused", status.IsPaused);
					}
					this.set("OriginalSolutionProvidedOn", isNull ? null : this.get("SolutionProvidedOn"));
				},

				/**
				 * @inheritdoc BasePageV2#initEntity
				 * @overridden
				 */
				initEntity: function(callback, scope) {
					this.callParent([
						function() {
							this.initEntityCallback(callback, scope);
						}, scope
					]);
				},

				/**
				 * Sets context help identifier.
				 * @protected
				 */
				initContextHelp: function() {
					this.set("ContextHelpId", 1063);
					this.callParent(arguments);
				},

				/**
				 * @inheritDoc BasePageV2#onEntityInitialized
				 * @overridden
				 */
				onEntityInitialized: function() {
					this.callParent(arguments);
					this.setInitialValues();
					this.setDateDiff();
					this.renderCaptionStyle();
					this.applyCopyContext();
				},

				/**
				 * @inheritDoc BasePageV2#initDcmActionsDashboardVisibility
				 * @overridden
				 */
				initDcmActionsDashboardVisibility: function(){
					this.callParent(arguments);
					this.initResolvedButton();
				},

				/**
				 * Sets entity column values from OpenCardInChain config.
				 * @protected
				 */
				applyCopyContext: function() {
					var defValues = this.get("CopyContext");
					if (!defValues || !(defValues.entityColumnValues)) {
						return;
					}
					var entityColumnValues = defValues.entityColumnValues;
					for (var i = 0; i < entityColumnValues.length; i++) {
						this.set(entityColumnValues[i].name, entityColumnValues[i].value);
					}
					delete defValues.entityColumnValues;
				},


				/**
				 * Sets default active tab.
				 * @protected
				 */
				setDefaultActiveTab: function() {
					if (this.isNewMode() && this.$TabsCollection.indexOfKey("CaseInformationTab") >= 0) {
						this.set("DefaultTabName", "CaseInformationTab");
					}
				},

				/**
				 * Sets model initial values.
				 * @protected
				 */
				setInitialValues: function() {
					this.Terrasoft.SysSettings.querySysSettingsItem("CaseClosureCodeDef", function(value) {
						this.set("DefCaseClosureCode", value);
					}, this);
					this.updateOriginals();
					this.set("PreviousStatus", this.get("Status"));
					this.setCaseNumber();
					this.setRegisteredDate();
					this.setDateDiff();
					this.setAccount();
					this.setTermContainers();
					this.setPriorityImage();
					this.setOwnerFromQueue();
				},

				/**
				 * Sets case owner when queue mode.
				 * @protected
				 */
				setOwnerFromQueue: function() {
					if (this.get("IsQueueProcessMode")) {
						this.set("Owner", this.Terrasoft.SysValue.CURRENT_USER_CONTACT);
					}
				},

				/**
				 * @inheritdoc Terrasoft.BasePageV2#onQueueInfoFinded
				 * @overriden
				 */
				 onQueueInfoFinded: function () {
					this.callParent(arguments);
					this.setOwnerFromQueue();	
				},

				/**
				 * Sets RegisteredOn date for New Case.
				 * @protected
				 */
				setRegisteredDate: function() {
					if (this.isNewMode()) {
						var currentUserDateTime = this.get("CurrentUserDate");
						if (!this.Ext.isEmpty(currentUserDateTime)) {
							this.set("RegisteredOn", currentUserDateTime);
						} else if (this.getIsFeatureEnabled("ShowTimeZonePopup")) {
							this.showTimeZoneSetupDialog();
						} else {
							this.set("RegisteredOn", new Date());
						}
					}
				},

				/**
				 * Shows dialog to set up Time zone.
				 * @private
				 */
				showTimeZoneSetupDialog: function() {
					var modalBoxContainer = ModalBox.show(this.modalBoxSize);
					ModalBox.setSize(400, 255);
					var casePageModuleConfig = {
						renderTo: modalBoxContainer,
						id: this.sandbox.id + "_CasePageTimeZoneModule"
					};
					this.sandbox.loadModule("CasePageTimeZoneModule", casePageModuleConfig);
				},

				/**
				 * Sets priority field icon.
				 */
				setPriorityImage: function() {
					if (!this.isNewMode()) {
						return;
					}
					var priority = this.get("Priority");
					if (!priority) {
						return;
					}
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "CasePriority"
					});
					esq.addColumn("Image");
					esq.filters.add("defaultPriorityFilter", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "Id", priority.value));
					esq.getEntityCollection(function(result) {
						if (!result.success) {
							return;
						}
						var item = result.collection.getItems()[0];
						if (!item) {
							return;
						}
						var image = item.get("Image");
						var updatedValue = {};
						updatedValue.value = item.get("Id");
						updatedValue.primaryImageValue = image.value;
						updatedValue.displayValue = priority.displayValue + " ";
						this.set("Priority", updatedValue);
					}, this);
				},

				/**
				 * Sets term containers initial values.
				 * @protected
				 */
				setTermContainers: function() {
					this.set("ResponseCaptionRendered", false);
					this.set("SolutionCaptionRendered", false);
				},

				/**
				 * Sets Account field value by Contact.
				 * @protected
				 */
				setAccount: function() {
					var contact = this.get("Contact");
					if (contact && !this.get("Account")) {
						var account = contact.Account;
						if (account) {
							this.set("Account", account);
						}
					}
				},

				/**
				 * @inheritDoc BasePageV2#init
				 * @overridden
				 */
				init: function() {
					this.initCopyContext();
					this.initSysSettings();
					this.getUserSettingsOperationRight();
					this.statusDefSysSettingsName = "CaseStatusDef";
					this.callParent(arguments);
					this.setDefaultActiveTab();
					if (this.isNew) {
						this.Terrasoft.SysSettings.querySysSettingsItem(this.statusDefSysSettingsName, function(value) {
							this.set("StatusDefSysSettingsValue", value);
							this.initResolvedButton();
						}, this);
					} else {
						this.initResolvedButton();
					}
				},

				/**
				 * Initialize resolved button.
				 */
				initResolvedButton: function() {
					var recordId = this.get("PrimaryColumnValue");
					this.initResolvedButtonCollection(recordId);
					this.sandbox.publish("UpdateResolvedButtonMenu", recordId, [this.sandbox.id]);
				},

				/**
				 * @inheritdoc BasePageV2#onDestroy
				 * @overridden
				 */
				onDestroy: function() {
					this.hideBodyMask({
						uniqueMaskId: "case"
					});
					this.callParent(arguments);
				},

				/**
				 * @inheritDoc Terrasoft.BaseSectionV2#subscribeSandboxEvents
				 * @overridden
				 */
				subscribeSandboxEvents: function() {
					this.callParent(arguments);
					var resolvedClickSubscriberId = this.sandbox.id;
					this.sandbox.subscribe("OnResolvedButtonMenuClick", function() {
						var tagMenuItem = arguments[0];
						this.onResolvedButtonMenuClick(tagMenuItem);
					}, this, [resolvedClickSubscriberId]);
					this.sandbox.subscribe("CreateCaseFromHistory", this.onCreateCaseFromHistory,
							this, [this.getHistoryModuleId()]);
				},

				/**
				 * List of column names, which copies when case created from history.
				 * @virtual
				 * @protected
				 * @returns {Array} Columns to copy.
				 */
				getCaseColumnNamesToCopy: function() {
					var caseCopiedColumns = [];
					var caseColumns = this.columns;
					this.Terrasoft.each(caseColumns, function(column) {
						if (column.isValueCloneable && column.isValueCloneable === true) {
							caseCopiedColumns.push(column.name);
						}
					}, this);
					return caseCopiedColumns;
				},

				/**
				 * Copy case column values.
				 * @private
				 * @returns {Array} Default column values.
				 */
				_getCopiedCaseColumnValues: function() {
					var caseEntityColumns = [];
					var copyColumnNames = this.getCaseColumnNamesToCopy();
					for (var i = 0; i < copyColumnNames.length; i++) {
						var columnName = copyColumnNames[i];
						var columnValue = this.get(columnName);
						if (!this.Ext.isEmpty(columnValue)) {
							caseEntityColumns.push({
								"name": columnName,
								"value": columnValue
							});
						}
					}
					return caseEntityColumns;
				},

				/**
				 * List of all columns, which copies when case created from history.
				 * @protected
				 * @virtual
				 * @param {Object} historyData Specific case data.
				 * @returns {Array} Array of case columns to copy.
				 */
				getNewCaseColumnValues: function(historyData) {
					var newCaseColumnValues = this._getCopiedCaseColumnValues();
					var historyDataColumnValues = this._getHistoryCaseColumnValues(historyData);
					newCaseColumnValues = this.applyCaseHistoryColumns(newCaseColumnValues, historyDataColumnValues);
					return newCaseColumnValues;
				},

				/**
				 * Applys history column values to copied case column values.
				 * @protected
				 * @virtual
				 * @param {Array} newCaseColumnValues Case columns to copy,
				 * @param {Array} historyDataColumnValues Case history columns.
				 * @returns {Array} Copied case column values with case history columns.
				 */
				applyCaseHistoryColumns: function(newCaseColumnValues, historyDataColumnValues) {
					var copiedCaseColumns = historyDataColumnValues;
					for (var i = 0; i < newCaseColumnValues.length; i++) {
						var newCaseColumnName = newCaseColumnValues[i].name;
						var isCopiedColumnNotExist = this.Ext.isEmpty(
								Terrasoft.findWhere(copiedCaseColumns, {name: newCaseColumnName}));
						if (isCopiedColumnNotExist) {
							copiedCaseColumns.push(newCaseColumnValues[i]);
						}
					}
					return copiedCaseColumns;
				},

				/**
				 * Add history case columns to new case columns.
				 * @private
				 * @param {Object} historyData Copied case history column values.
				 * @returns {Array} Array of case columns to copy.
				 */
				_getHistoryCaseColumnValues: function(historyData) {
					var historyDataColumnValues = [];
					var subjectMaxLength = this.columns.Subject.size;
					historyDataColumnValues.push({
						"name": "Id",
						"value": historyData.newCaseId
					});
					historyDataColumnValues.push({
						"name": "Symptoms",
						"value": historyData.message
					});
					historyDataColumnValues.push({
						"name": "Subject",
						"value": historyData.message.substring(0, subjectMaxLength - 1)
					});
					historyDataColumnValues.push({
						"name": "ParentCase",
						"value": {value: this.getPrimaryColumnValue(), displayValue: this.getPrimaryDisplayColumnValue()}
					});
					historyDataColumnValues.push({
						"name": "Origin",
						"value": historyData.caseOrigin
					});
					if(!this.Ext.isEmpty(historyData.activityId)) {
						historyDataColumnValues.push({
							"name": "ParentActivity",
							"value": {value:historyData.activityId, displayValue: ""}
						});
					}
					return historyDataColumnValues;
				},

				/**
				 * Open new case card with copied case data.
				 * @param {Object} historyData Copied case data from history.
				 */
				onCreateCaseFromHistory: function(historyData) {
					var values = [{
						"entityColumnValues": this.getNewCaseColumnValues(historyData),
						"dependendEntities": historyData.dependentEntities,
						"mode": "CreateFromHistory"
					}];
					if (!this.get("EditPages")) {
						this.initEditPages();
					}
					const typeColumnName = this.get("TypeColumnName");
					const typeColumnValue = this.get(typeColumnName);
					this.openCardInChain({
						"schemaName": typeColumnValue && typeColumnValue.value ? this.getEditPageSchemaName(typeColumnValue.value)
						: this.getEditPageSchemaName(),
						"moduleId": this.sandbox.id + "_CasePage",
						"isSeparateMode": false,
						"defaultValues": values
					});
				},

				/**
				 * Get history module id.
				 * @return {String} Module id.
				 */
				getHistoryModuleId: function() {
					var moduleId = this.sandbox.id;
					return moduleId + "_MessageHistoryModule";
				},

				/**
				 * @inheritdoc Terrasoft.LookupQuickAddMixin#checkRightsCallback
				 * @overridden
				 */
				extractValuePairsFromFilters: function(entitySchema, columnName, lookupFilters) {
					if (columnName === "Contact") {
						lookupFilters = this.Ext.create("Terrasoft.Collection");
						this.set("Account", null);
					}
					return this.callParent(arguments);
				},

				/**
				 * @inheritDoc CasePageV2#getLookupQueryFilters
				 * @overridden
				 */
				getLookupQueryFilters: function(columnName) {
					var parentColumnName = this.get("ParentColumnName");
					var parentFilters = this.get(parentColumnName + "Filters");
					var filterGroup = this.callParent([columnName]);
					if (columnName === parentColumnName && parentFilters) {
						filterGroup.add(parentFilters);
					}
					return filterGroup;
				},

				/**
				 * @inheritDoc CasePageV2#getLookupQuery
				 * @overridden
				 */
				getLookupQuery: function(filterValue, columnName, isLookup) {
					var parentColumnName = this.get("ParentColumnName");
					var parentFilters = this.get(parentColumnName + "Filters");
					var prepareListColumnName = this.get("PrepareListColumnName");
					var prepareListFilters = this.get(prepareListColumnName + "Filters");
					var entitySchemaQuery = this.callParent([filterValue, columnName, isLookup]);
					if (columnName === prepareListColumnName && prepareListFilters) {
						entitySchemaQuery.filters.add(prepareListColumnName + "Filter", prepareListFilters);
					}
					if (columnName === parentColumnName && parentFilters) {
						entitySchemaQuery.filters.add(parentColumnName + "Filter", parentFilters);
					}
					return entitySchemaQuery;
				},
				/**
				 * Forms Owner's collection.
				 * @private
				 * @param {String} filter
				 */
				onPrepareOwner: function(filter) {
					const prepareListColumnName = "Owner";
					this.set("PrepareListColumnName", prepareListColumnName);
					let filtersCollection = this.Terrasoft.createFilterGroup();
					if (this.isAssigneeGroupFilled()) {
						const group = this.get("Group");
						filtersCollection.add("userInGroupFilter",
							this.Terrasoft.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL,
							"[SysAdminUnit:Contact:Id].[SysUserInRole:SysUser:Id].SysRole", group.value));
					} else {
						filtersCollection.add("existsFilter",
							this.Terrasoft.createColumnIsNotNullFilter("[SysAdminUnit:Contact].Id"));
					}
					this.set(prepareListColumnName + "Filters", filtersCollection);
					this.loadLookupData(filter, this.get(prepareListColumnName + "List"),
						prepareListColumnName, true);
				},

				/**
				 * Checks whether assignee group filled.
				 * @returns {Boolean} Is assignee group filled.
				 */
				isAssigneeGroupFilled: function() {
					const group = this.get("Group");
					return group && group.value && group.value !== this.Terrasoft.GUID_EMPTY;
				},

				/**
				 * Returns filters for fields "Owner" and "Group".
				 * @protected
				 * @virtual
				 */
				getOwnerDependenceFilters: this.Terrasoft.emptyFn,

				/**
				 * Forms collection of "Owner"'s within the group "Service Engineer".
				 * @private
				 * @param {Function} callback  Function of Owner's collection for list
				 * @param {Terrasoft.BaseSchemaViewModel} scope Context of callback-function
				 */
				getUsersInGroups: function(callback, scope) {
					scope.getGroupListCollection(function(groupCollection) {
						var prepareListColumnName = "Group";
						scope.set("PrepareListColumnName", prepareListColumnName);
						var esq = scope.Ext.create("Terrasoft.EntitySchemaQuery", {
							rootSchemaName: "SysAdminUnit"
						});
						esq.addColumn("Id");
						var group = scope.get("Group");
						if (group && group.value !== scope.Terrasoft.GUID_EMPTY) {
							groupCollection = [group.value];
						}
						if (groupCollection.length > 0) {
							esq.filters.add("GroupCollectionFilter", scope.Terrasoft.createColumnInFilterWithParameters(
								"[SysUserInRole:SysUser].SysRole", groupCollection));
						} else {
							esq.filters.add("emptyFilter", scope.Terrasoft.createColumnIsNullFilter("Id"));
						}
						esq.getEntityCollection(function(result) {
							var existsCollection = [];
							if (result.success) {
								result.collection.each(function(item) {
									existsCollection.push(item.get("Id"));
								});
							}
							callback(existsCollection, scope);
						}, scope);
					}, scope);
				},

				/**
				 * Get list of administrative groups.
				 * @private
				 * @param {Function} callback  Function of Owner's collection for list.
				 * @param {Terrasoft.BaseSchemaViewModel} scope Context of callback-function.
				 */
				getGroupListCollection: function(callback, scope) {
					scope.getGroupEsq(function(esq, scope) {
						esq.getEntityCollection(function(result) {
							var existsCollection = [];
							if (result.success) {
								result.collection.each(function(item) {
									existsCollection.push(item.get("Id"));
								});
							}
							callback(existsCollection);
						}, scope);
					}, scope);
				},

				/**
				 * @obsolete
				 * Forms Group's collection.
				 * @private
				 * @param {String} filter.
				 */
				onPrepareGroup: function(filter) {
					var prepareListColumnName = "Group";
					this.set("PrepareListColumnName", prepareListColumnName);
					this.getGroupEsq(function(esq, scope) {
						esq.getEntityCollection(function(result) {
							var existsCollection = [];
							if (result.success) {
								result.collection.each(function(item) {
									existsCollection.push(item.get("Id"));
								});
							}
							var filtersCollection = scope.Terrasoft.createFilterGroup();
							if (existsCollection.length > 0) {
								filtersCollection.add("existsFilter", scope.Terrasoft.createColumnInFilterWithParameters(
									"Id", existsCollection));
							} else {
								filtersCollection.add("emptyFilter", scope.Terrasoft.createColumnIsNullFilter("Id"));
							}
							scope.set(prepareListColumnName + "Filters", filtersCollection);
							scope.loadLookupData(filter, scope.get(prepareListColumnName + "List"),
								prepareListColumnName, true);
						}, scope);
					}, this);
				},

				/**
				 * Forms an instance of EntitySchemaQuery "Object" to select suitable group
				 * @private
				 * @param {Function} callback Function that forms the collection of "Group"
				 * @param {Terrasoft.BaseSchemaViewModel} scope Execution context of callback function
				 */
				getGroupEsq: function(callback, scope) {
					var esq = scope.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "SysAdminUnit"
					});
					esq.addColumn("Id");
					this.addGroupEsqFilters(esq);
					callback(esq, scope);
				},

				/**
				 * Forms filters for esq to select suitable group
				 * @private
				 * @param {Terrasoft.EntitySchemaQuery} esq entitySchemaQuery
				 */
				addGroupEsqFilters: function(esq) {
					esq.filters.add("ContactNotExistsFilter", this.Terrasoft.createColumnIsNullFilter("Contact"));
				},

				/**
				 * "Assign to me" button handler.
				 * Set owner by current user contact.
				 * @protected
				 */
				onAssignToMeClick: function() {
					this.set("Owner", this.Terrasoft.SysValue.CURRENT_USER_CONTACT);
				},

				/**
				 * Forms the case date of creation.
				 * @protected
				 * @virtual
				 * @return {String} Case date of creation.
				 */
				getCreatedOnDate: function() {
					var createdOn = this.get("CreatedOn");
					var caption = this.get("Resources.Strings.CreatedOnCaption") + " ";
					return createdOn ? caption + FormatUtils.smartFormatDate(createdOn) : "";
				},

				/**
				 * @inheritDoc BasePageV2#getPageHeaderCaption
				 * @overridden
				 */
				getPageHeaderCaption: function() {
					var template = this.getPageHeaderTemplate();
					var number = this.get("Number");
					if (this.isNewMode()) {
						return this.Ext.String.format(template, number);
					}
					var subject = this.get("Subject");
					return this.Ext.String.format(template, number, subject);
				},

				/**
				 * Returns page header template.
				 * @returns {string} Page header template.
				 */
				getPageHeaderTemplate: function() {
					return this.isNewMode() ?
						this.get("Resources.Strings.DefaultHeader") :
						this.get("Resources.Strings.HeaderTemplate");
				},

				/**
				 * Reads system settings to attributes.
				 * @protected
				 */
				initSysSettings: function() {
					this.Terrasoft.SysSettings.querySysSettingsItem("ClearAssigneeOnCaseReopening",
						function(value) {
							this.set("ClearAssigneeOnCaseReopening", value);
						}, this);
				},

				/**
				 * Sets CopyContext from openCardInChain default values.
				 * @protected
				 */
				initCopyContext: function() {
					var defValues = this.getDefaultValues()[0];
					if (defValues && defValues.mode === "CreateFromHistory") {
						this.set("Operation", Terrasoft.ConfigurationEnums.CardOperation.ADD);
						this.set("CopyContext", defValues);
					}
				},

				/**
				 * @inheritDoc BasePageV2#onRender
				 * @override
				 */
				onRender: function() {
					this.callParent(arguments);
					this.renderCaptionStyle();
				}
			},
			rules: {
				"Contact": {
					"FiltrationContactByAccount": {
						"ruleType": BusinessRuleModule.enums.RuleType.FILTRATION,
						"autocomplete": true,
						"autoClean": true,
						"baseAttributePatch": "Account",
						"comparisonType": this.Terrasoft.ComparisonType.EQUAL,
						"type": BusinessRuleModule.enums.ValueType.ATTRIBUTE,
						"attribute": "Account"
					}
				}
			}
		};
	}
);
