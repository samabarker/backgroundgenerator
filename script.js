var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
var random = document.getElementById("random");

function getRandomColor() {
    var rand_col1 = Math.floor(Math.random()*16777215).toString(16);
    var rand_col2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + rand_col1;
    color2.value = "#" + rand_col2;
    changeBackground()
}

function changeBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
random.addEventListener("click", getRandomColor)
changeBackground()