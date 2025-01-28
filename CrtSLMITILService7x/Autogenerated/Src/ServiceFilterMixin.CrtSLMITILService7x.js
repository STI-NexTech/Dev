define("ServiceFilterMixin", [], function() {
	/**
	 * @class Terrasoft.configuration.mixins.ServiceFilterMixin
	 * Service Filter mixin.
	 */
	Ext.define("Terrasoft.configuration.mixins.ServiceFilterMixin", {
		alternateClassName: "Terrasoft.ServiceFilterMixin",

		/**
		 * Contact Id.
		 */
		contact: null,

		/**
		 * Account Id.
		 */
		account: null,

		/**
		 * Department Id.
		 */
		department: null,

		// region Methods: Protected

		/**
		 * Returns service item filter by account.
		 * @protected
		 * @returns {Terrasoft.FilterGroup} Filter group
		 */
		getServicesFilterByAccount: function() {
			const accountFilterGroup = new Terrasoft.createFilterGroup();
			if (this.account) {
				accountFilterGroup.add("AccountFilter", Terrasoft.createColumnFilterWithParameter(
					Terrasoft.ComparisonType.EQUAL, "Account", this.account.value));
			}
			return accountFilterGroup;
		},

		/**
		 * Returns service item filter by department.
		 * @protected
		 * @returns {Terrasoft.FilterGroup} Filter group
		 */
		getServicesFilterByDepartment: function() {
			const filters = new Terrasoft.createFilterGroup();
			filters.logicalOperation = Terrasoft.LogicalOperatorType.OR;
			filters.add("DepartmentNullFilter", Terrasoft.createColumnIsNullFilter("Department"));
			if (this.department) {
				filters.add("DepartmentFilter", Terrasoft.createColumnFilterWithParameter(
					Terrasoft.ComparisonType.EQUAL, "Department", this.department.value));
			}
			return filters;
		},

		//endregion

		// region Methods: Public

		/**
		 * Returns service item filter.
		 * @param {String} notExistsFilterColumnName Column name of existing filter.
		 * @param {String} reverseSchemaPath Reverse path to main schema.
		 * @public
		 * @returns {Terrasoft.FilterGroup} Filter group
		 */
		getServicesFilter: function(notExistsFilterColumnName, reverseSchemaPath) {
			const filterGroup = new Terrasoft.createFilterGroup();
			const contactGroup = new Terrasoft.createFilterGroup();
			filterGroup.logicalOperation = Terrasoft.LogicalOperatorType.OR;
			contactGroup.add("ContactFilter", Terrasoft.createColumnFilterWithParameter(
				Terrasoft.ComparisonType.EQUAL, "Contact", this.contact)
			);
			if (this.account) {
				const accountFilterGroup = this.getServicesFilterByAccount();
				const departmentFilters = this.getServicesFilterByDepartment();
				accountFilterGroup.add("Department", departmentFilters);
				if (!Ext.isEmpty(notExistsFilterColumnName) && !Ext.isEmpty(reverseSchemaPath)) {
					const subFilters = Terrasoft.createFilterGroup();
					subFilters.addItem(Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL, reverseSchemaPath + ".Contact.Id", this.contact));
					const notExistFilter = Terrasoft.createNotExistsFilter(notExistsFilterColumnName, subFilters);
					accountFilterGroup.add("NotExisting", notExistFilter);
				}
				filterGroup.add("AccountGroupFilter", accountFilterGroup);
			}
			filterGroup.add("ContactGroupFilter", contactGroup);
			return filterGroup;
		},

		/**
		 * Initializes the initial values of the mixin.
		 * @public
		 */
		init: function(config) {
			this.contact = config.contact;
			this.account = config.account;
			this.department = config.department;
		}

		//endregion

	});

	return Terrasoft.ServiceFilterMixin;
});
