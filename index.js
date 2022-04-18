let _counter = 0;
Add();

function Add() {
    _counter++;
    let oClone = document.getElementById("template").cloneNode(true);
    oClone.id += (_counter + "");
    let bev = oClone.childNodes.item(1).childNodes.item(1);
    bev.textContent = "Напиток №" + _counter.toString();
    let closeButton = oClone.childNodes.item(1).childNodes.item(3);
    closeButton.addEventListener('click', e => Delete(e));

    document.getElementById("placeholder").appendChild(oClone);
}

function Delete(e) {
    if (_counter > 1) {
        let node = e.target.parentElement;
        node.remove();
        _counter--;

        let beverages = document.querySelectorAll('.beverage');

        for (let i = 1; i <= _counter; i++) {
            beverages[i].childNodes.item(1).textContent = "Напиток №" + i.toString();
        }
    }
}

document.getElementsByClassName('add-button')[0].addEventListener('click', Add);

document.querySelectorAll('.close')[0].addEventListener('click', e => Delete(e));

document.querySelector('.submit-button').addEventListener('click', function (e) {
    e.preventDefault();
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('.overlay');
    modal.style.display = "block";
    overlay.style.display = "block";

    let orderText = document.getElementById('order');
    const wordDict = {
        1: " напиток",
        2: " напитка",
        3: " напитка",
        4: " напитка",
        5: " напитков",
        6: " напитков",
        7: " напитков",
        8: " напитков",
        9: " напитков",
        0: " напитков"
    };
    let word = wordDict[_counter % 10];
    orderText.textContent = "Вы заказали " + _counter.toString() + " " + word;
});

document.querySelector('.close_window').addEventListener('click', function () {
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('.overlay');
    modal.style.display = "none";
    overlay.style.display = "none";
});



