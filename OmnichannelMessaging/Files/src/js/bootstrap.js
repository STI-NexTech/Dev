(function() {
	require.config({
		paths: {
			"OmnichannelMessagingComponent": Terrasoft.getFileContentUrl("OmnichannelMessaging", "src/js/omnichannel-messaging-component/mf/omnichannel-messaging-component.js"),
			"OmnichannelMessagingComponentStyles": Terrasoft.getFileContentUrl("OmnichannelMessaging", "src/js/omnichannel-messaging-component/mf/styles.css"),
			"OmnichannelMessagingComponentOld": Terrasoft.getFileContentUrl("OmnichannelMessaging", "src/js/omnichannel-messaging-component/old/main.js"),
			"OmnichannelMessagingComponentOldStyles": Terrasoft.getFileContentUrl("OmnichannelMessaging", "src/js/omnichannel-messaging-component/old/styles.css")
		},
		shim: {
			"OmnichannelMessagingComponentOld": {
				deps: ["ng-core", "css-ltr!OmnichannelMessagingComponentOldStyles"]
			}
		}
	});
})();