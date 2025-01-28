using Terrasoft.Core.Entities;

namespace CrtDigitalAdsApp.VirtualQueryExecutor
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using CrtDigitalAdsApp.Models.Responses;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities.Factories;
	using Terrasoft.Core.Factories;

	/// <summary>
	/// Implementation <see cref="IEntityQueryExecutor"/> for 'VirtualAdAccount' entity.
	/// </summary>
	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "VirtualAdAccountQueryExecutor")]
	public class VirtualAdAccountQueryExecutor : IEntityQueryExecutor
	{

		#region Methods: Private

		private static void ApplySorting(EntitySchemaQuery esq, EntityCollection entityCollection) {
			var sortColumn = esq.GetSorting();
			if (sortColumn != null && entityCollection.Count > 0) {
				entityCollection.Order(sortColumn.Name, sortColumn.OrderDirection);
			}
		}

		private List<Guid> GetIdentifiers(EntitySchemaQueryFilterCollection filters) {
			var filterCollection = filters[0] is EntitySchemaQueryFilterCollection
				? (EntitySchemaQueryFilterCollection)filters[0]
				: filters;
			var filter = filterCollection.Select(f => f as EntitySchemaQueryFilter)
				.FirstOrDefault(f => f?.LeftExpression.Path == "Id");
			if (filter != null) {
				return filter.RightExpressions.Select(x => (Guid)x.ParameterValue).ToList();
			}
			return new List<Guid>();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets collection of VirtualAdAccount entities
		/// </summary>
		/// <param name="esq">Represents a query against an object's schema.</param>
		/// <returns>Collection of VirtualAdAccount entities</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			var factory = ClassFactory.Get<IEntityFactory>();
			var identifiers = new List<Guid>();
			if (esq.Filters.IsNotEmpty()) {
				identifiers = GetIdentifiers(esq.Filters);
			}
			var adAccountsFromPlatform =
				UserConnection.Current.ApplicationCache["VirtualAdAccounts"] as List<AdAccountResponse>;
			var selectedIdentifiers = identifiers.IsNullOrEmpty() ? adAccountsFromPlatform
				: adAccountsFromPlatform?.Where(x => identifiers.Contains(x.Id));
			var entityCollection = new EntityCollection(UserConnection.Current, "VirtualAdAccount");
			foreach (var adAccount in selectedIdentifiers) {
				var entity = factory.CreateEntity("VirtualAdAccount");
				entity.SetColumnValue("Id", adAccount.Id);
				entity.SetColumnValue("Name", adAccount.Name);
				entityCollection.Add(entity as Entity);
			}
			ApplySorting(esq, entityCollection);
			return entityCollection;
		}

		#endregion

	}

	/// <summary>
	/// Extensions for <see cref="EntitySchemaQuery"/>
	/// </summary>
	public static class EntitySchemaQueryExtensions
	{

		#region Methods: Public

		/// <summary>
		/// Gets sorting for <see cref="EntitySchemaQuery"/>.
		/// </summary>
		public static SortColumn GetSorting(this EntitySchemaQuery esq) {
			return esq.Columns
				.Where(c => c.OrderPosition == 1)
				.Select(c => new SortColumn {
					OrderPosition = c.OrderPosition,
					OrderDirection = c.OrderDirection,
					Name = c.Name
				}).FirstOrDefault();
		}

		#endregion

	}

	/// <summary>
	/// Column for sorting in <see cref="EntitySchemaQuery"/>
	/// </summary>
	public class SortColumn
	{

		#region Properties: Public

		/// <summary>
		/// Column name
		/// </summary>
		public string Name { get; set; }

		/// <summary>
		/// Column order direction
		/// </summary>
		public OrderDirection OrderDirection { get; set; }

		/// <summary>
		/// Column order position
		/// </summary>
		public int OrderPosition { get; set; }

		#endregion

	}
}