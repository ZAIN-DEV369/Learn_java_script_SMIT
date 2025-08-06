
// compare two numbers
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");

if (num1 > num2) {
    alert(num1 + " is larger.");
} else if (num2 > num1) {
    alert(num2 + " is larger.");
} else if(num1 == num2){
    alert("Both numbers are equal.");
} else {
    alert("Invalid input.");
}
