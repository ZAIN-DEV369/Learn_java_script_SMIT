var scores = [320, 230, 480, 30, 120];
document.write("Scores of Students: " + scores + "<br>");

scores.sort(function(a, b){
    return a - b;
})

document.write("Ordered Scores of Students: " + scores);