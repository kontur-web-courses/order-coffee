let beverage = document.querySelector('.beverage');
let beverageCount = 1;
const addButton = document.querySelector('.add-button');

function addButtonHandler(){
    let newBeverage = beverage.cloneNode(true);
    beverageCount++;
    newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
    if(beverageCount == 2){
        newBeverage.insertAdjacentHTML('afterBegin', )
    }
    addButton.insertAdjacentElement('beforeBegin', newBeverage);
    beverage = newBeverage;
}

addButton.addEventListener('click', addButtonHandler);




