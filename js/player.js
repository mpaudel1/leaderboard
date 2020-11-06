class Player{
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = 0;
    }
    getCarsAtEnd() {
        database.ref("carsAtEnd").on("value", (data) => {
            this.rank = data.val();
        });
    }
    static updateCarsAtEnd(rank) {
        database.ref("/").update({
            carsAtEnd: rank,
        });
    }
    getCount() {
        var getCountRef = database.ref("playerCount");
        getCountRef.on("value", function(data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        });  
    }
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo() {
        database.ref("players").on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}