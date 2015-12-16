'use strict';

require("babel-polyfill");
var Immutable = require('immutable');

//it is limited only to build-in operators

var _op1 = function _op1(l, r) {
  return r.push(l);
};

//append ::
var _op5 = function _op5(l, r) {
  return l.concat(r);
};

//concat :::

var numbers = Immutable.fromJS([1, 2, 3]);

var moreNumbers = _op1(4, numbers);
var evenMoreNumbers = _op1(6, _op1(5, moreNumbers)); //no way to specify operator associativity
var concatanedLists = _op5(numbers, evenMoreNumbers);

console.log(numbers); //List [ 1, 2, 3 ]
console.log(moreNumbers); //List [ 1, 2, 3, 4 ]
console.log(evenMoreNumbers); //List [ 1, 2, 3, 4, 5, 6 ]
console.log(concatanedLists); //List [ 1, 2, 3, 1, 2, 3, 4, 5, 6 ]
