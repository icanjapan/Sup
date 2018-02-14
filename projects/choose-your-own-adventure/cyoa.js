var response = prompt("what if you were a dragon. would you like it? y or n?");

    if(response ==="y"){
        response = prompt("correct. you fly over to the nearest town. do you burn up the village or not? y or n?");

           if(response ==="y"){
            response = prompt("perfect. you eat for the day and feed your family. satisfied? y or n?");

              if(response ==="y"){
                  response = prompt("probably. you fall asleep and dream about what imaginary creature?")

                  if (response ==="unicorn"){
                    alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
                  }
                  else {
                        alert("you lose. refresh the page and try again my guy.");
                  }
              }
              else if(response ==="n"){
                  response = prompt('correct. you feast on fawns and this imaginary creature that starts with a "u". type in your answer.')
                      if (response ==="unicorn"){
                        alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
                      }
                      else {
                            alert("you lose. refresh the page and try again my guy.");
                      }
              }
            }

          else if (response = "n"){
            response = prompt('you are benevolent! unfortunately you starve to death because that would have been the meal that saved you and your family. hit refresh to start again. otherwise type "unicorn"');

                if (response ==="unicorn"){
                  alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
                }
                else {
                    alert("you lose. refresh the page and try again my guy.");
                }
           }
         }

    else if(response==="n"){
        response = prompt("ok. if you could be an imaginary creature, would you? y or n?");

          if(response ==="y"){
           response = prompt("great! what creature would you be?");

               if (response ==="unicorn"){
                 alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
               }

               else {
                   alert("you lose. refresh the page and try again my guy.");
                 }
          }

          else if (response ==="n"){
            response = prompt('boring. type "unicorn"');

                if (response ==="unicorn"){
                  alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
                }
                else {
                    alert("you lose. refresh the page and try again my guy.");
                  }
          }
    }

    else if (response ==="unicorn"){
      alert("you win the game! congratulations! copy and paste this video to your browser! https://youtu.be/1Bix44C1EzY");
    }

    else {
      alert("you lose. refresh the page and try again my guy.");
    }
