"use strict";
// Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the 
// specified index in the array. Return the modified array.
Object.defineProperty(exports, "__esModule", { value: true });
const array = [1, 2, 3, 4, 5];
const newdArray = insertValueAtIndex(array, 2, 'newValue');
function insertValueAtIndex(piaic, index, value) {
    piaic.splice(index, 0, value);
    return piaic;
}
console.log(newdArray);
