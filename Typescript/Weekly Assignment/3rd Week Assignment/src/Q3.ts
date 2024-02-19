//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks 
//and 3 days.

const days = 7; 

function convertDays(days: number):string{
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    if (weeks === 0) {
        return `${days} days`;
    } else if (remainingDays === 0) {
        return `${weeks} week(s)`;
    } else {
        return `${weeks} week(s) and ${remainingDays} day(s)`;
    }
}
const result = convertDays(days);
console.log(`${days} days = ${result}`);




