class Player {
    constructor() {

    }


    //refer and listen to the database
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        });
    }

    //update the count in the database
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    // update/write the name to the database
    update(name) {
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }


}