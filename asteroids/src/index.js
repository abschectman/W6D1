console.log("webpack is working");
const GameView = require("./gameview.js");
const Util = require("./util.js");
const MovingObject = require("./movingobject.js");
const Game = require('./game.js')
window.Game = Game;
window.MovingObject = MovingObject;
const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;
window.GameView = GameView;
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  window.ctx = canvas.getContext("2d");
  const g1 = new GameView(window.ctx);
  g1.start;
});
