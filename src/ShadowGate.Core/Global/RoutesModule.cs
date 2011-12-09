using System.Linq;
using System.ServiceModel.Activation;
using System.Web.Mvc;
using System.Web.Routing;
using ShadowGate.Core.Framework.Application;
using Autofac;

namespace ShadowGate.Core.Global
{
    public class RoutesModule : Module
    {
        private readonly RouteCollection _routes;

        public RoutesModule(RouteCollection routes)
        {
            this._routes = routes;
        }

        protected override void Load(ContainerBuilder builder)
        {
            //SEE http://wcf.codeplex.com/workitem/9 
            var serviceRoutes = _routes
                .OfType<ServiceRoute>()
                .ToList();
            var serviceRoutesUrls = serviceRoutes
                .Select(serviceRoute => serviceRoute.Url.Replace("{*pathInfo}", ""))
                .ToArray();
            var notAService = new NotFromValuesListConstraint(serviceRoutesUrls.ToArray());
            var defaultConstraint = new { page = notAService };
            foreach (var serviceRoute in serviceRoutes)
            {
                _routes.Remove(serviceRoute);
            }

            _routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            _routes.IgnoreRoute("{*allaxd}", new { allaxd = @".*\.axd(/.*)?" });
            _routes.IgnoreRoute("pingback");

            if (builder != null)
                AreaRegistration.RegisterAllAreas();

            //Game Items 
            _routes.MapLowerCaseRoute("", new { controller = "Game", action = "Index" });
            _routes.MapLowerCaseRoute("play-game", new { controller = "Game", action = "Play" });
            _routes.MapLowerCaseRoute("get-game", new { controller = "Game", action = "GetGame" });
            _routes.MapLowerCaseRoute("get-goods-list", new { controller = "Game", action = "GetGameListItems" });



            foreach (var serviceRoute in serviceRoutes)
            {
                _routes.Add(serviceRoute);
            }
        }
    }
}
