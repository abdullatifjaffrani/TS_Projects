#! /usr/bin/env node
// We are creating Todo List App
// First we need to install inquirer package & Chalk for coloring the output
import inquirer from "inquirer";
import chalk from "chalk";
// This is Our Welcome Page
let Todos = [];
console.log(chalk.bgWhite.black("Welcome to Todo List App by Abdul Latif Jaffrani!!!"));
console.log(chalk.blue("---------------------------------------------------"));
console.log("");
Todos.forEach(TodoForEach => {
    console.log(chalk.bgGreen.black(TodoForEach));
});
// This is our main Menu
async function CreateTodo(Todos) {
    let loop = true;
    do {
        // This is our Menu Where we can select what task we have to do in Todolist
        let ans = await inquirer.prompt({
            name: "Menu",
            type: "list",
            choices: ["Add Todo", "Edit Todo", "View Todo", "Remove Todo", "Exit"],
            message: (chalk.yellow("What do you want to do?"))
        });
        // Here we are adding if we select add todo this will happen
        if (ans.Menu == "Add Todo") {
            let AddTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: (chalk.yellow("Enter your todo"))
            });
            Todos.push(AddTodo.todo);
            console.log(chalk.bgWhite.black("Todo Added Successfully"));
            console.log("");
            Todos.forEach(TodoForEach => {
                console.log(chalk.bgGreen.black(TodoForEach));
            });
            console.log("");
            console.log("");
        }
        // Here we are editing our already addted task, if we select edit todo this will happen
        else if (ans.Menu == "Edit Todo") {
            let EditTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: (chalk.yellow("Select Todo to Edit")),
                choices: Todos.map(todo => todo)
            });
            let AddTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: (chalk.yellow("Enter your updated todo"))
            });
            let UpdatedTodo = Todos.filter(val => val !== EditTodo.todo);
            Todos = [...UpdatedTodo, AddTodo.todo];
            console.log(chalk.bgWhite.black("Todo Updated Successfully"));
            console.log("");
            Todos.forEach(TodoForEach => {
                console.log(chalk.bgGreen.black(TodoForEach));
            });
            console.log("");
            console.log("");
        }
        // Here we are viewing our already added task, if we select view todo this will happen
        else if (ans.Menu == "View Todo") {
            console.log("****** TODO List ******");
            console.log("");
            Todos.forEach(TodoForEach => {
                console.log(chalk.bgGreen.black(TodoForEach));
            });
            console.log("");
            console.log("");
            console.log("****** THE END *******");
        }
        // Here we are removing our already added task, if we select remove todo this will happen
        else if (ans.Menu == "Remove Todo") {
            let RemoveTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: (chalk.yellow("Select Todo to Remove")),
                choices: Todos.map(todo => todo)
            });
            let UpdatedTodo = Todos.filter(val => val !== RemoveTodo.todo);
            Todos = [...UpdatedTodo];
            console.log(chalk.bgWhite.black("Todo Removed Successfully"));
            console.log("");
            Todos.forEach(TodoForEach => {
                console.log(chalk.bgGreen.black(TodoForEach));
            });
            console.log("");
            console.log("");
        }
        // Here we are exiting our app, if we select exit this will happen
        else if (ans.Menu == "Exit") {
            console.log(chalk.bgWhite.black("Exiting..."));
            console.log(chalk.bgWhite.black("Good Bye"));
            loop = false;
        }
    } while (loop);
}
CreateTodo(Todos);
