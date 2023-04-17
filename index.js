let addButton = document.querySelector('.add-button');
let mainForm = document.querySelector('form');

addButton.addEventListener('click', addNewDrink);
submitButton.addEventListener('click', showModalWindow);

document.querySelector('#overlay').style.display = 'none';

let clicksCounter = 1;
function addNewDrink() {
    let allBeverages = document.querySelectorAll('.beverage');
    let toCloneElement = allBeverages[0];
    let newElement = toCloneElement.cloneNode(true);
    allBeverages[allBeverages.length - 1].after(newElement);
    clicksCounter++;
    newElement.querySelector('.beverage-count').textContent = `Напиток №${clicksCounter}`;
    
    let closeButton = document.createElement('input');
    closeButton.type = 'button';
    closeButton.style.float = 'right';
    closeButton.style.backgroundColor = 'red';
    closeButton.value = 'X';
    newElement.firstChild.after(closeButton);
    closeButton.addEventListener('click', (ev) => {
        newElement.remove();
        clicksCounter--;
    })
}

function showModalWindow() {
    let modalWindow = document.querySelector('#overlay');
    modalWindow.style.display = 'flex';
    modalWindow.querySelector('p').textContent = `${getDrinksCountString()}`
    let modalCloseButton = document.querySelector('#modal-close-button');
    modalCloseButton.addEventListener('click', (ev) => {
        document.querySelector('#overlay').style.display = 'none';
        location.reload();
    });
}

function getDrinksCountString() {
    let text = '';
    if (clicksCounter % 10 === 1 && (clicksCounter < 10 || clicksCounter > 20)) {
        text = `Вы заказали ${clicksCounter} напиток`;
    } else if (clicksCounter % 10 > 1 && clicksCounter % 10 < 5 &&(clicksCounter < 10 || clicksCounter > 20)) {
        text = `Вы заказали ${clicksCounter} напитка`;
    }
    else {
        text = `Вы заказали ${clicksCounter} напитков`;
    }
    return text;
}

function fillTable() {
    let table = document.querySelector('.table');
    let allDrinks = document.querySelectorAll('.beverage > .beverage-count > .field > .label-text > option[":checked"]');

}
// .beverage > .beverage-count > .field > .label-text > option[':checked']

// <input type="button" style="float: right;" value="X">

