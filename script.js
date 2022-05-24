// create number buttons and a clear button //
const numbers = document.getElementById('numbers');

for (let i = 1; i <= 11; i++) {
    let content = i;
    if (i === 10) content = 0;
    if (i === 11) content = 'ANS';
    
    const n = document.createElement('button');
    n.textContent = content;
    n.addEventListener('click', processInput);
    numbers.appendChild(n);
}

// create action buttons //
const actions = document.getElementById('actions');
const actionButtons = ['CLEAR', 'x', '÷', '+', '-', '='];

for (let i = 0; i < actionButtons.length; i++) {
    const action = document.createElement('button');
    action.textContent = actionButtons[i];
    action.addEventListener('click', processInput);
    actions.appendChild(action);
}


// operating functions

function add(n1, n2) {
    return (n1 + n2);
}

function divide (n1, n2) {
    return (n1 / n2);
}

function multiply (n1, n2) {
    return (n1 * n2);
}

function subtract (n1, n2) {
    return (n1 - n2);
}

function operate (operator, n1, n2) {
    // convert strings to numbers //
    n1 = Number(n1);
    n2 = Number(n2);


    if (operator === 'x') return (multiply(n1, n2));
    else if (operator === '÷') return (divide(n1, n2));
    else if (operator === '+') return (add(n1, n2));
    else if (operator === '-') return (subtract(n1, n2));
}

const operatorsOrder = [['x', '÷'], ['+', '-']]

// operate the given operators in an array
function operateArray(operators, array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === operators[0] || array[i] === operators[1]) {
            if (isNaN(array[i+1])) return false;
            if (isNaN(array[i-1])) return false;
            array.splice(i-1, 3, operate(array[i], array[i-1], array[i+1]));
            operateArray(operators, array);
            break;
        }
    }
    return true;
}



function calculate (array) {
    
    // Error checking //
    if (array.length < 3) return;
    if (isNaN(array[array.length-1])) return 'ERROR: Cannot end with an operator';
    if (isNaN(array[0])) return 'ERROR: Cannot start with an operator';

    /* operate on array, first do add and subtract, then multiplication and division.
    function operateArray returns false if an operator is not followed by a number */
    if (!operateArray(operatorsOrder[0], array)) return 'ERROR: A number must follow an operator';
    if (!operateArray(operatorsOrder[1], array)) return 'ERROR: A number must follow an operator';
    return (array);
}

let equation = [];
let lastResult;

// processing values inputted by user //
function processInput (event) {
    
    const allowedNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const allowedOperators = ['x', '+', '-', '+', '÷'];
    const value = event.target.textContent;

    // add operators to equation //
    if (allowedOperators.includes(value)) equation.push(value); 
    
    // add numbers to equation or concatinate them to last value if last value is a number //
    else if (allowedNumbers.includes(value)) {
        
        if (!isNaN(equation[equation.length-1])) equation[equation.length-1]+= value;
        
        // if last value is + or - and the one before is x or ÷ then concatenate //
        else if (operatorsOrder[1].includes(equation[equation.length-1]) 
        && operatorsOrder[0].includes(equation[equation.length-2])) {
            equation[equation.length-1] += value;
        }
        
        else equation.push(value); 

    }
    
    // clear equation //
    else if (value === 'CLEAR') equation = [];

    // calculate equation //
    else if (value === '=') {
        lastResult = calculate(equation);
        updateDisplay(lastResult);
        equation = [];
        return;
    }

    else if (value === 'ANS') equation.push(lastResult);

    // update the display //
    updateDisplay(equation);
}


function updateDisplay(valueToDisplay) {
    const display = document.querySelector('#display p');
    
    if (Array.isArray(valueToDisplay)) {
        valueToDisplay = valueToDisplay.join(' ');
    }
    display.textContent = valueToDisplay;
}