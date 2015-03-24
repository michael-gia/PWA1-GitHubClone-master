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

    var fighter1 = {
        name: 'Spiderman',
        health: 100,
        damage: 20
    };


    var fighter2 = {
        name: 'Batman',
        health: 100,
        damage: 20
    };

    //player damage
    // These variables state the max damage that the characters can do on each attack.


    //player health
    //States the starting health of the players.


    //initiate round
    //Applies a number to the round so the rounds can flow in a direction.
    var round=0;

    function fight(){
        alert(fighter1.name+":"+fighter1.health+"  *START*  "+fighter2.name+":"+fighter2.health); //This is the initial alert informing the user of the opponents health as well as their own health.
        for (var i = 0; i < 10; i++) //The i represents the peramiters of this particular function, in the case the fight function. This is the basic loop code allowing the loop to proceed in a logical order and defines a stopping point in order to prevent an infinite loop.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);
            //The f1 nd f2 variables are the random number generators to determin the damage that each character will do. It creates a random number, multiplies it by (the base damage, minus the min damage) then subtracts the min damage.

            //inflict damage
            //this takes the player's health and subtracts the damage that was just done from the health.
            fighter1.health-=f1;
            fighter2.health-=f2;

            console.log(fighter1.name+": "+fighter1.health + " " + fighter2.name+":"+fighter2.health); //This console log outputs the result of the first round. THis will tell the user each player's health.

            //check for victor
            var result = winnerCheck(); //this variable is designed to check to see if the fight is over. WIth this there is a logical stopping point to the fight so it does not go on forever.
            console.log(result);
            if (result==="no winner") //this loops the fight until the winnerCheck function states the fight is over.
            {
                round++; //adds 1 to the round number every time the round loop runs.
                alert(fighter1.name+":"+fighter1.health+"  *ROUND "+round+" OVER"+"*  "+fighter2.name+":"+fighter2.health);

            } else{
                alert(result);
                break; //This stops the loop when result is defined.
            }

          }
    }

    function winnerCheck(){ //This function is here to track when one or both players are out of health to define a winner of the fight.
        var result="no winner"; //if the players health is above 1 "no winner" will be displayed
        if (fighter1.health<1 && fighter2.health<1)
        {
            result = "You Both Die"; //if both player's health are below 1 "You both die" will display
        } else if(fighter1.health<1){
            result =fighter2.name+" WINS!!!"
        } else if (fighter2.health<1)
        {
            result = fighter1.name+" WINS!!!"
        }
       return result;
    }

    /*******  The program gets started below *******/
    fight();

})();