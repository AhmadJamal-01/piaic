//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let comingfriend: Array<string> = ["Ahmad", "Asghar", "Akbar", "Ali"];
comingfriend.forEach((guestName) => {
  console.log(`Dear friend ${guestName} Please attend the Event`);
});
