namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.FeatureToggling;
	using Terrasoft.AppFeatures;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;

	#region Class: CopilotIntentQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "CopilotIntentQueryExecutor")]
	public class CopilotIntentQueryExecutor : BaseQueryExecutor, IEntityQueryExecutor
	{

		#region Fields: Private

		private readonly string _entitySchemaName = "CopilotIntent";
		private CopilotIntentSchemaManager _copilotIntentSchemaManager;
		private static readonly string _commonTypeColor = "#7848EE";
		private static readonly string _defaultTypeColor = "#22AC14";
		private static readonly Guid _commonIntentTypeId = Guid.Parse("6D940B75-21C8-4A90-89AB-9867E6E4A045");
		private static readonly Guid _defaultIntentTypeId = Guid.Parse("35F3B644-4FA3-4D1E-8E62-5C3FDC4D3E52");
		private readonly Dictionary<CopilotIntentType, (Guid Id, string Color)> _intentColorMap =
			new Dictionary<CopilotIntentType, (Guid Id, string Color)> {
				{ CopilotIntentType.Common, (_commonIntentTypeId, _commonTypeColor) },
				{ CopilotIntentType.Default, (_defaultIntentTypeId, _defaultTypeColor) }
			};

		#endregion

		#region Constructors: Public

		public CopilotIntentQueryExecutor(UserConnection userConnection)
			: base(userConnection, "CopilotIntent") { }

		#endregion

		#region Properties: Public

		public CopilotIntentSchemaManager CopilotIntentSchemaManager =>
			_copilotIntentSchemaManager ?? (_copilotIntentSchemaManager =
				(CopilotIntentSchemaManager)UserConnection.GetSchemaManager(nameof(CopilotIntentSchemaManager)));

		#endregion

		#region Properties: Private

		private EntitySchema IntentEntitySchema =>
			UserConnection.EntitySchemaManager.GetInstanceByName(_entitySchemaName);

		#endregion

		#region Methods: Private

		private void GetIntentUIdByFilter(QueryFilterInfo filter, out Guid intentUId) {
			GetIsPrimaryColumnValueFilter(filter, out intentUId);
		}

		private EntitySchemaQuery GetEsqCopilotIntentStatus() {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "CopilotIntentStatus");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.AddColumn("Name");
			esq.AddColumn("Code");
			esq.Cache = UserConnection.SessionCache.WithLocalCaching("CopilotIntentStatusCache");
			esq.CacheItemName = "CopilotIntentStatusCacheItem";
			return esq;
		}

		private Entity GetIntentStatus(string code) {
			return GetEsqCopilotIntentStatus()
				.GetEntityCollection(UserConnection)
				.FirstOrDefault(status => status.GetTypedColumnValue<string>("Code") == code);
		}

		private Entity GetIntentEntityFromManagerItem(ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem) {
			CopilotIntentSchema intentSchema = schemaManagerItem.Instance;
			Entity entity = IntentEntitySchema.CreateEntity(UserConnection);
			entity.LoadColumnValue("Id", intentSchema.UId);
			entity.LoadColumnValue("Code", intentSchema.Name);
			entity.LoadColumnValue("Description", intentSchema.IntentDescription ?? intentSchema.Description);
			entity.LoadColumnValue("Name", intentSchema.Caption);
			entity.LoadColumnValue("Prompt", intentSchema.Prompt);
			Entity status = GetIntentStatus(intentSchema.Status.ToString());
			if (status != null) {
				entity.LoadColumnValue("StatusId", status.GetTypedColumnValue<Guid>("Id"));
				entity.LoadColumnValue("StatusName", status.GetTypedColumnValue<string>("Name"));
			}
			if (_intentColorMap.TryGetValue(intentSchema.Type, out (Guid Id, string Color) map)) {
				entity.LoadColumnValue("TypeId", map.Id);
				entity.LoadColumnValue("TypePrimaryColor", map.Color);
				entity.LoadColumnValue("TypeName", intentSchema.Type.ToString());
			}
			return entity;
		}

		private IEnumerable<Entity> GetAllIntentEntities(IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> managerItems) {
			var entities = new List<Entity>();
			foreach (ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem in managerItems) {
				entities.Add(GetIntentEntityFromManagerItem(schemaManagerItem));
			}
			return entities;
		}

		private IEnumerable<Entity> GetFilteredEntities(CompareColumnWithValueFilter compareFilter, IEnumerable<Entity> entities) {
			switch (compareFilter.ColumnPath) {
				case "StatusId": {
						entities = entities
							.Where(entity => compareFilter.ParameterValues.Contains(entity.GetTypedColumnValue<Guid>("StatusId")));
						break;
					}
				case "Id": {
						GetIntentUIdByFilter(compareFilter, out Guid intentUId);
						if (intentUId.IsNotEmpty()) {
							entities = entities
							.Where(entity => entity.GetTypedColumnValue<Guid>("Id") == intentUId);
						}
						break;
					}
				default:
					break;
			}
			return entities;
		}

		private IEnumerable<Entity> GetIntentEntityFromManagerItemByFilters(
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> managerItems, QueryFilterInfo filterInfo) {
			if (filterInfo is CompareColumnWithValueFilter compareFilter) {
				GetIntentUIdByFilter(filterInfo, out Guid intentUId);
				if (intentUId.IsNotEmpty()) {
					ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem =
						managerItems.FirstOrDefault(item => item.UId == intentUId);
					if (schemaManagerItem != null) {
						return new Entity[] { GetIntentEntityFromManagerItem(schemaManagerItem) };
					}
				}
				return GetFilteredEntities(compareFilter, GetAllIntentEntities(managerItems));
			} else if (filterInfo is FilterCollection filterCollection) {
				var entities = GetAllIntentEntities(managerItems);
				foreach (var filter in filterCollection.Filters) {
					if (filter is CompareColumnWithValueFilter columnFilter) {
						entities = GetFilteredEntities(columnFilter, entities);
					}
				}
				return entities;
			}
			return GetAllIntentEntities(managerItems);
		}

		private IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> GetIntentManagerItems() {
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> items = CopilotIntentSchemaManager.GetItems();
			Func<ISchemaManagerItem<CopilotIntentSchema>, bool> isCommonIntent = item => {
				var property = item.ExtraProperties.FindByName("Type")?.Value?.ToString();
				return Enum.TryParse(property, out CopilotIntentType intentType) &&
					intentType.Equals(CopilotIntentType.Common);
			};
			return Features.GetIsEnabled<GenAIFeatures.ShowSystemIntent>()
				? items.OrderBy(isCommonIntent)
				: items.Where(isCommonIntent);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns intent data.
		/// </summary>
		/// <param name="esq">Filters.</param>
		/// <returns>Intent data collection.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			QueryFilterInfo filterInfo = esq.Filters.ParseFilters();
			var collection = new EntityCollection(UserConnection, EntitySchema);
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> intentManagerItems = GetIntentManagerItems();
			IEnumerable<Entity> entities = GetIntentEntityFromManagerItemByFilters(intentManagerItems, filterInfo);
			if (esq.RowCount > 0) {
				entities = entities.Skip(esq.SkipRowCount).Take(esq.RowCount);
			}
			collection.AddRange(entities);
			return collection;
		}

		#endregion

	}

	#endregion

}

