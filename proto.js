Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  // const Surrogate = function(){};
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
}

function MovingObject(velocity) {
  this.velocity = velocity;
}

function Ship(velocity) {
 MovingObject.call(this, velocity);
}
Ship.inherits(MovingObject);

function Asteroid() {}
Asteroid.inherits(MovingObject);


MovingObject.prototype.speedcheck = function() {
  console.log(this.velocity);
}

const ship1 = new Ship(100);

ship1.speedcheck();


