"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let friendsName = ["Ali", "Ahmad", "Akbar", "Asghar", "Aslam"];
console.log(`Hi ${friendsName[0]} welcome to the typescript. `);
console.log(`Hi ${friendsName[1]} welcome to the typescript. `);
console.log(`Hi ${friendsName[2]} welcome to the typescript. `);
console.log(`Hi ${friendsName[3]} welcome to the typescript. `);
console.log(`Hi ${friendsName[4]} welcome to the typescript. `);
//OR other way
for (let name of friendsName) {
    console.log(`Hi ${name} welcome to the typescript. `);
}
