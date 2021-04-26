let modal = document.getElementById("my_modal");
let btn = document.getElementsByClassName("submit-button")[0];
let span = document.getElementsByClassName("close_modal_window")[0];

btn.addEventListener('click', (e) => {
    document.getElementById("my_modal").style.display = "block";
});
let addButton = document.querySelector('.add-button');
let submitButton = document.querySelector('.submit-button');
let crossButton = document.createElement('button');
crossButton.textContent = 'X';
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
    let cross = document.createElement('div');
    cross.appendChild(crossButton);
    form.insertBefore(clone, crossButton)
};


const removeDrink = () => {

}

span.addEventListener('click', (e) => {
    document.getElementById("my_modal").style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById("my_modal")) {
        document.getElementById("my_modal").style.display = "none";
    }
});