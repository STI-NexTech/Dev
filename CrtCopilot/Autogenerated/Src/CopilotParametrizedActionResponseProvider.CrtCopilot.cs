namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.Copilot.Metadata;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: CopilotParametrizedActionResponseProvider

	/// <inheritdoc />
	[DefaultBinding(typeof(ICopilotParametrizedActionResponseProvider))]
	public class CopilotParametrizedActionResponseProvider: ICopilotParametrizedActionResponseProvider
	{

		#region Class: ParameterStructure

		private class ParameterStructure
		{

			#region Fields: Private

			private readonly ICopilotParameterMetaInfo _parameter;

			#endregion

			#region Constructors: Public

			public ParameterStructure(ICopilotParameterMetaInfo parameter) {
				_parameter = parameter;
			}

			#endregion

			#region Properties: Public

			public string Type => _parameter.DataValueType.Name;

			public string Description => _parameter.Description;

			public Dictionary<string, ParameterStructure> ItemProperties { get; set; }

			[JsonIgnore]
			public ICopilotParameterMetaInfo Parameter => _parameter;

			[JsonIgnore]
			public DataValueType DataValueType => _parameter.DataValueType;

			[JsonIgnore]
			public string Name => _parameter.Name;

			[JsonIgnore]
			public Guid ReferenceSchemaUId => _parameter.ReferenceSchemaUId;

			public string EntitySchemaName { get; set; }

			#endregion

		}

		#endregion

		#region Class: ParameterProcessingContext

		private class ParameterProcessingContext
		{

			#region Properties: Public

			public Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>> EntityRecordIdsToLoad {
				get;
				private set;
			}

			public Dictionary<string, ParameterStructure> ParameterStructures { get; private set; }

			public Dictionary<Guid, EntitySchema> EntitySchemasCache { get; private set; }

			public UserConnection UserConnection { get; }

			public Func<ICopilotParameterMetaInfo, object> ParameterValueGetter { get; }

			public Dictionary<string, ParameterValue> ResultValues { get; }

			#endregion

			#region Constructors: Public

			public ParameterProcessingContext(UserConnection userConnection,
					Func<ICopilotParameterMetaInfo, object> parameterValueGetter) {
				ParameterValueGetter = parameterValueGetter;
				var equalityComparer = new EntitySchemaUIdRecordIdKey.EntitySchemaUIdRecordIdKeyEqualityComparer();
				EntityRecordIdsToLoad =
					new Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>>(equalityComparer);
				ParameterStructures = new Dictionary<string, ParameterStructure>();
				ResultValues = new Dictionary<string, ParameterValue>();
				EntitySchemasCache = new Dictionary<Guid, EntitySchema>();
				UserConnection = userConnection;
			}

			#endregion

			#region Methods: Public

			public string Serialize() {
				if (ParameterStructures.IsNullOrEmpty() && ResultValues.IsNullOrEmpty()) {
					return string.Empty;
				}
				var settings = new JsonSerializerSettings {
					Converters = new List<JsonConverter> {
						new ParameterValue.ParameterValueJsonConverter()
					},
					NullValueHandling = NullValueHandling.Ignore
				};
				var resultObject = new {
					Structure = ParameterStructures,
					Values = ResultValues
				};
				return JsonConvert.SerializeObject(resultObject, Formatting.None, settings);
			}

			public ParameterProcessingContext CreateDerivedContext(Dictionary<string, ParameterStructure> parameters,
					Func<ICopilotParameterMetaInfo, object> parameterValueGetter) {
				return new ParameterProcessingContext(UserConnection, parameterValueGetter) {
					ParameterStructures = parameters,
					EntityRecordIdsToLoad = EntityRecordIdsToLoad,
					EntitySchemasCache = EntitySchemasCache
				};
			}

			#endregion

		}

		#endregion

		#region Class: ParameterValue

		private class ParameterValue
		{

			#region Class: ParameterValueJsonConverter

			internal class ParameterValueJsonConverter : JsonConverter<ParameterValue>
			{

				#region Methods: Public

				public override void WriteJson(JsonWriter writer, ParameterValue value, JsonSerializer serializer) {
					if (value == null) {
						return;
					}
					if (value._parameter.DataValueType.UId == DataValueType.LookupDataValueTypeUId) {
						writer.WriteStartObject();
						writer.WritePropertyName(nameof(value.Value));
						writer.WriteValue(value.Value);
						writer.WritePropertyName(nameof(value.DisplayValue));
						writer.WriteValue(value.DisplayValue);
						writer.WriteEndObject();
						return;
					}
					serializer.Serialize(writer, value.Value);
				}

				public override ParameterValue ReadJson(JsonReader reader, Type objectType,
						ParameterValue existingValue, bool hasExistingValue, JsonSerializer serializer) {
					throw new NotImplementedException();
				}

				#endregion

			}

			#endregion

			#region Fields: Private

			private readonly ParameterStructure _parameter;

			#endregion

			#region Properties: Public

			public object Value { get; }

			public string DisplayValue { get; set; }

			#endregion

			#region Constructors: Public

			public ParameterValue(ParameterStructure parameter, object value) {
				_parameter = parameter;
				Value = value;
				DisplayValue = string.Empty;
			}

			#endregion

		}

		#endregion

		#region Class: EntitySchemaUIdRecordIdKey

		private class EntitySchemaUIdRecordIdKey
		{

			#region Class: EntitySchemaUIdRecordIdPairEqualityComparer

			public class EntitySchemaUIdRecordIdKeyEqualityComparer: IEqualityComparer<EntitySchemaUIdRecordIdKey>
			{

				#region Methods: Public

				public bool Equals(EntitySchemaUIdRecordIdKey x, EntitySchemaUIdRecordIdKey y) {
					if (ReferenceEquals(x, y)) {
						return true;
					}
					if (ReferenceEquals(x, null)) {
						return false;
					}
					if (ReferenceEquals(y, null)) {
						return false;
					}
					if (x.GetType() != y.GetType()) {
						return false;
					}
					return x.EntitySchemaUId.Equals(y.EntitySchemaUId) && x.RecordId.Equals(y.RecordId);
				}

				public int GetHashCode(EntitySchemaUIdRecordIdKey obj) {
					unchecked {
						return (obj.EntitySchemaUId.GetHashCode() * 397) ^ obj.RecordId.GetHashCode();
					}
				}

				#endregion

			}

			#endregion

			#region Properties: Public

			public Guid EntitySchemaUId { get; }

			public Guid RecordId { get; }

			#endregion

			#region Constructors: Public

			public EntitySchemaUIdRecordIdKey(Guid entitySchemaUId, Guid recordId) {
				EntitySchemaUId = entitySchemaUId;
				RecordId = recordId;
			}

			#endregion

		}

		#endregion

		#region Constants: Private

		private const int EntityRecordsChunkSize = 900;

		#endregion

		#region Methods: Private

		private static bool GetShouldSkipParameter(ICopilotParameterMetaInfo parameter) {
			return parameter.IsInternal || parameter.Direction == ParameterDirection.Input;
		}

		private static ParameterStructure CreateParameterStructure(UserConnection userConnection,
				ICopilotParameterMetaInfo parameter, Dictionary<Guid, EntitySchema> entitySchemasCache) {
			if (GetShouldSkipParameter(parameter)) {
				return null;
			}
			var parameterStructure = new ParameterStructure(parameter);
			if (parameter.DataValueType.UId == DataValueType.LookupDataValueTypeUId &&
					parameter.ReferenceSchemaUId.IsNotEmpty()) {
				if (!entitySchemasCache.TryGetValue(parameter.ReferenceSchemaUId, out EntitySchema entitySchema)) {
					entitySchema = userConnection.EntitySchemaManager.GetInstanceByUId(parameter.ReferenceSchemaUId);
					entitySchemasCache.Add(parameter.ReferenceSchemaUId, entitySchema);
				}
				parameterStructure.EntitySchemaName = entitySchema.Name;
			}
			if (parameter.ItemProperties.IsEmpty()) {
				return parameterStructure;
			}
			parameterStructure.ItemProperties = new Dictionary<string, ParameterStructure>();
			FillParametersStructure(userConnection, parameter.ItemProperties, parameterStructure.ItemProperties,
				entitySchemasCache);
			return parameterStructure;
		}

		private static void FillParametersStructure(UserConnection userConnection,
				IEnumerable<ICopilotParameterMetaInfo> parameters,
				Dictionary<string, ParameterStructure> parameterStructures,
				Dictionary<Guid, EntitySchema> entitySchemasCache) {
			var structures = parameters.Where(w => !GetShouldSkipParameter(w))
				.ToDictionary(k => k.Name, v => CreateParameterStructure(userConnection, v, entitySchemasCache));
			parameterStructures.AddRange(structures);
		}

		private static void FillStructure(ParameterProcessingContext parameterProcessingContext,
				IReadOnlyList<ICopilotParameterMetaInfo> parameters) {
			FillParametersStructure(parameterProcessingContext.UserConnection, parameters,
				parameterProcessingContext.ParameterStructures, parameterProcessingContext.EntitySchemasCache);
		}

		private static void ProcessLookupParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ParameterStructure parameter) {
			if (!(value is Guid guidValue) || guidValue.IsEmpty()) {
				parameterProcessingContext.ResultValues[parameter.Name] = new ParameterValue(parameter, null);
				return;
			}
			var parameterValue = new ParameterValue(parameter, guidValue);
			var pair = new EntitySchemaUIdRecordIdKey(parameter.ReferenceSchemaUId, guidValue);
			var entityRecordIdsToLoad = parameterProcessingContext.EntityRecordIdsToLoad;
			if (entityRecordIdsToLoad.TryGetValue(pair, out var existingValue)) {
				existingValue.Add(parameterValue);
			} else {
				var newValue = new List<ParameterValue> { parameterValue };
				entityRecordIdsToLoad.Add(pair, newValue);
			}
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void LoadLookupDisplayValues(ParameterProcessingContext parameterProcessingContext) {
			var entityRecordIdToParametersMap = parameterProcessingContext.EntityRecordIdsToLoad;
			var userConnection = parameterProcessingContext.UserConnection;
			var entityGroups = entityRecordIdToParametersMap.GroupBy(e => e.Key.EntitySchemaUId);
			foreach (var entityGroup in entityGroups) {
				var entitySchema = parameterProcessingContext.EntitySchemasCache[entityGroup.Key];
				foreach (var entityChunk in entityGroup.SplitOnChunks(EntityRecordsChunkSize)) {
					var entityChunkDictionary = entityChunk.ToDictionary(k => k.Key.RecordId, v => v.Value);
					LoadEntityLookupDisplayValues(userConnection, entitySchema, entityChunkDictionary);
				}
			}
		}

		private static void LoadEntityLookupDisplayValues(UserConnection userConnection, EntitySchema entitySchema,
				Dictionary<Guid, List<ParameterValue>> entityRecords) {
			if (entitySchema.PrimaryDisplayColumn == null) {
				return;
			}
			var esq = new EntitySchemaQuery(entitySchema);
			string primaryColumnName = entitySchema.PrimaryColumn.Name;
			string displayColumnName = entitySchema.PrimaryDisplayColumn.Name;
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.AddColumn(displayColumnName);
			EntitySchemaQueryFilterCollection filters = esq.Filters;
			IEntitySchemaQueryFilterItem filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				primaryColumnName, entityRecords.Keys.ToArray().Cast<object>());
			filters.Add(filter);
			EntityCollection entities = esq.GetEntityCollection(userConnection);
			foreach (Entity entity in entities) {
				var primaryColumnValue = entity.GetTypedColumnValue<Guid>(primaryColumnName);
				var parameterValues = entityRecords[primaryColumnValue];
				parameterValues.ForEach(parameter =>
					parameter.DisplayValue = entity.GetTypedColumnValue<string>(displayColumnName) ?? string.Empty);
			}
		}

		private static object GetValueFromCompositeObject(ICopilotParameterMetaInfo info,
				ICompositeObject compositeObject) {
			return compositeObject.TryGetValue(info.Name, out object value) ? value : null;
		}

		private static void ProcessCompositeObjectListParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ParameterStructure parameter) {
			var compositeObjectList = (ICompositeObjectList<ICompositeObject>)value;
			var compositeObjectListResultValues = new List<Dictionary<string, ParameterValue>>();
			foreach (ICompositeObject compositeObject in compositeObjectList) {
				if (compositeObject == null) {
					continue;
				}
				var processingContext = parameterProcessingContext.CreateDerivedContext(parameter.ItemProperties,
					info => GetValueFromCompositeObject(info, compositeObject));
				ProcessParameters(processingContext);
				compositeObjectListResultValues.Add(processingContext.ResultValues);
			}
			var parameterValue = new ParameterValue(parameter, compositeObjectListResultValues);
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void ProcessObjectListParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ParameterStructure parameter) {
			var objectList = value != null ? (IObjectList)value : ObjectList.Create<string>();
			var objectListResultValues = new List<ParameterValue>();
			foreach (object objectValue in objectList) {
				var processingContext = parameterProcessingContext.CreateDerivedContext(parameter.ItemProperties,
					_ => objectValue);
				ProcessParameters(processingContext);
				objectListResultValues.Add(processingContext.ResultValues.Values.First());
			}
			var parameterValue = new ParameterValue(parameter, objectListResultValues);
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void ProcessCompositeObjectParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ParameterStructure parameter) {
			var compositeObject = (ICompositeObject)value;
			var processingContext = parameterProcessingContext.CreateDerivedContext(parameter.ItemProperties,
				info => GetValueFromCompositeObject(info, compositeObject));
			ProcessParameters(processingContext);
			var parameterValue = new ParameterValue(parameter, processingContext.ResultValues); 
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static object GetParameterValue(ParameterProcessingContext parameterProcessingContext,
				ICopilotParameterMetaInfo parameter) {
			try {
				return parameterProcessingContext.ParameterValueGetter(parameter);
			} catch (Exception e) {
				var message = $"Error retrieving parameter {parameter.Name} value.";
				throw new ApplicationException(message, e);
			}
		}

		private static void ProcessParameters(ParameterProcessingContext parameterProcessingContext) {
			foreach (var parameterNameStructurePair in parameterProcessingContext.ParameterStructures) {
				ParameterStructure structure = parameterNameStructurePair.Value;
				object value = GetParameterValue(parameterProcessingContext, structure.Parameter);
				if (structure.DataValueType.UId == DataValueType.CompositeObjectDataValueTypeUId && value != null) {
					ProcessCompositeObjectParameter(parameterProcessingContext, value, structure);
				} else if (structure.DataValueType.UId == DataValueType.ObjectListDataValueTypeUId) {
					ProcessObjectListParameter(parameterProcessingContext, value, structure);
				} else if (structure.DataValueType.UId == DataValueType.CompositeObjectListDataValueTypeUId) {
					ProcessCompositeObjectListParameter(parameterProcessingContext, value, structure);
				} else if (structure.DataValueType.UId == DataValueType.LookupDataValueTypeUId) {
					ProcessLookupParameter(parameterProcessingContext, value, structure);
				} else {
					var parameterValue = new ParameterValue(structure, value);
					parameterProcessingContext.ResultValues[structure.Name] = parameterValue;
				}
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string GetParameterizedResponse(UserConnection userConnection, CopilotActionDescriptor actionDescriptor,
				Func<ICopilotParameterMetaInfo, object> parameterValueGetter) {
			var parameterProcessingContext = new ParameterProcessingContext(userConnection, parameterValueGetter);
			FillStructure(parameterProcessingContext, actionDescriptor.Parameters);
			ProcessParameters(parameterProcessingContext);
			LoadLookupDisplayValues(parameterProcessingContext);
			return parameterProcessingContext.Serialize();
		}

		#endregion

	}

	#endregion

}

