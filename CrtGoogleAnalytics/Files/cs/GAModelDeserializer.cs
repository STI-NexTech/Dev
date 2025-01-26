namespace CrtGoogleAnalytics.API
{
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Models;
	using System;
	using Terrasoft.Common.Json;

	internal class GAModelDeserializer
	{

		#region Fields: Private

		private static readonly string NotSetValue = "(not set)";

		#endregion

		#region Methods: Private

		private static int GetEventsCount(string eventsCountStr) {
			if (int.TryParse(eventsCountStr, out var result)) {
				return result;
			}
			return 1;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Delegate that returns deserialized session model or null.
		/// </summary>
		public static Func<string, GAWebSessionModel> ToSessionModel = (string rowStr) => {
			var sessionDto = Json.Deserialize<GAWebSession>(rowStr);
			var model = new GAWebSessionModel {
				SessionStr = sessionDto.SessionId,
				CityId = sessionDto.CityId,
				CountryCode = sessionDto.CountryCode,
				LanguageCode = sessionDto.LanguageCode,
				PageReferrer = sessionDto.PageReferrer,
				SourceMedium = sessionDto.SourceMedium,
				Campaign = sessionDto.Campaign
			};
			if (string.IsNullOrWhiteSpace(model.SessionId)
				|| string.IsNullOrWhiteSpace(model.ClientId)
				|| model.SessionStr == NotSetValue) {
				return null;
			}
			return model;
		};

		/// <summary>
		/// Delegate that returns deserialized action model or null.
		/// </summary>
		public static Func<string, GAWebActionModel> ToActionModel = (string rowStr) => {
			var actionDto = Json.Deserialize<GAWebAction>(rowStr);
			var model = new GAWebActionModel {
				SessionStr = actionDto.SessionId,
				DateTimeStr = actionDto.DateTime,
				EventName = actionDto.EventName,
				FullPageUrl = actionDto.FullPageUrl,
				PageTitle = actionDto.PageTitle,
				EventsCount = GetEventsCount(actionDto.EventCount),
			};
			if (string.IsNullOrWhiteSpace(model.SessionId)
				|| string.IsNullOrWhiteSpace(model.ClientId)
				|| string.IsNullOrWhiteSpace(model.EventName)
				|| string.IsNullOrWhiteSpace(model.DateTimeStr)
				|| string.IsNullOrWhiteSpace(model.FullPageUrl)
				|| model.SessionStr == NotSetValue
				|| model.EventName == NotSetValue
				|| model.DateTimeStr == NotSetValue
				|| model.FullPageUrl == NotSetValue) {
				return null;
			}
			return model;
		};

		#endregion

	}
}
