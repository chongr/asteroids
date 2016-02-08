function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

Function.prototype.myBind = function(ctx) {
  var fn = this;
  var args = [].slice.call(arguments, 1);

  return function() {
    return fn.apply(ctx, args);
  };
};

function curriedSum(numArgs) {
  var numbers = [];

  return function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      var sum = 0;

      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }

      return sum;
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;

  return function _curry (singleArg) {
    args.push(singleArg);

    if (args.length === numArgs) {
      return fn.apply(this, args);
    }  else {
      return _curry;
    }
  };
};
