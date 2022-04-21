const form = document.querySelector('.beverage');
let number = 1;
document.querySelector('.add-button')
    .addEventListener('click', function (event) {
    let deepCopy = form.cloneNode(true);
    console.log(deepCopy)
    number += +1;
    deepCopy.querySelector('h4').textContent = `Напиток №${number}`;
    for (let milk of deepCopy.querySelectorAll('[name="milk"]')) {
        milk.name = `milk-${number}`;
    }
    document.querySelector('form').insertBefore(deepCopy, document.querySelector('.add-button-container'));
    event.preventDefault();

    })

for (let del of document.querySelectorAll('.del-button')) {
    del.addEventListener('click', function (event) {
        if (document.querySelectorAll('.del-button').length !== 1) {
            del.closest('fieldset').remove();
        }
        event.preventDefault();
    })
}

const modalCloseBtn = document.getElementById('closeButton');
const modalWindow = document.getElementById('modalWindow');
modalCloseBtn.addEventListener('click', function () {
    modalWindow.style.display = 'none';
})

document.querySelector('.submit-button')
    .addEventListener('click', function (event) {
        let counter =document.querySelectorAll('.del-button').length;
        let text = '';
        if (counter % 10 === 1 && (counter < 10 || counter > 20)) {
            text = `Вы заказали ${counter} напиток`;
        } else if (counter % 10 > 1 && counter % 10 < 5 &&(counter < 10 || counter > 20)) {
            text = `Вы заказали ${counter} напитка`;
        }
        else {
            text = `Вы заказали ${counter} напитков`;
        }
        document.querySelector('.count-orger').textContent = text;

        let table = document.querySelector('.table');

        for (let order of document.querySelectorAll('.beverage')) {
            table.innerHTML += `<tr><th>${order.querySelector('select').value}</th></tr>`
        }

        modalWindow.style.display = 'block';
        event.preventDefault();
    })
