define("CasePage", ["css!MLSimilarCaseSearchCasePageCss"], function() {
	return {
		entitySchemaName: "Case",
		details: /**SCHEMA_DETAILS*/{
			"SimilarCaseDetail": {
				"schemaName": "MLSimilarCaseDetail",
				"entitySchemaName": "MLSimilarCase",
				"filter": {
					"detailColumn": "ParentCase",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		messages: {},
		mixins: {},
		methods: {

			/**
			 * Entity initialization end event.
			 * @protected
			 * @overriden
			 */
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.initSimilarCaseText();
			},

			/**
			 * Initialize found similar cases info.
			 * @protected
			 */
			initSimilarCaseText: function() {
				const select = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "MLSimilarCase"
				});
				select.addAggregationSchemaColumn("Id", Terrasoft.AggregationType.COUNT, "Count");
				select.filters.addItem(select.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
					"ParentCase", this.$Id));
				select.getEntityCollection(function(result) {
					if (result.success) {
						const row = result.collection.getByIndex(0);
						const template = this.get("Resources.Strings.FoundSimilarCaseTextTemplate");
						const count = row.$Count;
						const found = count >= 1;
						this.$SimilarCasesFound = found;
						if (!found) {
							return;
						}
						this.$FoundSimilarCasesText = this.Ext.String.format(template, row.$Count);
					}
				}, this);
			},

			/**
			 * Handles click on similar case button.
			 */
			onSimilarCaseLinkClick: function() {
				this.setActiveTab("SolutionTab");
			},

			/**
			 * Get url to similar cases found button.
			 */
			getFoundSimilarCasesIcon: function() {
				return this.Terrasoft.ImageUrlBuilder.getUrl(this.get("Resources.Images.SimilarCasesFoundIcon"));
			}
		},
		attributes: {
			"FoundSimilarCasesText": {
				"dataValueType": Terrasoft.DataValueType.TEXT
			},
			"SimilarCasesFound": {
				"dataValueType": Terrasoft.DataValueType.BOOLEAN,
				"value": false
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "SimilarCaseDetail",
				"parentName": "SolutionTab",
				"propertyName": "items",
				"index": 3,
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				}
			},
			{
				"operation": "insert",
				"name": "FoundSimilarCasesContainer",
				"parentName": "MessageHistoryGroup",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["found-similar-case-container"],
					"visible": {
						"bindTo": "SimilarCasesFound"
					},
					"items": []
				},
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FoundSimilarCasesIcon",
				"parentName": "FoundSimilarCasesContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.COMPONENT,
					"className": "Terrasoft.ImageView",
					"imageSrc": {"bindTo": "getFoundSimilarCasesIcon" },
					"classes": {"wrapClass": ["found-similar-cases-icon"]},
					"click": {
						"bindTo": "onSimilarCaseLinkClick"
					}
				}
			},
			{
				"operation": "insert",
				"name": "FoundSimilarCasesTextLabel",
				"parentName": "FoundSimilarCasesContainer",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.LABEL,
					"caption": {
						"bindTo": "FoundSimilarCasesText"
					},
					"labelClass": ["found-similar-cases-label"],
					"click": {
						"bindTo": "onSimilarCaseLinkClick"
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
