(function() {
    require.config({
        paths: {
            "ConfidenceLevelWidgetComponent": Terrasoft.getFileContentUrl("Opportunity", "src/js/confidence-level-widget/mf/confidence-level-widget.js"),
            "ConfidenceLevelWidgetComponentStyles": Terrasoft.getFileContentUrl("Opportunity", "src/js/confidence-level-widget/mf/styles.css"),
            "ConfidenceLevelWidgetComponentOld": Terrasoft.getFileContentUrl("Opportunity", "src/js/confidence-level-widget/old/main.js"),
            "ConfidenceLevelWidgetComponentOldStyles": Terrasoft.getFileContentUrl("Opportunity", "src/js/confidence-level-widget/old/styles.css"),
        },
        shim: {
            "ConfidenceLevelWidgetComponentOld": {
                deps: ["ng-core", "chartjs", "css-ltr!ConfidenceLevelWidgetComponentOldStyles"]
            }
        }
    });
})();
