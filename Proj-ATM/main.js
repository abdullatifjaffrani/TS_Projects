#! /usr/bin/env node
// Project ATM Machine
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("ATM By Abdul Latif Jaffrani!!!"));
// Here we are Adding Our Balance & Pin in Variables
let MyBalance = 10000.00;
let MyPin = 1234;
console.log(chalk.bgBlue(`Account Balance $${MyBalance}`));
// It will Ask Our Pin
let MyPinAnswer = await inquirer.prompt([
    { name: "Pin",
        type: "number",
        message: chalk.yellow("Please Enter Your Pin To Proceed") },
]);
// console.log(MyPinAnswer.Pin);
// If we type Pin Correct it will show this
if (MyPinAnswer.Pin === MyPin) {
    console.log(chalk.bold.green("Welcome to Our Bank's ATM Service!"));
    console.log(chalk.bold.cyan("Thank you for choosing us for your banking needs."));
    // Afer Adding Correct Pin It will Ask These Choices
    let OperationAnswer = await inquirer.prompt([
        { name: "operation",
            message: chalk.bgMagenta("Select Your Operation"),
            type: "list",
            choices: ["Withdraw", "Quick Cash", "Check Balance"] },
    ]);
    // If select Withraw it will Show this
    if (OperationAnswer.operation === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt([
            { name: "Amount",
                message: chalk.bgGray("Enter Amount to Withraw $"),
                type: "number", }
        ]);
        // Here we are Adding IfElse statment so a person cant withraw more money then his actual balance
        if (MyBalance >= WithdrawAmount.Amount) {
            console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance -= WithdrawAmount.Amount}`));
        }
        else {
            console.log(chalk.red("Insufficent Balance"));
        }
    }
    // If select Quick Cash it will Show this
    else if (OperationAnswer.operation === "Quick Cash") {
        let QuickCashAmount = await inquirer.prompt([
            { name: "Amount",
                message: "Select Amount $",
                type: "list",
                choices: [1000.00, 2000.00, 5000.00, 10000.00] }
        ]);
        console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance -= QuickCashAmount.Amount}`));
    }
    // If select Check Balance it will Show this
    else if (OperationAnswer.operation === "Check Balance") {
        console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance}`));
    }
}
// If we type Pin Incorrect it will show this
else {
    console.log(chalk.bgRedBright("Incorrect Pin"));
}
;
