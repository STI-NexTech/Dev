namespace CrtGoogleAnalytics.API
{
	using System;
	using System.Collections.Generic;
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Modules;
	using CrtGoogleAnalytics.API.Parameters;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Factories;

	#region Class: GAAPIClient

	[DefaultBinding(typeof(IGAAPIClient))]
	internal class GAAPIClient : IGAAPIClient
	{

		#region Fields: Private

		private readonly int _defaultLimit = 10000;
		private List<BaseModule> Modules = new List<BaseModule>();

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes API client.
		/// </summary>
		public GAAPIClient() => InitModules();

		#endregion

		#region Properties: Protected

		private int _batchSize;
		protected int BatchSize {
			get => _batchSize > 0 ? _batchSize : _defaultLimit;
			set => _batchSize = value;
		}

		#endregion

		#region Methods: Private

		private void InitModules() {
			var userConnection = ClassFactory.Get<UserConnection>();
			SysSettings.TryGetValue(userConnection, "GoogleAnalyticsApiServiceUrls", out var googleApiServiceUrls);
			if (string.IsNullOrWhiteSpace(googleApiServiceUrls?.ToString())) {
				throw new Exception("Google Analytics API service url is not set.");
			};
			var serviceUrls = Json.Deserialize<Dictionary<string, string>>(googleApiServiceUrls.ToString());
			serviceUrls.TryGetValue("AnalyticsAdminApi", out var adminApiUrl);
			serviceUrls.TryGetValue("AnalyticsDataApi", out var dataApiUrl);
			if (string.IsNullOrWhiteSpace(adminApiUrl) || string.IsNullOrWhiteSpace(dataApiUrl)) {
				throw new Exception("Google Analytics Data API service url is not set.");
			}
			Modules = new List<BaseModule> {
				new AdminModule(adminApiUrl),
				new AnalyticsModule(dataApiUrl)
			};
		}

		private void GetAllDataRows(string accessToken, GADataRequestParameters parameters, int limit,
				ref GADataResponse data) {
			var analyticsModule = Modules.Get<AnalyticsModule>();
			var offset = parameters.Offset;
			var totalCount = data.RowCount - offset;
			while (totalCount > data.Rows.Count) {
				if (limit > 0 && data.Rows.Count == limit) { break; }
				parameters.Offset = data.Rows.Count + offset;
				var rowsToLimit = limit - parameters.Offset;
				if (limit > 0 && rowsToLimit < BatchSize) {
					parameters.Limit = rowsToLimit;
				}
				var dataResponse = analyticsModule.GetData(accessToken, parameters);
				if (dataResponse.Rows == null) { break; }
				data.Rows.AddRange(dataResponse.Rows);
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns Google analytics accounts list.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// </summary>
		public IEnumerable<GAAccount> GetAccountList(string accessToken) {
			var adminModule = Modules.Get<AdminModule>();
			return adminModule.GetAccounts(accessToken);
		}

		/// <summary>
		/// Returns Google analytics properties by account identifier.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		public IEnumerable<GAAccountProperty> GetAccountProperties(string accessToken, string accountId) {
			var adminModule = Modules.Get<AdminModule>();
			return adminModule.GetProperties(accessToken, accountId);
		}

		/// <summary>
		/// Returns Google analytics data streams by property identifier.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="propertyId">Google analytics property identifier</param>
		/// </summary>
		public IEnumerable<GADataStream> GetDataStreams(string accessToken, string propertyId) {
			var adminModule = Modules.Get<AdminModule>();
			return adminModule.GetDataStreams(accessToken, propertyId);
		}

		/// <summary>
		/// Returns analytics data.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse GetAnalyticsData(string accessToken, GADataRequestParameters parameters) {
			var analyticsModule = Modules.Get<AnalyticsModule>();
			var limit = parameters.Limit;
			parameters.Limit = limit > 0 ? Math.Min(limit, BatchSize) : BatchSize;
			var result = analyticsModule.GetData(accessToken, parameters);
			if (result?.Rows == null) {
				return result;
			}
			GetAllDataRows(accessToken, parameters, limit, ref result);
			return result;
		}

		#endregion

	}

	#endregion

}
