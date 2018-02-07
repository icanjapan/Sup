var name = prompt('What is your name?');

var checkName = function() {
  if(name === "") { // checks for an empty string
    name = prompt('What is your name, for real this time?');

    checkName();
  }

}

checkName();

alert('Hello ' + name);
