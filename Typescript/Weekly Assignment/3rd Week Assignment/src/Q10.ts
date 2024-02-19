// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax 
// if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.


const unitsConsumed = 300; 
const billAmount = calculateBill(unitsConsumed);

function calculateBill(unitsConsumed: number): number {
    let billAmount: number;

    if (unitsConsumed <= 100) {
        billAmount = unitsConsumed * 1; 
    } else if (unitsConsumed <= 200) {
        billAmount = (100 * 1) + ((unitsConsumed - 100) * 1.1); // $1 per unit for first 100 units, 10% tax on remaining units
    } else if (unitsConsumed <= 500) {
        billAmount = (100 * 1) + (100 * 1.1) + ((unitsConsumed - 200) * 1.15); // $1 per unit for first 100 units, 10% tax for next 100 units, 15% tax on remaining units
    } else {
        billAmount = (100 * 1) + (100 * 1.1) + (300 * 1.15) + ((unitsConsumed - 500) * 1.25); // $1 per unit for first 100 units, 10% tax for next 100 units, 15% tax for next 300 units, 25% tax on remaining units
    }

    return billAmount;
}


console.log(`Number of units consumed: ${unitsConsumed}`);
console.log(`Bill amount: $${billAmount.toFixed(2)}`);
