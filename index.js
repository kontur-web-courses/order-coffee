let form = document.querySelector('form');
let beverageCount = 1;

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newSubForm = form.querySelector('.beverage').cloneNode(true);
        let header = newSubForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        form.appendChild(newSubForm);
    });

