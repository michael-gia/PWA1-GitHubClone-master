/**
 * Created by jessicagarlic on 3/7/15.
 */

/*
//Functions
var width=10;
var height=25;

var total = calcArea(width,height);
calcArea(40,50);
//call function and pass argument

//create basic function
//catches width and height in the parameters (w.h)
function calcArea(w,h){

    var area =w*h;
    console.log(area);
    return area;

}
*/

//Generate a random number

var min=180;
var max=220;

function randomizer(mn,mx){

    var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomNumber;

}

var ranNum = randomizer(min,max);

console.log(ranNum);


//anon function

var width =10;
var height= 20;

var areaTotal = function(w,h){
    var area =w*h;
    console.log(area);
    return area;


};

var total = areaTotal(width,height);


