"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
