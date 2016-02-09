/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.Asteroid = __webpack_require__(1);
	window.Game = __webpack_require__(4);

	window.canvasEl = document.getElementsByTagName("canvas")[0];
	window.canvasEl.height = window.innerHeight;
	window.canvasEl.width = window.innerWidth;

	window.ctx = window.canvasEl.getContext("2d");


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Util = __webpack_require__(2);
	var MovingObject = __webpack_require__(3);

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Util () {
	}


	Util.prototype.inherits = function(childClass, parentClass) {
	  function Surrogate () {}
	  Surrogate.prototype = parentClass.prototype;
	  childClass.prototype = new Surrogate ();
	  childClass.prototype.constructor = childClass;
	};

	Util.prototype.randomVec = function (length) {
	  var x = Math.random() * 100;
	  var y = calcY(length, x);

	  if (Math.random() < 0.5) {
	    x *= -1;
	  }

	  if (Math.random() < 0.5) {
	    y *= -1;
	  }

	  return [x,y];
	};

	function calcY (length, x) {
	  return Math.sqrt(Math.abs((length * length) - (x * x)));
	}
	function distance (pos1, pos2) {
	  var dx = pos1[0] - pos2[0];
	  var dy = pos1[1] - pos2[1];
	  return Math.sqrt((dx * dx) + (dy * dy));
	}

	module.exports = Util;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function MovingObject (options) {
	  this.pos = options['pos'];
	  this.vel = options['vel'];
	  this.radius = options['radius'];
	  this.color = options['color'];
	  this.game = options['game'];
	}

	MovingObject.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );

	  ctx.fill();
	};

	MovingObject.prototype.move = function () {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	  this.pos = this.game.wrap(this.pos);
	};

	module.exports = MovingObject;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(1);

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
	    var newAsteroid = new Asteroid( { pos: this.randomPosition(), game: this } );
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

	Game.prototype.wrap = function (pos) {
	  var x = Math.abs((pos[0]) % DIM_X);
	  var y = Math.abs((pos[1]) % DIM_Y);
	  return [x,y];
	};

	module.exports = Game;


/***/ }
/******/ ]);