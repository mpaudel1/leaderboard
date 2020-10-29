class Game {
    constructor() {
        
    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref("/").update({
            gameState: state,
        })
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
        car4.addImage(car4img);
    }
    play() {
        form.hide();
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            background(groundimg);
            image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5)
            var index = 0;
            var x = 200;
            var y = 0;
            for(var p in allPlayers) {
                index += 1;
                x += 200;
                y = displayHeight - allPlayers[p].distance;
                cars[index - 1].x = x;
                cars[index - 1].y =y
                if (index === player.index) {
                    cars[index -1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index -1].y; 
                }
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 20;
            player.update();
        }
        if (player.distance > 3800) {
            gameState = 2;
        }
        
        drawSprites();
    }
    end() {
        console.log("game ended")
    }
}   