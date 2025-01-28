<<<<<<< HEAD
namespace CrtGoogleAnalytics.API
{
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Models;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common.Json;

	internal class GAModelFactory
	{

		#region Methods: Public

		public static IEnumerable<T> GetWebEventModels<T>(GADataResponse analyticsData, Func<string, T> deserializeModel)
				where T: GAWebEventModelBase {
			if (analyticsData?.Rows == null) {
				yield break;
			}
			var dimensionsCount = analyticsData.DimensionHeaders.Count;
			var metricsCount = analyticsData.MetricHeaders?.Count ?? 0;
			foreach (var row in analyticsData.Rows) {
				var rowData = new Dictionary<string, object>();
				for (var i = 0; i < dimensionsCount; i++) {
					rowData[analyticsData.DimensionHeaders.ElementAt(i).Name] = row.DimensionValues[i].Value;
				}
				for (var i = 0; i < metricsCount; i++) {
					rowData[analyticsData.MetricHeaders.ElementAt(i).Name] = row.MetricValues[i].Value;
				}
				var rowStr = Json.Serialize(rowData, true);
				var model = deserializeModel(rowStr);
				if (model == null) {
					continue;
				}
				yield return model;
			}
		}

		public static IEnumerable<GAProperty> CreateAnalyticsProperties(IEnumerable<GAAccountProperty> properties) {
			foreach (var property in properties) {
				yield return new GAProperty() {
					Id = property.Id,
					Name = property.Name
				};
			}
		}

		public static IEnumerable<GAWebDataStream> CreateWebDataStreams(IEnumerable<GADataStream> streams) {
			foreach (var stream in streams) {
				if (stream.StreamType != "WEB_DATA_STREAM") {
					continue;
				}
				yield return new GAWebDataStream() {
					Name = stream.Name,
					MeasurementId = stream.StreamData.MeasurementId,
					DefaultUri = stream.StreamData.DefaultUri,
					StreamId = stream.Id
				};
			}
		}

		#endregion

	}
}
=======
namespace CrtGoogleAnalytics.API
{
	using CrtGoogleAnalytics.API.Dto;
	using CrtGoogleAnalytics.API.Models;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common.Json;

	internal class GAModelFactory
	{

		#region Methods: Public

		public static IEnumerable<T> GetWebEventModels<T>(GADataResponse analyticsData, Func<string, T> deserializeModel)
				where T: GAWebEventModelBase {
			if (analyticsData?.Rows == null) {
				yield break;
			}
			var dimensionsCount = analyticsData.DimensionHeaders.Count;
			var metricsCount = analyticsData.MetricHeaders?.Count ?? 0;
			foreach (var row in analyticsData.Rows) {
				var rowData = new Dictionary<string, object>();
				for (var i = 0; i < dimensionsCount; i++) {
					rowData[analyticsData.DimensionHeaders.ElementAt(i).Name] = row.DimensionValues[i].Value;
				}
				for (var i = 0; i < metricsCount; i++) {
					rowData[analyticsData.MetricHeaders.ElementAt(i).Name] = row.MetricValues[i].Value;
				}
				var rowStr = Json.Serialize(rowData, true);
				var model = deserializeModel(rowStr);
				if (model == null) {
					continue;
				}
				yield return model;
			}
		}

		public static IEnumerable<GAProperty> CreateAnalyticsProperties(IEnumerable<GAAccountProperty> properties) {
			foreach (var property in properties) {
				yield return new GAProperty() {
					Id = property.Id,
					Name = property.Name
				};
			}
		}

		public static IEnumerable<GAWebDataStream> CreateWebDataStreams(IEnumerable<GADataStream> streams) {
			foreach (var stream in streams) {
				if (stream.StreamType != "WEB_DATA_STREAM") {
					continue;
				}
				yield return new GAWebDataStream() {
					Name = stream.Name,
					MeasurementId = stream.StreamData.MeasurementId,
					DefaultUri = stream.StreamData.DefaultUri,
					StreamId = stream.Id
				};
			}
		}

		#endregion

	}
}
>>>>>>> e78d6ac (merge to local)
