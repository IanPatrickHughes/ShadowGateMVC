function ShadowGateRoom() {

    this.init = function() {

    };
    

    //Public
    return {

        drawLevel: function (roomId) {
            try {

                switch (roomId) {
                    case 1:
                        var newRoom = new Room1();
                        newRoom.drawLevel();
                        break;
                    default:
                        alert("Not a room!");
                        break;
                }

            } catch (e) {
                alert(e.toString());
            }
        }
    };

    
    
};