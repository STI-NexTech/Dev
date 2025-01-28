define("ServiceInServicePactDetail", [],
	function() {
		return {
			entitySchemaName: "ServiceInServicePact",
			methods: {
				/**
				 * ############## ######### ######.
				 */
				initConfig: function() {
					this.callParent(arguments);
					var config = this.getConfig();
					config.lookupEntitySchema = config.lookupConfig.entitySchemaName = "ServiceItem";
					config.sectionEntitySchema = "ServicePact";
				},
				/**
				 * ######### #############.
				 */
				init: function() {
					this.callParent(arguments);
					this.initConfig();
				},
				/**
				 * @inheritDoc Terrasoft.GridUtilitiesV2#getFilterDefaultColumnName
				 * @overridden
				 */
				getFilterDefaultColumnName: function() {
					return "ServiceItem";
				}
			},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "EditRecordMenu",
					"parentName": "ActionsButton",
					"propertyName": "menu",
					"index": 0,
					"values": {
						"caption": {"bindTo": "Resources.Strings.EditMenuCaption"},
						"click": {"bindTo": "editRecord"},
						"enabled": {"bindTo": "getEditRecordButtonEnabled"}

					}
				}
			]/**SCHEMA_DIFF*/
		};
	});
