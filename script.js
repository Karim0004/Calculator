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