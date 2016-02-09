var Util = require("./utils.js");
var MovingObject = require("./MovingObject.js");

function Asteroid (options) {
  MovingObject.call(this, options);
  this.vel = Util.randomVec(50);
  this.radius = 
}

Util.inherits(Asteroid, MovingObject);
