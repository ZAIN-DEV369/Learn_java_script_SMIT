// check if a character is a number, uppercase letter, lowercase letter.
var input = prompt("Enter a character:");

if (!isNaN(input)) {
    alert("It is a number.");
} else {
    var code = input.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        alert("It is an uppercase letter.");
    } else if (code >= 97 && code <= 122) {
        alert("It is a lowercase letter.");
    } else {
        alert("It is not a letter or number.");
    }
}
