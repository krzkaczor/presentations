require("babel-polyfill");
var Immutable = require('immutable');

//it is limited only to build-in operators
defineBinaryOperator('+', (l, r) => r.push(l)); //append ::
defineBinaryOperator('&', (l, r) => l.concat(r)); //concat :::

let numbers = Immutable.fromJS([1, 2, 3]);

let moreNumbers =  4 + numbers;
let evenMoreNumbers = 6 + (5 + moreNumbers); //no way to specify operator associativity
let concatanedLists = numbers & evenMoreNumbers;

console.log(numbers);          //List [ 1, 2, 3 ]
console.log(moreNumbers);      //List [ 1, 2, 3, 4 ]
console.log(evenMoreNumbers);  //List [ 1, 2, 3, 4, 5, 6 ]
console.log(concatanedLists);  //List [ 1, 2, 3, 1, 2, 3, 4, 5, 6 ]
