define("MailBoxForIncidentRegistrationEditPage", ["BusinessRuleModule", "EmailHelper", "AcademyUtilities",
		"MailBoxForIncidentRegistrationEditPageResources"],
	function(BusinessRuleModule, EmailHelper, AcademyUtilities) {
		return {
			entitySchemaName: "MailboxForIncidentRegistration",
			details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "MailboxSyncSettings",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 0
						}
					}
				},
				{
					"operation": "insert",
					"name": "AliasAddress",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 1
						},
						"tip": {
							"content": {"bindTo": "Resources.Strings.AliasTip"}
						}
					}
				},
				{
					"operation": "insert",
					"name": "Category",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 2
						}
					}
				},
				{
					"operation": "merge",
					"name": "Description",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 3
						}
					}
				},
				{
					"operation": "merge",
					"name": "Name",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 6
						},
						"visible": false
					}
				},
				{
					"operation": "insert",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"name": "MessageLanguage",
					"values": {
						"tip": {
							"content": {"bindTo": "getMessageLanguageHint"}
						},
						"contentType": Terrasoft.ContentType.ENUM,
						"controlConfig": {
							"prepareList": {"bindTo": "onPrepareLanguageList"},
							"list": {"bindTo": "LanguageList"},
							"filterComparisonType": Terrasoft.StringFilterType.CONTAIN,
							"minSearchCharsCount": 3
						},
						"visible": {
							"bindTo": "isMultiLanguage"
						},
						"wrapClass": ["language-edit"],
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 4
						}
					},
					index: 8
				},
				{
					"operation": "insert",
					"name": "UseMailboxLanguage",
					"parentName": "GeneralInfoBlock",
					"propertyName": "items",
					"values": {
						"layout": {
							"colSpan": 12,
							"column": 0,
							"row": 5
						}
					}
				}
			]/**SCHEMA_DIFF*/,
			mixins: {},
			attributes: {
				"CategoryFromMailBox": {
					"dataValueType": Terrasoft.DataValueType.BOOLEAN,
					"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					"value": false
				}
			},
			methods: {
				/**
				 * @inheritdoc Terrasoft.BasePageV2#init
				 * @protected
				 * @overridden
				 */
				init: function() {
					this.callParent(arguments);
					var featureEnabled = this.getIsFeatureEnabled("CategoryFromMailBox");
					this.set("CategoryFromMailBox", featureEnabled);
					this.set("LanguageList", this.Ext.create(this.Terrasoft.Collection));
					this.initHelpUrl();
				},

				/**
				 * @inheritdoc Terrasoft.configuration.BaseSchemaViewModel#setValidationConfig
				 * @overridden
				 */
				setValidationConfig: function() {
					this.callParent(arguments);
					this.addColumnValidator("AliasAddress", EmailHelper.getEmailValidator);
				},

				/**
				 * @inheritdoc Terrasoft.BasePageV2#getActions
				 * @overridden
				 */
				getActions: function() {
					return Ext.create("Terrasoft.Collection");
				},

				/*
				 * Get mailbox name, that has been created from physical mailbox and its alias (if alias is exist).
				 * @private
				 * @return {String} Mailbox name.
				 */
				_getMailboxName: function() {
					var name = this.get("MailboxSyncSettings").displayValue + " ";
					if (this.get("AliasAddress")) {
						name = name + "(" + this.get("AliasAddress") + ")";
					}
					return name;
				},

				/**
				 * @inheritdoc Terrasoft.BaseEntityPage#save
				 * @overridden
				 */
				save: function() {
					var name = this._getMailboxName();
					this.set("Name", name);
					this.callParent(arguments);
				},

				/**
				 * Return link to the academy.
				 * @param {String} text Caption with macros.
				 * @returns {String} Caption with url.
				 * @private
				 */
				getUrlText: function(text) {
					var url = this.get("HelpUrl");
					var startTag = "";
					var finishTag = "";
					if (!Ext.isEmpty(url)) {
						startTag = "<a target=\"_blank\" href=\"" + url + "\">";
						finishTag = "</a>";
					}
					text = Ext.String.format(text, startTag, finishTag);
					return text;
				},

				/**
				 * Initializes Academy link.
				 * @private
				 */
				initHelpUrl: function() {
					var config = {
						contextHelpId: "2357",
						scope: this
					};
					config.callback = function(url) {
						this.set("HelpUrl", url);
					};
					AcademyUtilities.getUrl(config);
				},

				/**
				 * Get caption with hint.
				 * @private
				 * @returns {String} Url text.
				 */
				getMessageLanguageHint: function (){
					var messageLanguageCaption = this.get("Resources.Strings.MessageLanguageTip");
					return this.getUrlText(messageLanguageCaption);
				},

				/**
				 * Prepares language list.
				 * @protected
				 * @virtual
				 * @param {String} searchText Text to search.
				 * @param {Terrasoft.Collection} list Language list.
				 */
				onPrepareLanguageList: function(searchText, list) {
					var esq = this.createSysLanguageQuery(searchText);
					esq.getEntityCollection(function(response) {
						if (response && response.success) {
							var languageList = {};
							var languages = response.collection;
							languages.each(function(language) {
								var id = language.get("Id");
								languageList[id] = {
									value: id,
									displayValue: language.get("Name"),
									code: language.get("Code")
								};
							}, this);
							list.clear();
							list.loadAll(languageList);
						}
					}, this);
				},

				/**
				 * Initializes entity schema query columns.
				 * @private
				 * @param {Terrasoft.EntitySchemaQuery} esq Entity schema query.
				 */
				initSysLanguageQueryColumns: function(esq) {
					esq.addColumn("Name");
					var codeColumn = esq.addColumn("Code");
					codeColumn.orderPosition = 0;
					codeColumn.orderDirection = this.Terrasoft.OrderDirection.ASC;
				},

				/**
				 * Initializes entity schema query filters.
				 * @private
				 * @param {Terrasoft.EntitySchemaQuery} esq Entity schema query.
				 * @param {String} searchText Text to search.
				 */
				initSysLanguageQueryFilters: function(esq, searchText) {
					var filters = esq.filters;
					var filterGroup = new this.Terrasoft.createFilterGroup();
					filterGroup.add("ActiveLanguage", this.Terrasoft.createColumnFilterWithParameter(
							this.Terrasoft.ComparisonType.EQUAL, "IsUsed", 1));
					filterGroup.addItem(this.Terrasoft.createColumnFilterWithParameter(
							this.Terrasoft.ComparisonType.CONTAIN, "Name", searchText));
					filters.add(filterGroup);
				},

				/**
				 * Creates "SysLanguage" entity schema query.
				 * @param {String} searchText Text to search.
				 * @return {Terrasoft.EntitySchemaQuery}
				 */
				createSysLanguageQuery: function(searchText) {
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "SysLanguage"
					});
					this.initSysLanguageQueryColumns(esq);
					this.initSysLanguageQueryFilters(esq, searchText);
					return esq;
				},

				/**
				 * Check feature status.
				 */
				isMultiLanguage: function() {
					return this.getIsFeatureEnabled("EmailMessageMultiLanguage")
						|| this.getIsFeatureEnabled("EmailMessageMultiLanguageV2");
				}
			},
			rules: {
				"Category": {
					"BindParameterRequiredCategory": {
						"ruleType": BusinessRuleModule.enums.RuleType.BINDPARAMETER,
						"property": BusinessRuleModule.enums.Property.REQUIRED,
						"conditions": [{
							"leftExpression": {
								"type": BusinessRuleModule.enums.ValueType.ATTRIBUTE,
								"attribute": "CategoryFromMailBox"
							},
							"comparisonType": Terrasoft.ComparisonType.EQUAL,
							"rightExpression": {
								"type": BusinessRuleModule.enums.ValueType.CONSTANT,
								"value": true
							}
						}]
					}
				}
			}
		};
	});
