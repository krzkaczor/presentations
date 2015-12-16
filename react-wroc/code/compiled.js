"use strict";

defineBinaryOperator("|", function (left, right) {
    return right(left);
});

var map = function map(transformer) {
    return function (list) {
        return list.map(function (item) {
            return transformer(item);
        });
    };
};
var filter = function filter(condition) {
    return function (list) {
        return list.filter(function (item) {
            return condition(item);
        });
    };
};
var mul = function mul(a) {
    return function (b) {
        return a * b;
    };
};
var gt = function gt(a) {
    return function (b) {
        return b > a;
    };
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8] | filter(gt(3)) | map(mul(3));

console.log(numbers); // [ 12, 15, 18, 21, 24 ]
