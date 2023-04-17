const form = document.getElementsByClassName('beverage')[0].parentNode;

const addButton = document.getElementsByClassName('add-button')[0];
let counter = 2;
let forms = 1;
addButton.addEventListener('click', () => {
    const beverageNodeClone = document.getElementsByClassName('beverage')[0].cloneNode(true);
    beverageNodeClone.querySelector('h4').innerText = `Напиток №${counter}`;
    counter++;
    forms++;
    form.insertBefore(beverageNodeClone, addButton.parentNode)
});

