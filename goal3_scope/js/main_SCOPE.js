/*
	PWA1 Goal 3
	NAME:  
	JavaScript Scope & Closure
*/


(function() {

    /*
     ===================================================================
     Goal 2 Recap
     */

    console.log('------ Recap from the previous lecture ----------');

    /*******************************************
     STUDENT ACTIVITY 1 (REVIEW)
     We are starting the review with an assessment to test your comprehension of
     some of the course materials from Goal 2

     1.  an array of students is provided for you
     2.  console.log the number of items in the array
     3.  create a for loop
     - console.log the index number
     - console.log the student name in the array that pertains to the index
     number of the loop (i.e. if the loop is on index 1 then the student's
     name of 'Bob' should be console.logged
     ********************************************/

// Array - For Loop
    var students1 = ['Bob', 'Christine', 'Sally', 'Jim'];


    /* ///////////////////// READING MATERIALS ////////////////////////////
     ===================================================================
     Scope & Context

     - scope controls the visibility and lifetime of variables and parameters
     - it defines where the variable is created, & where it can be accessed

     - javascript uses lexical scoping
     1.  a “scope level” will check parent levels for variables, and
     2.  a new “scope level” in javascript can only be made with a function

     - if a variable doesn’t exist in the current scope, through lexical scoping
     it will try to find the variable in a parent block

     - local variables override higher scoped variables


     - all variables defined in a code block using {...} are not visible from
     outside of the block - the code block is normally defined in a function
     -	variables defined in the code block are released when execution of the
     block is finished
     - 	each function has it's own scope

     var globalVar = “jamesBond”;
     function functionName(){
     var localVar = “maryBond”;   //only available within the function
     //you can use globalVar in this function
     }
     //you can use globalVar outside of the function


     - the 1st num is a global variable & will live for the life of the program
     - the 2nd num is a local variable & will last only as long as the function

     var num = 1;       //this is the 1st num

     function myCounter ( ) {
     var num = 50;  //this is the 2nd num
     };


     More Examples:
     function functionName(var1){
     //you can use var1 in this function
     }
     //you cannot use var1 after the function


     function functionName(){
     var localVar = “jameBond”;
     //you can use localVar in this function
     }
     //you cannot use localVar after the function

     function functionName(){
     shouldBeLocalVar = “jamesBond”;

     //without the var, this is actually a Global variable!
     //you can use shouldBeLocalVar in this function
     }
     //you can use shouldBeLocalVar outside of the function

     */

    ////////////// EXAMPLE 1 //////////////////

    console.log("---------- Scope & Context ----------------");

    var myctr = 0;

    var myCounter1 = function (newCt) {

        var myctr = newCt + 10;
        console.log("Inside function: ", myctr);

    }

    myCounter1(myctr);

    console.log("After function: ", myctr);


    /*
     ===================================================================
     Closure

     - Whenever you see the function keyword within another function, the inner function
     has access to variables of the outer function.
     */


    ////////////// EXAMPLE 2 //////////////////

    console.log("---------- Closure ----------------");


    var fName = "james";

    var nameFN = function (var1) {
        var firstName = var1;
        var lastName = "bond";
        var name = firstName + " " + lastName;

        console.log("Inside Function: ", name);

        //closure function
        var closureFN = function () {

            console.log(firstName + " " + lastName);

        }

        return closureFN();

    }

    var fullName = nameFN(fName);

    console.log("Outside function: ", fullName);
    //console.log(fistName);
    //console.log(lastName);


    /*
     Definition:  Closure:
     1.  a snapshot of the functions outer environment at the time the closure is
     created
     2.  a closure is created at the moment when you assign a function
     reference and a copy of it's environment into memory by putting
     it inside of a variable, like we have done with the "fullName" variable

     -  so we have taken a snap shot of the function "closureFN"
     -  as well as any data ("firstName", "lastName", and "name") that was
     available to it at the time we was created our closure or "snapshot"
     "var fullName = nameFN(fname);"  including any fn parameters

     3.  so closure is a special type of object that combines a function and
     "the environment" in which that function was created.

     - "the environment" consist of any fn input parameters that are passed
     to the "closureFN" function and variables at the time the closure
     was created (the 3 variables inside of nameFN.

     4.  another way to look at this is that you are binding some information
     to a variable so you can use it later " fullName();" , in your application

     5.  NOTE:  a function doesn't have to return something in order to be
     called a closure.  Simply accessing variables outside of its
     immediate lexical scope creates a closure.
     */

    /*******************************************************************************
     1.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function
     *******************************************************************************/
        //--------------------------------------------------------
    console.log("4. sentence char count");

    function charCount(string) {
        return string.length;

    }

    console.log(charCount("Bob the Builder"));


    /*******************************************************************************
     2.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function
     - console.log the answer outside of the function
     *******************************************************************************/
        //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    function vowelsInWord(a) {

        var flag = 0;
        for (i = 0; i < a.length; i++) {
            switch (a[i]) {
                case 'a':
                    flag++;
                    break;

                case 'e':
                    flag++;
                    break;

                case 'i':

                    flag++;
                    break;

                case 'o':

                    flag++;
                    break;

                case 'u':

                    flag++;
                    break;
            }
        }
        return flag;
    }
    console.log(vowelsInWord("Bob the builder"));


		////////////////OPTIONAL SECTION//////////////////
		
/*****************************************************************************   
     3.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else
            - create an array with all of the even numbers from the array
         - return the array
         - console.log the answer outside of the function
          - console.log the answer outside of the function
*******************************************************************************/     
     //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE


    
    
    
    
    

})(); // end wrapper