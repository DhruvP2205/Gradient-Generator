let css = document.querySelector("h4");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let gradient = document.getElementById("gradient");

css.textContent = "linear-gradient(45deg, rgb(128, 203, 159), rgb(203, 159, 128));";

function setGradient(){
    gradient.style.background = "linear-gradient(45deg," + color1.value + "," + color2.value + ")";
    css.textContent = gradient.style.background + ";";
}

function copy(){
    let element = document.createElement("textarea");
    element.value = css.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!");
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);