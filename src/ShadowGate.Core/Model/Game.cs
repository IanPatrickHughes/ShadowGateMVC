using System;
using System.Collections.Generic;
using ShadowGate.Core.Model.Items;

namespace ShadowGate.Core.Model
{
    /// <summary>
    /// The primary game object used for describing state
    /// </summary>
    public class Game
    {
    
        public string GameId { get; set; }
        public bool IsTest { get; set; }
        public Player CurrentPlayer { get; set; }

        public Game()
        {
            this.GameId = "016dabc7-e24b-4d25-af38-e0c2130e4d97";
            this.IsTest = true;
            this.CurrentPlayer = new Player("1ebb23e4-684c-4e83-8bca-838ad5f51550");
           
        }
    }
}
