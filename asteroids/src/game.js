const Asteroid = require("./asteroid.js")

function Game() {
  this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  const asteroids = [];
  let pos = {};
  for (let index = 0; index < Game.NUM_ASTEROIDS; index++) {
      pos = { pos:[(Math.random() * 500), (Math.random() * 500)]}
      asteroids.push(new Asteroid(pos))
    }
    return asteroids;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(element => {
    element.draw(ctx);
  });
}

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(element => {
    element.move();
  });
  // this.draw(ctx);
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;