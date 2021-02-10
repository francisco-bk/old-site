// getting references
let options = document.getElementsByClassName("options");
let content = document.getElementsByClassName("content");
let button = document.getElementsByClassName("expButton")
let experiences = document.getElementsByClassName("experiences")
let home = document.getElementById("home");
let homescreen = document.getElementById("homescreen");

// swtiching pages once button is clicked
options[0].onclick = function(event) {
    event.preventDefault();
    content[3].style.display = "none";
    content[2].style.display = "none";
    content[1].style.display = "none";
    content[0].style.display = "none";
    homescreen.style.display = "block";
    options[4].querySelector("a").style.borderTop = "none";
    options[3].querySelector("a").style.borderTop = "none";
    options[2].querySelector("a").style.borderTop = "none";
    options[1].querySelector("a").style.borderTop = "none";
}

options[1].onclick = function(event){
    event.preventDefault();
    content[3].style.display = "none";
    content[2].style.display = "none";
    content[1].style.display = "none";
    content[0].style.display = "block";
    homescreen.style.display = "none";
    options[4].querySelector("a").style.borderTop = "none";
    options[3].querySelector("a").style.borderTop = "none";
    options[2].querySelector("a").style.borderTop = "none";
    options[1].querySelector("a").style.borderTop = "solid rgba(255, 255, 255, 0.5) 4px";
}

options[2].onclick = function(event){
    event.preventDefault();
    content[0].style.display = "none";
    content[3].style.display = "none";
    content[2].style.display = "none";
    content[1].style.display = "block";
    homescreen.style.display = "none";
    options[1].querySelector("a").style.borderTop = "none";
    options[4].querySelector("a").style.borderTop = "none";
    options[3].querySelector("a").style.borderTop = "none";
    options[2].querySelector("a").style.borderTop = "solid rgba(255, 255, 255, 0.5) 4px";
}

options[3].onclick = function(event){
    event.preventDefault();
    content[1].style.display = "none";
    content[0].style.display = "none";
    content[3].style.display = "none";
    content[2].style.display = "block";
    homescreen.style.display = "none";
    options[2].querySelector("a").style.borderTop = "none";
    options[1].querySelector("a").style.borderTop = "none";
    options[4].querySelector("a").style.borderTop = "none";
    options[3].querySelector("a").style.borderTop = "solid rgba(255, 255, 255, 0.5) 4px";
}

options[4].onclick = function(event){
    event.preventDefault();
    content[2].style.display = "none";
    content[1].style.display = "none";
    content[0].style.display = "none";
    content[3].style.display = "block";
    homescreen.style.display = "none";
    options[3].querySelector("a").style.borderTop = "none";
    options[2].querySelector("a").style.borderTop = "none";
    options[1].querySelector("a").style.borderTop = "none";
    options[4].querySelector("a").style.borderTop = "solid rgba(255, 255, 255, 0.5) 4px";
}

button[0].onclick = function(event){
    event.preventDefault();
    experiences[2].style.display = "none";
    experiences[1].style.display = "none";
    experiences[0].style.display = "flex";
    button[2].style.border = "none";
    button[1].style.border = "none";
    button[0].style.border = "rgb(255, 255, 255, 0.5) 7px solid";
}

button[1].onclick = function(event){
    event.preventDefault();
    experiences[0].style.display = "none";
    experiences[2].style.display = "none";
    experiences[1].style.display = "flex";
    button[0].style.border = "none";
    button[2].style.border = "none";
    button[1].style.border = "rgb(255, 255, 255, 0.5) 7px solid";
}

button[2].onclick = function(event){
    event.preventDefault();
    experiences[1].style.display = "none";
    experiences[0].style.display = "none";
    experiences[2].style.display = "flex";
    button[1].style.border = "none";
    button[0].style.border = "none";
    button[2].style.border = "rgb(255, 255, 255, 0.5) 7px solid";
}