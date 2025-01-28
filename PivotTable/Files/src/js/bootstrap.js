(function() {
    require.config({
        paths: {
            "PivotTableComponent": Terrasoft.getFileContentUrl("PivotTable", "src/js/pivot-table-component/mf/pivot-table.js"),
            "PivotTableComponentStyles": Terrasoft.getFileContentUrl("PivotTable", "src/js/pivot-table-component/mf/styles.css"),
            "PivotTableComponentOld": Terrasoft.getFileContentUrl("PivotTable", "src/js/pivot-table-component/old/main.js"),
            "PivotTableComponentOldStyles": Terrasoft.getFileContentUrl("PivotTable", "src/js/pivot-table-component/old/styles.css"),
        },
        shim: {
            "PivotTableComponentOld": {
                deps: ["ng-core", "css-ltr!PivotTableComponentOldStyles"]
            }
        }
    });
})();
