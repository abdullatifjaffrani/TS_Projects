#! /usr/bin/env node


import inquirer from "inquirer"

type Student = {
    id: number,
    name: string,
    courses: string[],
    balance: number
};

let studentIdCounter = 10000
const students: Student[] = []
const fees : number = 100

async function main() {

    while (true) {
        const {action} = await inquirer.prompt({
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: [
                "Add Student",
                "Enroll in Course",
                "View Balance",
                "Pay Fees",
                "Show Student Status",
                "Show All Students",
                "Exit"
            ]
        });
        if (action === "Add Student") {
            const {name} = await inquirer.prompt({
                type: "input",
                name: "name",
                message: "Enter student name:"
            });
         const newStudent: Student = {
            id: studentIdCounter++,
            name: name,
            courses: [],
            balance: 0
        };
        students.push(newStudent);
        console.log(`${newStudent.name} Sucessfully Added with this ${newStudent.id} id`);
        
}
    if (action === "Enroll in Course") {
        const {studentID, course} = await inquirer.prompt([
            {
                type: "input",
                name: "studentID",
                message: "Enter student ID:"
            },
            {
                type: "list",
                name: "course",
                message: "Enter course name:",
                choices: ['Digital Marketing', 'Web Development', 'Graphics Design']
            }])

            const student = students.find(s => s.id === parseInt(studentID));
            if (student) {
                student.courses.push(course);
                student.balance += fees;
                console.log(`${student.name} with Student ID: ${studentID} enrolled in ${course}`);
            } else {
                console.log(`Student with ID ${studentID} not found`);
            }}
        if (action === "View Balance") {
            const {studentID} = await inquirer.prompt({
                type: "input",
                name: "studentID",
                message: "Enter student ID:"
            });
            const student = students.find(s => s.id === parseInt(studentID));
            if (student) {
                console.log(`Student ID ${studentID} Balance: $${student.balance}`);
            } else {
                console.log(`Student with ID ${studentID} not found`);
            }}
        if (action === "Pay Fees") {
            const {studentID, amount} = await inquirer.prompt([{
                type: "input",
                name: "studentID",
                message: "Enter student ID:"
            },
            {
                type: "input",
                name: "amount",
                message: "Enter payment amount:"
            }]);
            const student = students.find(s => s.id === parseInt(studentID));
            if (student) {
                student.balance -= amount;
                console.log(`Student ID ${studentID} Balance: $${student.balance}`);
            } else {
                console.log(`Student with ID ${studentID} not found`);
            }}
            if (action === "Show Student Status") {
                const {studentID} = await inquirer.prompt({
                    type: "input",
                    name: "studentID",
                    message: "Enter student ID:"
                });
                const student = students.find(s => s.id === parseInt(studentID));
                if (student) {
                    console.log(`Student ID: ${student.id}`);
                    console.log(`Name: ${student.name}`);
                    console.log(`Courses Enrolled: ${student.courses.join(', ')}`);
                    console.log(`Balance: $${student.balance}`);
                } else {
                    console.log(`Student with ID ${studentID} not found`);
                }
            }
            if (action === "Show All Students") {
                console.log(students);
            }
            if (action === "Exit") {
                break;
            }        
        }}
main()