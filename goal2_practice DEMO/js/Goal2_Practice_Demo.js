//FOLLOW ALONG DEMO - GOAL 2 PRACTICE
/*
	===============================================
	MORE:  Strings
	-----------------------------------------------
*/

console.log('------ MORE Strings ----------');

var str1 = 'I love JavaScript! ';
var str2 = 'JavaScript loves me!';
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Use charAt() to console.log the 'v' in str1.

console.log(str1.charAt(4));


// Use indexOf() to console.log the index of 'm' in str2.

console.log(str2.indexOf('m'));


// Use lastIndexOf() to console.log the last 'a' in str1.

console.log(str1.lastIndexOf('a'));


// Use length to console.log the length in str1.

console.log(str1.length);


// Use split() to console.log an array of the ABC's using the abc variable.
// EX: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

console.log(abc.split(''));

var test =abc.split('');
console.log(test[2]);

/*
	===============================================
	MORE:  Numbers
	-----------------------------------------------
*/

console.log('------ MORE Numbers ----------');

var num = 4567896;
var dec = 33.123456;

// Use toExponential() console.log num in exponential notation with two decimals.

console.log(num.toExponential(2));

// Use toPrecision() console.log dec as four numbers.

console.log(dec.toPrecision(6));


/*
	===============================================
	MORE:  Booleans

	TRUTHY / FALSY
	-----------------------------------------------
	Because of JavaScript's loose syntax, some values are == false, 
	we call these FALSY.
		
		false 		== false  	| true
		0 			== false	| true
		"" 			== false	| true
		undefined 	== false	| true  //var does not exist
		NaN 		== false	| true 
	
	So the following conditional fails...
	-----------------------------------------------
*/

console.log('------ MORE Booleans ----------');

	var x=9 * 'k';
	console.log(x);

	if(x){
		console.log("It's true, the valuse is", x);

	}else{
		console.log("It's false, the valuse is:", x);

	}
	
	
	
/*
	===============================================
	MORE:  Arrays
	-----------------------------------------------
*/

console.log('------ MORE Arrays ----------');

var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var arr3 = ['apple', 'orange', 50393, 7.324];

// indexOf()
//Returns the first (least) index of an element within the array equal
//to the specified value, or -1 if none is found.

console.log(arr2.indexOf('c'));


// join()
// Joins all elements of an array into a string.

console.log(arr2.join(','));


// pop()
// Removes the last element from an array and returns that element
// shift() removes the first element from an array.

var element =arr1.pop();
console.log(element);

var element2 =arr1.shift();
console.log(element2);

// push()
// Adds one or more elements to the end of an array and returns the new
//   length of the array
// unshift() - Adds one or more elements to the front of an array.


arr2.push('f');
console.log(arr2);


// reverse()
// Reverses the order of the elements of an array


console.log(arr2.reverse());


// splice()
// Adds and/or removes elements from an array.

console.log(arr1.splice(4,2));
console.log(arr1);


// forEach()
// Calls a function for each element in the array.


arr1.forEach(function(element,index,array){

	console.log('element', element);
	console.log('index', index);
	console.log('array', array);

});


/*
	===============================================
	MORE:  Operators (typeof())
	-----------------------------------------------
	
	How to test for a variable's existence (typeof)	
*/

console.log('------ MORE Operators - typeof() ----------');


console.log(typeof 5);
console.log(typeof "Hi");

var str1="hello";
console.log(typeof str1);

console.log(typeof false);



	
/*
	===============================================
	MORE:  Conditionals (switch())
	-----------------------------------------------
	
	- “if” conditionals are perfect for comparing several sets of varying conditions  
	- switch statements will evaluate a single conditional expression and
		then perform an equality check against possible cases

	Traditional IF and IF Else
	if (condition) {
		// statements1
	};

	if (condition) {
		// statements1
	} else {
		// statements2
	};	

*/

var fruit ="mystery item";

switch (fruit){

	case "oranges":
		console.log("I have oranges!");
		break;
	case "apples":
		console.log("I have apples!");
		break;

	default:
		console.log("Sorry, we are out of " + fruit);
	break;
};





/*
	===============================================
	MORE:  Functions
	-----------------------------------------------

	- we reviewed returns and we went through examples with returns only 
		returning one value
	- below shows how to returning multiple values using arrays

*/

console.log('------ MORE Functions ----------');


	/* 
		Self Executing Functions
	
		(function(){   //this is a basic function which includes () at end
			//code goes here
		})();          //the () tells the function to run immediately

		Normal function:
			var fn = function(){};  //a normal function
		
			fn();	//invoking the fn function

			self function - combining the 2 statement above
				var fn = (function(){})();	
	*/	


/*
	===============================================
	For / While Loop, basic logic structure
	-----------------------------------------------
	
	Normal Operations:
		1. initialize a counter;
		2. loop/repeat a block of code until condition is met;
			the condition that a loop checks for is usually against the counter variable
		3. the most common use of loops is to cycle through all the 
			values of an array or other forms of data set (such as objects)
		4. a counter is needed in the loop - which is a simple numeric 
			variable that increases or decreases 
			- common variable names for counters are i and x - most developers 
				reserve these names for this purpose

	WHILE LOOP:  while()
		- the while loop is the simplest conditional loop
		- before the code is executed, the condition is checked
		- if it evaluates to true, the code is run, and the loop returns to the 
			condition check again
		- it will repeat this process until the condition becomes false, which 
			will then skip the code and exit the loop
		
		Basic While Loop:
			while ( condition ) {
				//code goes here
			}			
*/
console.log('------ While / Loop ----------');

var numBeers =10;
while(numBeers>0){
	console.log(numBeers + " kegs on the wall");
	numBeers--;
}

var name= prompt("What is your name?");
while(name==""){
	prompt("Please enter your name:")
}


	
/*
	===============================================
	For Loop, prebuilt logic structure
	
	for(initialize; condition; increment){}

	FOR LOOP: for()
		- a for loop is an increment-based loop, where the increment is 
			part of the condition
		- there are 3 statements inside the condition of a for loop: 
			a.  first a counter variable is initialized
			b.  second the “condition check”
			c.  and third, increment the variable and perform the code 
				till the end of the loop 
			d.  each is separated by semicolon, just like normal statements

		Basic FOR Loop:
			for ( var i = 0;  i < 5;  i++ ) {
				//code goes here
			};
*/

console.log('------For Loop ----------');


for(var beers = 10; beers > 0; beers--){

	console.log(beers + " bottles of beer on the wall");
}





	/* 
		array.Length
	
		- if we wanted to cycle through all the values in an array, 
			we need to know how many values are in the array
		- this is where the .length property comes in - this will return 
			a number value, equal to the number of elements in the array 
		- an array’s numeric index begins at 0  
		- in the example below, the last index of the array would be 4 
			- the  .length property returns the count, which would be 5	
	*/	

	var myNums =[1,2,3,4,5];
	console.log("length: ", myNums.length);



	
	
	
	

	/* 
		using the for() loop with .length

		- the for loop is the most commonly used in programming, since 
			the increment makes it easy to cycle through arrays or objects.  
		- to cycle through each index of an array, we could use the .length 
			property, and use the counter i as the index, such as:

		for ( var i=0; i<myNums.length; i++){
			console.log( myNums[i] );
		};

		- however, this is not the most efficient way...
		- it is inefficient on the CPU

		- depending on the size of an array, it can be more efficient to 
			save the array length in a variable, inside the first statement
	*/

	
	for(var i=0; i<myNums.length; i++){
		// i=0; j=myNums.length; i<j; i++

		console.log("Length in the for loop: ", myNums[i]);
	}
	
	

	/*
		BREAK...

		- in some situations, you may need to force a loop to stop
		- by using the "break" statement, any loop will stop running at the 
			break point, and perform no more iterations
	*/


for(var i=0; i<myNums.length; i++){
	if(i===3){
		console.log("Testing the break and it broke!");
		break;
	}
	console.log("The length in the loop: ", myNums[i]);

}





	/*
		CONTINUE...

		- while the break statement will stop a loop and exit it, the continue 
			statement will stop a loop’s current iteration, and continue 
			on to the next iteration
	*/








