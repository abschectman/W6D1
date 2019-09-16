const MovingObject = require("./movingobject.js");
const Util = require("./util.js");
function Asteroid(pos) {
  // debugger;
  MovingObject.call(this, pos);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Util.randomVec(Math.random() * 10);
}
Asteroid.COLOR = "grey";
Asteroid.RADIUS = 12;

  Util.inherits(Asteroid, MovingObject);


  module.exports = Asteroid;