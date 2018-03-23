var nav1 = document.getElementById("nav1");
var title1 = document.getElementById("title1");
var para1 = document.getElementById("para1");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

window.addEventListener("load", invert);
link1.addEventListener("click", changecolor);
btn1.addEventListener("click", changenav);
btn2.addEventListener("click", fname);

function invert() {
    document.body.classList.toggle("newcolor");
}
function changecolor() {
    link1.classList.toggle("link_1");
}
function changenav() {
    nav1.classlist.toggle("btn_1");
}
function fname () {

}