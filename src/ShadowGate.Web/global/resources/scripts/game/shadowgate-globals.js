//:: GLOBAL VARIABLES ::\\
var fps = 30;
var x = 0;
var y = 0;
var startX = 25; //offset to allow border underneath to show
var startY = 25;
var xDirection = 1;
var yDirection = 1;
var image = null;
var backgroundImage = null;
var canvas = null;
var context2D = null;
var loadingBar_Width = 150;
var soundFxList = [];

var gameHeight = 825;
var gameWidth = 760;
var gameDefaultVoulme = 5; //i dont think it needs to be loud personally
var gameAlertMessage = "This is an alert, my good sir.";
var gameGlobalKeyPress = false;
var gameStatusWindowTopIndex = parseInt(10);
var gameCurrentTorchId;
var gamePathToRoomImages = "global/resources/images/rooms/";

var cookieCurrentCommand = "shadowGateCurrentCommand";
var cookieCurrentObject = "shadowGateCurrentSelectedObject";
var cookieCurrentWindow = "shadowGateCurrentWindow";

var siteGamePlayUrl = "play-game";

///::: GLOBAL FUNCTIONS :::\\\
function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
    }

    

    return (x + "|" + y); //split out pipe always
};
function getCurrentCommand() {
    var currentAction = $.cookie(cookieCurrentCommand);
    if(currentAction != null) {
        return currentAction;
    }
    else {
        return "";
    }
};