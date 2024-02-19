"use strict";
// Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm clothes and so on according to the weather.
Object.defineProperty(exports, "__esModule", { value: true });
const temperature = 25;
const suggestion = suggestClothing(temperature);
function suggestClothing(temperature) {
    if (temperature < 0) {
        return "It's freezing! Wear a heavy coat, gloves, and a hat.";
    }
    else if (temperature >= 0 && temperature < 10) {
        return "It's cold. Wear a warm jacket, gloves, and a hat.";
    }
    else if (temperature >= 10 && temperature < 20) {
        return "It's cool. A light jacket or sweater should be enough.";
    }
    else if (temperature >= 20 && temperature < 30) {
        return "It's all season. A t-shirt and jeans should be comfortable.";
    }
    else if (temperature >= 30 && temperature < 40) {
        return "It's warm. Wear like shorts and a t-shirt.";
    }
    else {
        return "It's hot! Swear light, breathable clothing.";
    }
}
console.log(`Temperature: ${temperature}°C`);
console.log(`Suggestion: ${suggestion}`);
