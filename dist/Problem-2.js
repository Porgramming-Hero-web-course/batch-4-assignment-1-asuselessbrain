"use strict";
const removeDuplicates = (array) => {
    return [...new Set(array)];
};
const sampleArray = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9];
const result = removeDuplicates(sampleArray);
console.log(result);