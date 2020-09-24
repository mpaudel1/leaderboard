var database, position;

var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();

    var ballRef = database.ref("ball/position");

    ballRef.on("value", readPos, showError); 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x, y){
    database.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}

function readPos(data) {
    position = data.val();

    ball.x = position.x;
    ball.y = position.y;
}

function showError() {
    console.log("error");
}












