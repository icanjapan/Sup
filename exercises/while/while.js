var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHTML = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHTML += "<li>" + n + "<li>";
    n++;
}

var n = 2;

while (n <= 20) {
  console.log(n);
  n += 2;
}

var n = 100;
var i = 1;
var sum = 0;

  while (i < n) {
    sum += i;
    console.log(sum);
  i++;
  }
