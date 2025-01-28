namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;

	public interface ICopilotSessionManager
	{
		CopilotSession Add(CopilotSession copilotSession);
		void Update(Guid copilotSessionId, Guid requestId);
		CopilotSession FindById(Guid copilotSessionId);
		IEnumerable<CopilotSession> GetActiveSessions(Guid userId);
		void CloseSession(Guid copilotSessionId);
	}

} 
