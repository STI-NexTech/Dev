<<<<<<< HEAD
﻿namespace Terrasoft.Configuration
{
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	#region Class: LangSupMailBoxBinder

	/// <summary>
	/// Binder for <see cref="ISupMailBoxLangProvider"/>.
	/// </summary>
	public class LangSupMailBoxBinder : AppEventListenerBase
	{

		#region Methods: Public

		public override void OnAppStart(AppEventContext context) {
			base.OnAppStart(context);
			ClassFactory
				.Bind<ISupMailBoxLangProvider, SupMailBoxLangProvider>("SupMailBoxLang");
		}

		#endregion

	}

	#endregion

}
=======
﻿namespace Terrasoft.Configuration
{
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	#region Class: LangSupMailBoxBinder

	/// <summary>
	/// Binder for <see cref="ISupMailBoxLangProvider"/>.
	/// </summary>
	public class LangSupMailBoxBinder : AppEventListenerBase
	{

		#region Methods: Public

		public override void OnAppStart(AppEventContext context) {
			base.OnAppStart(context);
			ClassFactory
				.Bind<ISupMailBoxLangProvider, SupMailBoxLangProvider>("SupMailBoxLang");
		}

		#endregion

	}

	#endregion

}
>>>>>>> e78d6ac (merge to local)
