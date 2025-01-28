namespace Terrasoft.Core.Process.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using CrtCloudIntegration;
	using CrtCloudIntegration.Utilities;
	using CrtDigitalAdsApp;
	using CrtDigitalAdsApp.Models.Requests;
	using CrtDigitalAdsApp.Models.Responses;
	using CrtDigitalAdsApp.Providers;
	using CrtDigitalAdsApp.Repositories;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;

	#region Class: GetDigitalAdsAdAccountsUserTask

	/// <exclude/>
	public partial class GetDigitalAdsAdAccountsUserTask
	{

		#region Constants: Public

		public const string Application = "digital_ads";

		#endregion

		#region Fields: Private

		private IDigitalAdsAdAccountsProvider _digitalAdsAdAccountsProvider;
		private ILog _logger;
		private IAdAccountRepository _adAccountRepository;
		private IAdPlatformRepository _adPlatformRepository;
		private IUINotifier _notifier;
		private readonly string[] _connectedStatuses = { "ACTIVE", "ENABLED" };
		private readonly Guid _connectedConnectionStatusId = Guid.Parse("9f00f7c6-749b-442a-a794-02b17e81d9d4");
		private readonly Guid _disconnectedConnectionStatusId = Guid.Parse("5508ccb5-8642-4eb2-9951-abc3a4230953");

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets or sets <see cref="IAdAccountRepository"/>
		/// </summary>
		public IAdAccountRepository AdAccountRepository {
			get =>
				_adAccountRepository ?? ClassFactory.Get<IAdAccountRepository>(
					new ConstructorArgument("userConnection", UserConnection),
					new ConstructorArgument("logger", Logger));
			set => _adAccountRepository = value;
		}

		/// <summary>
		/// Gets or sets <see cref="IAdPlatformRepository"/>
		/// </summary>
		public IAdPlatformRepository AdPlatformRepository {
			get => _adPlatformRepository ?? ClassFactory.Get<IAdPlatformRepository>();
			set => _adPlatformRepository = value;
		}

		/// <summary>
		/// Gets or sets <see cref="IDigitalAdsAdAccountsProvider"/>
		/// </summary>
		public IDigitalAdsAdAccountsProvider DigitalAdsAdAccountsProvider {
			get =>
				_digitalAdsAdAccountsProvider ??
				(_digitalAdsAdAccountsProvider = new DigitalAdsAdAccountsProvider(UserConnection));
			set => _digitalAdsAdAccountsProvider = value;
		}

		/// <summary>
		/// Gets or sets the logger.
		/// </summary>
		/// <value>
		/// The logger.
		/// </value>
		public ILog Logger {
			get => _logger ?? LogManager.GetLogger("AuthProxyService");
			set => _logger = value;
		}

		/// <summary>
		/// Sends UI notifications
		/// </summary>
		public IUINotifier Notifier {
			get => _notifier ?? ClassFactory.Get<IUINotifier>(CrtDigitalAdsAppConsts.UINotifierSenderName);
			set => _notifier = value;
		}

		#endregion

		#region Methods: Private

		private IEnumerable<string> GetUniquePlatformUserIds(EntityCollection adAccountsFromDb) {
			var platformUserIds = adAccountsFromDb.Select(x => x.GetTypedColumnValue<string>("PlatformUserId"))
				.ToList();
			var uniqueIds = platformUserIds.Distinct();
			return uniqueIds;
		}

		private Func<AdAccountResponse, bool> IsAccountConnected() {
			return adAccount => _connectedStatuses.Any(platformStatus =>
				platformStatus.Equals(adAccount.AccountStatus, StringComparison.InvariantCultureIgnoreCase));
		}

		private void RefreshAdAccounts(List<string> adAccountsIds, Guid oldConnectionStatus,
			Guid newConnectionStatusId, string platform) {
			if (!adAccountsIds.IsNotEmpty()) {
				return;
			}
			SetNewConnectionStatus(adAccountsIds, oldConnectionStatus, newConnectionStatusId);
			Notifier.Notify($"refresh.adAccount.{platform}");
		}

		private void SetNewConnectionStatus(IEnumerable<string> adAccountsIds, Guid oldConnectionStatus,
			Guid newConnectionStatus) {
			var esqResult = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "AdAccount") {
				PrimaryQueryColumn = { IsVisible = true }
			};
			esqResult.AddColumn("ConnectionStatus");
			esqResult.AddColumn("Id");
			var filterByConnectionStatus =
				esqResult.CreateFilterWithParameters(FilterComparisonType.Equal, "ConnectionStatus",
					oldConnectionStatus);
			var filterByPlatformId =
				esqResult.CreateFilterWithParameters(FilterComparisonType.Equal, "AccountId", adAccountsIds);
			esqResult.Filters.Add(filterByPlatformId);
			esqResult.Filters.Add(filterByConnectionStatus);
			var entities = esqResult.GetEntityCollection(UserConnection);
			entities.ForEach(entity => {
				entity.SetColumnValue("ConnectionStatusId", newConnectionStatus);
				entity.Save();
			});
		}

		#endregion

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var platforms = AdPlatformRepository.GetExistingPlatforms(UserConnection);
			foreach (var platform in platforms) {
				var adAccountsFromDb = AdAccountRepository.GetAdAccounts(platform.Key);
				var uniqueIds = GetUniquePlatformUserIds(adAccountsFromDb);
				foreach (var platformUserId in uniqueIds) {
					var adAccounts = new List<AdAccountResponse>();
					if (!string.IsNullOrWhiteSpace(platformUserId)) {
						adAccounts = DigitalAdsAdAccountsProvider.GetAdAccounts(new GetAdAccountsRequest
						{
							PlatformName = platform.Value,
							PlatformUserId = platformUserId,
							Application = Application
						}).Result;
					}
					var activeAdAccounts = adAccounts.Where(IsAccountConnected()).ToList();
					var adAccountsIdsFromPlatform = activeAdAccounts.Select(x => x.PlatformAdAccountId).ToList();
					var adAccountsIdsFromDb = adAccountsFromDb.Where(x =>
							x.GetTypedColumnValue<string>("PlatformUserId") == platformUserId)
						.Select(x => x.GetTypedColumnValue<string>("AccountId"))
						.ToList();
					var adAccountsWithoutAccess = adAccountsIdsFromDb.Except(adAccountsIdsFromPlatform).ToList();
					RefreshAdAccounts(adAccountsWithoutAccess, _connectedConnectionStatusId,
						_disconnectedConnectionStatusId, platform.Value);
				}
			}
			return true;
		}

		#endregion

		#region Methods: Public

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion
}