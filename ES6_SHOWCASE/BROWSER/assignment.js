var [a, [b], c, d] = ['hello', [', ', 'junk'], ['world']];
console.log(a + b + c); // hello, world

var pt = {x: 123, y: 444};
var rect = {topLeft: {x: 1, y: 2}, bottomRight: {x: 3, y: 4}};
// ... other code ...
var {x, y} = pt; // unpack the point
var {topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect;

console.log(x + y); // 567
console.log([x1, y1, x2, y2].join(',')) // 1,2,3,4

var object = {
  value: 42,
  toString() {
    return this.value;
  }
};