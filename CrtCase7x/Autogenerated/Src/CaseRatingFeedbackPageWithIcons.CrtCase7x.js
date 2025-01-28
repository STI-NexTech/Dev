define("CaseRatingFeedbackPageWithIcons", ["ViewUtilities","ImageView",
	"CaseRatingFeedbackPageWithIconsResources", "css!CaseRatingFeedbackPageWithIconsCSS"],
	function(ViewUtilities) {
		return {
			profileKey: null,
			attributes: {
				"SatisfactionLevelCollection": {
					"dataValueType": this.Terrasoft.DataValueType.COLLECTION
				},
				"CurrentPoint": {
					"dataValueType": this.Terrasoft.DataValueType.TEXT,
					"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
				},
			},
			diff:/**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "HowMuchDid",
					"parentName": "ThanksMessageContainer",
					"propertyName": "items",
					"values": {
						"itemType": this.Terrasoft.ViewItemType.LABEL,
						"classes": {
							"wrapClassName": ["how-much-did"]
						},
						"caption": {
							"bindTo": "Resources.Strings.HowMuchDid"
						},
						"labelConfig": {
							"classes": ["how-much-did"]
						}
					}
				},
				{
					"operation": "insert",
					"name": "SatisfactionContainer",
					"parentName": "ThanksMessageContainer",
					"propertyName": "items",
					"values": {
						"generator": "ConfigurationItemGenerator.generateContainerList",
						"classes": {
							"wrapClassName": ["satisfaction-level-container"]
						},
						"idProperty": "Id",
						"collection": "SatisfactionLevelCollection",
						"onGetItemConfig": "createSatisfactionLevelItemConfig"
					},
					index: 1
				},
				{
					"operation": "remove",
					"parentName": "ThanksMessageContainer",
					"propertyName": "items",
					"name": "ThanksLabel"
				}
			]/**SCHEMA_DIFF*/,
			methods: {
				
				init:function(callback, scope) {
					this.callParent([function() {
						this.setSatisfactionLevel(callback, scope);
						this.set("CurrentPoint", this.Terrasoft.feedbackConfig.point);
					}, this]);
				},

				onRender: function () {
					this.Terrasoft.each(this.get("SatisfactionLevelCollection"), function (item) {
						if (item.get("Point") == this.get("CurrentPoint")) {
							item.satisfactionSet();
						}
					}, this);
				},

				createSatisfactionLevelItemConfig: function(itemConfig, item) {
					var config = ViewUtilities.getContainerConfig(
						"satisfaction-level-container", ["satisfaction-level-container"]);
					itemConfig.config = config;
					var satisfactionLevelContainerConfig = this.getSatisfactionLabelConfig(item);
					config.items.push(satisfactionLevelContainerConfig);
				},

				getSatisfactionLabelConfig: function() {
					var labelContainerConfig = ViewUtilities.getContainerConfig(
						"label-container", ["satisfaction-label-wrap", "label-wrap"]);
					var labelConfig = {
						"className": "Terrasoft.ImageView",
						"imageSrc": {"bindTo":"getImageUrl"},
						"click": {"bindTo": "satisfactionSet"}
					};
					labelContainerConfig.items.push(labelConfig);
					return labelContainerConfig;
				},
				
				getServiceConfig: function() {
					var sendData = {
						token: this.get("Token"),
						comment: this.get("Comment") || "",
						rating: this.get("CurrentPoint") || ""
					};
					var config = {
						serviceName: "CaseRatingManagementService",
						methodName: "AddSatisfactionLevel",
						data: sendData
					};
					return config;
				},

				postComment: function() {
					this.showBodyMask();
					var config = this.getServiceConfig();
					this.callService(config, this.onCommentAndEstimationPost);
				},

				onCommentAndEstimationPost: function (response) {
					this.hideBodyMask();
					var result = response.AddSatisfactionLevelResult;
					if (result && result.success) {
							this.showInformationDialog(this.get("Resources.Strings.PostSuccess"),
								this.Terrasoft.emptyFn);
					} else {
						this.showInformationDialog(this.get("Resources.Strings.PostCommentFailed"),
							this.Terrasoft.emptyFn);
					}
				},
				
				createSatisfavactionViewModel: function(item) {
					var viewModel = Ext.create("Terrasoft.BaseViewModel", {
						values: {
							Id: item.Id,
							Name: item.Name,
							Point: item.Point,
							Image: item.Image
						},
						methods: {
							satisfactionSet: function() {
								var elSatisfactionLevel = document.getElementById("label-container-" + this.get("Id") + "-ViewModule");
								var elButtonsRating = document.querySelectorAll(".active");
								elButtonsRating.forEach(function(element) { element.classList.remove("active"); });
								elSatisfactionLevel.classList.add("active");
								this.Scope.set("CurrentPoint", this.get("Point"));
								this.Scope.callService(this.Scope.getServiceConfig(), this.Scope.Terrasoft.emptyFn);
							},
							getImageUrl: function() {
								var imageConfig = {
								source: Terrasoft.ImageSources.SYS_IMAGE,
								params: {
									primaryColumnValue: this.get("Image")
								}
							};
							return this.Terrasoft.ImageUrlBuilder.getUrl(imageConfig);
							}
						}
					});
					viewModel.sandbox = this.sandbox;
					viewModel.Terrasoft = this.Terrasoft;
					viewModel.Scope = this;
					return viewModel;
				},

				getCollection: function(collectionName) {
					var collection = this.get(collectionName);
					if (!collection) {
						collection = this.Ext.create("Terrasoft.BaseViewModelCollection");
						this.set(collectionName, collection);
					}
					return collection;
				},
				
				setSatisfactionLevel: function(callback, scope) {
					var config = {
						serviceName: "CaseRatingManagementService",
						methodName: "GetSatisfactionLevel",
					};
					this.callService(config, function (result) {
						var collection = this.getCollection("SatisfactionLevelCollection");
						var items = result.GetSatisfactionLevelResult.satisfactionLevels;
						items.sort((a, b) => a.Point > b.Point ? 1 : -1);
						this.Terrasoft.each(items, function(item) {
							var containerItem = this.createSatisfavactionViewModel(item);
							collection.add(containerItem.Id, containerItem);
						}, this);
						callback.call(scope || this);
					}, this);
				}
			}
		};
	});
