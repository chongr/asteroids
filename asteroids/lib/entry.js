window.Asteroid = require("./asteroid.js");
window.Game = require("./game.js");

window.canvasEl = document.getElementsByTagName("canvas")[0];
window.canvasEl.height = window.innerHeight;
window.canvasEl.width = window.innerWidth;

window.ctx = window.canvasEl.getContext("2d");
