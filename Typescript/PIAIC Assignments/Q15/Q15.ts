/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let comingfriend: Array<string> = ["Ahmad", "Asghar", "Akbar", "Ali"];

let notComingGuest: string = "Ali";
console.log(`${notComingGuest} can't make it to dinner`);

let newGuest: string = "Faraz";
let addComingGuest: number = comingfriend.indexOf(notComingGuest);

if (addComingGuest !== -1) {
  comingfriend[addComingGuest] = newGuest;
}

console.log("second set of invitation");
comingfriend.forEach((guest: string) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

export {};
