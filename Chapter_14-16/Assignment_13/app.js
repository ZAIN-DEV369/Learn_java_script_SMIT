var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<b>Devices:</b> " + devices + "<br><br>");

while (devices.length > 0) {
    var out = devices.shift(); // removes first element
    document.write("Out: " + out + "<br>");
}