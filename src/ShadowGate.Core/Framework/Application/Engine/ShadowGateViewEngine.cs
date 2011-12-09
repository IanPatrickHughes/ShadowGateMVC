using System;
using System.Linq;
using System.Web.Mvc;

namespace ShadowGate.Core.Framework.Application.Engine
{
    public class ShadowGateViewEngine : IViewEngine
    {
        private RazorViewEngine currentEngine;
        private readonly object @lock = new object();

        #region ///<implemented members>...
            public ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache)
            {
                return CreateRealViewEngine().FindPartialView(controllerContext, partialViewName, useCache);
            }

            public ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache)
            {
                return CreateRealViewEngine().FindView(controllerContext, viewName, masterName, useCache);    
            }

            public void ReleaseView(ControllerContext controllerContext, IView view)
            {
                CreateRealViewEngine().ReleaseView(controllerContext, view);
            }
        #endregion





        private RazorViewEngine CreateRealViewEngine()
        {
            lock (@lock)
            {
              
                // Create a new razor view engine using the theme name when prioritizing names for resolving views
                currentEngine = new RazorViewEngine();

                currentEngine.PartialViewLocationFormats =
                    new[]
                    {
                        "~/Views/Shared/Partial/{0}.cshtml",
                        "~/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(currentEngine.PartialViewLocationFormats).ToArray();

                currentEngine.ViewLocationFormats =
                    new[]
                    {
                       "~/Views/{1}/{0}.cshtml",
                        "~/Views/Shared/{0}.cshtml",
                        "~/Views/Shared/Game/{1}/{0}.cshtml",
                        "~/Views/Shared/{1}/{0}.cshtml",
                        "~/Views/Shared/Partial/{0}.cshtml"
                    }.Union(currentEngine.ViewLocationFormats).ToArray();

                currentEngine.MasterLocationFormats =
                    new[]
                    {
                       "~/Views/{1}/{0}.cshtml",
                        "~/Views/Shared/{0}.cshtml",
                        "~/Views/Shared/Partial/{0}.cshtml"
                    }.Union(currentEngine.MasterLocationFormats).ToArray();


                return currentEngine;
            }
        }



    }
}
