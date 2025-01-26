define("AddEventAudiencePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DataGridMain",
				"values": {
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions_n5tt506",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_n5tt506_caption)#",
					"folderTree": "FolderTree_ylrkchp"
				},
				"parentName": "SearchContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTree_ylrkchp",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_ylrkchp_caption)#",
					"sourceSchemaName": "ContactFolder",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_ylrkchp_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": ["Contact"]
									}
								]
							}
						],
						"from": [
							"FolderTree_ylrkchp_items",
							"FolderTree_ylrkchp_favoriteItems",
							"FolderTree_ylrkchp_active_folder_id"
						]
					},
					"borderRadius": "none",
					"rootSchemaName": "Contact",
					"layoutConfig": {
						"width": 430
					}
				},
				"parentName": "DataGridMainContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"FolderTree_ylrkchp_visible": {
						"value": true
					},
					"FolderTree_ylrkchp_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_ylrkchp_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_ylrkchp_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_ylrkchp_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_ylrkchp_items_DS.SearchData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_ylrkchp_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_ylrkchp_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "ContactFolder"
								}
							},
							"name": "FolderTree_ylrkchp_items_DS"
						}
					},
					"FolderTree_ylrkchp_active_folder_id": {},
					"FolderTree_ylrkchp_active_folder_name": {},
					"DataGridMain_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "DataGridMain_PredefinedFilter"
						},
						{
							"name": "FolderTree_ylrkchp_active_folder_filter",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"MainDS_Name": {
						"modelConfig": {
							"path": "MainDS.Name"
						}
					},
					"MainDS_Id": {
						"modelConfig": {
							"path": "MainDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"MainDS",
					"config"
				],
				"values": {
					"entitySchemaName": "Contact"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"MainDS",
					"config",
					"attributes"
				],
				"values": {
					"Name": {
						"path": "Name"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});