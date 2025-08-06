// Assignment 2
// Temperature checker
let temperature = parseInt(prompt("Enter the temperature:"));
// parseInt aik string ko number mein convert karta hai
if (temperature > 40) {
    alert("It is too hot outside.");
} 
else if (temperature > 30) {
    alert("The Weather today is Normal.");
} 
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} 
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} 
else if (temperature < 10) {
    alert("It's very cold today!");
} 
else {
    alert("Invalid temperature!");
}