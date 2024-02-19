///Write a program that calculates the percentage.

let totalGain : number = 5;
let totalwhole: number = 50;

function calculatePercentage(totalGain: number, totalwhole: number): number {
    return (totalGain/ totalwhole) * 100;
}
const percentage = calculatePercentage(totalGain, totalwhole);
console.log(`The percentage is: ${percentage}%`);

//Basic SOLUTION
let findPercentage = (totalGain/totalwhole)*100;
console.log (`The percentage is: ${findPercentage}%`);