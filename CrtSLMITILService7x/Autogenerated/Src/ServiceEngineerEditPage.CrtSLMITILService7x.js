define("ServiceEngineerEditPage", [],
	function() {
		return {
			entitySchemaName: "ServiceEngineer",
			attributes: {
				"Engineer": {
					"lookupListConfig": {
						"hideActions": true
					}
				}
			}
		};
	});
