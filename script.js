function change() {
    var buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.classList.toggle("dark");
    });

    document.querySelector("body").classList.toggle("dark");
    document.querySelector("#container").classList.toggle("dark");
    document.querySelector("#keyboard").classList.toggle("dark");
    document.querySelector("#display").classList.toggle("dark");
    document.querySelector("#img1").classList.toggle("hidden");
    document.querySelector("#img2").classList.toggle("visible");
    document.querySelector("#arrow").classList.toggle("dark");
}

function hover() {
    document.querySelector("#arrow").classList.toggle("hover");
}

function outhover() {
    document.querySelector("#arrow").classList.toggle("hover");
}

var current = document.querySelector("#display p#current");
var memory = document.querySelector("#display p#memory");

var num = "";
var numValue = 0;
var memValue = 0;

var op = "";
var memOp = "";

var calc = 0;

function number(value) {
    num = num + value;
    numValue = parseFloat(num);

    current.innerHTML = num;
}

function operation(value) {
    op = op + value;

    if (op == 'ac') {
        memory.innerHTML = "";
        current.innerHTML = "0";

        num = "";
        numValue = 0;
        memValue = 0;
        op = "";
        memOp = "";
        calc = 0;
    }

    if (op == 'back') {
        if (memOp != '=') {
            num = '' + numValue;
            numValue = parseFloat(num.slice(0, -1));
            memValue = numValue;

            memory.innerHTML = numValue;
            current.innerHTML = numValue;
        } else {
            num = '' + memValue;
            numValue = parseFloat(num.slice(0, -1));
            memValue = numValue;

            memory.innerHTML = numValue;
            current.innerHTML = numValue;
        }
    } else {
        memory.innerHTML += num + " " + op + " ";
    }

    if (op == '=') {
        memory.innerHTML = ' ';
        current.innerHTML = memValue;
    }

    if (memOp == "") {
        memValue = numValue;
    } else if (op == 'back') {
        op = '';
    } else if (memOp == '=') {
        memory.innerHTML = memValue + " " + op + " ";
    }

    switch (memOp) {
        case '+':
            if (op == '%') {
                current.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    current.innerHTML = sum(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case '-':
            if (op == '%') {
                current.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    current.innerHTML = sub(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case 'x':
            if (op == '%') {
                current.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    current.innerHTML = mult(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case '/':
            if (op == '%') {
                current.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    current.innerHTML = div(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;
    }

    memOp = op;
    num = "";
    op = "";
}

function sum(value1, value2) {
    calc = value1 + value2;
    memValue = calc;
    return calc;
}

function sub(value1, value2) {
    calc = value1 - value2;
    memValue = calc;
    return calc;
}

function div(value1, value2) {
    calc = value1 / value2;
    memValue = calc;
    return calc;
}

function mult(value1, value2) {
    calc = value1 * value2;
    memValue = calc;
    return calc;
}

function percent(value1, value2) {
    if (memOp == '+') {
        calc = value1 + ((value2 / 100) * value1);
    } else if (memOp == '-') {
        calc = value1 - ((value2 / 100) * value1);
    } else if (memOp == 'x') {
        calc = value1 * (value2 / 100);
    } else if (memOp == '/') {
        calc = value1 / (value2 / 100);
    } else {
        current.innerHTML = 'ERROR';
    }
    memValue = calc;
    return calc;
}