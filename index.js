let form = document.querySelector('form');

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newForm = form.cloneNode(true);
        document.body.appendChild(newForm);
    });