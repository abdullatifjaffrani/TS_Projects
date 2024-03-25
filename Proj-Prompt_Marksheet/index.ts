#! /usr/bin/env node
// MarkSheet
// We are adding Chalk to add Style/Color in our Marksheet
import inquirer from "inquirer"
import chalk from "chalk"



console.log("Marksheet by Abdul Latif Jaffrani!!");
// Section 1
// 1st we are Asking Student Details
const StudentDetails = await inquirer.prompt
([
    {message: (chalk.bold.underline.blue("School Name")), type: "string", name:"SchoolName"},
    {message: (chalk.bold.blue("Class Number")), type: "string", name:"Class"},
    {message: (chalk.blue.bold("Student Name")), type: "string", name:"Student"},
    {message: (chalk.blue.bold("Roll Number")), type: "number", name:"RollNum"},
])

console.log("");

// Section 2
//Here we are asking Marks Obtained by students in his Subjects
const MarksObtainedInSubjects = await inquirer.prompt
([
{message: (chalk.italic.bold.green("English Marks")), type: "number", name:"EnglishMarks"},
{message: (chalk.italic.bold.green("Urdu Marks")), type: "number", name:"UrduMarks"},
{message: (chalk.italic.bold.green("Maths Marks")), type: "number", name:"MathsMarks"},
{message: (chalk.italic.bold.green("Islamiat Marks")), type: "number", name:"IslamiatMarks"},
{message: (chalk.italic.bold.green("Science Marks")), type: "number", name:"ScienceMarks"},
{message: (chalk.italic.bold.green("SST Marks")), type: "number", name:"SSTMarks"},
{message: (chalk.italic.bold.green("Drawing Marks")), type: "number", name:"DrawingMarks"},
])
console.log("");

// Here we are Calculating Tot. Marks Obtained in his Subjects
let SumTotMarksInSubj: number = MarksObtainedInSubjects.EnglishMarks + MarksObtainedInSubjects.UrduMarks + MarksObtainedInSubjects.MathsMarks + MarksObtainedInSubjects.IslamiatMarks + MarksObtainedInSubjects.ScienceMarks + MarksObtainedInSubjects.SSTMarks + MarksObtainedInSubjects.DrawingMarks

// Now we are Calculating Student Marks & his Percentage
let TotalMarks: number = 700
let ObtainedMarks: number = SumTotMarksInSubj
let Percentage: number = (ObtainedMarks/TotalMarks)*100

console.log("");






// Here we are Printing Tot. Marks, Obt. Marks & his Percantage
console.log(chalk.underline.bold.blue("Total Marks:"),TotalMarks)
console.log(chalk.underline.bold.cyan("Obtained Marks:"),ObtainedMarks)
console.log(chalk.underline.bold.blue("Percentage:"),Percentage.toFixed(2)+"%")

console.log("");


// Section 3
// Now its time to Calculate Student Grade According to his Percentage
switch (true) {
    case Percentage >= 80:
        console.log(chalk.bgBlue.bold("Grade: A+"));
        break;

    case Percentage >= 70:
        console.log(chalk.bgBlue.bold("Grade: A"));
        break;

    case Percentage >= 60:
        console.log(chalk.bgGreen.bold("Grade: B"));
        break;

    case Percentage >= 50:
        console.log(chalk.bgYellow.bold("Grade: C"));
        break;

    case Percentage >= 40:
        console.log(chalk.bgMagenta.bold("Grade: D"));
        break;

    default:
        console.log(chalk.bgRed.bold("Failed"));
        break;
}


// It can be also done by IfElse Case

// if (Percentage >= 80) {console.log(chalk.bgBlue.bold("Grade: A+"));
// }
// else if (Percentage >= 70) {console.log(chalk.bgBlue.bold("Grade: A"));
// }
// else if (Percentage >= 60) {console.log(chalk.bgGreen.bold("Grade: B"));
// }
// else if (Percentage >= 50) {console.log(chalk.bgYellow.bold("Grade: C"));
// }
// else if (Percentage >= 40) {console.log(chalk.bgMagenta.bold("Grade: D"));
// }
// else {console.log(chalk.bgRed.bold("Failed"));
// }