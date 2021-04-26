
let initFieldSet = document.querySelector(".beverage");
let clonedFieldset = initFieldSet.cloneNode(true);
let counter = 1;

let lastFieldset = initFieldSet;
function addForm() {
    counter++;
    let newForm = clonedFieldset.cloneNode(true);
    let beverageNumberHeader = newForm.querySelector(".beverage-count");
    beverageNumberHeader.textContent = `Напиток №${counter}`;
    console.log(newForm);
    lastFieldset.after(newForm);
    lastFieldset = newForm;
}


let addButton = document.querySelector('.add-button');
addButton.addEventListener("click", addForm);