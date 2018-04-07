function startgame(){
    var name = prompt("What is your name?");
    console.log(name);
    var age = prompt("How old are you?");
    console.log(age);
    var hobbies = prompt("What do you like to do for fun?");
    console.log(hobbies);
}

function lockedEntrance(){
    document.getElementById("foyerAct1").innerHTML = "The Main Entrance is locked, there must be another way out.";
}

function lockedBasement(){
    document.getElementById("foyerAct1").innerHTML = "The door towards the Basement is locked, there must be another way in.";
}