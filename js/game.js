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
    }
    play() {
        form.hide();
        textSize(25);
        text("Start!", 200, 100);
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            console.log(allPlayers);
            var displayPos = 150;
            for(var p in allPlayers) {
                if (p === "player" + player.index) {
                    fill("red");
                } else {
                    fill("black");
                }
                console.log(p);
                textSize(20);
                displayPos += 50;
                text(allPlayers[p].name + ": " + allPlayers[p].distance, 100, displayPos);
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 20;
            player.update();
        }
    }
}   