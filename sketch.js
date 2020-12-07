var database;
var canvas;

var form, player, game;

var playerCount;
var gameState = 0;


// FORM : input, button
// PLAYER: name
// GAME: 0: WAIT, 1: PLAY, 2: END

function setup() {
  database = firebase.database();

  canvas = createCanvas(500, 500);
  game = new Game();
  game.getState();
  game.start();
}
function draw() {


}
