#! /usr/bin/env node
// Creating Calculator in TypeScript
// First we have to Import Inquirer from Inquirer
import inquirer from "inquirer";
// We are also adding Chalk Dependencey to Style our Outputs
import chalk from "chalk";
// This console is just for my name, you can skip
console.log(chalk.bgBlue.bold("Calculator by Abdul Latif Jaffrani!!!"));
// Now we are creating a Variable of Constant for our Answer
const answer = await inquirer.prompt([
    // This will be our 1st number for calculation
    { message: (chalk.underline("Enter first number")), type: "number", name: "FirstNumber" },
    // This will be our 2nd number for calculation
    { message: (chalk.underline("Enter second number")), type: "number", name: "SecondNumber" },
    // This will be our Operator for calculation with 4 choices (Add, Sub, Mult & Div)
    { message: (chalk.underline("Select Operators")), type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"] }
]);
// Now we are Printing What we Selected in 1st, 2nd & Operators, This Is Optional, with This You can Get Your Answer.
console.log(answer);
// Its time to Give Functions to our Operators
// This is for (Addition)
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.FirstNumber + answer.SecondNumber));
}
// This is for (Subtraction)
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellow(answer.FirstNumber - answer.SecondNumber));
}
// This is for (Multiplication)
else if (answer.operator === "Multiplication") {
    console.log(chalk.blue(answer.FirstNumber * answer.SecondNumber));
}
// This is for (Divison)
else if (answer.operator === "Divison") {
    console.log(chalk.magenta(answer.FirstNumber / answer.SecondNumber));
}
// If nothing is Selected
else {
    console.log(chalk.bgRed.underline("error, Please Select the Valid Operator"));
}
