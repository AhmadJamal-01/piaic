"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let dinnerGuest = ["Ahmad", "Asghar", "Akbar", "Ali"];
for (let guest of dinnerGuest) {
    console.log(`helo, ${dinnerGuest} we just found a bigger dinner table, so now more space available.`);
}
let newComingGuest = "Faraz";
dinnerGuest.unshift(newComingGuest);
console.log(dinnerGuest);
let upcomingNewFriend = "mian faraz";
let upcomingNewIndex = Math.floor(dinnerGuest.length / 2);
dinnerGuest.splice(upcomingNewIndex, 0, upcomingNewFriend);
let upcomingNewguest = "mian ali";
dinnerGuest.push(upcomingNewguest);
console.log(dinnerGuest);
console.log("New set of invitation message");
for (let guest of dinnerGuest) {
    console.log(`Dear ${guest} you are invited dinner set`);
}
