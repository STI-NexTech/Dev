<<<<<<< HEAD
﻿namespace Terrasoft.Configuration
{
	using System;

	public interface IContactCommLanguage
	{
		/// <summary>
		/// Get language identifier related with contact.
		/// </summary>
		/// <param name="contactId">Contact identifier.</param>
		/// <returns>Language identifier.</returns>
		Guid Get(Guid contactId);

		/// <summary>
		/// Gets default language from system setting.
		/// </summary>
		/// <returns>Default language identifier.</returns>
		Guid GetDefault();
	}
}
=======
﻿namespace Terrasoft.Configuration
{
	using System;

	public interface IContactCommLanguage
	{
		/// <summary>
		/// Get language identifier related with contact.
		/// </summary>
		/// <param name="contactId">Contact identifier.</param>
		/// <returns>Language identifier.</returns>
		Guid Get(Guid contactId);

		/// <summary>
		/// Gets default language from system setting.
		/// </summary>
		/// <returns>Default language identifier.</returns>
		Guid GetDefault();
	}
}
>>>>>>> e78d6ac (merge to local)
