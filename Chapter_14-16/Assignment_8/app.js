var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}