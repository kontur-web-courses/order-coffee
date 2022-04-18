let form = document.querySelector('form');

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newForm = form.cloneNode(true);
        let header = newForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        document.body.appendChild(newForm);
    });


let removeBeverageButton = document.getElementsByClassName('remove-beverage');
let beverageCount = document.querySelectorAll('.beverage').length;
for (let b of removeBeverageButton) {
    b.addEventListener("click", function(event) {
        if (beverageCount > 1) {
            event.currentTarget.parentNode.remove();
        }    
    })
}