

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD

	var randomLoc = Math.floor(Math.random() * 5);
	var local2 = 3;
	var local3 = 4;



//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)

	var guess = prompt("What Space do you want to attack?");
	var hits = 0;
	var guesses = 0;



//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)
var isSunk =false;

//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK
	while(isSunk === false) {

		//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
		//IS THE GUESS BETWEEN 0 AND 6?

		if (guess < 0 || guess > 6) {
			guess =prompt("Not a valid response, please enter a number between 0-6");

		} else {
			guesses = guesses + 1;
			if (guess == randomLoc || guess == local2 || guess == local3) {
				alert("Hit");
				var hits = hits + 1;

				if (hits === 3) {
					isSunk = true;
					alert("You sank my battleship");
				}
			}else {
				alert("Miss");
			}

		}

	}
		//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
		//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK


		//ELSE ALERT MISS!
		var tally = guesses + hits;
		console.log(tally);


//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)

var tally = "You took " + guesses + " guesses to sink the battleship";
	alert(tally);

			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR

