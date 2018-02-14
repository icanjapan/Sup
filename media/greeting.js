var firstName = prompt("hi there! what's your first name?") || "lance";
var lastName = prompt("what's your last name?") || "tankman";
var output = document.querySelector('#greeting');

output.innerHTML = "<p>thanks for visiting, " + firstName + " " + lastName + ".</p>";
