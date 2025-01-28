define("SystemDesigner", ["SystemDesignerResources"], function (resources, NetworkUtilities) {
	return {
		methods: {
			/**
			 * Opens Copilot Intents page.
			 * @private
			 */
			_navigateToCopilotIntents: function () {
				this.sandbox.publish("PushHistoryState", {
					hash: "Section/CopilotIntents_ListPage"
				});
			},

			/**
			 * @return {Boolean} True if Copilot intent is enabled.
			 * @private
			 */
			_isGenAICopilotEnabled: function () {
				return this.getIsFeatureEnabled("GenAIFeatures.Copilot");
			}

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "SystemSettingsTile",
				"name": "CopilotIntents",
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": {"bindTo": "Resources.Strings.CopilotIntentsPage"},
					"tag": "_navigateToCopilotIntents",
					"click": {"bindTo": "invokeOperation"},
					"visible": {"bindTo": "_isGenAICopilotEnabled"},
					"isNew": true
				}
			}
		]
	};
});