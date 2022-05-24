// create number buttons and a clear button //
const numbers = document.getElementById('numbers');

for (let i = 1; i <= 11; i++) {
    let content = i;
    if (i === 10) content = 0;
    if (i === 11) content = 'CLEAR';
    
    const n = document.createElement('button');
    n.textContent = content;
    numbers.appendChild(n);
}

// create action buttons //
const actions = document.getElementById('actions');
const actionButtons = ['x', '÷', '+', '-', '='];

for (let i = 0; i < actionButtons.length; i++) {
    const action = document.createElement('button');
    action.textContent = actionButtons[i];
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
            array.splice(i-1, 3, operate(array[i], array[i-1], array[i+1]));
        }
    }
    return true;
}



function calculate (array) {
    
    // Error checking //
    if (isNaN(array[array.length-1])) return 'ERROR: Cannot end with an operator';
    if (isNaN(array[0])) return 'ERROR: Cannot start with an operator';

    /* operate on array, first do add and subtract, then multiplication and division.
    function operateArray returns false if an operator is not followed by a number */
    if (!operateArray(operatorsOrder[0], array)) return 'ERROR: A number must follow an operator';
    if (!operateArray(operatorsOrder[1], array)) return 'ERROR: A number must follow an operator';
    return (array[0]);
}






