define("CaseInServicePactDetail",
	function() {
		return {
			entitySchemaName: "Case",
			attributes: {},
			methods: {

				getCopyRecordMenuItem: this.Terrasoft.emptyFn,

				getEditRecordMenuItem: this.Terrasoft.emptyFn,

				getDeleteRecordMenuItem: this.Terrasoft.emptyFn,

				addDetailWizardMenuItems: this.Terrasoft.emptyFn,

				getSwitchGridModeMenuItem: this.Terrasoft.emptyFn,

				getAddRecordButtonVisible: function() {
					return false;
				}
			},
			messages: {}
		};
	});
