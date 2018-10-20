// Write your JS here

let hero = {
    name: "X-man",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "dagger",
        damage: 2
    }
};

function rest(player) {
    player.health = 10;
    return player;
};

function pickUpItem(player, item) {
    player.inventory.push(item);
    return player;
};

function equipWeapon(player, index) {
    let newWeapon = player.inventory[index];
    player.weapon = newWeapon;
    player.inventory.splice(newWeapon, 1);
    return player;
};


var resting = document.getElementById('inn');
resting.onclick = function (event) {

    function rest(player) {
        player.health = 10
        return player
    }
    console.log(rest(hero));
}

var pickUp = document.getElementById('dagger');
pickUp.onclick = function (event) {

    function pickUpItem(player, item) {
        player.inventory.push(item)
        return player
    }
    console.log(pickUpItem(hero, {
        type: "dagger",
        damage: 2
    }))
}


hero.inventory = [{
    type: "bomb",
    damage: 8
}, {
    type: "pepperSpray",
    damage: 5
}];


var equipment = document.getElementById('bag');
equipment.addEventListener('click', function (event) {
    var indexInput = prompt("What is your desired weapon?");

});
