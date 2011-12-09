using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ShadowGate.Core.Model.Items;

namespace ShadowGate.Core.Model
{
    public class Player
    {
        public List<Item> Items { get; set; }
        public string PlayerId { get; set; }



        public Player(string playerId)
        {
            this.PlayerId = playerId;
            this.Items = new List<Item>();


            for (var i = 0; i < 4; i++)
            {
                var itm = new Item();
                switch (i)
                {
                    case 0:
                        itm.Count = 1;
                        itm.IsCombinedInList = false;
                        itm.Type = ItemType.Key.ToString().ToLower();
                        break;
                    case 1:
                        itm.Count = 1;
                        itm.IsCombinedInList = false;
                        itm.Type = ItemType.Spell.ToString().ToLower();
                        break;
                    case 2:
                        itm.Count = 3;
                        itm.IsCombinedInList = true;
                        itm.Type = String.Format("{0}", ItemType.Torch.ToString().ToLower());
                        break;
                    case 3:
                        itm.Count = 1;
                        itm.IsCombinedInList = false;
                        itm.Type = String.Format("{0}", ItemType.Stone.ToString().ToLower());
                        break;   
                }

                this.Items.Add(itm);
            }

        }
    }
}
