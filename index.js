let count = 1;
const button = document.querySelector('.add-button');
const readyButton = document.querySelector('.submit-button');
let fieldset = document.querySelector('.beverage');
const modal = document.querySelector('.hystmodal')
modal.querySelector('.hystmodal__close').addEventListener('click',
    function () {
    modal.style.display = 'none';
    })
readyButton.addEventListener('click', function (){
    modal.style.display = 'flex';
});

button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    fieldset.after(newFieldset);
    fieldset = newFieldset;
});
