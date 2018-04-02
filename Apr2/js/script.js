var p1 = document.getElementById('p1');
console.log(p1);

var p1q = document.querySelector('#p1');
console.log(p1q);

var pClass = document.querySelector('.p');
console.log(pClass);

// var pLast = document.querySelector('.p:last-child');
// console.log(pLast);
// pLast.style.fontSize = '28px';

var pClasses = document.querySelectorAll('.p');
console.log(pClasses);
pClasses[2].style.fontSize = '8px';
pClasses[1].style.color = 'red';
pClasses[3].style.fontWeight = 'boldest';

var pByClassname = document.getElementsByClassName('p');
console.log(pByClassname);

pByClassname[0].style.fontSize = '32px';

var pByTagname = document.getElementsByTagName('p');
console.log(pByTagname);
pByTagname[9].style.color = 'yellow';
console.log(pByTagname.length);

/*FOR loop
!---! Arguments
!---! New Variable
    !---! Number of Loops
        !---! Incrementor
*/
for(var i = 0; i < 10; i ++) {
    pByTagname[i].style.color = 'red';
    console.log(i);
}

var myName = "Nate";
console.log(myName.length);
for(var i = 0; i <myName.length; i++){
    console.log(i);
    console.log(myName[i]);
}

function colorList() {
    var color1 = prompt('Color 1?');
    var color2 = prompt('Color 2?');
    var color3 = prompt('Color 3?');
    personal(color1, color2, color3);
}
function personal(color1, color2, color3) {
    console.log(color1, color2, color3);
    var choices = confirm('Are these your preferences?' + color1 + color2 + color3);
    var p1 = document.querySelector('.c1');
    p1.style.color = color1;
    var p2 = document.querySelector('.c2');
    p2.style.color = color2;
    var p3 = document.querySelector('.c3');
    p3.style.color = color3;
}

colorList();