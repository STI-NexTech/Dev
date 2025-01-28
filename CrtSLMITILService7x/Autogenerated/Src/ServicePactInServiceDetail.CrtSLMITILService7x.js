define("ServicePactInServiceDetail", [],
	function() {
		return {
			entitySchemaName: "ServiceInServicePact",
			methods: {

				/**
				 * Initializes detail parameters.
				 */
				initConfig: function() {
					this.callParent(arguments);
					var config = this.getConfig();
					config.lookupEntitySchema = config.lookupConfig.entitySchemaName = "ServicePact";
					config.sectionEntitySchema = "ServiceItem";
				},

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#init
				 * @overridden
				 **/
				init: function() {
					this.callParent(arguments);
					this.initConfig();
				},
				/**
				 * @inheritDoc Terrasoft.GridUtilitiesV2#getFilterDefaultColumnName
				 * @overridden
				 */
				getFilterDefaultColumnName: function() {
					return "ServicePact";
				}
			},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "remove",
					"name": "AddRecordButton"
				},
				{
					"operation": "remove",
					"name": "ActionsButton"
				}
			]/**SCHEMA_DIFF*/
		};
	});
