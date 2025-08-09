var tableNum = +prompt("Enter table number:");
var tableLength = +prompt("Enter table length:");
for (var i = 1; i <= tableLength; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

