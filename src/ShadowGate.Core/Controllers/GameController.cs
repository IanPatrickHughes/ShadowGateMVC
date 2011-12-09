using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ShadowGate.Core.Framework.Utilities;
using ShadowGate.Core.Model.Items;
using ShadowGate.Core.UI.Model;
using ShadowGate.Core.Model;

namespace ShadowGate.Core.Controllers
{
    [HandleError]
    [ValidateInput(false)]
    public class GameController : Controller
    {
       
        public virtual ActionResult Index()
        {
            ViewData.Model = new GameView(Guid.NewGuid().ToString());
            return View("Loader");
        }

        public virtual ActionResult Play()
        {
            ViewData.Model = new GameView(Guid.NewGuid().ToString());
            return View("Index");
        }

        [HttpGet]
        public ActionResult GetGame(string gameId)
        {
            //Removed (Request.IsAjaxRequest()) for now

                var serializer = new JavaScriptSerializer();
                serializer.RegisterConverters(new JavaScriptConverter[] { new ExpandoObjectConverter() });
                Response.ContentType = "application/json";
                var game = new Game();
                 
                if (gameId == "016dabc7-e24b-4d25-af38-e0c2130e4d97")
                {
                    var json = serializer.Serialize(game);
                    return Content(json);
                }
                else
                {
                    game.CurrentPlayer.Items = new List<Item>();
                    game.GameId = "";
                    var json = serializer.Serialize(game);
                    return Content(json);
                }

        }
        [HttpGet]
        public ActionResult GetGameListItems(string gameId)
        {
            //Removed (Request.IsAjaxRequest()) for now

                var serializer = new JavaScriptSerializer();
                serializer.RegisterConverters(new JavaScriptConverter[] { new ExpandoObjectConverter() });
                Response.ContentType = "application/json";
                var game = new Game();
                var lstItems = game.CurrentPlayer.Items;

                if (gameId == "016dabc7-e24b-4d25-af38-e0c2130e4d97")
                {
                    var json = serializer.Serialize(lstItems);
                    return Content(json);
                }
                else
                {
                    game.CurrentPlayer.Items = new List<Item>();
                    var json = serializer.Serialize(game.CurrentPlayer.Items);
                    return Content(json);
                }

        }

        public ActionResult BadMojo()
        {
            return View("BadMojo");
        }



    }
}
