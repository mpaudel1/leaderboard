var database, playerCount;

var car1, car2, car3, car4, cars;

var car1img, car2img, car3img, car4img, trackimg, groundimg; 

var gameState=0, game, form, player;

var allPlayers;

function preload() {
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackimg = loadImage("images/track.jpg");
    groundimg = loadImage("images/ground.png");
}

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
    if (gameState === 2) {
        clear();
        game.end();
    }
}














