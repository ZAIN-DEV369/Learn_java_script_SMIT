var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter item to search:").toLowerCase();
if (A.includes(searchItem)) {
    alert(searchItem + " is available at index " + A.indexOf(searchItem));
} else {
    alert("We are sorry, " + searchItem + " is not available.");
}
