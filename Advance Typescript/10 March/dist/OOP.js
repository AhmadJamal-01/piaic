"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
}
const car = new Car('tesla', 2000, 15000);
console.log(car);
