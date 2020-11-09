let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addBeverage);

let countBeverage = 1;

function addBeverage() {
    const beverages = document.querySelectorAll('.beverage');
    const beverage = beverages[beverages.length - 1];

    const newBeverage = beverage.cloneNode(true);
    countBeverage++;

    const h4 = newBeverage.querySelector('.beverage-count');
    h4.textContent = h4.textContent.substr(0, 9) + countBeverage;

    const inputs = newBeverage.querySelectorAll('input');

    for (let input of inputs) {
        input.name = input.name + countBeverage;
    }

    beverage.after(newBeverage);
}

function closeBeverage(fieldset) {
    if (countBeverage > 1) {
        fieldset.remove();
        countBeverage--;
        const h4s = document.querySelectorAll('h4');
        for (let i = 0; i < h4s.length; i++) {
            h4s[i].textContent = h4s[i].textContent.substr(0, 9) + (i + 1);
        }
    }
}

var openDialogButton = document.getElementById('successButton');
var cancelCross = document.getElementById('cancelModalCross');
var favDialog = document.getElementById('favDialog');
var resultsParagraph = document.getElementById('results');

openDialogButton.addEventListener('click', function () {
    favDialog.showModal();
    let bool1 = Math.round(countBeverage / 10) % 10 == 1 || countBeverage % 10 >= 5 || countBeverage % 10 == 0;
    let bool2 = countBeverage % 10 == 1;
    let nap = 'напит' + (bool1 ? 'ков' : (bool2 ? 'ок' : 'ка'));
    resultsParagraph.textContent = `Вы заказали ${countBeverage} ` + nap;

    let tableHTML = "<tr> <th>Напиток</th> <th>Молоко</th> <th>Дополнительно</th> </tr>";

    let beverages = document.querySelectorAll('.beverage');
    
    for (let beverage of beverages) {
        let inputs = beverage.querySelectorAll('input:checked');
        let select = beverage.querySelector('select');
        tableHTML += `<tr><td>${select.value}</td><td>${inputs[0].value}</td><td>`;
        for (let i = 1; i < inputs.length; i++) {
            tableHTML += `${inputs[i].value}`;
            if (i + 1 < inputs.length)
                tableHTML += ', ';
        }
        tableHTML += '</td></tr>';   
    }
    document.getElementById('resultsTable').innerHTML = tableHTML;
});

cancelCross.addEventListener('click', function () {
    favDialog.close();
});