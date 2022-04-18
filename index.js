let lastSubForm = document.querySelector('form .beverage');
let beverageCount = document.querySelectorAll('.beverage').length;

function drinkPaides(count) {
    let dozens = Math.trunc(count / 10);
    if (dozens % 10 === 1 || count % 10 >= 5 || count % 10 === 0) {
        return 'напитков';
    }
    if (count % 10 === 1) {
        return 'напиток';
    }
    return 'напитка';
}

document.querySelector('.add-button')
    .addEventListener('click',
    function (event) {
        let newSubForm = lastSubForm.cloneNode(true);
        let header = newSubForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        lastSubForm.after(newSubForm);
        lastSubForm = newSubForm;
    });


let removeBeverageButton = document.querySelectorAll('.remove-beverage');
for (let b of removeBeverageButton) {
    b.addEventListener("click", function(event) {
        if (beverageCount > 1) {
            event.currentTarget.parentNode.remove();
        }    
    })
}

let overlay = document.querySelector('.overlay');
let lightbox = document.querySelector('.lightbox');

function overlay_on() {
    overlay.style.display = 'flex';
    lightbox.style.display = 'flex';
}

function overlay_off() {
    overlay.style.display = 'none';
    lightbox.style.display = 'none';
}

let submitButton = document.querySelector('.submit-button');
let form = document.querySelector('form');
submitButton.addEventListener("click", function(event) {
    overlay_on();
});


let orderTable = document.createElement('table');

