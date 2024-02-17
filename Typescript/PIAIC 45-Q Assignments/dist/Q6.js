"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personNameWithWhitespace = "\t   \n John Doe \t   \n";
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
let strippedName = personNameWithWhitespace.trim();
console.log("\nStripped Name:");
console.log(strippedName);
