var left = document.getElementById("left0");
var up = document.getElementById("up0");
var right = document.getElementById("right0");

var atk = document.getElementById("atk0");
var esc = document.getElementById("esc0");

var loseGame = 0;
console.log(loseGame);
if (loseGame == 3) {
    alert("You could escape no longer and have been slain. Game Over!")
}

var player = {
    hp: "15",
    dmg: "3",
};

var ghost = {
    hp: "8",
    dmg: "0",
};

var skeletonWarrior = {
    hp: "13",
    dmg: "1",
};

var skeletonArcher = {
    hp: "10",
    dmg: "x2",
};

var skeletonKnight = {
    hp: "18",
    dmg: "2",
};

function startGame(){
    document.getElementById("combat").classList.add("hidden");
}

function fight(){
    document.getElementById("movement").classList.add("hidden");
    document.getElementById("combat").classList.remove("hidden");
    atk.addEventListener("click", dmgCal);
    esc.addEventListener("click", loseGame++);
}

function dmgCal(){
    Math.floor((Math.random() * 6) + 3);
}

left.addEventListener("click", encounter1);
up.addEventListener("click", encounter1);
right.addEventListener("click", encounter1);

function encounter1(){
    document.getElementById("turn1").innerHTML = "You encounter a ghost. Time to see what they're made of!";
    fight();
}