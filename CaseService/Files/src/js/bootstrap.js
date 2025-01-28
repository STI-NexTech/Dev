(function() {
	require.config({
		paths: {
			"TermCalculationComponent": Terrasoft.getFileContentUrl("CaseService", "src/js/term-calculation-component/mf/term-calculation.js"),
			"TermCalculationComponentStyles": Terrasoft.getFileContentUrl("CaseService", "src/js/term-calculation-component/mf/styles.css"),
			"TermCalculationComponentOld": Terrasoft.getFileContentUrl("CaseService", "src/js/term-calculation-component/old/main.js"),
			"TermCalculationComponentOldStyles": Terrasoft.getFileContentUrl("CaseService", "src/js/term-calculation-component/old/styles.css"),
		},
		shim: {
			"TermCalculationComponentOld": {
				deps: ["ng-core", "css-ltr!TermCalculationComponentOldStyles"]
			}
		}
	});
})();