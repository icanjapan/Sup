var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHTML = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHTML += "<li>" + n + "</li>";
    n++;
}

outputHTML +="</ul>";

outputTarget.innerHTML = outputHTML;

var n = 2;
var outputTarget = document.querySelector("#exercise-2");
var outputHTML = "<ul>";

while (n <= 20) {
  console.log(n);
  outputHTML += "<li>" + n + "</li>";
  n += 2;
}

outputHTML +="</ul>";

outputTarget.innerHTML = outputHTML;

var n = 100;
var i = 1;
var sum = 0;
var outputTarget = document.querySelector('#exercise-3');
var outputHTML = "<ul>";

  while (i < n) {
    sum += i;
    console.log(sum);
    outputHTML += "<li>" + n + "</li>";
    i++;
  }

outputHTML +="</ul>";

outputTarget.innerHTML = outputHTML;

var n = 15;
var outputTarget = document.querySelector('#exercise-5');
var outputHTML = "<ul>"

while (n > 0){
    console.log(n);
    if ( n % 2 === 0){
      outputHTML += "<li>even</li>";
    } else {
      outputHTML += "<li>odd</li>";
    }
    n--;
}

outputHTML +="</ul>";
outputTarget.innerHTML = outputHTML;

var n = 1;
var outputTarget = document.querySelector('#exercise-6');
var outputHTML = "<ul>";

while (n <= 100) {
    if(n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz");
        outputHTML += "<li>FizzBuzz</li>";
    } else if (n % 3 === 0){
        console.log("Fizz");
        outputHTML += "<li>Fizz</li>"
    } else if (n % 5 === 0) {
        console.log("Buzz");
        outputHTML += "<li>Buzz</li>";
    } else {
        console.log(n);
        outputHTML += "<li>" + n + "</li>"
    }

    n++;
}

outputHTML += "</ul>";

outputTarget.innerHTML = outputHTML;
