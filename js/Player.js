class Player {
    constructor() {

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

    update(name) {
        var playerindex = "player" + playerCount
        database.ref(playerindex).set({
            'name': name
        })    
    }
}