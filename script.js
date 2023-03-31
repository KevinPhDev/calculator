let num1;
let num2;
let operator;



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(num1, num2, operator) {
    if (operator == '+') return add(num1, num2);
    if (operator == '-') return subtract(num1, num2);
    if (operator == '*') return multiply(num1, num2);
    if (operator == '/') return divide(num1, num2);
}


const display = document.querySelector('#display');
const digitButton = document.querySelectorAll('.digit');
const digitButtons = Array.from(document.querySelectorAll('.digit'));
const operatorButton = document.querySelectorAll('.operator');
const operatorButtons = Array.from(document.querySelectorAll('.operator'));

function pressNumber() {
    digitButtons.forEach(digitButton => {
        digitButton.addEventListener('click', function() {
            display.textContent += digitButton.textContent;
            return display.textContent;
        });
    });
}

function pressOperator() {
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function() {
            return operatorButton.textContent;
        });
    });
}



pressNumber();
pressOperator();