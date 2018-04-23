//Construction Objects
class combatant {
    constructor(name, hp, atk /*skills*/){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        // this.skills = skills;
    }
};

// class skills {
//     constructor(name, atk){
//         this.name = name;
//         this.atk = atk;
//     }
// };

//combatants
var player = new combatant ("Player1", 15, 3);
var ghosts = new combatant ("ghost", 5, 0);
var skeletonWarriors = new combatant ("skeletonWarrior", 10, 2);
var skeletonArchers = new combatant ("skeletonArcher", 8, 1);
var skeletonKnights = new combatant ("skeletonKnight", 18, 3);
var enemy = new combatant ("no one", 0, 0);

//Skills
// var fireball = new skill ("Fireball", 5);

//Combat code
function fight(){
    document.getElementById("movement").classList.add("hidden");
    document.getElementById("combat").classList.remove("hidden");
    atk.addEventListener("click", basicAtk);
    esc.addEventListener("click", escaping);

    function basicAtk(){
        var playerDamageRoll = Math.ceil(Math.random() * 5) + player.atk;
        enemy.hp -= playerDamageRoll;
        if(enemy.hp < 1){
            alert("You have vanquished your foe.");
            document.getElementById("movement").classList.remove("hidden");
            document.getElementById("combat").classList.add("hidden");
        }else{
            enemyBasicAtk();
        }
    }

    function enemyBasicAtk(){
        var enemyDamageRoll = Math.ceil(Math.random() * 5) + enemy.atk;
        player.hp -= enemyDamageRoll;
        if(player.hp < 1){
            alert("You have been defeated...");
        }else{
            fight();
        }
    }

    function escaping(){
        if(escapeCount === 3) {
            alert("You could escape no longer and have been slain. Game Over!");
        }else{
            escapeCount++;
        }
    }
}

//Game Options
var move = document.getElementById("moving");

var atk = document.getElementById("atacking");
var esc = document.getElementById("escape");

var escapeCount = 0;
console.log(escapeCount);

//The Haunted Forest
function startGame(){
    console.log('running game');
    document.getElementById("combat").classList.add("hidden");
}

move.addEventListener("click", generateEncounter);