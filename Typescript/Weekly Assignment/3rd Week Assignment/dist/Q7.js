"use strict";
// Write a program that checks if the given number is  divisible by 3 or 5 or 
// both or not divisible by anyone show output accordingly.
Object.defineProperty(exports, "__esModule", { value: true });
const givenNumber = 9;
const result = checkDivisibility(givenNumber);
function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return `${num} is divisible by both 3 and 5.`;
    }
    else if (num % 3 === 0) {
        return `${num} is divisible by 3 but not by 5.`;
    }
    else if (num % 5 === 0) {
        return `${num} is divisible by 5 but not by 3.`;
    }
    else {
        return `${num} is not divisible by either 3 or 5.`;
    }
}
console.log(result);
