[function-repeat](https://www.npmjs.com/package/function-repeat)
====

function `repeat` construct an array by repeating a value (or function) a number of times, synchronously.

INSTALL:
--------

```bash
npm install function-repeat
```


USAGE:
------

### repeat(val, n)

```js
var repeat = require('function-repeat');

var res = repeat(1, 4); // -> [1, 1, 1, 1]
var res = repeat('a', 4); // -> ['a', 'a', 'a', 'a']
```

### repeat(fn, n, context, arguments,...)

```js
var repeat = require('function-repeat');

function fn1() {
  return 2;
}
var res = repeat(fn1, 5); // -> [2, 2, 2, 2, 2]

function fn2(x, y) {
  return x + y;
}
var res = repeat(fn2, 5, null, 2, 3); // -> [5, 5, 5, 5, 5]

function fn3(x) {
  return this + x;
}
var res = repeat(fn3, 5, 2, 3); // -> [5, 5, 5, 5, 5]
```

### Function.prototype.repeat(n, context, arguments,...)

```js
var repeat = require('function-repeat').extendPrototype();

function fn1() {
  return 2;
}
var res = fn1.repeat(5); // -> [2, 2, 2, 2, 2]

function fn2(x, y) {
  return x + y;
}
var res = fn2.repeat(5, null, 2, 3); // -> [5, 5, 5, 5, 5]

function fn3(x) {
  return this + x;
}
var res = fn3.repeat(5, 2, 3); // -> [5, 5, 5, 5, 5]
```

SEE ALSO:
---------
[call-n-times](https://www.npmjs.com/package/call-n-times),
[times](https://www.npmjs.com/package/times),
[repeat-function](https://www.npmjs.com/package/repeat-function)

LICENSE:
--------

MIT
