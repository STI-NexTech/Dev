(function() {
    require.config({
        paths: {
            "ForecastComponent": Terrasoft.getFileContentUrl("CoreForecast", "src/js/forecast-component/mf/forecast-component.js"),
            "ForecastComponentStyles": Terrasoft.getFileContentUrl("CoreForecast", "src/js/forecast-component/mf/styles.css"),
            "ForecastComponentOld": Terrasoft.getFileContentUrl("CoreForecast", "src/js/forecast-component/old/main.js"),
            "ForecastComponentOldStyles": Terrasoft.getFileContentUrl("CoreForecast", "src/js/forecast-component/old/styles.css")
        },
        shim: {
            "ForecastComponentOld": {
                deps: ["ng-core", "css-ltr!ForecastComponentOldStyles"]
            }
        }
    });
})();
