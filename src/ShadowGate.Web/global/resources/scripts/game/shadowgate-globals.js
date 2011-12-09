//:: GLOBAL VARIABLES ::\\
var fps = 30;
var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;
var image = null;
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

var cookieCurrentCommand = "shadowGateCurrentCommand";
var cookieCurrentObject = "shadowGateCurrentSelectedObject";
var cookieCurrentWindow = "shadowGateCurrentWindow";

var siteGamePlayUrl = "play-game";


