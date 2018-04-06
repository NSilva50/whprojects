var wha = .1 * .2;
console.log(wha);

var rounded = Math.round(wha);
console.log(rounded);

var roundedUp = Math.ceil();

var roundedDown = Math.floor();

var pi = Math.PI;
var userPick = document.getElementById("userPick");
var submitBtn = document.querySelector(".submit");
var userPickRes = document.querySelector(".result");
var resetBtn = document.getElementById('reset');

// console.log( Math.pow(8, 2));

// console.log(Math.sqrt(64));

// console.log(Math.random());

// console.log(rounded, roundedUp);

function getRandomNumber(){
    ran = Math.random();
    ran = Math.floor(ran + 11);
}

// submitBtn.addEventListener("click", getUserPick);
resetBtn.addEventListener("click", getRandomNumber);

/*
    Random number generator!!!
*/

var ran = Math.random();
ran = Math.floor(ran * 11);
console.log('The random number we made:', ran);

// function pickANum(){
//     var userNum = prompt("Guess my number");
//     checkNum(userNum);
// }

function checkNum(x){
    if(x < ran){
        printUserRes(x + " is too low, pick again");
        // pickANum();
    }
    else if(x > ran){
        printUserRes(x + " is too high, pick again");
        // pickANum();
    }
    else{
        printUserRes(x + " is the right number! You win!");
    }
}

function printUserRes(printUserRes){
    userPickRes.innerHTML = printUserRes;
}

function getSubmittedNumber() {
    console.log('The .value of the input field', document.getElementById('userPick').value);
    var guess = document.getElementById('userPick').value;

    if(guess < ran){
        printUserRes(x + " is too low, pick again");
        // pickANum();
    }
    else if(guess > ran){
        printUserRes(guess + " is too high, pick again");
        // pickANum();
    }
    else{
        printUserRes(guess + " is the right number! You win!");
    }
}



// submitBtn.addEventListener("click", getUserPick);

function getUserPick(){
    attempt = attempts-1;
    var userPick = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = " ";
}

function checkUserPick(guess){
    console.log(guess);
    if(guess < ran){
        printUserRes(guess + " is too low, pick again");
        // pickANum();
    }
    else if(guess > ran){
        printUserRes(guess + " is too high, pick again");
        // pickANum();
    }
    else{
        printUserRes(guess + " is the right number! You win!");
    }
}

/*
    Challenge accepted
*/

function numRes(){
    var r = document.getElementById("reset");

}