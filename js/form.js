class Form {
    constructor() {
        this.input = createInput("name");
        this.button = createButton("join");
        this.greeting = createElement("h2");
        this.tryagain = createButton("One More?");
        this.endTitle = createElement("h2");
        this.rankHolder = createElement("");
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.endTitle.hide();
        this.rankHolder.hide();
    }
    display() {
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 0);
        this.input.position(displayWidth/2-50, displayHeight/2-100);
        this.button.position(displayWidth/2-50, displayHeight/2);
        this.tryagain.position(displayWidth-200, 50);
        this.endTitle.hide();
        this.endTitle.position(displayWidth/2 + 100, displayHeight/2 + 100);
        this.endTitle.html("Game Over!");
        this.rankHolder.position(displayWidth/2 - 50, displayHeight/2 - 50);
        this.tryagain.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            Player.updateCarsAtEnd(0);
            location.reload();
        });
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth/2-50, displayHeight/2-100);
        });
    }
}