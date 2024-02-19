"use strict";
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
Object.defineProperty(exports, "__esModule", { value: true });
let Fahrenheit = 98;
let Celsius = 36;
let convertTempratureFahrenheit = (Celsius * 9) / 5 + 32;
let convertTempratureCelsius = ((Fahrenheit - 32) * 5) / 9;
console.log("Fahrenheit = " + convertTempratureFahrenheit);
console.log("Celsius = " + convertTempratureCelsius);
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
// Example usage
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature} Celsius is ${fahrenheitTemperature} Fahrenheit`);
const fahrenheitTemperature2 = 77;
const celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);
console.log(`${fahrenheitTemperature2} Fahrenheit is ${celsiusTemperature2} Celsius`);
