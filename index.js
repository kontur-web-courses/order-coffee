function addListenersOnForm(form) {
    let b = form.querySelector('.remove-beverage');
    b.addEventListener("click", function(event) {
        if (beverageCount - cancelledCount > 1) {
            form.remove();
            cancelledCount++;
        }    
    });
}

let form = document.querySelector('form');
let addDrinkButton = form.querySelector('.add-button');
let firstSubForm = document.querySelector('form .beverage');
addListenersOnForm(firstSubForm);
let templateSubForm = firstSubForm.cloneNode(true);
let beverageCount = document.querySelectorAll('.beverage').length;
let cancelledCount = 0;

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
        let newSubForm = templateSubForm.cloneNode(true);
        let header = newSubForm.querySelector('.beverage-count');
        header.textContent = `Напиток №${++beverageCount}`;
        addDrinkButton.before(newSubForm);
        addListenersOnForm(newSubForm);
        firstSubForm = newSubForm;
    });

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
// let form = document.querySelector('form');
submitButton.addEventListener("click", function(event) {
    overlay_on();
    form.submit();
    lightbox.querySelector('div').textContent = `Заказ принят!
    Вы заказали ${beverageCount - cancelledCount} ${drinkPaides(beverageCount - cancelledCount)}`;
});


let orderTable = document.createElement('table');
