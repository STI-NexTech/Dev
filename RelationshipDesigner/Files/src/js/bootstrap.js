(function() {
	require.config({
		paths: {
			"RelationshipDiagramComponent": Terrasoft.getFileContentUrl("RelationshipDesigner", "src/js/relationship-diagram-component/mf/relationship-diagram-component.js"),
			"RelationshipDiagramComponentStyles": Terrasoft.getFileContentUrl("RelationshipDesigner", "src/js/relationship-diagram-component/mf/styles.css"),
			"RelationshipDiagramComponentOld": Terrasoft.getFileContentUrl("RelationshipDesigner", "src/js/relationship-diagram-component/old/main.js"),
			"RelationshipDiagramComponentOldStyles": Terrasoft.getFileContentUrl("RelationshipDesigner", "src/js/relationship-diagram-component/old/styles.css")
		},
		shim: {
			"RelationshipDiagramComponentOld": {
				deps: ["ng-core", "css-ltr!RelationshipDiagramComponentOldStyles"]
			}
		}
	});
}());
