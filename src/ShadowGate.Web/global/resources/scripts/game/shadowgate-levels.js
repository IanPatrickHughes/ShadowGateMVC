//ROOM1() : The Room with 
function Room1() {
    
    
    function draw() {
        context2D.clearRect(0, 0, canvas.width, canvas.height);
        context2D.drawImage(image, x, y);
        x += 1 * xDirection;
        y += 1 * yDirection;

        if (x >= 350) {
            x = 350;
            xDirection = -1;
        }
        else if (x <= 0) {
            x = 0;
            xDirection = 1;
        }

        if (y >= 350) {
            y = 350;
            yDirection = -1;
        }
        else if (y <= 0) {
            y = 0;
            yDirection = 1;
        }
    };


    //Public
    return {

        drawLevel: function() 
        {
            try {
                    image = new Image();
                    image.src = "http://static.everynobody.com/artifacts/shadowgate/smiley.jpg";
                    image.id = "click-image";
                    canvas = document.getElementById('game-play-canvas');
                    context2D = canvas.getContext("2d");
                    setInterval(draw, 1000 / fps);
                }
                catch (e) {
                    alert(e.toString());
                }
        }
        };
    
    
    
};