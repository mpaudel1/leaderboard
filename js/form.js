class Form {
    constructor() {

    }
    display() {
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(130, 0);
        var input = createInput("name");
        var button = createButton("join");
        input.position(130, 160);
        button.position(130, 180);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount++;
        });
    }
}