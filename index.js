

let drinksCount = 0;

const createDrinkButton = document.getElementById('submit-button');
const modalWindow = document.getElementById('modal-window');
const modalCloseButton = document.getElementById('modal-close');
const overlay = document.getElementById('fixed-overlay');

function createModalWindow(event) {
    ++drinksCount;
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

function modalClose(event) {
    event.preventDefault();
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}

createDrinkButton.addEventListener('click', createModalWindow);
modalCloseButton.addEventListener('click', modalClose)