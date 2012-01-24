//Game Object
function ShadowGateGame() {

    this.init = function () {
        soundManager.debugMode = false;
        soundManager.defaultOptions.volume = 5;
        $("#game-container").playground({ width: gameWidth, height: gameHeight, keyTracker: true }).css("height", gameHeight).css("width", gameWidth).css("position", "relative");
        try {
            $(document).setLoadBar("loading-bar", loadingBar_Width);
        } catch (e) {
            alert("Error: Trouble with loading bar: " + e.toString());
        }

    },
    //to-do: There is NO way I will be loading all sound assets in one swoop once it is launched
    //but since I am working locally for now, lets toss them all in here at once and worry about
    //progressive loading by room and game advancement later.
    this.loadGameSoundFx = function () {
        window.soundFxList = {
            fx1: new $.gameQuery.SoundWrapper("global/assets/music/fx_1.mp3", false),
            fx2: new $.gameQuery.SoundWrapper("global/assets/music/fx_2.mp3", false),
            fx3: new $.gameQuery.SoundWrapper("global/assets/music/fx_3.mp3", false),
            fx4: new $.gameQuery.SoundWrapper("global/assets/music/fx_4.mp3", false),
            fx5: new $.gameQuery.SoundWrapper("global/assets/music/fx_5.mp3", false),
            fx6: new $.gameQuery.SoundWrapper("global/assets/music/fx_6.mp3", false),
            fx7: new $.gameQuery.SoundWrapper("global/assets/music/fx_7.mp3", false),
            fx8: new $.gameQuery.SoundWrapper("global/assets/music/fx_8.mp3", false),
            fx9: new $.gameQuery.SoundWrapper("global/assets/music/fx_9.mp3", false),
            fx10: new $.gameQuery.SoundWrapper("global/assets/music/fx_10.mp3", false),
            fx11: new $.gameQuery.SoundWrapper("global/assets/music/fx_11.mp3", false),
            fx12: new $.gameQuery.SoundWrapper("global/assets/music/fx_12.mp3", false),
            introSng: new $.gameQuery.SoundWrapper("global/assets/music/song_12.mp3", true),
            sng1: new $.gameQuery.SoundWrapper("global/assets/music/song_1.mp3", true),
            sng2: new $.gameQuery.SoundWrapper("global/assets/music/song_2.mp3", true),
            sng3: new $.gameQuery.SoundWrapper("global/assets/music/song_3.mp3", true),
            sng4: new $.gameQuery.SoundWrapper("global/assets/music/song_4.mp3", true),
            sng5: new $.gameQuery.SoundWrapper("global/assets/music/song_5.mp3", true),
            sng6: new $.gameQuery.SoundWrapper("global/assets/music/song_6.mp3", true),
            sng7: new $.gameQuery.SoundWrapper("global/assets/music/song_7.mp3", true),
            sng8: new $.gameQuery.SoundWrapper("global/assets/music/song_8.mp3", true),
            sng9: new $.gameQuery.SoundWrapper("global/assets/music/song_9.mp3", true),
            sng10: new $.gameQuery.SoundWrapper("global/assets/music/song_10.mp3", true),
            sng11: new $.gameQuery.SoundWrapper("global/assets/music/song_11.mp3", true),
            sng13: new $.gameQuery.SoundWrapper("global/assets/music/song_13.mp3", true)
        };

    },
    this.handleCurrentGameStatus = function () {
        //#1 Handle for CURRENT COMMAND
        var currentCmd = $.cookie(cookieCurrentCommand);
        if (currentCmd != "") {
            //indicate the current command after accidental page refresh    
            $("#" + currentCmd).addClass("command-button-on");
        }
        //#2 Handle for CURRENT PANEL STATUS
        var currentPanel = $.cookie(cookieCurrentWindow);
        if (currentPanel != "") {
            swapPanels(currentPanel);
        }
    },
    this.handleSpecialCommand = function (currentCmd) {
        if (currentCmd != "") {
            switch (currentCmd) {
                case "cmd-cardup":
                    //to-do handle the card up in the list window 
                    break;
                case "cmd-carddown":
                    //to-do handle card down
                    break;
                case "cmd-self":
                    performSelfAction();
                    break;
                case "cmd-save":
                    //to-do:
                    //#1 re-set the game state into cookie and redirect to save screen
                    //#2 There offer the save yes/no and come back and re-load 
                    break;
                default:
                    break;
            }
        }
    },
    this.handleLineItemCommand = function (currentCmd) {
        if (currentCmd != "") {

        }

    },
    this.swapCommandWindows = function () {
        swapPanels("");
    },
    this.lightTorch = function (torchId) {
        lightTorchById(torchId);
    };

    
    
    //Private game functions...
    function performSelfAction() {
        var currentCommand = $.cookie(cookieCurrentCommand);
        var currentSelectedItem = $.cookie(cookieCurrentObject);
        
        alert("You were about to perform: " + currentCommand + " on your SELF!");
    }
    function swapPanels(comm) {
        var index = 0;
        if (comm != "") {

            if (comm == "#game-status-window") {
                $("#game-status-window").show();
                $("#game-status-window-messenger").hide();
            }
            else {
                $("#game-status-window-messenger").show();
                $("#game-status-window").hide();
            }
        }
        else {
            if ($("#game-status-window").is(":visible")) { //the command window is on top
                $("#game-status-window").hide();
                $("#game-status-window-messenger").show();
                $.cookie(cookieCurrentWindow, "#game-status-window-messenger", { expires: null });
            }
            else {
                $("#game-status-window").show();
                $("#game-status-window-messenger").hide();
                $.cookie(cookieCurrentWindow, "#game-status-window", { expires: null });
            }
        }

    }
    //Private Torch Methods
    function lightTorchById(torchId) {
        switch (torchId) {
            case 1:
                setInterval(igniteTorch, 2);
                break;
        default:
            break;
        }
    };
    function igniteTorch() {
        //to-do add flicker affect, so it doesnt always switch back in forth
        var selector = "#flame" + gameCurrentTorchId;
        var currentClass = $(selector).attr("class") + "";
        if (currentClass == "") {
            $(selector).addClass("flame-left");
        }
        else if (currentClass == "flame-left") {
            $(selector).removeClass("flame-left");
            $(selector).addClass("flame-right");
        }
        else if (currentClass == "flame-right") {
            $(selector).removeClass("flame-right");
            $(selector).addClass("flame-left");
        }   
        
        
        
    }
    

};




//Player Object
var CurrentPlayerManager = {

    emptyListItems: function() {
        $("#current-list").empty();
    },
    getUserGoodsListItems: function() {
        var val = "016dabc7-e24b-4d25-af38-e0c2130e4d97";
        $.getJSON("/get-goods-list", { gameId: val }, function(data) {
            $("#listTemplate").tmpl(data).appendTo("#current-list");
        });
    }

};



//Wired Up Actions for UI when ready...
jQuery(function () {

    //--------GAME ITEMS--------\\  
    var game = new ShadowGateGame();
    game.init();
    game.loadGameSoundFx();
    game.handleCurrentGameStatus();



    //Click Handler for setting current usr command
    $(".command-button").click(function () {
        //clear all others
        var thisID = $(this).attr("id");
        var selector = ".command-button:not(#" + thisID + ")";
        $(selector).removeClass("command-button-on");
        $(this).addClass("command-button-on");
        $.cookie(cookieCurrentCommand, thisID, { expires: null });
    });
    //Click Handler for setting current "special" usr command
    $(".command-button-special").click(function () {
        //clear all others
        var thisID = $(this).attr("id");
        game.handleSpecialCommand(thisID);
    });
    //Click Handler for the Line Items 
    $("#current-list").delegate("li", "click", function () {

        var currentAction = $.cookie(cookieCurrentCommand);
        if (currentAction != "") {
            var id = $(this).children(".line-item").children(".command-button-item").attr("id");
            $("#current-list").find(".command-button-item").removeClass("command-button-item-on");
            $(this).children(".line-item").children(".command-button-item").addClass("command-button-item-on");
            $.cookie(cookieCurrentObject, id, { expires: null });
        }
    });
    //--------END GAME ITEMS--------\\  
    //--------TEST ITEMS--------\\    
    //::: LIST ITEMS :::\\
    $("#frm-test-game-list-items").submit(function () {
        CurrentPlayerManager.emptyListItems();
        CurrentPlayerManager.getUserGoodsListItems();
        return false;
    });
    $("#frm-test-game-control-torch").click(function () {
        window.gameCurrentTorchId = 1;
        game.lightTorch(1);
        return false;
    });

  
    //::: CONTROL ITEMS :::\\
    $("#frm-test-game-control-window").click(function () {
        game.swapCommandWindows();
    });

    //::: ROOM ITEMS :::\\
    $("#frm-test-game-load-room").click(function () {
        var val = $("#frm-test-room-number").val();
        var room = new ShadowGateRoom();
        var roomId = parseInt(val);
        room.drawLevel(roomId);
        
    });

    //--------END TEST ITEMS--------\\   




});