function showvalue() {
    button.innerHTML = "x";
}

let valueo = function(event) {
    xo = "o";
}

let valuex = function(event) {
    xo = "x";
}

let xo = "x";
let o = document.querySelector("#o")
let x = document.querySelector("#x")
o.addEventListener('click', valueo);
x.addEventListener('click', valuex);
let button = document.getElementsByClassName('button')
button.addEventListener("click", showvalue);

