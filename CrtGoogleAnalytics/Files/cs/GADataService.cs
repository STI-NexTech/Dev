<<<<<<< HEAD
namespace CrtGoogleAnalytics.API
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using Newtonsoft.Json;
	using CrtCloudIntegration.Interfaces;
	using CrtCloudIntegration.Models.Requests;
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Interfaces;
	using CrtGoogleAnalytics.API.Models;
	using CrtGoogleAnalytics.API.Parameters;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core;
	using Terrasoft.Configuration;

	[DefaultBinding(typeof(IGADataService))]
	public class GADataService : IGADataService
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly string _application = "web_analytics";
		private readonly string _platform = "google";

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes service with UserConnection.
		/// </summary>
		/// <param name="userConnection"></param>
		public GADataService(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		/// <summary>
		/// Instance of <see cref="IGAAPIClient"/> to get analytics data.
		/// </summary>
		private IGAAPIClient _analyticsApiClient;
		private IGAAPIClient AnalyticsApiClient {
			get => _analyticsApiClient ?? (_analyticsApiClient = ClassFactory.Get<IGAAPIClient>());
			set => _analyticsApiClient = value;
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Dictionary of the access tokens related to analytics accounts.
		/// </summary>
		private Dictionary<string, string> _accountToken;
		protected Dictionary<string, string> AccountToken {
			get => _accountToken ?? (_accountToken = GetAuthTokens());
		}

		/// <summary>
		/// Instance of <see cref="IOAuthAccountServiceApi"/> to get access tokens.
		/// </summary>
		private IOAuthAccountServiceApi _accountApiService;
		protected IOAuthAccountServiceApi AccountApiService {
			get => _accountApiService ?? (_accountApiService =
				ClassFactory.Get<IOAuthAccountServiceApi>(
					new ConstructorArgument("userConnection", _userConnection),
					new ConstructorArgument("scope", "web_analytics.service.full_access")));
			set => _accountApiService = value;
		}

		#endregion

		#region Methods: Private

		private Dictionary<string, string> GetAuthTokens() {
			var authTokens = AccountApiService.GetTokens(new GetTokensRequest {
				Application = _application,
				PlatformName = _platform
			});
			var accountToken = new Dictionary<string, string>();
			foreach (var token in authTokens) {
				var accounts = AnalyticsApiClient.GetAccountList(token);
				foreach (var account in accounts) {
					accountToken[account.Id] = token;
				}
			}
			return accountToken;
		}

		private (List<string>, List<string>) GetObjectProperties<T>() {
			var dimensions = new List<string>();
			var metrics = new List<string>();
			PropertyInfo[] props = typeof(T).GetProperties();
			foreach (var propInfo in props) {
				var metric = propInfo.GetCustomAttribute(typeof(MetricPropertyAttribute));
				var property = (JsonPropertyAttribute)propInfo.GetCustomAttribute(typeof(JsonPropertyAttribute));
				if (property == null) {
					continue;
				}
				if (metric == null) {
					dimensions.Add(property.PropertyName);
				} else {
					metrics.Add(property.PropertyName);
				}
			}
			return (dimensions, metrics);
		}

		private GADataRequestParameters GetDataRequestParams<T>(DataRequestParameters parameters) {
			(var dimensions, var metrics) = GetObjectProperties<T>();
			return new GADataRequestParameters() {
				PropertyId = parameters.PropertyId,
				Dimensions = dimensions.ToArray(),
				Metrics = metrics.Any() ? metrics.ToArray() : null,
				FromDate = parameters.FromDate,
				Offset = parameters.Offset,
				Limit = parameters.Limit,
				PeriodDays = parameters.PeriodDays
			};
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns all Google analytics accounts by user identifier.
		/// <param name="platformUserId">Google profile identifier</param>
		/// </summary>
		public IEnumerable<IWebAnalyticsAccount> GetAccountList(string platformUserId) {
			var authToken = AccountApiService.GetToken(new GetTokenRequest {
				Application = _application,
				PlatformName = _platform,
				PlatformUserId = platformUserId
			});
			return AnalyticsApiClient.GetAccountList(authToken);
		}

		/// <summary>
		/// Returns Google analytics account details.
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		public GAAccountDetails GetAccountDetails(string accountId) {
			var token = AccountToken[accountId];
			var accountDetails = new GAAccountDetails() {
				Id = accountId
			};
			var properties = AnalyticsApiClient.GetAccountProperties(token, accountId);
			accountDetails.Properties = GAModelFactory.CreateAnalyticsProperties(properties).ToList();
			foreach (var property in accountDetails.Properties) {
				var streams = AnalyticsApiClient.GetDataStreams(token, property.Id);
				property.DataStreams = GAModelFactory.CreateWebDataStreams(streams);
			}
			return accountDetails;
		}

		/// <summary>
		/// Returns web sessions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebSessionModel> GetSessionsByUserId(string userId, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebSession>(parameters);
			requestParams.UserId = userId;
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebSessionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToSessionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web sessions for visitors' segment.
		/// <param name="users">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebSessionModel> GetSessionsForUsers(IEnumerable<string> users, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebSession>(parameters);
			requestParams.Users = users.ToArray();
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebSessionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToSessionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web actions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebActionModel> GetActionsByUserId(string userId, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebAction>(parameters);
			requestParams.EventFilter = EventFilterCondition.ONLY_ACTIONS;
			requestParams.UserId = userId;
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebActionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToActionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web actions for visitors' segment.
		/// <param name="userId">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebActionModel> GetActionsForUsers(IEnumerable<string> users, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebAction>(parameters);
			requestParams.EventFilter = EventFilterCondition.ONLY_ACTIONS;
			requestParams.Users = users.ToArray();
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebActionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToActionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		#endregion

	}
}
=======
namespace CrtGoogleAnalytics.API
{
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using Newtonsoft.Json;
	using CrtCloudIntegration.Interfaces;
	using CrtCloudIntegration.Models.Requests;
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Interfaces;
	using CrtGoogleAnalytics.API.Models;
	using CrtGoogleAnalytics.API.Parameters;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core;
	using Terrasoft.Configuration;

	[DefaultBinding(typeof(IGADataService))]
	public class GADataService : IGADataService
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly string _application = "web_analytics";
		private readonly string _platform = "google";

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes service with UserConnection.
		/// </summary>
		/// <param name="userConnection"></param>
		public GADataService(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		/// <summary>
		/// Instance of <see cref="IGAAPIClient"/> to get analytics data.
		/// </summary>
		private IGAAPIClient _analyticsApiClient;
		private IGAAPIClient AnalyticsApiClient {
			get => _analyticsApiClient ?? (_analyticsApiClient = ClassFactory.Get<IGAAPIClient>());
			set => _analyticsApiClient = value;
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Dictionary of the access tokens related to analytics accounts.
		/// </summary>
		private Dictionary<string, string> _accountToken;
		protected Dictionary<string, string> AccountToken {
			get => _accountToken ?? (_accountToken = GetAuthTokens());
		}

		/// <summary>
		/// Instance of <see cref="IOAuthAccountServiceApi"/> to get access tokens.
		/// </summary>
		private IOAuthAccountServiceApi _accountApiService;
		protected IOAuthAccountServiceApi AccountApiService {
			get => _accountApiService ?? (_accountApiService =
				ClassFactory.Get<IOAuthAccountServiceApi>(
					new ConstructorArgument("userConnection", _userConnection),
					new ConstructorArgument("scope", "web_analytics.service.full_access")));
			set => _accountApiService = value;
		}

		#endregion

		#region Methods: Private

		private Dictionary<string, string> GetAuthTokens() {
			var authTokens = AccountApiService.GetTokens(new GetTokensRequest {
				Application = _application,
				PlatformName = _platform
			});
			var accountToken = new Dictionary<string, string>();
			foreach (var token in authTokens) {
				var accounts = AnalyticsApiClient.GetAccountList(token);
				foreach (var account in accounts) {
					accountToken[account.Id] = token;
				}
			}
			return accountToken;
		}

		private (List<string>, List<string>) GetObjectProperties<T>() {
			var dimensions = new List<string>();
			var metrics = new List<string>();
			PropertyInfo[] props = typeof(T).GetProperties();
			foreach (var propInfo in props) {
				var metric = propInfo.GetCustomAttribute(typeof(MetricPropertyAttribute));
				var property = (JsonPropertyAttribute)propInfo.GetCustomAttribute(typeof(JsonPropertyAttribute));
				if (property == null) {
					continue;
				}
				if (metric == null) {
					dimensions.Add(property.PropertyName);
				} else {
					metrics.Add(property.PropertyName);
				}
			}
			return (dimensions, metrics);
		}

		private GADataRequestParameters GetDataRequestParams<T>(DataRequestParameters parameters) {
			(var dimensions, var metrics) = GetObjectProperties<T>();
			return new GADataRequestParameters() {
				PropertyId = parameters.PropertyId,
				Dimensions = dimensions.ToArray(),
				Metrics = metrics.Any() ? metrics.ToArray() : null,
				FromDate = parameters.FromDate,
				Offset = parameters.Offset,
				Limit = parameters.Limit,
				PeriodDays = parameters.PeriodDays
			};
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns all Google analytics accounts by user identifier.
		/// <param name="platformUserId">Google profile identifier</param>
		/// </summary>
		public IEnumerable<IWebAnalyticsAccount> GetAccountList(string platformUserId) {
			var authToken = AccountApiService.GetToken(new GetTokenRequest {
				Application = _application,
				PlatformName = _platform,
				PlatformUserId = platformUserId
			});
			return AnalyticsApiClient.GetAccountList(authToken);
		}

		/// <summary>
		/// Returns Google analytics account details.
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		public GAAccountDetails GetAccountDetails(string accountId) {
			var token = AccountToken[accountId];
			var accountDetails = new GAAccountDetails() {
				Id = accountId
			};
			var properties = AnalyticsApiClient.GetAccountProperties(token, accountId);
			accountDetails.Properties = GAModelFactory.CreateAnalyticsProperties(properties).ToList();
			foreach (var property in accountDetails.Properties) {
				var streams = AnalyticsApiClient.GetDataStreams(token, property.Id);
				property.DataStreams = GAModelFactory.CreateWebDataStreams(streams);
			}
			return accountDetails;
		}

		/// <summary>
		/// Returns web sessions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebSessionModel> GetSessionsByUserId(string userId, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebSession>(parameters);
			requestParams.UserId = userId;
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebSessionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToSessionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web sessions for visitors' segment.
		/// <param name="users">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebSessionModel> GetSessionsForUsers(IEnumerable<string> users, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebSession>(parameters);
			requestParams.Users = users.ToArray();
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebSessionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToSessionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web actions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebActionModel> GetActionsByUserId(string userId, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebAction>(parameters);
			requestParams.EventFilter = EventFilterCondition.ONLY_ACTIONS;
			requestParams.UserId = userId;
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebActionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToActionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		/// <summary>
		/// Returns web actions for visitors' segment.
		/// <param name="userId">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		public GADataResponse<GAWebActionModel> GetActionsForUsers(IEnumerable<string> users, DataRequestParameters parameters) {
			var token = AccountToken[parameters.AccountId];
			var requestParams = GetDataRequestParams<GAWebAction>(parameters);
			requestParams.EventFilter = EventFilterCondition.ONLY_ACTIONS;
			requestParams.Users = users.ToArray();
			var rawData = AnalyticsApiClient.GetAnalyticsData(token, requestParams);
			return new GADataResponse<GAWebActionModel>() {
				Events = GAModelFactory.GetWebEventModels(rawData, GAModelDeserializer.ToActionModel),
				Quota = rawData?.PropertyQuota
			};
		}

		#endregion

	}
}
>>>>>>> e78d6ac (merge to local)
