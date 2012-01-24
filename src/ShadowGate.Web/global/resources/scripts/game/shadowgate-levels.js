//ROOM1() : The "Entrace Room" at the start of the game
function Room1() {

    var roomImagePath = "room_1_entrance/";
    var backgroundImage = null;
    var skullImage = null;
    var keyOne = null;
    var doorOpen = null;
 
    //Private Required for every Room
    function load() {
        context2D.clearRect(0, 0, canvas.width, canvas.height);
        //#1 BG Always
        context2D.drawImage(backgroundImage, startX, startY);
        //#2 The Key layer
        context2D.drawImage(keyOne, 188, 49);
        //#3 The Skull layer
        context2D.drawImage(skullImage, 180, 37);
    };
    function performAction(e) {
        var cell = getCursorPosition(e);
        var canvX = (parseInt(cell.split("|")[0]));
        var canvY = (parseInt(cell.split("|")[1]));

        
        
        
        var cmd = getCurrentCommand();
        if(cmd != "") {
                  
            
        }
    };

    //Helpers per room
    

   
    //Public
    return {

        drawLevel: function () {
            try {

                backgroundImage = new Image();
                backgroundImage.src = window.gamePathToRoomImages + roomImagePath + "room_background.gif";
                backgroundImage.id = "room-1-background";

                skullImage = new Image();
                skullImage.src = window.gamePathToRoomImages + roomImagePath + "skull.gif";
                skullImage.id = "room-1-skull";

                keyOne = new Image();
                keyOne.src = window.gamePathToRoomImages + roomImagePath + "key_1.gif";
                keyOne.id = "room-1-key1";

                doorOpen = new Image();
                doorOpen.src = window.gamePathToRoomImages + roomImagePath + "door_open.gif";
                doorOpen.id = "room-1-door-open";

                window.canvas = document.getElementById('game-play-canvas');
                window.context2D = canvas.getContext("2d");
                window.canvas.addEventListener("click", performAction, false);
                
                load();
            }
            catch (e) {
                alert(e.toString());
            }
        },
        performAction: function (action, item) {
            try {
                alert(action + " : " + item);
            } catch (e) {
                alert(e.toString());
            }
        }

    };
    
    
    
};