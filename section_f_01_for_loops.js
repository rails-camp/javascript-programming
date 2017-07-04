var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

for (player in players) {
  console.log(players[player]);
}

for (var i = 0; i < players.length; i++) {
  console.log(players[i]);
}

players.forEach(function(element) {
  console.log(element);
});
