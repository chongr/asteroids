function Util () {
}


Util.prototype.inherits = function(childClass, parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate ();
  childClass.prototype.constructor = childClass;
};

Util.prototype.randomVec = function (length) {
  var x = Math.random() * 50;
  var y = calcY(length, x);
  return [x,y];
};

function calcY (length, x) {
  return Math.sqrt((length * length) - (x * x));
}
function distance (pos1, pos2) {
  var dx = pos1[0] - pos2[0];
  var dy = pos1[1] - pos2[1];
  return Math.sqrt((dx * dx) + (dy * dy));
}

module.exports = Util;
