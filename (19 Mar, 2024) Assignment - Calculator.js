let play = document.getElementById("display");
let disp = document.getElementById("display2");

function displayNum(input) {
    disp.value += input

    disp.style.color = "black"
}

let sign

function opeRate(input) {
    sign = input;
    play.value = disp.value;
    disp.value = ""
}

function calculate() {
    let numOne = play.value
    let numTwo = disp.value

    if (sign === "+") {
        play.value = ""
        disp.value = Number(numOne) + Number(numTwo)
    } else if (sign === "-") {
        play.value = ""
        disp.value = Number(numOne) - Number(numTwo)
    } else if (sign === "x") {
        play.value = ""
        disp.value = Number(numOne) * Number(numTwo)
    } else if (sign === "÷") {
        play.value = ""
        disp.value = Number(numOne) / Number(numTwo)
    }

    disp.style.color = "red"
}


function percent() {
    let numOne = disp.value

    play.value = ""
    disp.value = Number(numOne) / 100

    disp.style.color = "red"
}

function square() {
    let numOne = disp.value

    play.value = ""
    disp.value = Number(numOne) ** 2;

    disp.style.color = "red"
}

function cleardisplay() {
    play.value = "";
    disp.value = "";
}

function trig(input) {
    let num = Number(disp.value)

    if (input === "sin") {
        play.value = num
        disp.value = Math.sin(num);
    } else if (input === "cos") {
        play.value = num
        disp.value = Math.cos(num);
    } else if (input === "tan") {
        play.value = num
        disp.value = Math.tan(num);
    }
}

function backSpace() {
    let word = disp.value

    disp.value = word.slice(0, -1)
}