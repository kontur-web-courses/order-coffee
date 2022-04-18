let form = document.querySelector('form');
let beverageCount = 1;

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newForm = form.cloneNode(true);
        let header = newForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        document.body.appendChild(newForm);
    });