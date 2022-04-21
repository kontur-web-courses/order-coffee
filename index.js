const form = document.querySelector('.beverage');
let number = 1;
document.querySelector('.add-button')
    .addEventListener('click', function (event) {
    let deepCopy = form.cloneNode(true);
    number += +1;
    deepCopy.querySelector('h4').textContent = `Напиток №${number}`;
    for (let milk of deepCopy.querySelectorAll('[name="milk"]')) {
        milk.name = `milk-${number}`;
    }

    deepCopy.querySelector('.del-button')
        .addEventListener('click', function (){
            del_coffe(deepCopy.querySelector('.del-button'));
        })

    document.querySelector('form').insertBefore(deepCopy, document.querySelector('.add-button-container'));
    event.preventDefault();

    })


function del_coffe (del){
    if (document.querySelectorAll('.del-button').length !== 1) {
        del.closest('fieldset').remove();
    }
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
            var sets = order.querySelectorAll('.field')
            let text = table.insertRow()

            let cell1 = text.insertCell(0)

            let chek = sets[0].querySelector('select');
            cell1.innerHTML = chek.querySelector(`option[value="${chek.value}"]`).textContent;

            let cell2 = text.insertCell(1)
            for (let milk of sets[1].querySelectorAll('label')) {
                if (milk.querySelector('input').checked){
                    cell2.innerHTML = milk.querySelector('span').textContent;
                }
            }
            let cell3 = text.insertCell(2)
            for (let ingredient of sets[2].querySelectorAll('label')) {
                if (ingredient.querySelector('input').checked){
                    cell3.innerHTML += ingredient.querySelector('span').textContent + ' ';
                }
            }
        }
        modalWindow.style.display = 'block';
        event.preventDefault();
    })
