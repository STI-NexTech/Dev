<<<<<<< HEAD
namespace CrtGoogleAnalytics.API.Interfaces
{
	using System.Collections.Generic;
	using CrtGoogleAnalytics.API.Models;
	using CrtGoogleAnalytics.API.Parameters;
	using Terrasoft.Configuration;

	/// <summary>
	/// Declares implementation of Google Analytics Data service.
	/// </summary>
	public interface IGADataService
	{
		/// <summary>
		/// Returns all Google analytics accounts by user identifier.
		/// <param name="platformUserId">Google profile identifier</param>
		/// </summary>
		IEnumerable<IWebAnalyticsAccount> GetAccountList(string platformUserId);

		/// <summary>
		/// Returns Google analytics account details.
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		GAAccountDetails GetAccountDetails(string accountId);

		/// <summary>
		/// Returns web sessions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebSessionModel> GetSessionsByUserId(string userId, DataRequestParameters parameters);

		/// <summary>
		/// Returns web actions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebActionModel> GetActionsByUserId(string userId, DataRequestParameters parameters);

		/// <summary>
		/// Returns web sessions for visitors' segment.
		/// <param name="users">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebSessionModel> GetSessionsForUsers(IEnumerable<string> users, DataRequestParameters parameters);

		/// <summary>
		/// Returns web actions for visitors' segment.
		/// <param name="userId">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebActionModel> GetActionsForUsers(IEnumerable<string> users, DataRequestParameters parameters);
	}
}
=======
namespace CrtGoogleAnalytics.API.Interfaces
{
	using System.Collections.Generic;
	using CrtGoogleAnalytics.API.Models;
	using CrtGoogleAnalytics.API.Parameters;
	using Terrasoft.Configuration;

	/// <summary>
	/// Declares implementation of Google Analytics Data service.
	/// </summary>
	public interface IGADataService
	{
		/// <summary>
		/// Returns all Google analytics accounts by user identifier.
		/// <param name="platformUserId">Google profile identifier</param>
		/// </summary>
		IEnumerable<IWebAnalyticsAccount> GetAccountList(string platformUserId);

		/// <summary>
		/// Returns Google analytics account details.
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		GAAccountDetails GetAccountDetails(string accountId);

		/// <summary>
		/// Returns web sessions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebSessionModel> GetSessionsByUserId(string userId, DataRequestParameters parameters);

		/// <summary>
		/// Returns web actions by visitor identifier.
		/// <param name="userId">Google analytics user/visitor identifier</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebActionModel> GetActionsByUserId(string userId, DataRequestParameters parameters);

		/// <summary>
		/// Returns web sessions for visitors' segment.
		/// <param name="users">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebSessionModel> GetSessionsForUsers(IEnumerable<string> users, DataRequestParameters parameters);

		/// <summary>
		/// Returns web actions for visitors' segment.
		/// <param name="userId">Google analytics users' segment</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse<GAWebActionModel> GetActionsForUsers(IEnumerable<string> users, DataRequestParameters parameters);
	}
}
>>>>>>> e78d6ac (merge to local)
