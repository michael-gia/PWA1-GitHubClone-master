/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    var integer = Math.round(Math.random() * 10);
    console.log(integer);

    var button = document.querySelector("button");
    var output = document.querySelector("#output");
    var input = document.querySelector("#input");
    console.log(button);


    var guess = 3;
    var guessMade = 0;
    var guessRemain = guess - guessMade;

    var buttonClick = function(e){
       console.log("test");
        game();
        validate();
    };



    var validate = function() {
       playerGuess = parseInt(input.value);

        if (input===""){
            output.innerHTML = "Please type something in";
        } else if(input === NaN){
            output.innerHTML = "Please type in a number";
        } else if (input < 1){
            output.innerHTML = "Please type a number between 1 and 10";
        } else if(input > 10){
            output.innerHTML = "Please type a number between 1 and 10";
        }

    };




function game() {
    guess--;
    guessMade++;

    if (integer == input) {
        output.innerHTML ="You got it!";

    } else {
        output.innerHTML = "Sorry, try again";
    } if(guessRemain===0){
        output.innerHTML="Game Over, You are out of guesses."
    }
}

button.addEventListener("click", buttonClick,false);

})();



/*

 pen the HTML file associated with this assignment and take note of the elements that have an id attribute and also the button.

 Create a variable to store a random integer within the range 1-10.

 Create variables that reference the DOM(html) elements or 1 object literal.

 Create an .addEventListner event listener on the guess button to listen for a click event.

 When the guess button is clicked, evaluate your guess with the number the computer has chosen.

 Create a function to validate the users input:

 Validate that a number was entered -- AND

 Validate that the number entered is between 1 and 10

 If your guess is higher than the computer's number then display appropriate message in the HTML.

 If your guess is lower than the computer's number then display appropriate message in the HTML.

 If your guess is equal to the computer's number then display appropriate message and end the game.

 Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.

 Deactivate the button by removing the event listener when the game is over.

 EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.


 */