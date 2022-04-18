let form = document.querySelector('form');

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newSubForm = form.querySelector('.beverage').cloneNode(true);
        let header = newSubForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        form.appendChild(newSubForm);
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
