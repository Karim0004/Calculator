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
    if (operator === 'x') return (mulitply(n1, n2));
    else if (operator === '÷') return (divide(n1, n2));
    else if (operator === '+') return (add(n1, n2));
    else if (operator === '-') return (subtract(n1, n2));
}




