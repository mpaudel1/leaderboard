var database, playerCount;

var gameState=0, game, form, player;

var allPlayers;

function setup(){
    //unfinished
    createCanvas(displayWidth - 10, displayHeight - 50);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}














