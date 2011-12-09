using ShadowGate.Core.Model;

namespace ShadowGate.Core.UI.Model
{
    public class GameView
    {
        public Game game { get; set; }


        public GameView(string gameId)
        {
            this.game = new Game();
        }
    }
}
