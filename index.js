let formsAmount = 1;
let drinksAmount = 1;

document.addEventListener('click', event => {
    if(event.target.id === 'closeButton' && formsAmount > 1) {
        event.target.parentElement.remove();
        formsAmount--;
    }
})

let bev = document.querySelectorAll(".beverage")
bev.forEach(function(i) {
    i.style.position = 'relative';
    i.appendChild(AddCloseButton());
});

function AddCloseButton() {
    const button = document.createElement('button');
    button.id = 'closeButton';
    button.innerHTML = 'x';
    button.style.right = '0';
    button.style.top = '0';
    button.style.position = 'absolute';
    return button;
}

document.querySelector(".add-button").addEventListener('click', () => {
    formsAmount++;
    drinksAmount++;
    let forms = document.querySelectorAll(".beverage");
    const newForm = forms[forms.length - 1].cloneNode(true);
    newForm.appendChild(AddCloseButton());
    newForm.querySelector("h4").innerHTML = `Напиток №${drinksAmount}`;
    for (let form of newForm.querySelectorAll('input[type=radio]'))
        form.name = `milk${drinksAmount}`;
    forms[forms.length - 1].after(newForm);
});

const modal = document.getElementById("lightbox");

document.querySelector(".submit-button").onclick = function() {
    modal.style.display = "block";
    let amountOfRows = modal.querySelector('table').querySelector('tbody').rows.length - 1;
    while (amountOfRows > -1) {
        modal.querySelector('table').querySelector('tbody').deleteRow(amountOfRows);
        amountOfRows--;
    }
    bev = document.querySelectorAll(".beverage");
    bev.forEach(function(i) {
        const row = modal.querySelector('table').querySelector('tbody').insertRow();
        row.insertCell().appendChild(document
            .createTextNode(i.querySelector('#name')
                .options[i.querySelector('#name').selectedIndex].textContent));
        row.insertCell().appendChild(document
            .createTextNode(i.querySelectorAll('input[type=radio]:checked')[0]
                .parentElement.querySelector('span').textContent));
        row.insertCell().appendChild(document
            .createTextNode([...i.querySelectorAll('input[type=checkbox]:checked')]
                .map(x => x.parentElement.querySelector('span').textContent)
                .join(', ')));
    });
    modal.querySelector('p').textContent = `Вы заказали ${formsAmount} ${
        ['напиток', 'напитка', 'напитков'][(formsAmount % 100 > 4 && formsAmount % 100 < 20) 
            ? 2 : [2, 0, 1, 1, 1, 2][(formsAmount % 10 < 5) ? formsAmount % 10 : 5]]}`;
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        modal.querySelector('table').querySelector('tbody').remove();
        modal.querySelector('table').appendChild(document.createElement('tbody'));
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    console.log("Closed lightbox")
}

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    console.log("Opened lightbox")
}