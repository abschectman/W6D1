


function MovingObject (attributes){
  this.pos = attributes["pos"];
  this.vel = attributes["vel"];
  this.radius = attributes["radius"];
  this.color = attributes["color"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true)
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}


module.exports = MovingObject;
