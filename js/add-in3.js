/* Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data. At least one dynamic component should be based on user input.*/

var userPrompt = prompt("Are you a Looter (y/n)? ", "n")

if (userPrompt == 'y') {
    document.write("Welcome, Looter!");
} else if (userPrompt == 'n') { 
    document.write("that's cool too, not everyone's a looter");
} else {
    document.write(text="aaaaagh.... ran into an error");
}
