namespace CrtGoogleAnalytics.API
{
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Parameters;
	using System.Collections.Generic;

	/// <summary>
	/// Declares implementation of Google Analytics API client.
	/// </summary>
	internal interface IGAAPIClient
	{
		/// <summary>
		/// Returns Google analytics accounts list.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// </summary>
		IEnumerable<GAAccount> GetAccountList(string accessToken);

		/// <summary>
		/// Returns Google analytics properties by account identifier.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="accountId">Google analytics account identifier</param>
		/// </summary>
		IEnumerable<GAAccountProperty> GetAccountProperties(string accessToken, string accountId);

		/// <summary>
		/// Returns Google analytics data streams by property identifier.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="propertyId">Google analytics property identifier</param>
		/// </summary>
		IEnumerable<GADataStream> GetDataStreams(string accessToken, string propertyId);

		/// <summary>
		/// Returns analytics data.
		/// <param name="accessToken">The access token to access Google analytics API</param>
		/// <param name="parameters">Request parameters</param>
		/// </summary>
		GADataResponse GetAnalyticsData(string accessToken, GADataRequestParameters parameters);
	}
}
