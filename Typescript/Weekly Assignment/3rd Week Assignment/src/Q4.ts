// Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

let price:number = 175;

function giveDisscount(price: number):string{
    const disscount10Percent = Math.floor((price * 10) /100);
    const disscount5Percent = (price * 5) / 100;
    if (price >= 100) {
        return `10 Percent disscount ${disscount10Percent} dollar THANK YOU. `;
    }
    else {
        return `5 Percent disscount ${disscount5Percent} THANK YOU. `;
    }
}
const result = giveDisscount(price);
console.log (`(PRODUCT PRIZE) ${price} Dollar = ${result}`);
//console.log(result);
