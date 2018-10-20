// Write your JS here
// Section 1


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
resting.onclick = function(event) {

    function rest(player){
      player.health = 10
      return player
    }
  console.log(rest(hero));
}

var pickUp = document.getElementById('dagger');
pickUp.onclick = function(event) {

    function pickUpItem(player, item){
    player.inventory.push(item)
    return player
    }
  console.log(pickUpItem(hero, {type: "dagger", damage: 2}))
}