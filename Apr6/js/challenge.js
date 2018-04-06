var start = document.getElementById("game");
console.log(start);
var randomMath = Math.floor(Math.random() * 20);
var randomColor;

function subGame(){
    randomColor = Math.random();
    randomColor = math.floor(randomColor + 11);
    document.body.style.backgroundColor = "hsl(' + randomColor + ' 50%, 50%)"
}

console.log(window);
window.addEventListener('mousemove', function(e)){
    console.log(e.x, e.y);
}