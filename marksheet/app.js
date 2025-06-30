// A Marsksheet of student using JavaScript
// A program to calculate the total marks and percentage of a student and grades
var name = prompt("Enter your name");
var rollNo = +prompt("Enter your roll number");
var English = +prompt("Enter marks of English");
var Urdu = +prompt("Enter marks of Urdu");
var Math = +prompt("Enter marks of Math");
var Physics = +prompt("Enter marks of Physics");
var Computer = +prompt("Enter marks of Computer");
var totalMarks = English + Urdu + Math + Physics + Computer;
var percentage = (totalMarks / 500) * 100;

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60 && percentage < 70) {
    grade = "B";
} else if (percentage >= 50 && percentage < 60) {
    grade = "C";
} else if (percentage >= 40 && percentage < 50) {
    grade = "D";
} else {
    grade = "F";
}
document.write("<center><table border='1'><tr><td align='center'>Name: </td><td align='center'>" + name + "</td></tr><tr><td align='center'>Roll Number: </td><td align='center'>" + rollNo + "</td></tr><tr><td align='center'>English: </td><td align='center'>" + English + "</td></tr><tr><td align='center'>Urdu: </td><td align='center'>" + Urdu + "</td></tr><tr><td align='center'>Math: </td><td align='center'>" + Math + "</td></tr><tr><td align='center'>Physics: </td><td align='center'>" + Physics + "</td></tr><tr><td align='center'>Computer: </td><td align='center'>" + Computer + "</td></tr><tr><td align='center'>Total Marks: </td><td align='center'>" + totalMarks + "</td></tr><tr><td align='center'>Percentage: </td><td align='center'>" + percentage + "</td></tr><tr><td align='center'>Grade: </td><td align='center'>" + grade + "</td></tr></table></center>");


