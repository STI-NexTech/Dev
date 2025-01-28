namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using MatomoConnector.API;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using global::Common.Logging;
	using Terrasoft.Core.Entities;

	#region Class: TouchPointRepository

	/// <summary>
	/// Repository for storing TouchPoints data obtained from the Matomo.
	/// </summary>
	public class TouchPointRepository : TouchPointRepositoryBase {

		#region Class: VisitByCityComparer

		private class VisitByCityComparer : IEqualityComparer<VisitDetails> {
			public bool Equals(VisitDetails x, VisitDetails y) => x.city == y.city;
			public int GetHashCode(VisitDetails obj) => $"{obj?.city}".GetHashCode();
		}

		#endregion

		#region Class: ActionDetailsClicksComparer

		private class ActionDetailsClicksComparer : IEqualityComparer<ActionDetails> {
			public bool Equals(ActionDetails x, ActionDetails y) => x.url == y.url && x.pageTitle == y.pageTitle;
			public int GetHashCode(ActionDetails obj) => $"{obj.url}{obj.pageTitle}".GetHashCode();
		}

		#endregion

		#region Class: VisitByReferrerTypeComparer

		private class VisitByReferrerTypeComparer : IEqualityComparer<VisitDetails> {
			public bool Equals(VisitDetails x, VisitDetails y) => x.referrerType == y.referrerType;
			public int GetHashCode(VisitDetails obj) => obj.referrerType.GetHashCode();
		}

		#endregion

		#region Fields: Private

		private static readonly ILog _logger = LogManager.GetLogger("MatomoConnector");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor for <see cref="TouchPointRepository"/>.
		/// </summary>
		/// <param name="userConnection"></param>
		public TouchPointRepository(UserConnection userConnection) {
			UserConnection = userConnection;
			CodeColumnName = "MatomoCode";
		}

		#endregion

		#region Methods: Private

		private Dictionary<string, (Guid Source, Guid Medium)> DefineVisitSourceAndChannel(
				IEnumerable<VisitDetails> visits) {
			var result = new Dictionary<string, (Guid Source, Guid Medium)>();
			visits.ForEach(visit => {
				var parameters = new Dictionary<string, string> {
					{ "bpmRef", visit.referrerUrl },
					{ "utm_medium", visit.campaignMedium },
					{ "utm_source", visit.campaignSource },
					{ "utm_campaign", visit.campaignName }
				};
				var extendedData = SourceHelper.ComputeMediumAndSource(parameters);
				if (extendedData.Medium.IsNotEmpty() || extendedData.Source.IsNotEmpty()) {
					result.Add(visit.idVisit, (extendedData.Source, extendedData.Medium));
				}
			});
			return result;
		}

		private Dictionary<Guid, VisitDetails> InsertTouches(Guid contactId, string userId,
				IEnumerable<VisitDetails> newVisits) {
			var result = new Dictionary<Guid, VisitDetails>();
			var visitExtendedData = DefineVisitSourceAndChannel(newVisits);
			var nullGuid = Column.Parameter(DBNull.Value, new GuidDataValueType(UserConnection.DataValueTypeManager));
			var insert = new Insert(UserConnection).Into("Touch");
			foreach (var visit in newVisits) {
				var id = Guid.NewGuid();
				var sessionStart = ConvertTimestampToDateTime(visit.firstActionTimestamp);
				var cityCode = GetCityCode(visit.countryCode, visit.city, visit.regionCode);
				var shortCityCode = GetCityCode(visit.countryCode, visit.city);
				insert.Values()
					.Set("Id", Column.Parameter(id))
					.Set("ContactId", Column.Parameter(contactId))
					.SetIntColumn("Duration", visit.visitDuration, 0)
					.Set("SessionId", Column.Parameter(visit.idVisit ?? ""))
					.Set("PageReferrer", Column.Parameter(CleanupUrl(visit.referrerUrl) ?? visit.referrerTypeName ?? ""))
					.Set("IP", Column.Parameter(visit.visitIp ?? ""))
					.Set("UtmSourceStr", Column.Parameter(visit.campaignSource ?? ""))
					.Set("UtmMediumStr", Column.Parameter(visit.campaignMedium ?? ""))
					.Set("UtmContentStr", Column.Parameter(visit.campaignContent ?? ""))
					.Set("UtmCampaignStr", Column.Parameter(visit.campaignName ?? ""))
					.Set("UtmTermStr", Column.Parameter(visit.campaignKeyword ?? ""))
					.Set("UtmIdStr", Column.Parameter(visit.campaignId ?? ""))
					.Set("CityStr", Column.Parameter(visit.city ?? ""))
					.Set("CountryStr", Column.Parameter(visit.country ?? ""))
					.Set("LanguageStr", Column.Parameter(visit.languageCode ?? ""))
					.Set("DeviceStr", Column.Parameter(visit.deviceType + " " + visit.deviceBrand + " " + visit.deviceModel))
					.Set("PlatformStr", Column.Parameter(visit.operatingSystemName + " " + visit.operatingSystemVersion))
					.Set("MatomoUserId", Column.Parameter(string.IsNullOrWhiteSpace(userId)
						? visit.userId ?? string.Empty
						: userId))
					.Set("MatomoVisitorId", Column.Parameter(visit.visitorId ?? ""))
					.Set("MatomoSiteId", Column.Parameter(visit.idSite ?? ""))
					.Set("StartDate", Column.Parameter(sessionStart))
					.Set("CountryCode", Column.Parameter(visit.countryCode ?? ""))
					.Set("RegionCode", Column.Parameter(visit.regionCode ?? ""))
					.Set("RegionStr", Column.Parameter(visit.region ?? ""))
					.Set("Location", Column.Parameter($"{visit.location}: {visit.latitude}, {visit.longitude}"))
					.Set("ReferrerNameStr", Column.Parameter(visit.referrerName ?? ""))
					.Set("ReferrerTypeStr", Column.Parameter(visit.referrerType ?? ""))
					.Set("ReferrerKeyword", Column.Parameter(visit.referrerKeyword ?? ""))
					.Set("ReferrerUrl", Column.Parameter(CleanupUrl(visit.referrerUrl) ?? ""))
					.TrySetLookupValue("ReferrerTypeId", LookupValues["ReferrerType"], visit.referrerType)
					.TrySetLookupValue("CountryId", LookupValues["Country"], visit.countryCode, true)
					.TrySetLookupValue("RegionId", LookupValues["Region"], visit.regionCode)
					.TrySetLookupValue("CityId", LookupValues["City"], shortCityCode)
					.TrySetLookupValue("CityId", LookupValues["City"], cityCode)
					.TrySetLookupValue("LanguageId", LookupValues["Language"], visit.languageCode, true);
				if (DateTime.TryParse(visit.lastActionDateTime, out var lastActionDate)) {
					insert.Set("LastActionDateTime", Column.Parameter(lastActionDate));
				} else {
					insert.Set("LastActionDateTime", Column.Parameter(DateTime.MinValue));
				}
				if (visitExtendedData.ContainsKey(visit.idVisit)
						&& visitExtendedData[visit.idVisit].Medium.IsNotEmpty()) {
					insert.Set("ChannelId", Column.Parameter(visitExtendedData[visit.idVisit].Medium));
				} else {
					insert.Set("ChannelId", nullGuid);
				}
				if (visitExtendedData.ContainsKey(visit.idVisit)
						&& visitExtendedData[visit.idVisit].Source.IsNotEmpty()) {
					insert.Set("SourceId", Column.Parameter(visitExtendedData[visit.idVisit].Source));
				} else {
					insert.Set("SourceId", nullGuid);
				}
				result.Add(id, visit);
			}
			if (insert.ColumnValues.IsNotEmpty()) {
				insert.Execute();
			}
			return result;
		}

		private int InsertActionDetails(IEnumerable<ActionDetails> actions, Guid touchId, TimeSpan offset) {
			var insert = new Insert(UserConnection).Into("TouchAction");
			foreach (var action in actions) {
				var actionDate = ConvertTimestampToDateTime(action.timestamp);
				var pageCode = GetWebPageCode(GetActionPageTitle(action), action.url);
				var actionDateUtc = actionDate.Add(-offset);
				insert.Values()
					.Set("ActionId", Column.Parameter(action.idpageview ?? ""))
					.Set("Title", Column.Parameter(action.title ?? action.pageTitle ?? ""))
					.Set("Url", Column.Parameter(action.url))
					.Set("ActionDate", Column.Parameter(actionDateUtc))
					.Set("TouchId", Column.Parameter(touchId))
					.Set("TypeStr", Column.Parameter(action.type ?? ""))
					.TrySetLookupValue("WebPageId", LookupValues["WebPage"], pageCode)
					.TrySetLookupValue("WebPageId", LookupValues["TouchActionWebPage"], action.idpageview)
					.TrySetLookupValue("TypeId", LookupValues["TouchActionType"], action.type);
			}
			if (insert.ColumnValues.IsNotEmpty()) {
				return insert.Execute();
			}
			return 0;
		}

		private TimeSpan GetVisitOffset(VisitDetails visit) {
			if (!string.IsNullOrWhiteSpace(visit.serverTimePretty)
					&& !string.IsNullOrWhiteSpace(visit.serverDate)) {
				var result = DateTime.TryParse($"{visit.serverDate} {visit.serverTimePretty}",
					out var serverDateTime);
				if (result) {
					var utc = ConvertTimestampToDateTime(visit.serverTimestamp);
					return serverDateTime - utc;
				}
			}
			return new TimeSpan(0);
		}

		private string GetActionCode(string actionId, int timestamp, VisitDetails visit) {
			var offset = GetVisitOffset(visit);
			return $"{actionId}:{ConvertTimestampToDateTime(timestamp).Add(-offset)}";
		}
		private string GetActionCode(string actionId, DateTime actionDate) =>
			$"{actionId}:{actionDate}";

		private int InsertTouchActions(Dictionary<Guid, VisitDetails> visits) {
			var rowsCount = 0;
			var actionDetails = visits.Values
				.SelectMany(visit => visit.actionDetails.Select(action => (action, visit)));
			foreach (var visit in visits) {
				var newActionDetails = actionDetails
					.Where(x => x.visit.idVisit == visit.Value.idVisit)
					.Where(x => {
						if (string.IsNullOrWhiteSpace(x.action.idpageview)) {
							return false;
						}
						var actionCode = GetActionCode(x.action.idpageview, x.action.timestamp, x.visit);
						return !LookupValues["TouchAction"].ContainsKey(actionCode);
					});
				var newActions = newActionDetails.Select(x => {
					var pageCode = GetWebPageCode(GetActionPageTitle(x.action), x.action.url);
					var actionCode = GetActionCode(x.action.idpageview, x.action.timestamp, x.visit);
					if (LookupValues["WebPage"].TryGetValue(pageCode, out var pageId)) {
						AddIfNotExists(LookupValues["TouchAction"], actionCode, pageId);
						AddIfNotExists(LookupValues["TouchActionWebPage"], x.action.idpageview, pageId);
					}
					return x.action;
				}).ToList();
				var offset = GetVisitOffset(visit.Value);
				if (newActions.Any()) {
					var chunks = newActions.SplitOnChunks(chunkSize: 50);
					foreach (var chunk in chunks) {
						rowsCount += InsertActionDetails(chunk, visit.Key, offset);
					}
				}
			}
			return rowsCount;
		}

		private Dictionary<string, Guid> GetExistingPages(Dictionary<string, ActionDetails> webPages) {
			var pages = new Dictionary<string, Guid>();
			var pageTitles = webPages.Values
				.Select(x => GetActionPageTitle(x))
				.Where(x => !string.IsNullOrWhiteSpace(x));
			var pageUrls = webPages.Values
				.Where(x => !string.IsNullOrWhiteSpace(x.url))
				.Select(x => x.url);
			if (!pageTitles.Any() && !pageUrls.Any()) {
				return pages;
			}
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "WebPage") {
				UseAdminRights = false,
				IsDistinct = true,
			};
			esq.AddColumn("Id");
			esq.AddColumn("Name");
			esq.AddColumn("Url");
			var rootFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.And);
			var innerUrlsFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			if (pageTitles.Any()) {
				var titleFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", pageTitles);
				rootFilter.Add(titleFilter);
			}
			if (pageUrls.Any()) {
				foreach (var url in pageUrls) {
					var urlFilter = esq.CreateFilterWithParameters(FilterComparisonType.Contain, "Url", url);
					innerUrlsFilter.Add(urlFilter);
				}
			}
			rootFilter.Add(innerUrlsFilter);
			esq.Filters.Add(rootFilter);
			var entities = esq.GetEntityCollection(UserConnection);
			if (entities.Count > 0) {
				foreach (var entity in entities) {
					var pageId = entity.GetTypedColumnValue<Guid>("Id1");
					var pageTitle = entity.GetTypedColumnValue<string>("Name");
					var pageUrl = entity.GetTypedColumnValue<string>("Url");
					var pageCode = GetWebPageCode(pageTitle, pageUrl);
					pages.Add(pageCode, pageId);
				}
			}
			return pages;
		}

		private void CleanupVisitUrls(ref IEnumerable<VisitDetails> visitDetails) =>
			visitDetails.ForEach(v => v.actionDetails.ForEach(a => a.url = CleanupUrl(a.url ?? "")));

		private string GetActionPageTitle(ActionDetails action) {
			if (!string.IsNullOrWhiteSpace(action.pageTitle)) {
				return action.pageTitle;
			}
			if (!Uri.TryCreate(action.url, UriKind.Absolute, out var uri)) {
				return string.Empty;
			}
			var domain = uri.Authority.StartsWith("www.") ? uri.Authority.Substring(4) : uri.Authority;
			return domain + uri.LocalPath;
		}

		private Dictionary<string, Guid> SaveNewWebPages(IEnumerable<ActionDetails> newActions) {
			var result = new Dictionary<string, Guid>();
			var chunks = newActions.SplitOnChunks(200);
			var total = 0;
			foreach (var chunk in chunks) {
				var insert = new Insert(UserConnection).Into("WebPage");
				foreach (var action in chunk) {
					var id = Guid.NewGuid();
					var pageTitle = GetActionPageTitle(action);
					insert.Values()
						.Set("Id", Column.Parameter(id))
						.Set("Name", Column.Parameter(pageTitle))
						.Set("Url", Column.Parameter(action.url));
					var pageCode = GetWebPageCode(pageTitle, action.url);
					result.Add(pageCode, id);
				}
				total += insert.Execute();
			}
			return total > 0
				? result
				: new Dictionary<string, Guid>();
		}

		private Dictionary<string, Guid> ActualizeReferrerTypes(IEnumerable<VisitDetails> visits) {
			var referrerTypes = visits
				.Where(x => !string.IsNullOrWhiteSpace(x.referrerType))
				.Distinct(new VisitByReferrerTypeComparer())
				.Select(x => (x.referrerType, x.referrerTypeName));
			var existingReferrerTypes = GetExistingLookupValues("ReferrerType");
			var newTypes = referrerTypes
				.Where(x => !existingReferrerTypes.Keys.Contains(x.referrerType))
				.Select(x => (x.referrerType, x.referrerTypeName));
			if (newTypes.Any()) {
				var result = SaveNewReferrerTypes(newTypes);
				existingReferrerTypes.AddRange(result);
			}
			return existingReferrerTypes;
		}

		private Dictionary<string, Guid> ActualizeRegions(IEnumerable<VisitDetails> visits) {
			var regionCodes = visits
				.Where(x => !string.IsNullOrWhiteSpace(x.regionCode))
				.Select(x => x.regionCode.ToUpper())
				.Distinct();
			if (!regionCodes.Any()) {
				return new Dictionary<string, Guid>();
			}
			var regions = GetLookupIdByCode("Region", "Code", regionCodes)
				.ToDictionary(x => x.Key.ToUpper(), x => x.Value);
			return regions;
		}

		private Dictionary<string, Guid> ActualizeCities(IEnumerable<VisitDetails> visits) {
			var countries = visits
				.Where(x => !string.IsNullOrWhiteSpace(x.city))
				.Select(x => x.countryCode)
				.Distinct()
				.Select(code =>
					(code, visits.Where(x => x.countryCode == code).Distinct(new VisitByCityComparer()).Select(x=>x.city)))
				.ToDictionary(x => x.code, x => x.Item2);
			return GetCityIds(countries);
		}

		private Dictionary<string, Guid> ActualizeWebPage(IEnumerable<VisitDetails> visits) {
			var webPages = visits
				.SelectMany(x => x.actionDetails)
				.Distinct(new ActionDetailsClicksComparer())
				.Where(x => !string.IsNullOrWhiteSpace(x.url) || !string.IsNullOrWhiteSpace(x.pageTitle))
				.ToDictionary(x => GetWebPageCode(GetActionPageTitle(x), x.url));
			var chunks = webPages.SplitOnChunks(chunkSize: 100);
			var result = new Dictionary<string, Guid>();
			foreach (var chunk in chunks) {
				var pages = chunk.ToDictionary(x => x.Key, x => x.Value);
				var existingPages = GetExistingPages(pages);
				var newPages = pages.Where(x => !existingPages.Keys.Contains(x.Key));
				if (newPages.Any()) {
					var savedPages = SaveNewWebPages(newPages.Select(x => x.Value));
					existingPages.AddRange(savedPages);
				}
				result.AddRange(existingPages);
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeExistedTouchAction(IEnumerable<VisitDetails> visits) {
			var result = new Dictionary<string, Guid>();
			var actionIds = visits
				.SelectMany(visit => visit.actionDetails)
				.Where(x => !string.IsNullOrWhiteSpace(x.idpageview))
				.Select(x => x.idpageview).Distinct();
			var chunks = actionIds.SplitOnChunks(chunkSize: 200);
			foreach (var chunk in chunks) {
				var select = new Select(UserConnection)
					.Column("WebPageId")
					.Column("ActionId")
					.Column("ActionDate")
				.From("TouchAction")
				.Where("ActionId").In(Column.Parameters(chunk)) as Select;
				select.SpecifyNoLockHints();
				select.ExecuteReader(x => {
					var webPageId = x.GetColumnValue<Guid>("WebPageId");
					if (!webPageId.IsEmpty()) {
						var actionId = x.GetColumnValue<string>("ActionId");
						var actionDate = x.GetColumnValue<DateTime>("ActionDate");
						var actionCode = GetActionCode(actionId, actionDate);
						AddIfNotExists(result, actionCode, webPageId);
					}
				});
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeExistedTouchActionWebPage(IEnumerable<VisitDetails> visits) {
			var result = new Dictionary<string, Guid>();
			LookupValues["TouchAction"].ForEach(x => {
				var actionId = x.Key.Split(':')[0];
				result.Add(actionId, x.Value);
			});
			return result;
		}

		private Dictionary<string, Guid> ActualizeLanguages(IEnumerable<string> languageCode) {
			var codes = languageCode
				.Where(x => !string.IsNullOrWhiteSpace(x))
				.Select(x => x.ToUpper())
				.Distinct();
			return GetLookupIdByCode("SysLanguage", "Code", codes, true);
		}

		private void ActualizeLookups(IEnumerable<VisitDetails> visits) {
			var actionTypes = visits.SelectMany(x => x.actionDetails).Select(x => x.type);
			var countryCodes = visits.Select(x => x.countryCode);
			var languageCodes = visits.Select(x => x.languageCode);
			LookupValues["TouchActionType"] = ActualizeTouchActionTypes(actionTypes);
			LookupValues["ReferrerType"] = ActualizeReferrerTypes(visits);
			LookupValues["Country"] = ActualizeCountries(countryCodes, true);
			LookupValues["Region"] = ActualizeRegions(visits);
			LookupValues["City"] = ActualizeCities(visits);
			LookupValues["WebPage"] = ActualizeWebPage(visits);
			LookupValues["TouchAction"] = ActualizeExistedTouchAction(visits);
			LookupValues["TouchActionWebPage"] = ActualizeExistedTouchActionWebPage(visits);
			LookupValues["Language"] = ActualizeLanguages(languageCodes);
		}

		private void UpdateTouches(Dictionary<Guid, VisitDetails> existedVisits, IEnumerable<TouchModel> touches) {
			foreach (var visit in existedVisits) {
				var touch = touches.FirstOrDefault(x => x.Id == visit.Key);
				var duration = int.Parse(visit.Value.visitDuration ?? "0");
				DateTime lastActionDate;
				if (touch != null
						&& DateTime.TryParse(visit.Value.lastActionDateTime, out lastActionDate)
						&& IsTouchModified(touch, duration, lastActionDate)) {
					UpdateTouch(touch.Id, duration, lastActionDate);
				}
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Saves list of <paramref name="visitDetails"/> into the DB with specified user id.
		/// Depends on already saved records.
		/// </summary>
		public int SaveVisitDetails(Guid contactId, string userId, IEnumerable<VisitDetails> visitDetails) {
			CleanupVisitUrls(ref visitDetails);
			ActualizeLookups(visitDetails);
			var visits = visitDetails.ToDictionary(x => x.idVisit);
			var result = 0;
			using (var executor = UserConnection.EnsureDBConnection()) {
				var chunks = visits.SplitOnChunks(chunkSize: 10);
				foreach (var chunk in chunks) {
					var rowsCount = 0;
					executor.StartTransaction();
					try {
						var touchModels = GetExistedTouchIdsForVisits(chunk.Select(x => x.Key));
						var existedVisits = chunk
							.Where(x => touchModels.Select(y => y.Key).Contains(x.Key))
							.ToDictionary(x => touchModels[x.Key].Id, y => y.Value);
						var newVisits = chunk
							.Where(x => !touchModels.Select(y => y.Key).Contains(x.Key))
							.Select(x => x.Value);
						UpdateTouches(existedVisits, touchModels.Values);
						var newTouches = InsertTouches(contactId, userId, newVisits);
						rowsCount += newTouches.Count;
						existedVisits.AddRange(newTouches);
						rowsCount += InsertTouchActions(existedVisits);
						executor.CommitTransaction();
					} catch (Exception ex) {
						executor.RollbackTransaction();
						_logger.Error($"MatomoConnector.{nameof(TouchPointRepository)}.SaveVisitDetails. Exception. ", ex);
						rowsCount = 0;
					}
					result += rowsCount;
				}
			}
			return result;
		}

		/// <summary>
		/// Saves list of <paramref name="visitDetails"/> into the DB for all users. Depends on already saved records.
		/// </summary>
		public int SaveVisitDetails(Guid contactId, IEnumerable<VisitDetails> visitDetails) {
			return SaveVisitDetails(contactId, null, visitDetails);
		}

		#endregion

	}

	#endregion

}

