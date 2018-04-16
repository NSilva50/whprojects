// var nate = new Person('nate', 'silva', 'brown');

var theDate = new Date();
console.log(theDate.getDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getMonth());
console.log(theDate.getFullYear());

console.log( theDate.toLocaleString("en-us", {month: 'long'}));

var dateStr = `
    Today's date is ${the.Date.getDate()}th of ${ theDate.toLocaleString("en-us", {month: 'long'})}
`

//give richard
var myTimer = setInterval(updateTimer, 100);
stop.btn.addEventListener("click", stopDate)
var stopBtn = document.querySelector('button');

function updateTimer(){
    var myTimer = new Date();
    var timeStr = `${theTime.toLocaleString("en-us", {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}`
}

var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg(){
    document.body.classList.add("hilite");
}

function stopDate()