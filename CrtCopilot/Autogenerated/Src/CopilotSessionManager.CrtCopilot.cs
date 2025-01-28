namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using ItemNotFoundException=Terrasoft.Configuration.ItemNotFoundException;
	
	[DefaultBinding(typeof(ICopilotSessionManager))]
	internal class CopilotSessionManager: ICopilotSessionManager
	{

		#region Constants: Private

		private const string KeyPrefix = "copilotSession_";

		#endregion

		#region Fields: Private
		
		private static readonly Dictionary<Guid, CopilotSession> _sessions = new Dictionary<Guid, CopilotSession>();
		private static readonly ILog _log = LogManager.GetLogger("Copilot");
		private readonly UserConnection _userConnection;

		private bool _isInitialized;
		private readonly ICopilotHistoryStorage _copilotHistoryStorage;

		#endregion

		#region Constructors: Public

		public CopilotSessionManager(UserConnection userConnection, ICopilotHistoryStorage copilotHistoryStorage) {
			_userConnection = userConnection;
			_copilotHistoryStorage = copilotHistoryStorage;
		}

		#endregion

		#region Methods: Private

		private void Init() {
			if (_isInitialized) {
				return;
			}
			if (_sessions.Values.Any(session => session?.UserId == _userConnection?.CurrentUser?.Id)) {
				_isInitialized = true;
				return;
			}
			if (LoadCopilotSessionsFromSessionStore()) {
				_isInitialized = true;
				return;
			}
			_isInitialized = true;
		}

		private bool LoadCopilotSessionsFromSessionStore() {
			IEnumerable<string> keys = _userConnection.SessionData.Keys.Where(key => key.StartsWith(KeyPrefix));
			bool isFound = false;
			foreach (string key in keys) {
				var copilotSession = (CopilotSession)_userConnection.SessionData[key];
				_sessions[copilotSession.Id] = copilotSession;
				isFound = true;
			}
			return isFound;
		}

		private void Update(CopilotSession session) {
			_userConnection.SessionData[KeyPrefix + session.Id] = session;
			try {
				_copilotHistoryStorage.SaveSession(session);
			} catch (Exception e) {
				_log.Error($"Can't save session with id {session.Id}", e);
			}
		} 

		#endregion

		#region Methods: Public

		public CopilotSession Add(CopilotSession copilotSession) {
			_sessions[copilotSession.Id] = copilotSession;
			_userConnection.SessionData[KeyPrefix + copilotSession.Id] = copilotSession;
			return copilotSession;
		}

		public void Update(Guid copilotSessionId, Guid requestId) {
			CopilotSession session = FindById(copilotSessionId);
			if (session == null) {
				throw new ItemNotFoundException(_userConnection, copilotSessionId.ToString(), nameof(CopilotSession));
			}
			session.Messages.Where(msg => msg.CopilotRequestId.IsNullOrEmpty()).ForEach(msg => {
				msg.CopilotRequestId = requestId;
			});
			Update(session);
		}

		public CopilotSession FindById(Guid copilotSessionId) {
			Init();
			if (_sessions.TryGetValue(copilotSessionId, out CopilotSession copilotSession)) {
				return copilotSession;
			}
			copilotSession = _userConnection.SessionData[KeyPrefix + copilotSessionId] as CopilotSession;
			_sessions[copilotSessionId] = copilotSession;
			return copilotSession;

		}

		public IEnumerable<CopilotSession> GetActiveSessions(Guid userId) {
			Init();
			return _sessions.Values
				.Where(session => session != null && session.UserId == userId && session.State == CopilotSessionState.Active)
				.OrderByDescending(session => session.StartDate);
		}

		public void CloseSession(Guid copilotSessionId) {
			Init();
			CopilotSession copilotSession = FindById(copilotSessionId);
			if (copilotSession == null) {
				return;
			}
			copilotSession.State = CopilotSessionState.Closed;
			copilotSession.EndDate = DateTime.UtcNow;
			Update(copilotSession);
		}

		#endregion

	}

} 
