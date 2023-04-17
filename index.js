const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => Add());
let counter = 1;

function Add() {
    let initFieldSet = document.querySelectorAll(".beverage");
    let clonedFieldset = initFieldSet[initFieldSet.length - 1].cloneNode(true);
    clonedFieldset.id += counter;
    clonedFieldset.querySelector('h4').innerHTML = "Напиток №" + ++counter;

    let inputs = clonedFieldset.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].name = inputs[i].name + `${counter}`;
    }

    clonedFieldset.querySelector(".close-button").name =
        clonedFieldset.querySelector(".close-button").name + counter;
    initFieldSet[initFieldSet.length - 1].after(clonedFieldset);
}

function closeModal(closeButton) {
    const name = closeButton.name.split('');
    const num = (name[name.length - 1])
    const fieldId = 'fieldset' + num;
    document.getElementById(fieldId).style.display = 'none';
}

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', ()=> closeModal(closeButton));