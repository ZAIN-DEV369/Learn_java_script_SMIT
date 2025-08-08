var colors = ["Red", "Green", "Blue"];
document.write("Initial Colors: " + colors + "<br>");

// a. Add color to beginning
var colorBegin = prompt("Enter a color to add at beginning:");
colors.unshift(colorBegin);
document.write("After adding to beginning: " + colors + "<br>");

// b. Add color to end
var colorEnd = prompt("Enter a color to add at end:");
colors.push(colorEnd);
document.write("After adding to end: " + colors + "<br>");

// c. Add two more to beginning
colors.unshift("Purple", "Orange");
document.write("After adding two to beginning: " + colors + "<br>");

// d. Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br>");

// e. Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br>");

// f. Add color at specific index
var indexAdd = +prompt("Enter the index to add a color:");
var colorAtIndex = prompt("Enter the color name:");
colors.splice(indexAdd, 0, colorAtIndex);
document.write("After adding at index: " + colors + "<br>");

// g. Delete color(s) at specific index
var indexDelete = +prompt("Enter the index to delete color(s):");
var deleteCount = +prompt("How many colors to delete?");
colors.splice(indexDelete, deleteCount);
document.write("After deleting color(s): " + colors + "<br>");