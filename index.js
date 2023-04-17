

let drinksCount = 0;

const createDrinkButton = document.getElementById('submit-button');
const modalWindow = document.getElementById('modal-window');
const modalCloseButton = document.getElementById('modal-close');
const overlay = document.getElementById('fixed-overlay');
const drinksCountInfoSpan = document.getElementById('drinks-count');


function getDrinksInfoStr() {
    let result = `${drinksCount} напит`;

    if (drinksCount % 10 === 1 && drinksCount !== 11)
        result += 'ок';
    else if (2 <= drinksCount % 10 && drinksCount % 10 <= 4 && Math.floor(drinksCount / 10) % 10 !== 1)
        result += 'ка';
    else
        result += 'ков';

    return result;
}

function createModalWindow(event) {
    drinksCountInfoSpan.textContent = getDrinksInfoStr();
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