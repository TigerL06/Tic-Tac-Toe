let amSpielen = false;
punkteo = document.querySelector("#punkte-o");
punktex = document.querySelector("#punkte-x");
let h1 = document.querySelector("h1");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let xo = "x";
let punkte_x = 0;
let punkte_o = 0;
punkteo.innerHTML = punkte_o;
punktex.innerHTML = punkte_x;
let o = document.getElementById("o")
let x = document.getElementById("x")
o.addEventListener('click', function() {
    if(amSpielen === false){
        xo = "o";
    }
});
x.addEventListener('click', function(){
    if(amSpielen === false){
        xo = "x";
    }
});
var button = document.querySelectorAll('button')
button.forEach(function(button) {
    button.addEventListener('click', function() {
        // Text des Buttons ändern
        punkteo.innerHTML = punkte_o;
        punktex.innerHTML = punkte_x;
        if (button.innerHTML === "x" || button.innerHTML === "o" ){
          return
        }else{
            button.innerText = xo;
            amSpielen = true;
        }
        
        if (button.innerHTML === "x"){
            xo = "o"
        }else{
            xo = "x"
        }
        test();
        draw();
    });
});

function test() { 
    if(button1.innerHTML === "x" && button2.innerHTML === "x" && button3.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button1.innerHTML === "o" && button2.innerHTML === "o" && button3.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }

    if(button4.innerHTML === "x" && button5.innerHTML === "x" && button6.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button4.innerHTML === "o" && button5.innerHTML === "o" && button6.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }

    if(button7.innerHTML === "x" && button8.innerHTML === "x" && button9.innerHTML === "x" ){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button7.innerHTML === "o" && button8.innerHTML === "o" && button9.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }
    
    if(button1.innerHTML === "x" && button4.innerHTML === "x" && button7.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button1.innerHTML === "o" && button4.innerHTML === "o" && button7.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }

    if(button2.innerHTML === "x" && button5.innerHTML === "x" && button8.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button2.innerHTML === "o" && button5.innerHTML === "o" && button8.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }

    if(button3.innerHTML === "x" && button6.innerHTML === "x" && button9.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button3.innerHTML === "o" && button6.innerHTML === "o" && button9.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }

    if(button1.innerHTML === "x" && button5.innerHTML === "x" && button9.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }
    
    if(button1.innerHTML === "o" && button5.innerHTML === "o" && button9.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }
    

    if(button3.innerHTML === "x" && button5.innerHTML === "x" && button7.innerHTML === "x"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_x = punkte_x + 1;
        punktex.innerHTML = punkte_x;
    }

    if(button3.innerHTML === "o" && button5.innerHTML === "o" && button7.innerHTML === "o"){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Win";
        punkte_o = punkte_o + 1;
        punkteo.innerHTML = punkte_o;
    }
}

function draw() {
    if((button1.innerHTML !== "1") && (button2.innerHTML !== "2") && (button3.innerHTML !== "3") && (button4.innerHTML !== "4") && (button5.innerHTML !== "5") && (button6.innerHTML !== "6") && (button7.innerHTML !== "7") && (button8.innerHTML !== "8") && (button9.innerHTML !== "9")){
        won();
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "Draw";
       
    }
}

function won() {
    punkteo.innerHTML = punkte_o;
    punktex.innerHTML = punkte_x;
    amSpielen = false;
    newrund();
}

function newrund() {

    let parent = document.querySelector("#new_rund");
    let newrund = document.createElement("button");
    newrund.innerHTML ="new Rund";
    let cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    h1 = document.createElement("h1");
    h1.setAttribute("id", "h1_d");
    parent.appendChild(h1);
    parent.appendChild(newrund);
    parent.appendChild(cancel);
    newrund.addEventListener("click", function () {
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "";
        button1.innerHTML = "1";
        button2.innerHTML = "2";
        button3.innerHTML = "3";
        button4.innerHTML = "4";
        button5.innerHTML = "5";
        button6.innerHTML = "6";
        button7.innerHTML = "7";
        button8.innerHTML = "8";
        button9.innerHTML = "9";
        newrund.remove();
        cancel.remove();
    });
    cancel.addEventListener("click", function () {
        h1 = document.getElementById("h1_d");
        h1.innerHTML = "";
        newrund.remove();
        cancel.remove();
    });
}