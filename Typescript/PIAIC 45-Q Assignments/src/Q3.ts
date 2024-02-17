let Question2 = " Eric john";

// lowerCase
let lowercaseName = Question2.toLowerCase();

console.log(lowercaseName);

//upperCase

let upercaseName = Question2.toUpperCase();

console.log(upercaseName);

//titleCase

let nameWords: string[] = Question2.split(" ");
let titlecaseName: string = "";

for (let i = 0; i < nameWords.length; i++) {
  titlecaseName +=
    nameWords[i].charAt(0).toUpperCase() +
    nameWords[i].slice(1).toLowerCase() +
    " ";
}

console.log(titlecaseName);
export{};
