// Assignment 3
// Simple Calculator using if statements
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Enter operation => +, -, *, /, % : ");
var result;

if (operation === "+") {
    result = num1 + num2;
    alert("Result: " + result);
} else if (operation === "-") {
    result = num1 - num2;
    alert("Result: " + result);
} else if (operation === "*") {
    result = num1 * num2;
    alert("Result: " + result);
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert("Result: " + result);
    } else {
        alert("Error: Division by zero.");
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
        alert("Result: " + result);
    } else {
        alert("Error: Division by zero.");
    }
} else {
    alert("Invalid operation entered.");
}
