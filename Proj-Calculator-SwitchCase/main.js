import inquirer from "inquirer";
const answers = {
    FirstNum: Number,
    SecondNum: Number,
    Operator: String,
} = await inquirer.prompt([
    {
        type: "number",
        name: "FirstNum",
        message: "Enter your first number: "
    },
    {
        type: "number",
        name: "SecondNum",
        message: "Enter your second number: "
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"],
        message: "Select your operator: "
    }
]);
const { FirstNum, SecondNum, Operator } = answers;
let Result;
switch (Operator) {
    case "+":
        {
            Result = FirstNum + SecondNum;
        }
        break;
    case "-":
        {
            Result = FirstNum - SecondNum;
        }
        break;
    case "*":
        {
            Result = FirstNum * SecondNum;
        }
        break;
    case "/":
        {
            Result = FirstNum / SecondNum;
        }
        break;
    default:
        console.log("Invalid operator");
        break;
}
console.log(`${FirstNum} ${Operator} ${SecondNum} = ${Result}`);
