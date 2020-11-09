"use strict";

function deleteBeverage(e) {
    let deleteButton = e.currentTarget
    let form = document.querySelectorAll('.beverage');
    if (form.length > 1) {
        let thisBeverage = deleteButton.parentElement
        thisBeverage.remove()
    }
}

function getWord(n) {
    let count = Math.abs(n) % 100;
    if (count % 10 > 1 && count % 10 < 5)
        return 'напитка';
    if (count % 10 == 1)
        return 'напиток';
    return 'напитков';
}

let count = 2;

let firstBev = document.querySelector('.beverage');
let invisibleBev = firstBev.cloneNode(true);

document.querySelector('.add-button').addEventListener('click', e => {
    let form = document.querySelectorAll('.beverage');
    let last = form[form.length - 1];
    let clone = invisibleBev.cloneNode(true)

    let radioBtn = clone.querySelectorAll('input[name^="milk"]');
    for (let e of radioBtn)
        e.name += form.length + 1;

    clone.querySelector('.beverage-count').textContent = `Напиток № ${form.length + 1}`;

    let deleteButton = clone.querySelector(".delete-button")
    deleteButton.addEventListener('click', deleteBeverage)

    last.after(clone);
});

document.querySelector('.submit-button').addEventListener('click', e => {
    e.preventDefault();
    let dialog = document.querySelector('dialog');
    let caption = dialog.querySelector('.modal-text');
    let count = document.querySelectorAll('.beverage').length;

    let beveragesForm = document.querySelector('.beverages-form');
    let summaryTable = document.querySelector('.summary-table');
    summaryTable.innerHTML = "<thead><th>Напиток</th><th>Молоко</th><th>Дополнительно</th></thead>";

    caption.textContent = `Вы заказали ${count} ${getWord(count)}`

    for (const b of beveragesForm.children) {
        if (b.className === 'beverage') {
            let bevSelect = b.getElementsByTagName('select')[0];
            let bev = bevSelect.options[bevSelect.selectedIndex].text;

            let milks = b.getElementsByClassName('milk');
            let checkedMilk = Array.from(milks).find((v) => v.checked);
            let milkSpan = checkedMilk.nextElementSibling;

            let options = b.getElementsByClassName('options');
            let checkedOptions = Array.from(options).filter((v) => v.checked);
            let optionsText = checkedOptions.map(x => x.nextElementSibling.innerHTML).join(',')

            console.log(optionsText);
            let row = summaryTable.insertRow();
            let bevCell = row.insertCell(0);
            bevCell.innerHTML = bev;
            let milkCell = row.insertCell(1);
            milkCell.innerHTML = milkSpan.innerHTML;
            let miscCell = row.insertCell(2);
            miscCell.innerHTML = optionsText;
        }
    }

    dialog.showModal();
});