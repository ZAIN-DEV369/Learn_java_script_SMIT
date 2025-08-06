// Assignment_1
// Number Guessing Game
var Num1 = Math.round(Math.random()*10)
var Num2 = +prompt("Number Guessing Game\nGuess a Number between 1 to 10 :")  
if(Num1 == Num2){
    alert("Congratulations!!! you guessed the right number")
}else if(Num1 > Num2){
    alert("Too Low")
}else if(Num1 < Num2){
    alert("Too High")
}else if(Num2+1 == Num1){
    alert("Closed enough to the right answer")
}else if(Num2-1 == Num1){
    alert("Closed enough to the right answer")
}else{
    alert("Try Again")
}