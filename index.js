let count = 1;
const button = document.querySelector('.add-button');
const fieldset = document.querySelector('.beverage');
button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    fieldset.after(newFieldset);
});
