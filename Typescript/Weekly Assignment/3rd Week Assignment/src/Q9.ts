// Develop a program that determines the day of the week. 
// Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

const addDayNumber = 3; 
const dayOfWeek = determineDayOfWeek(addDayNumber);

function determineDayOfWeek(dayNumber: number): string {
    if (dayNumber === 1) {
        return "Sunday";
    } else if (dayNumber === 2) {
        return "Monday";
    } else if (dayNumber === 3) {
        return "Tuesday";
    } else if (dayNumber === 4) {
        return "Wednesday";
    } else if (dayNumber === 5) {
        return "Thursday";
    } else if (dayNumber === 6) {
        return "Friday";
    } else if (dayNumber === 7) {
        return "Saturday";
    } else {
        return "Invalid input. Please enter a number between 1 to 7.";
    }
}

console.log(`Day ${addDayNumber} = ${dayOfWeek}.`);
