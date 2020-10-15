var database, playerCount;

var gameState=0, game, form, player;

function setup(){
    //unfinished
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}














