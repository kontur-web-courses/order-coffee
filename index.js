const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => Add());
let counter = 1;

function Add() {
    let initFieldSet = document.querySelectorAll(".beverage");
    let clonedFieldset = initFieldSet[initFieldSet.length - 1].cloneNode(true);
    clonedFieldset.querySelector('h4').innerHTML = "Напиток №" + ++counter;
    let inputs = clonedFieldset.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++){
        inputs[i].name = inputs[i].name + `${counter}`;
    }
    initFieldSet[initFieldSet.length - 1].after(clonedFieldset);
}