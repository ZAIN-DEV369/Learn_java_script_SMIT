// Ask the user for time input in 24-hour format
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time. Please enter a value between 0000 and 2359.");
}
