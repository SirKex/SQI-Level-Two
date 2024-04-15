let dispOne = document.getElementById("dispOne");
let dispTwo = document.getElementById("dispTwo");

function displayNum(input) {
    dispTwo.value += input

    dispTwo.style.color = "black";
}

let sign

function opeRator(input) {
    sign = input;
    dispOne.value = dispTwo.value
    dispTwo.value = "";
}

function calC() {
    let numOne = Number(dispOne.value)
    let numTwo = Number(dispTwo.value)

    dispOne.value = ""

    if (sign === '+') {
        dispTwo.value = numOne + numTwo
    } else if (sign === '-') {
        dispTwo.value = numOne - numTwo
    } else if (sign === '/') {
        dispTwo.value = numOne / numTwo
    } else if (sign === '*') {
        dispTwo.value = numOne * numTwo
    }

    dispTwo.style.color = "red"
}

function clearDisp() {
    dispOne.value = "";
    dispTwo.value = "";
}

function perCent() {
    let num = Number(dispTwo.value)

    dispTwo.value = num / 100

    dispTwo.style.color = "red"
}

function square() {
    let num = Number(dispTwo.value)

    dispTwo.value = num ** 2
}

function backSpace() {
    let num = dispTwo.value

    dispTwo.value = num.slice(0, -1)
}

function trig(input) {
    let num = Number(dispTwo.value)

    if (input === 'sin') {
        dispTwo.value = Math.sin(num);
    } else if (input === 'cos') {
        dispTwo.value = Math.cos(num);
    } else if (input === 'tan') {
        dispTwo.value = Math.tan(num);
    }
}