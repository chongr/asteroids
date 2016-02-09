var Util = require("./utils.js");
var MovingObject = require("./MovingObject.js");

var COLOR = '#b3abac';
var RADIUS = 50;

var util = new Util();

function Asteroid (options) {
  MovingObject.call(this, options);
  this.vel = util.randomVec(50);
  this.radius = RADIUS;
  this.color = COLOR;
}


util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
