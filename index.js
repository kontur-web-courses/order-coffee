let addButton = document.querySelector('.add-button');
let submitButton = document.querySelector('.submit-button')
let counter = 1;
let fieldsets = document.querySelectorAll('fieldset')

const addDrink = () => {
    addButton.remove();
    submitButton.remove();
    counter++;
    let fieldset = document.querySelector('fieldset');
    let clone = fieldset.cloneNode(true)
    let form = document.querySelector('form');
    form.appendChild(clone);
    clone.querySelector('.beverage-count').textContent = `Напиток №${counter}`;
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    form.appendChild(div1);
    form.appendChild(div2);
    div1.appendChild(addButton);
    div2.appendChild(submitButton);
};

addButton.addEventListener('click', addDrink)
