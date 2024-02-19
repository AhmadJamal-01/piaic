"use strict";
// Write a program that checks if the given year is leap year or not.
Object.defineProperty(exports, "__esModule", { value: true });
const yearToCheck = 2021;
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
}
else {
    console.log(`${yearToCheck} is not a leap year.`);
}
