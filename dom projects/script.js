var circle = document.getElementById("circle");
var innerSquare = document.getElementById("inner-square");
var button1 = document.getElementsByClassName("btn");
var button2 = document.getElementsByClassName("btn-2");

button1.addEventListener("click", colorChanger);
// function for color changer
function colorChanger() {
    circle.style.backgroundColor = "yellow";
    
}