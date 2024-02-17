"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let dinnerGuest = ["Ahmad", "Asghar", "Akbar", "Ali"];
//print message
console.log("Helo bro I am just inviting two friends.  ");
//remove friend & send message
while (dinnerGuest.length > 2) {
    let notComingGuest = dinnerGuest.pop();
    console.log(`Sorry ${notComingGuest}, I am not inviting you to dinner.`);
}
for (let Guest of dinnerGuest) {
    console.log(`hello ${Guest} you are still invited to dinner`);
}
dinnerGuest.pop();
dinnerGuest.pop();
console.log(`check guest list after dinner`, dinnerGuest);
