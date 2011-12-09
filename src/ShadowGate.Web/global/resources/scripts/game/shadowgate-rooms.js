function ShadowGateRoom() {

    this.init = function() {

    };
    

    //Public
    return {

        drawLevel: function (room) {
            try {

                switch (room) {
                    case 1:
                            var room = new Room1();
                            room.drawLevel();
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