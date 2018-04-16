//Character Objects
class combatant {
    constructor(name, hp, atk){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
    }
};

var player = new combatant ("Player1", 15, 3);
var ghosts = new combatant ("ghost", 5, 0);
var skeletonWarriors = new combatant ("skeletonWarrior", 10, 2);
var skeletonArchers = new combatant ("skeletonArcher", 8, 1);
var skeletonKnights = new combatant ("skeletonKnight", 18, 3);

//Combat code

//Game Options
var left = document.getElementById("left0");
var up = document.getElementById("up0");
var right = document.getElementById("right0");

var atk = document.getElementById("atk0");
var esc = document.getElementById("esc0");

//Story Code
function startGame(){
    console.log('running game');
    document.getElementById("combat").classList.add("hidden");
}

left.addEventListener("click", encounter1);
up.addEventListener("click", encounter1);
right.addEventListener("click", encounter1);

function encounter1(){
    console.log('button click');
    document.getElementById("turn1").innerHTML = "You encounter a ghost. Time to see what they're made of!";
    document.getElementById("movement").classList.add("hidden");
    document.getElementById("combat").classList.remove("hidden");
    // fight();
}