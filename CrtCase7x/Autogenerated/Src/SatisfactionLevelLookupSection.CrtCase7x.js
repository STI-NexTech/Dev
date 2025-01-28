define("SatisfactionLevelLookupSection", ["ConfigurationGridUtilities"],
	function() {
		return {
			entitySchemaName: "SatisfactionLevel",
			attributes: {},
			messages: {},
			mixins: {
				/**
				 * @class ConfigurationGridUtilities provides utilities for grid.
				 */
				ConfigurationGridUtilities: "Terrasoft.ConfigurationGridUtilities"
			},
			methods: {

				/**
				 * Sets the absolute value.
				 * @private
				 * @param {Object} row Current row.
				 * @param {Number} value Point value.
				 */
				validatePointValue: function(row, value) {
					row.set("Point", Math.abs(value));
				},

				/**
				 * @inheritdoc ConfigurationGridUtilities#saveRowChanges
				 * overriden
				 */
				saveRowChanges: function(row) {
					var changedValues = row && row.changedValues;
					if (changedValues && changedValues.hasOwnProperty("Point")) {
						this.validatePointValue(row, changedValues.Point);
					}
					this.callParent(arguments);
				}
			},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "remove",
					"name": "activeRowActionCopy"
				}
			]/**SCHEMA_DIFF*/
		};
	});
