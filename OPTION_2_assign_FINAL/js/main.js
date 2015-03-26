/*
	* Mid Terms for PWA-1
*/
(function(){

//this is the variable to find and get the right tag and class to call the next button later
var button = document.querySelector(".buttonred");


//first student object
var student = {
    name: 'Michael ',
    gpa: [2.5, 3.5, 4.0],
    address: {
        street: 'University',
        city: 'Orlando',
        state: 'Florida'
    }
};



var student2 = {
    name: 'James Bond ',
    gpa: [7.5, 3.5, 2.4],
    address: {
        street: 'Aloma',
        city: 'Orlando',
        state: 'Florida'
    }
};



console.log(student.name);
console.log(student.gpa);
console.log(student.address);


//this function is adding a last name and gpa points to student 1.
function addData (name,gpa,address){

   var newData = student.name += name; student.gpa.push(gpa);

    return newData;
}

    //this is the function call for the addData function
addData("Bond", 2.4);

console.log(student.name);
console.log(student.gpa);




    //here is a function that is outputting the average grade for student 1
    function average (){

       var total = student.gpa[0] + student.gpa[1] + student.gpa[2] + student.gpa[3] / student.gpa.length;

        return total;
    }

    console.log(average()); //this console calls the function and displays it in the console log




// this is the function that is supposed to display the student info in the HTML
    var call = function(e){

        //this is the part of the function that will display the info in the HTML
        document.getElementById("name").innerHTML=student.name;
        document.getElementById("address").innerHTML= student.address.street+", "+student.address.city +", "+student.address.state;
        document.getElementById("gpa").innerHTML=student.gpa;

        e.preventDefault();
        return false;


    };

    //this function call is supposed to activate call when the button is clicked.
    button.onclick= call;




})();