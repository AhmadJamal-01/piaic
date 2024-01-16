"use strict";
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
let Fahrenheit = 5;
let Celsius = 15;
let convertTempratureFahrenheit = 1.8 * Celsius + 32;
let convertTempratureCelsius = (Fahrenheit - 32) * 1.8;
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
