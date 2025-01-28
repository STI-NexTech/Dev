define("ServicePactRecipientsDetail", ["ServiceDeskConstants"],
	function(ServiceDeskConstants) {
		return {
			entitySchemaName: "ServiceInServicePact",
			messages: {
				/*
				* @message
				* Updates service recipients detail.
				* */
				"UpdateServiceRecepientsDetail": {
					"mode": this.Terrasoft.MessageMode.PTP,
					"direction": this.Terrasoft.MessageDirectionType.PUBLISH
				}
			},
			methods: {

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#getCopyRecordMenuItem
				 * @overridden
				 */
				getCopyRecordMenuItem: this.Terrasoft.emptyFn,

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#getEditRecordMenuItem
				 * @overridden
				 */
				getEditRecordMenuItem: this.Terrasoft.emptyFn,

				/**
				 * Inititialize detail lookup and section schema name.
				 * @protected
				 */
				initConfig: function() {
					this.callParent(arguments);
					var config = this.getConfig();
					config.lookupEntitySchema = config.lookupConfig.entitySchemaName = "ServicePact";
					config.sectionEntitySchema = this.get("DetailColumnName");
				},

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#init
				 * @overridden
				 */
				init: function() {
					this.callParent(arguments);
					this.initConfig();
				},

				/**
				 * @inheritdoc Terrasoft.BaseManyToManyGridDetail#getDeleteRecordMenuItem
				 * @overridden
				 */
				getDeleteRecordMenuItem: function() {
					return this.getButtonMenuItem({
						Caption: {"bindTo": "Resources.Strings.DeleteMenuCaption"},
						Click: {"bindTo": "deleteRecords"},
						Enabled: {bindTo: "getDeleteRecordMenuItemEnabled"}
					});
				},

				/**
				 * Returns delete record button menu item enabled.
				 * @protected
				 * @returns {Terrasoft.FilterGroup} Button menu item enabled.
				 */
				getDeleteRecordMenuItemEnabled: function() {
					if (!this.isAnySelected()) {
						return false;
					}
					var detailColumnName = this.get("DetailColumnName");
					if (detailColumnName === "Contact") {
						var activeRow = this.getActiveRow();
						if (activeRow) {
							var contact = activeRow.get("Contact");
							return contact && contact !== this.Terrasoft.GUID_EMPTY;
						}
					}
					return true;
				},

				/**
				 * @inheritdoc Terrasoft.BaseManyToManyGridDetail#getGridDataColumns
				 * @overridden
				 */
				getGridDataColumns: function() {
					var gridDataColumns = this.callParent(arguments);
					if (!gridDataColumns.Contact) {
						gridDataColumns.Contact = {
							path: "Contact"
						};
					}
					return gridDataColumns;
				},

				/**
				 * @inheritdoc Terrasoft.BaseManyToManyGridDetail#getSchemaInsertQuery
				 * @overridden
				 */
				getSchemaInsertQuery: function() {
					var insert = this.callParent(arguments);
					var detailColumnName = this.get("DetailColumnName");
					if (detailColumnName) {
						var detailColumnType = detailColumnName === "Contact" ?
								ServiceDeskConstants.ServiceObjectType.Contact :
								ServiceDeskConstants.ServiceObjectType.Account;
						insert.setParameterValue("Type", detailColumnType,
							this.Terrasoft.DataValueType.GUID);
					}
					return insert;
				},

				/**
				 * @inheritDoc Terrasoft.BaseGridDetailV2#getAddRecordButtonVisible
				 * @overridden
				 */
				getAddRecordButtonVisible: function() {
					return !Terrasoft.isCurrentUserSsp() && this.callParent(arguments);
				},

				/**
				 * @inheritdoc Terrasoft.BaseManyToManyGridDetail#onRecordsInserted
				 * @overridden
				 */
				onRecordsInserted: function() {
					this.callParent(arguments);
					this.sandbox.publish("UpdateServiceRecepientsDetail");
				},

				/**
				 * @inheritdoc Terrasoft.BaseManyToManyGridDetail#onRecordsInserted
				 * @overridden
				 */
				onDeleted: function() {
					this.callParent(arguments);
					this.sandbox.publish("UpdateServiceRecepientsDetail");
				},

				/**
				 * @inheritDoc Terrasoft.BaseGridDetailV2#initDefaultCaption
				 * @override
				 */
				initDefaultCaption: function() {
					if (this.Terrasoft.isCurrentUserSsp()) {
						this.set("Caption", this.get("Resources.Strings.ActiveServicePacts"));
					} else {
						this.callParent(arguments);
					}
				},

				/**
				 * @inheritDoc Terrasoft.BaseGridDetailV2#getFilters
				 * @override
				 */
				getFilters: function() {
					const filters = this.callParent(arguments);
					if (this.Terrasoft.isCurrentUserSsp()) {
						const filterGroup = new Terrasoft.createFilterGroup();
						filterGroup.add("Active", this.Terrasoft.createColumnFilterWithParameter(
							this.Terrasoft.ComparisonType.EQUAL, "ServicePact.Status.IsActive", true)
						);
						filterGroup.add("EndDate", this.Terrasoft.createColumnFilterWithParameter(
							this.Terrasoft.ComparisonType.GREATER_OR_EQUAL,
							"ServicePact.EndDate", this.Terrasoft.endOfDay(new Date()))
						);
						filters.add(filterGroup);
					}
					return filters;
				}
			},
			diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
		};
	});
