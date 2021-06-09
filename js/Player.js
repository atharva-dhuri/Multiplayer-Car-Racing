class Player {
    constructor() {
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    getCount() {
        var fireBaseref = database.ref('playerCount');
        fireBaseref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count) {
        database.ref('/').update({
            'playerCount': count
        })
    }

    update() {
        var playerindex = "players/player" + this.index
        database.ref(playerindex).set({
            'name': this.name,
            'distance': this.distance
        })    
    }

    static getPlayerInfo() {
        var fireBaseref = database.ref('players');
        fireBaseref.on("value", (data) =>{
            allPlayers = data.val();
        })
    }
}