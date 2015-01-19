(function () {

  exports = module.exports = repeat;

  function repeat() {
    var fn = this;
    var args = [].slice.call(arguments);

    if (typeof fn !== 'function')
      fn = args.shift();

    var n = args.shift();
    var ctx = args.shift();

    if (typeof n !== 'number')
      throw new TypeError('n must be a number');

    if (n < 0)
      throw new TypeError('n must be zero or positive number');

    var res = [];
    if (typeof fn === 'function')
      for (var i = 0; i < n; ++i)
        res.push(fn.apply(ctx, args));
    else
      for (var i = 0; i < n; ++i)
        res.push(fn);

    return res;
  }

  repeat.extendFunctionRepeat = function extendFunctionRepeat() {
    if (!Function.prototype.repeat) {
      Object.defineProperty(Function.prototype, 'repeat',
        {value: repeat, configurable: true, writable: true});
    }
    return repeat;
  }

})();
