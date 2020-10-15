class Form {
    constructor() {
        this.input = createInput("name");
        this.button = createButton("join");
        this.greeting = createElement("h2");
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display() {
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(130, 180);
        //explain why we will change function
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(130, 160);
        });
    }
}