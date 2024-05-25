import inquirer from "inquirer";
let pin = 1234;
let balance = 5000;
let cashBack = 0;
let enterPin = await inquirer.prompt({
    name: "enterPin",
    type: "number",
    message: "Enter your pin"
});
let loop = true;
do {
    if (enterPin.enterPin == pin) {
        console.log("Welcome");
        let optionsAnswer = await inquirer.prompt({
            name: "choices",
            type: "list",
            choices: ["Balance", "Withdraw", "Deposit", "PayBills", "Check CashBack"],
            message: "Choose your option"
        });
        if (optionsAnswer.choices == "Balance") {
            console.log(`Your balance is ${balance}`);
        }
        else if (optionsAnswer.choices == "Withdraw") {
            let withdrawAmount = await inquirer.prompt({
                name: "Amount",
                type: "number",
                message: "Enter the amount you want to withdraw"
            });
            if (balance >= withdrawAmount.Amount) {
                console.log("Withdraw successful");
                balance = balance - withdrawAmount.Amount;
                console.log(`Your balance is ${balance}`);
            }
            else
                (console.log("Insufficent Balance"));
        }
        else if (optionsAnswer.choices == "Deposit") {
            let deposit = await inquirer.prompt({
                name: "deposit",
                type: "number",
                message: "Enter the amount you want to deposit"
            });
            balance = balance + deposit.deposit;
            console.log(`Your balance is ${balance}`);
        }
        else if (optionsAnswer.choices == "PayBills") {
            let payBills = await inquirer.prompt({
                name: "payBills",
                type: "number",
                message: "Enter the amount you want to pay"
            });
            if (balance >= payBills.payBills) {
                console.log("Payment successful");
                balance = balance - payBills.payBills;
                cashBack = payBills.payBills * 0.01;
                console.log(`Your balance is ${balance}`);
                console.log(`Your cashback is ${cashBack}`);
            }
            else
                (console.log("Insufficent Balance"));
        }
        else if (optionsAnswer.choices == "Check CashBack") {
            console.log(`Your cashback is ${cashBack}`);
        }
    }
    else {
        console.log("Pin is incorrect");
        loop = false;
    }
} while (loop);
