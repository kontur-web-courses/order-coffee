let lastSubForm = document.querySelector('form .beverage');
let beverageCount = document.querySelectorAll('.beverage').length;

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newSubForm = lastSubForm.cloneNode(true);
        let header = newSubForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        lastSubForm.after(newSubForm);
        lastSubForm = newSubForm;
    });


let removeBeverageButton = document.getElementsByClassName('remove-beverage');
for (let b of removeBeverageButton) {
    b.addEventListener("click", function(event) {
        if (beverageCount > 1) {
            event.currentTarget.parentNode.remove();
        }    
    })
}

function overlay_on() {
    const overlay = document.querySelector('.overlay');
    const lightbox = document.querySelector('.lightbox');
    overlay.style.display = 'flex';
    lightbox.style.display = 'block';
}

function overlay_off() {
    const overlay = document.querySelector('.overlay');
    const lightbox = document.querySelector('.lightbox');
    overlay.style.display = 'none';
    lightbox.style.display = 'none';
}
