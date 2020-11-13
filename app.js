/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. */
'use strict'
var loadCount 

function updateDateTime() {
    loadCount += 0
    var today = new Date();
    var hourNow = today.getHours();
    var secNow = today.getSeconds();
    var minNow = today.getMinutes();
    var formatting = ('<h2>' + 'The time is: ' + hourNow + ':' + minNow + ':' + secNow + '</h2>')
    document.write(formatting);
    console.log(formatting);
}

function newWindow() {
    loadCount += 0
    var text;
    var check = confirm("Do you want to visit Skip's GitHub page?");
    if (check == true) {
    text = "Please continue!";
    console.log("user wants to visit a different page")
    url = "https://skipmcgee.github.io";
    window.open(url);
    } else {
    console.log("user stays on page")
    text = "Exiting";
    // window.close()
}
}

function checkLooterStatus() {
    loadCount += 0
    console.log("Number of functions used is: " + loadCount)
    var userPrompt = prompt("Are you a Looter (y/n)? ", "n")
    console.log(userPrompt);
    if (userPrompt == 'y') {
        document.write("Welcome, Looter!");
    } else if (userPrompt == 'n') { 
        document.write("that's cool too, not everyone's a looter");
    } else {
        document.write(text="aaaaagh.... ran into an error");
    }
}