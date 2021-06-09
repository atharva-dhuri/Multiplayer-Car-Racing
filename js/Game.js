class Game {
    constructor() {

    }

    getState() {
        var gameStateref = database.ref('gameState')
        gameStateref.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            'gameState': state
        })
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getCount() 
            form = new Form();
            form.display();
        }
    }

    play() {
        form.hide();
        text("Game Has Started", 120, 100);
        Player.getPlayerInfo();

        if(allPlayers !==undefined) {
            var displayPos = 130;
            for(var i in allPlayers) {
                displayPos +=30
                if(i ==="player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                textSize(25);
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, displayPos);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !==null) {
            console.log("working");
            player.distance +=50
            player.update()
        }

    }
        
}