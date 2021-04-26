let beverage = document.querySelector('.beverage');
let beverageCount = 1;
const addButton = document.querySelector('.add-button');

function closeButtonHandler(currentBeverage) {
    currentBeverage.remove();
}

function addButtonHandler() {
    let newBeverage = beverage.cloneNode(true);
    beverageCount++;
    newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
    if (beverageCount == 2) {
        newBeverage.insertAdjacentHTML('afterBegin', '<button style="margin-left: 95%" id="button-close">X</button>');
    }
    addButton.insertAdjacentElement('beforeBegin', newBeverage);
    newBeverage.querySelector('#button-close')
        .addEventListener('click', (event) => closeButtonHandler(newBeverage));
    beverage = newBeverage;
}

addButton.addEventListener('click', addButtonHandler);




