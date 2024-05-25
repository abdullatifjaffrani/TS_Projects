#! /usr/bin/env node
import inquirer from "inquirer";

// Words Counter

const Answer: {
    Sentance: string;
} = await inquirer.prompt([
    {
        name: "Sentance",
        type: "input",
        message: "Enter Your Sentance: "
    }
])
const words = Answer.Sentance.trim().split(" ");
console.log(words);
console.log(`Total Words: ${words.length}`);
