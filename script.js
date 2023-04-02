let num1;
let num2;
let operator;

const display = document.querySelector('#display');
const digitButton = document.querySelectorAll('.digit');
const digitButtons = Array.from(document.querySelectorAll('.digit'));
const operatorButton = document.querySelectorAll('.operator');
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#allClear');


function add(num1, num2) {
    result = eval(`${num1} + ${num2}`);
    display.textContent = result;
    return result;
}

function subtract(num1, num2) {
    result = eval(`${num1} - ${num2}`);
    display.textContent = result;
    return result;
}

function multiply(num1, num2) {
    result = eval(`${num1} * ${num2}`);
    display.textContent = result;
    return result;
}

function divide(num1, num2) {
    result = eval(`${num1} / ${num2}`);
    display.textContent = result;
    return result;
}


function operate(num1, num2) {
    if (operator == '+') return add(num1, num2);
    if (operator == '-') return subtract(num1, num2);
    if (operator == '*') return multiply(num1, num2);
    if (operator == '/') return divide(num1, num2);
}

digitButtons.forEach(digitButton => {
    digitButton.addEventListener('click', function() {
        if (operator == undefined) {
            display.textContent += digitButton.textContent;
            num1 = display.textContent;
        } else if (operator !== undefined) {
            display.textContent += digitButton.textContent;
            num2 = display.textContent;
        }
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        operator = operatorButton.textContent;
        display.textContent = '';
        return operator;
    });
});

equalsButton.addEventListener('click', function() {
    operate(num1, num2);
});

allClearButton.addEventListener('click', function() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    display.textContent = '';
})