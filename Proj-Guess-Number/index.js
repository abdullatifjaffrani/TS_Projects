#! /usr/bin/env node
// Guessing Number Project with CheatyGuess
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("Welcome to Guessing Number Game By Abdul Latif Jaffrani!!!"));
// This Variable will Genrate Random Number for Our Game
const RandomNumber = Math.floor(Math.random() * 10 + 1);
// This Variable will be the Trap for Our Consumer, it is also generate Random Number
const Cheat = Math.floor(Math.random() * 10 + 1);
console.log(chalk.green.bold.underline(Cheat));
// This Inquirer Prompt Will Ask us a Random Number from 1-10
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNum",
        type: "number",
        message: (chalk.whiteBright.bold.underline("Enter any number b/w 1 to 10, Please Don't Cheat:"))
    }
]);
// It the answer is correct, it will print this
if (answers.UserGuessedNum === RandomNumber) {
    console.log(chalk.green.bold.underline("Congrats You guessed the Right Number, Thankyou for Playing Fair"));
}
// If consumer add number from cheat variable, it will show this
else if (answers.UserGuessedNum === Cheat) {
    console.log(chalk.bgRedBright.bold.underline("Told You Not To Cheat!!!"));
}
// It the answer is wrong, it will print this
else {
    console.log(chalk.red.bold.underline("You guessed it wrong"));
}
console.log(chalk.bgBlue.bold.underline("Correct Number Was:", RandomNumber));
