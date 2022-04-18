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
});

document.querySelector('.close_window').addEventListener('click', function () {
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('.overlay');
    modal.style.display = "none";
    overlay.style.display = "none";
});

