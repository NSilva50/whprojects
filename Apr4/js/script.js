function fullname() {
    var llamo = prompt("What is your full name?").split(" ");
    console.log(llamo);
    outputname(llamo);
}

function outputname(nameArray) {
    // console.log(nameArray);
    // document.getElementById("fname").innerHTML = nameArray[0];
    // document.getElementById("lname").innerHTML = nameArray[1];
    // [nameArray.length - 1];
    for(var i = 0; i < name.nameArray.length; i++) {
        if(i = 0 || i = nameArray.length - 1){
            console.log("we got the zeroth element!", nameArray[i]);
        }
        else{
            console.log("not the zeroth");
        }
    }
}

/*
Array Lesson!
*/

var cars = ["jeep", "subaru", "honda"];
console.log(cars[1]); //get the second element
console.log(cars.length); //how many elements

//push method
cars.push(bmw); //add to array
console.log(cars);

//pop method
cars.pop();
console.log(cars);

cars.pop();
console.log(cars);

var removeCar = cars.pop();
console.log(cars);
console.log(removeCar);

//unshift method: Adds to beginning
cars.unshift("chevy");
console.log(cars);

//shift method: Removes from beginning
cars.shift();
console.log(cars);

//Splice MEthod
cars.splice(1, 1, "red", "green");