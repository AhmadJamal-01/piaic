"use strict";
let Question3 = " Eric john";
// lowerCase
let lowercaseName = Question3.toLowerCase();
console.log(lowercaseName);
//upperCase
let upercaseName = Question3.toUpperCase();
console.log(upercaseName);
//titleCase
let nameWords = Question3.split(" ");
let titlecaseName = "";
for (let i = 0; i < nameWords.length; i++) {
    titlecaseName +=
        nameWords[i].charAt(0).toUpperCase() +
            nameWords[i].slice(1).toLowerCase() +
            " ";
}
console.log(titlecaseName);
