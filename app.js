/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. */
'use strict'
var loadCount 

function updateDateTime() {
    loadCount += 0;
    var today = new Date();
    var hourNow = today.getHours();
    var secNow = today.getSeconds();
    var minNow = today.getMinutes();
    var formatting = ('<h2>' + 'The time is: ' + hourNow + ':' + minNow + ':' + secNow + '</h2>');
    document.write(formatting);
    console.log(formatting);
}

function newWindow() {
    loadCount += 0;
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
    loadCount += 0;
    var userPrompt = prompt("Are you a Looter (y/n)? ", "n");
    userPrompt.toLowerCase();
    console.log(userPrompt + ',' + 'count=' + loadCount);
    if (userPrompt === 'y') {
        document.write("Welcome, Looter!");
    } else if (userPrompt === 'n') { 
        document.write("that's cool too, not everyone's a looter");
    } else {
        checkLooterStatus();
    }
    console.log("Total number of functions used is: " + loadCount);
}
function weekendDay() {
    var newday = Date.prototype.getDay();
    newday.toString();
    var saturday = 6;
    var sunday = 0;
    while (newday === saturday || newday === sunday) {
        window.open("/images/american-flag.jpg", "It's the Weekend!", "width=300")
        time.sleep(1000);
        window.close();
    }
}