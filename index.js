let addButton = document.querySelector('.add-button');
let submitButton = document.querySelector('.submit-button');
let count = 1
addButton.addEventListener('click', function () {
    addButton.remove();
    submitButton.remove();
    count++;
    let fieldset = document.querySelector('fieldset').cloneNode(true);
    let form = document.querySelector('form');
    form.appendChild(fieldset);
    fieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    form.appendChild(div1);
    form.appendChild(div2);
    div1.appendChild(addButton);
    div2.appendChild(submitButton);
});

let fieldsets = document.querySelectorAll('fieldset');
for (let i = 1; i < fieldsets.length; i++) {
    let button = document.createElement('button');
    fieldsets.item(i).appendChild(button);
}
document.querySelector(".closeButton").addEventListener("click", (event) => {
    
})

