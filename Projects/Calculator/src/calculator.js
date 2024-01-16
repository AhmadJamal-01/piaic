#! /usr/bin/env node
import inquirer from "inquirer";
function main() {
    inquirer
        .prompt([
        { type: "input", name: "num1", message: "Enter the first number" },
        { type: "input", name: "num2", message: "Enter the second number" },
        {
            type: "list",
            name: "operation",
            choices: ["+", "-", "*", "/"],
            message: "Enter your Operation",
        },
    ])
        .then((answers) => {
        console.log(answers);
        //      if (operation == "+") {
        //   sum(num1, num2);
        // } else if (operation == "-") {
        //   subtract(num1, num2);
        // } else if (operation == "*") {
        //   multiply(num1, num2);
        // } else if (operation == "/") {
        //   divide(num1, num2);
        // } else {
        //   console.log("invalid operation");
        // }
        // Use user feedback for... whatever!!
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum", result);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log("Subtract", result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log("Multiply", result);
}
function divide(num1, num2) {
    const result = num1 / num2;
    console.log("Divide", result);
}
main();
