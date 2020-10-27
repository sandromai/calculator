/* VISUAL */

function change() {
    const buttons = document.querySelectorAll("button");

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

function showDisplay(value) {
    if (value == 'ac') {
        display.innerHTML = '0';
        displayMem.innerHTML = '';
    } else if (value == 'back') {
        //Something
    } else {
        displayMem.appendChild(document.createTextNode(num + ' ' + value + ' '));
    }
}

/* LOGIC */

const display = document.querySelector("#display p#current");
const displayMem = document.querySelector("#display p#memory");

var num = '';
var numValue = 0;
var memValue = 0;

var memOp = '';


function calculator(value, type) {
    var result = 0;

    if (memOp == '=') {
        displayMem.innerHTML = memValue;
    }

    switch (type) {
        case 'number':
            storeNumber(value);
            break;

        case 'operation':
            showDisplay(value);

            if (value == '=') {
                switch (memOp) {
                    case '+':
                        display.innerHTML = sum(memValue, numValue);
                        break;

                    case '-':
                        display.innerHTML = sub(memValue, numValue);
                        break;

                    case '/':
                        display.innerHTML = div(memValue, numValue);
                        break;

                    case 'x':
                        display.innerHTML = mult(memValue, numValue);
                        break;
                
                    default:
                        break;
                }
            }

            num = '';

            if (memOp != '=') {
                memValue = numValue;
            }
            
            memOp = value;

            break;
    
        default:
            break;
    }
}

function storeNumber(value) {
    num += value;
    numValue = parseFloat(num);

    display.innerHTML = num;
}

function sum(value1, value2) {
    result = value1 + value2;

    memValue = result;

    return result;
}

function sub(value1, value2) {
    result = value1 - value2;

    memValue = result;

    return result;
}

function div(value1, value2) {
    result = value1 / value2;

    memValue = result;

    return result;
}

function mult(value1, value2) {
    result = value1 * value2;

    memValue = result;

    return result;
}

function percent(value1, value2) {
    if (memOp == '+') {
        result = value1 + ((value2 / 100) * value1);
    } else if (memOp == '-') {
        result = value1 - ((value2 / 100) * value1);
    } else if (memOp == 'x') {
        result = value1 * (value2 / 100);
    } else if (memOp == '/') {
        result = value1 / (value2 / 100);
    } else {
        display.innerHTML = 'ERROR';
    }

    memValue = result;

    return result;
}

//var op = "";

/*
function number(value) {
    num += value;
    numValue = parseFloat(num);

    display.innerHTML = num;
}
*/

/*
function operation(value) {
    op += value;

    if (op == 'ac') {
        displayMem.innerHTML = "";
        display.innerHTML = "0";

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

            displayMem.innerHTML = numValue;
            display.innerHTML = numValue;
        } else {
            num = '' + memValue;
            numValue = parseFloat(num.slice(0, -1));
            memValue = numValue;

            displayMem.innerHTML = numValue;
            display.innerHTML = numValue;
        }
    } else {
        displayMem.innerHTML += num + " " + op + " ";
    }

    if (op == '=') {
        displayMem.innerHTML = ' ';
        display.innerHTML = memValue;
    }

    if (memOp == "") {
        memValue = numValue;
    } else if (op == 'back') {
        op = '';
    } else if (memOp == '=') {
        displayMem.innerHTML = memValue + " " + op + " ";
    }

    switch (memOp) {
        case '+':
            if (op == '%') {
                display.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    display.innerHTML = sum(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case '-':
            if (op == '%') {
                display.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    display.innerHTML = sub(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case 'x':
            if (op == '%') {
                display.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    display.innerHTML = mult(memValue, numValue);
                } else {
                    memValue = numValue;
                }
            }
            break;

        case '/':
            if (op == '%') {
                display.innerHTML = percent(memValue, numValue);
            } else {
                if (memValue != 0) {
                    display.innerHTML = div(memValue, numValue);
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
        display.innerHTML = 'ERROR';
    }
    memValue = calc;
    return calc;
}
*/
/*
function operation(value) {
    let op = value;
    //console.log(op);

    showDisplay(op);
    num = '';

    memOp = op;
    //console.log(memOp);
}
*/
