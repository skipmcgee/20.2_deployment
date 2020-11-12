/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. */

var today = new Date();
var hourNow = today.getHours();
var dayNow = today.getDay();
var minNow = today.getMinutes();

document.write(‘<h2>’ + dayNow + ':' + hourNow + ':' + minNow + ‘</h2>’);
