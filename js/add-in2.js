/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. */

var text;
var check = confirm("Do you want to visit Skip's GitHub page?");
if (check == true) {
  text = "Please continue!";
  url = "https://skipmcgee.github.io";
  window.open(url);
} else {
  text = "Exiting";
  window.close()
}
