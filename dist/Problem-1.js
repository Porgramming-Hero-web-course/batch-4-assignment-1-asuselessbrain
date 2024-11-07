"use strict";
const sumOfArray = (array) => {
    return array.reduce((sum, currentValue) => sum + currentValue, 0);
};
const array = [1, 2, 3, 4, 5];
const sum = sumOfArray(array);
console.log(sum);
