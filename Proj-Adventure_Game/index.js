#! /usr/bin/env node
// Text-Based Adventure-Game
import inquirer from 'inquirer';
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
        //this.health = health;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        let health = this.health + 25;
        this.health = health;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
        //this.health = health;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What is your name?"
});
let enemy = await inquirer.prompt({
    name: "enemyName",
    type: "list",
    message: "Select your enemy",
    choices: ["Skeleton", "Zombie", "Vampire"]
});
let player1 = new Player(player.playerName);
let enemy1 = new Enemy(enemy.enemyName);
console.log(player1.name + " vs " + enemy1.name);
do {
    // Skeleton
    if (enemy.enemyName === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What do you want to do?",
            choices: ["Attack", "Power Boost", "Run Away"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num <= 0) {
                player1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} health is ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Died");
                    break;
                }
            }
            if (num > 0) {
                enemy1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("You Won");
                    break;
                }
            }
        }
        if (ask.option == "Power Boost") {
            player1.healthIncrease();
            console.log(`${player1.name} Boosted Health is: ${player1.health}`);
        }
        if (ask.option == "Run Away") {
            console.log("You ran away");
            break;
        }
    }
    // Zombie
    if (enemy.enemyName === "Zombie") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What do you want to do?",
            choices: ["Attack", "Power Boost", "Run Away"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num <= 0) {
                player1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} health is ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Died");
                    break;
                }
            }
            if (num > 0) {
                enemy1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("You Won");
                    break;
                }
            }
        }
        if (ask.option == "Power Boost") {
            player1.healthIncrease();
            console.log(`${player1.name} Boosted Health is: ${player1.health}`);
        }
        if (ask.option == "Run Away") {
            console.log("You ran away");
            break;
        }
    }
    // Vampire
    if (enemy.enemyName === "Vampire") {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What do you want to do?",
            choices: ["Attack", "Power Boost", "Run Away"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num <= 0) {
                player1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} health is ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Died");
                    break;
                }
            }
            if (num > 0) {
                enemy1.healthDecrease();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("You Won");
                    break;
                }
            }
        }
        if (ask.option == "Power Boost") {
            player1.healthIncrease();
            console.log(`${player1.name} Boosted Health is: ${player1.health}`);
        }
        if (ask.option == "Run Away") {
            console.log("You ran away");
            break;
        }
    }
} while (true);
