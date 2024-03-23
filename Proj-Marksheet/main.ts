// MarkSheet
// We are adding Chalk to add Style/Color in our Marksheet
import chalk, { ChalkInstance } from "chalk"

// 1st we are adding a School name in Variable
const SchoolName: string = (chalk.blue.bold.underline("Sun Rise Public School"))

// Now we are adding Student Info in Variables
let Class: string = (chalk.bold.blue("4th"))
let StudentName: string = (chalk.blue.bold("Abdul Basit Ali"))
let RollNum: number = 7699

// Now we are adding how much student obatined marks in his Subjects
let EnglishMarks: number = 75
let UrduMarks: number = 64
let MathsMarks: number = 83
let IslamiatMarks: number = 67
let ScienceMarks: number = 76
let SSTMarks: number = 68
let DrawingMarks: number = 87

// Now we are Calculating Student Marks & his Percentage
let TotalMarks: number = 700
let ObtainedMarks: number = EnglishMarks + UrduMarks + MathsMarks + IslamiatMarks + ScienceMarks + SSTMarks + DrawingMarks
let Percentage: number = (ObtainedMarks/TotalMarks)*100

// Here we are Printing Basic Details
console.log (chalk.underline.bold("School Name:"),SchoolName);
console.log(chalk.underline.bold("Class:"),Class);
console.log(chalk.underline.bold("Student Name:"),StudentName);
console.log(chalk.underline.bold("Roll Number:"),RollNum);

// Section 1, This is just a blank print so we can divide our Marksheet into section
console.log("");

// Here we are Printing How much Studend Obtained Marks in his Subjects
console.log(chalk.italic.bold.green("English Marks"),EnglishMarks);
console.log(chalk.italic.bold.green("Urdu Marks"),UrduMarks);
console.log(chalk.italic.bold.green("Maths Marks"),MathsMarks);
console.log(chalk.italic.bold.green("Islamiat Marks"),IslamiatMarks);
console.log(chalk.italic.bold.green("Science Marks"),ScienceMarks);
console.log(chalk.italic.bold.green("SST Marks"),SSTMarks);
console.log(chalk.italic.bold.green("Drawing Marks"),DrawingMarks);

// Section 2 
console.log("");
// Here we are Printing Tot. Marks, Obt. Marks & his Percantage
console.log(chalk.underline.bold.blue("Total Marks:"),TotalMarks)
console.log(chalk.underline.bold.cyan("Obtained Marks:"),ObtainedMarks)
console.log(chalk.underline.bold.blue("Percentage:"),Percentage.toFixed(2)+"%")

// Section 3
console.log("");
// Now its time to Calculate Student Grade According to his Percentage
if (Percentage >= 80) {console.log(chalk.bgBlue.bold("Grade: A+"));
}
else if (Percentage >= 70) {console.log(chalk.bgBlue.bold("Grade: A"));
}
else if (Percentage >= 60) {console.log(chalk.bgGreen.bold("Grade: B"));
}
else if (Percentage >= 50) {console.log(chalk.bgYellow.bold("Grade: C"));
}
else if (Percentage >= 40) {console.log(chalk.bgMagenta.bold("Grade: D"));
}
else {console.log(chalk.bgRed.bold("Failed"));
}