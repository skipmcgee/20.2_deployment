/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. */
'use strict'

function updateDateTime() {
    var today = new Date();
    var hourNow = today.getHours();
    var secNow = today.getSeconds();
    var minNow = today.getMinutes();

    document.write('<h2>' + 'The time is: ' + hourNow + ':' + minNow + ':' + secNow + '</h2>')
}

function newWindow() {
    var text;
    var check = confirm("Do you want to visit Skip's GitHub page?");
    if (check == true) {
    text = "Please continue!";
    url = "https://skipmcgee.github.io";
    window.open(url);
    } else {
    text = "Exiting";
    // window.close()
}
}

function checkLooterStatus() {
    var userPrompt = prompt("Are you a Looter (y/n)? ", "n")

    if (userPrompt == 'y') {
        document.write("Welcome, Looter!");
    } else if (userPrompt == 'n') { 
        document.write("that's cool too, not everyone's a looter");
    } else {
        document.write(text="aaaaagh.... ran into an error");
    }
}