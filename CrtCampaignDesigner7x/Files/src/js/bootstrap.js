(function () {
	require.config({
		paths: {
			"SimpleDiagram": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", "src/js/cytoscape.min.js"),
			"CampaignDesignerComponent": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", "src/js/campaign-designer-component/main.js"),
			"CampaignDesignerComponentStyles": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", "src/js/campaign-designer-component/styles.css"),
			"SvgRenderer": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", "src/js/canvg.min.js"),
			"CampaignGallery": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", 	"src/js/campaign-gallery-element/mf/campaign-gallery-element.js"),
			"CampaignGalleryStyles": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", 	"src/js/campaign-gallery-element/mf/styles.css"),
			"CampaignGalleryOld": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", 	"src/js/campaign-gallery-element/old/main.js"),
			"CampaignGalleryOldStyles": Terrasoft.getFileContentUrl("CrtCampaignDesigner7x", 	"src/js/campaign-gallery-element/old/styles.css"),
		},
		shim: {
			"SimpleDiagram": {
				deps: [""]
			},
			"CampaignDesignerComponent": {
				deps: ["ng-core", "css-ltr!CampaignDesignerComponentStyles"]
			},
			"CampaignGalleryOld": {
				deps: ["ng-core", "css-ltr!CampaignGalleryOldStyles"]
			},
			"SvgRenderer": {
				deps: [""]
			}
		}
	});
})();
