var Asteroid = require('./asteroid.js');

var DIM_X = 750;
var DIM_Y = 870;
var NUM_ASTEROIDS = 10;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.randomPosition = function() {
  var randX = Math.random() * DIM_X;
  var randY = Math.random() * DIM_Y;
  return [randX, randY];
};

Game.prototype.addAsteroids = function() {
  for (var i = 0; i < NUM_ASTEROIDS; i++) {
    var newAsteroid = new Asteroid( { pos: this.randomPosition() } );
    this.asteroids.push(newAsteroid);
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);

  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function () {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

module.exports = Game;
