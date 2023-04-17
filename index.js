let addButton = document.querySelector('.add-button');
let counter = 1;
addButton.addEventListener('click', function () {
    let beverage = document.getElementById(`fieldset${counter}`);//querySelector(`.beverage${counter-1}`);
    let newNode = beverage.cloneNode(true);
    newNode.id = `fieldset${counter + 1}`;
    newNode.querySelector('.beverage-count').textContent = `Напиток №${counter + 1}`;
    document.getElementById(`fieldset${counter}`).after(newNode);
    console.log(counter);
    counter++;
});
let cross = document.getElementsByClassName('cross')[0];
cross.addEventListener('click', function (){
    // let countFieldset = document.getElementById(`fieldset${counter}`);
    this.parent.remove();
    // if (countFieldset.innerHTML === 'fieldset1') return;
    // console.log('cross')
})

document.querySelector('.submit-button').addEventListener('click', function (e) {
    let modal = document.getElementById('modal');
    let textNode = document.createTextNode(`Вы заказали ${counter} напитков`);
    if (counter % 10 === 1 && counter !== 11) {
        textNode = document.createTextNode(`Вы заказали ${counter} напиток`);
    } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && counter !== 12 && counter !== 13 && counter !== 14) {
        textNode = document.createTextNode(`Вы заказали ${counter} напитка`);
    } else {
        textNode = document.createTextNode(`Вы заказали ${counter} напитков`);
    }

    document.querySelector('.modal__content').appendChild(textNode);
    e.preventDefault();
    modal.classList.add('modal_active');
});

document.querySelector('.modal__close-button').addEventListener('click', function (e) {
    let modal = document.getElementById('modal');
    modal.classList.remove('modal_active');
    location.reload();
    //document.querySelector('.modal__content').removeChild();
})



