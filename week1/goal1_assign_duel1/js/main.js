// Michael Giacchetta
// 03/05/2015
/*
Name: Michael Giacchetta
Date: 03/06/2015
Assignment: Goal1: Assignment: Dual1

*/
/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
// This function runs the basic calculations of the game.
(function(){

    console.log("FIGHT!!!");

    //player name
    // These variables state who the two main characters are.
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    // These variables state the max damage that the characters can do on each attack.
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //States the starting health of the players.
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    //Applies a number to the round so the rounds can flow in a direction.
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //This is the initial alert informing the user of the opponents health as well as their own health.
        for (var i = 0; i < 10; i++) //The i represents the peramiters of this particular function, in the case the fight function. This is the basic loop code allowing the loop to proceed in a logical order and defines a stopping point in order to prevent an infinite loop.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
            //The f1 nd f2 variables are the random number generators to determin the damage that each character will do. It creates a random number, multiplies it by (the base damage, minus the min damage) then subtracts the min damage.

            //inflict damage
            //this takes the player's health and subtracts the damage that was just done from the health.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //This console log outputs the result of the first round. THis will tell the user each player's health.

            //check for victor
            var result = winnerCheck(); //this variable is designed to check to see if the fight is over. WIth this there is a logical stopping point to the fight so it does not go on forever.
            console.log(result);
            if (result==="no winner") //this loops the fight until the winnerCheck function states the fight is over.
            {
                round++; //adds 1 to the round number every time the round loop runs.
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break; //This stops the loop when result is defined.
            };

          };
    };

    function winnerCheck(){ //This function is here to track when one or both players are out of health to define a winner of the fight.
        var result="no winner"; //if the players health is above 1 "no winner" will be displayed
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die"; //if both player's health are below 1 "You both die" will display
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();