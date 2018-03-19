document.getElementById('btn2').style.color = "red";

console.log("Here is my first console message");
console.info("This is Info");
console.warn("Danger will come for you");
console.error("Uh uh uh, You didn't say the magic word");

//alert('AUTHORITIES HAVE BEEN CONTACTED')
// var userResult = confirm("Did you steal the cookie from the cookie jar?");
// console.log(userResult);

//concatination
var fname = prompt("What is your first name");
var lname = prompt("What is your last name?");
var fullname = confirm("Is this your name? " + fname +' '+ lname);

/*
Variables
    Must start with a lowercase!
    Must start with a letter.
    Can contain underscore.
    no heifins(Spelling is unsure)
*/
var username;
var room1;
var user_name;
var userNamer;
var age = 27;
var decade = 10;
var double = 2;
var divide = 4;
//Divide the result by 4
var newage = ( (age + decade) * double) / divide;
// PEMDAS matters!
console.log(newage);
//var stringage = "27";

/*
String Interpolation
    '${ variable }'
*/
// alert ('${firstname} ${lastname}');

/*
prompt user for
the make of vehicle
the year
the color
alert the result
*/

/*
3 new variables
formatting: color, year, make.
*/

function getUserVehicle(){
var carmk = prompt("What kind of car are you looking for?");
var carage = prompt("What year of the make?");
var carclr = prompt("And what color?");
var carsearch = alert("Searching for... " + carclr +' , '+ carage +' , '+ carmk);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser');
}

function primaryUser2(){
    var first2 = prompt("What is your first name?");
    var last2 = prompt("What is your last name?");
    var place2 = prompt("What is your home town?");
}

function unity(){
    var reason1 = prompt("Partnership reason?");
    var reason2 = prompt("And another reason?");
    var results = alert("Pending...");
}