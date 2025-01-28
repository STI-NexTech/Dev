namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.Copilot;
	using Creatio.Copilot.Metadata;
	using Terrasoft.AppFeatures;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;

	#region Class: CopilotActionQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "CopilotActionQueryExecutor")]
	public class CopilotActionQueryExecutor : BaseQueryExecutor, IEntityQueryExecutor
	{

		#region Fields: Private

		private const string CacheKey = "IntentsInActionsCache";
		private CopilotIntentSchemaManager _copilotIntentSchemaManager;

		#endregion

		#region Constructors: Public

		public CopilotActionQueryExecutor(UserConnection userConnection)
			: base(userConnection, "CopilotAction") { }

		#endregion

		#region Properties: Public

		public CopilotIntentSchemaManager CopilotIntentSchemaManager =>
			_copilotIntentSchemaManager ?? (_copilotIntentSchemaManager =
				(CopilotIntentSchemaManager)UserConnection.GetSchemaManager(nameof(CopilotIntentSchemaManager)));

		#endregion

		#region Methods: Private

		private static ICacheStore GetCacheStore(UserConnection userConnection) {
			return userConnection.SessionCache;
		}

		private Guid GetIntentUIdByActionUIdFromCache(Guid actionUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.TryGetValue(actionUId, out Guid intentUId);
			return intentUId;
		}

		private void SetIntentUIdAndActionUIdToCache(Guid actionUId, Guid intentUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.Add(actionUId, intentUId);
			SaveToCache(cachedData);
		}

		private Dictionary<Guid, Guid> TryGetCachedData() {
			ICacheStore store = GetCacheStore(UserConnection);
			if (store[CacheKey] is Dictionary<Guid, Guid> cachedData) {
				return cachedData;
			}
			cachedData = new Dictionary<Guid, Guid>();
			return cachedData;
		}

		private void SaveToCache(Dictionary<Guid, Guid> data) {
			ICacheStore store = GetCacheStore(UserConnection);
			store[CacheKey] = data;
		}

		private void RemoveFromCache(Guid actionUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.Remove(actionUId);
			SaveToCache(cachedData);
		}

		private Guid GetIntentUIdByActionUIdFromManager(Guid actionUId) {
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> intentSchemas = CopilotIntentSchemaManager.GetItems()
				.Where(intent =>
					intent.Instance.Actions.Any(action => action.UId == actionUId)).ToList();
			if (!intentSchemas.Any()) {
				throw new ItemNotFoundException("Action {0} not found", actionUId.ToString());
			}
			if (intentSchemas.Count() > 1) {
				IEnumerable<string> intentSchemaNames = intentSchemas.Select(schema => schema.Name);
				string joinedNames = string.Join(", ", intentSchemaNames);
				throw new DublicateDataException("Action identifier: {0} duplicated on several intents ({1})",
					actionUId, joinedNames);
			}
			ISchemaManagerItem<CopilotIntentSchema> intentSchema = intentSchemas.First();
			Guid intentUId = intentSchema.UId;
			return intentUId;
		}

		private Entity GetActionByUId(Guid actionUId) {
			Guid intentUId = TryGetIntentUIdByActionUId(actionUId);
			ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem =
				CopilotIntentSchemaManager.FindItemByUId(intentUId);
			CopilotActionMetaItem action = schemaManagerItem.Instance?.Actions.FindByUId(actionUId);
			if (action == null) {
				RemoveFromCache(actionUId);
				return null;
			}
			Entity entity = GetActionEntityFromManagerItem(action);
			return entity;
		}

		private Guid TryGetIntentUIdByActionUId(Guid actionUId) {
			Guid cachedIntentUId = GetIntentUIdByActionUIdFromCache(actionUId);
			if (!cachedIntentUId.Equals(Guid.Empty)) {
				return cachedIntentUId;
			}
			Guid intentUId = GetIntentUIdByActionUIdFromManager(actionUId);
			SetIntentUIdAndActionUIdToCache(actionUId, intentUId);
			return intentUId;
		}

		private IEnumerable<Entity> GetActionsByIntentUId(Guid intentUId) {
			ISchemaManagerItem<CopilotIntentSchema> managerItem = CopilotIntentSchemaManager.FindItemByUId(intentUId);
			if (managerItem == null) {
				return null;
			}
			CopilotIntentSchema intentSchema = managerItem.Instance;
			IEnumerable<Entity> result = intentSchema?.Actions.Select(GetActionEntityFromManagerItem);
			return result;
		}

		private Entity GetActionEntityFromManagerItem(CopilotActionMetaItem metaItem) {
			Entity entity = EntitySchema.CreateEntity(UserConnection);
			var descriptor = metaItem.Descriptor;
			entity.LoadColumnValue("Id", metaItem.UId);
			entity.LoadColumnValue("Code", metaItem.Name);
			entity.LoadColumnValue("Name", descriptor.Caption);
			entity.LoadColumnValue("Description", descriptor.Description);
			entity.LoadColumnValue("IntentId", metaItem.IntentSchema.UId);
			entity.LoadColumnValue("ActionTypeId", metaItem.ActionTypeSchema.UId);
			return entity;
		}

		private void GetIdentifiersByFilter(QueryFilterInfo filterInfo, out Guid actionUId, out Guid intentUId) {
			actionUId = default;
			intentUId = default;
			if (filterInfo is FilterCollection filterCollection) {
				foreach (QueryFilterInfo filterCollectionFilter in filterCollection.Filters) {
					if (actionUId.IsEmpty()) {
						GetActionUIdByFilter(filterCollectionFilter, out actionUId);
					}
					if (intentUId.IsEmpty()) {
						GetIntentUIdByFilter(filterCollectionFilter, out intentUId);
					}
				}
			} else {
				GetActionUIdByFilter(filterInfo, out actionUId);
				GetIntentUIdByFilter(filterInfo, out intentUId);
			}
		}

		private static void GetIntentUIdByFilter(QueryFilterInfo filter, out Guid intentUId) {
			const string columnPath = "[CopilotIntent:Id:Intent].Id";
			filter.GetIsSingleColumnValueEqualsFilter(columnPath, out intentUId);
		}

		private void GetActionUIdByFilter(QueryFilterInfo filter, out Guid actionUId) {
			GetIsPrimaryColumnValueFilter(filter, out actionUId);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns copilot actions.
		/// </summary>
		/// <param name="esq">Filters.</param>
		/// <returns>Actions data.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			QueryFilterInfo filterInfo = esq.Filters.ParseFilters();
			var collection = new EntityCollection(UserConnection, EntitySchema);
			GetIdentifiersByFilter(filterInfo, out Guid actionUId, out Guid intentUId);
			if (actionUId.IsNotEmpty()) {
				Entity action = GetActionByUId(actionUId);
				if (action != null) {
					collection.Add(action);
				}
				return collection;
			}
			if (intentUId.IsNotEmpty()) {
				IEnumerable<Entity> actions = GetActionsByIntentUId(intentUId);
				if (actions != null) {
					collection.AddRange(actions);
				}
			}
			return collection;
		}

		#endregion

	}

	#endregion

}

