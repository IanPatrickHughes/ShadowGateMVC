using NUnit.Framework;
using ShadowGate.Web.Tests.Framework;
namespace ShadowGate.Web.Tests.specs
{
    [TestFixture]
    public class GameSpecs : TestBase
    {
         [SetUp]
         public void Init()
         {
             
         }
    
        [Test]
        public void user_should_get_only_their_current_room()
        {
            Assert.True(true);
        }
        [Test]
        public void user_should_get_their_current_items()
        {
            //Running list of Goods and spells..probably will be two lists in a single object 
            //and Backbone will need a similar model for list manipulation on the font-end
            Assert.True(true);
        }
        [Test]
        public void user_performs_a_requested_action_gets_reponse(object Room,object Action,object Object)
        {
            //To-Do, room may not matter most of the time since actions performed in the room by
            //objects are probably handled on the client-side. But, if You "hit + torch" that should hit this service,
            //where-as Use + Object alone probably wont fire this. I'll have to figure out that logic.
            Assert.True(true);
        }
        [Test]
        public void user_forms_a_torch_action_add_or_remove_which_updates_current_items(object Torch, object action)
        {
            Assert.True(true);
        }
    
    }
}
