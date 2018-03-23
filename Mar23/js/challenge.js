var nav = document.getElementById("nav");
var main = document.getElementById("main");
var menu = document.getElementById("menu");
var username = document.getElementById("username");
var userstyle = document.getElementById("userstlye");
var user = document.getElementById("user");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");

menu.addEventListener("click", vertMenu);
username.addEventListener("click", getUsername);
userstyle.addEventListener("click", styleUsername);
a1.addEventListener("click", colorText1);
a2.addEventListener("click", colorText2);

function vertMenu() {
    nav.classList.toggle("verticle");
    main.classList.toggle("verticle");
}
function getUsername() {
    var username = prompt("What is your first name?");
    user.innerHTML = username;
}
function styleUsername() {
    user.classList.add("mega");
}
function colorText1() {
    a1.style.color = "red";
}
function colorText2() {
    a2.style.color = "red";
}