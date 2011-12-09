using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.Wcf;

using ShadowGate.Core.Controllers;
using ShadowGate.Core.Framework.Application.Engine;

namespace ShadowGate.Core.Global
{
    public class ShadowGateGlobal : HttpApplication
    {
      
        protected void Application_Start()
        {

            var container = BuildContainer();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            AutofacHostFactory.Container = container;

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new ShadowGateViewEngine());

        }


        private static IContainer BuildContainer()
        {
            var builder = new ContainerBuilder();

            //Routes n routes n routes...
            builder.RegisterModule(new RoutesModule(RouteTable.Routes));

            return builder.Build();
        }

     
    }
}
