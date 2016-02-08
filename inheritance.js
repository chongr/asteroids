/*Util.js*/

Function.prototype.inherits = function (superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


/*Animals.js*/

function Animal(name) {
  this.name = name;
}


Animal.prototype.walk = function () {
  console.log("walk");
};



/*Cat.js*/


function Cat (name) {
  Animal.call(this, name);
}

Cat.inherits(Animal);

Cat.prototype.meow = function () {
  console.log("meow");
};
