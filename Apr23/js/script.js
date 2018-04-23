// if(typeof Storage !== "undefined"){
//     console.log("yay storage");
// }else{
//     console.log("boo");
// }

// var storageBtn1 = document.querySelector("#btn1");
// var storageBtn2 = document.querySelector("#btn2");
// storageBtn1.addEventListener("click", setLocalStorage);
// storageBtn2.addEventListener("click", setSessionStorage);

// function setLocalStorage(){
//     localStorage.setItem("first name", "Nathan");
// }

// function setSessionStorage(){
//     sessionStorage.setItem("vehicle", "chevy");
// }

var saveBtn = document.querySelector("input[type='submit']");
if(localStorage.getItem("details") !== null){
    saveBtn.removeEventListener("click", )
    saveBtn.addEventListener("click", checkPassword);
}else{
    saveBtn.addEventListener("click", getUserInfo);
}

function getUserInfo(evt){
    evt.preventDefault();

    var userName = document.querySelector("input[type='text']").value;
    var userPassword = md5(document.querySelector("input[type='password']").value);
    var radios = document.querySelectorAll("input[type='radio']");
    for(var i = 0; i < document.querySelector("input[type='radio']").length; i++){
        var theme = document.querySelector("input[type='radio']")[i].value;
        console.log(theme);
    }

    localStorage.setItem("details", JSON.stringify(new profile(userName, userPasword, radio)));
}

function profile(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkProfile(){
    if(localStorage.getItem("details") !== null){
        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector("input[type='text']").value = userInfo.user;
        alert("Please enter your password.");
    }else{
        alert("Please enter your password.");
    }
}

function checkPassword(evt){
    evt.preventDefault();
    var userPass = document.querySelector("input[type='text']");
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userPass === userInfo.pass){
        alert("Welcome Home!");
    }else{
        alert("Please enter a correct password.");
    }
}