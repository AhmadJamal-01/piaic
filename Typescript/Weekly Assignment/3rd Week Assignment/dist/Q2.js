"use strict";
///Write a program that calculates the percentage.
Object.defineProperty(exports, "__esModule", { value: true });
let totalGain = 5;
let totalwhole = 50;
function calculatePercentage(totalGain, totalwhole) {
    return (totalGain / totalwhole) * 100;
}
const percentage = calculatePercentage(totalGain, totalwhole);
console.log(`The percentage is: ${percentage}%`);
//Basic SOLUTION
let findPercentage = (totalGain / totalwhole) * 100;
console.log(`The percentage is: ${findPercentage}%`);
