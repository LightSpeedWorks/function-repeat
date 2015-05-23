(function () {

  try {
    var repeat = require('../lib/repeat').extendPrototype();
  } catch (e) {
    var repeat = require('function-repeat').extendPrototype();
  }

  var assert = require('assert');

  var func1x = 0;
  function func1() {
    return func1x++;
  }

  describe('func1', function () {
    it('test1-1', function () {
      func1x = 0;
      var res = repeat(func1, 5);
      assert([0, 1, 2, 3, 4], res);
    });

    it('test1-2', function () {
      func1x = 0;
      var res = func1.repeat(5);
      assert([0, 1, 2, 3, 4], res);
    });
  });

  function func2(x, y) {
    return x + y;
  }

  describe('func2', function () {
    it('test2-1', function () {
      var res = repeat(func2, 5, null, 2, 3);
      assert([5, 5, 5, 5, 5], res);
    });

    it('test2-2', function () {
      var res = func2.repeat(5, null, 2, 3);
      assert([5, 5, 5, 5, 5], res);
    });

    it('test2-3', function () {
      var res = function (x, y) { return x + y; }.repeat(5, null, 2, 3);
      assert([5, 5, 5, 5, 5], res);
    });
  });


  describe('Math', function () {
    it('random-1', function () {
      var res = repeat(Math.random, 5);
      assert(5, res.length);
    });

    it('random-2', function () {
      var res = Math.random.repeat(5);
      assert(5, res.length);
    });

  });

  describe('val test', function () {
    it('val test', function () {
      var res = repeat('val', 5);
      assert(5, res.length);
      assert(['val', 'val', 'val', 'val', 'val'], res);
    });
  });

})();
