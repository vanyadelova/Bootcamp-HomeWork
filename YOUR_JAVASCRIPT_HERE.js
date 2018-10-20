// Write your JS here
// Section 1
// Variables

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
  let newWeapon = player.inventory[];
  player.weapon = newWeapon;
  player.inventory.splice(newWeapon, 1);
  return player;
};
