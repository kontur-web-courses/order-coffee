const form = document.getElementsByClassName('beverage')[0].parentNode;

const addButton = document.getElementsByClassName('add-button')[0];
let counter = 2;
let formCounter = 1;
addButton.addEventListener('click', evt =>
{
    const beverageNodeClone = document.getElementsByClassName('beverage')[0].cloneNode(true);
    beverageNodeClone.querySelector('h4').innerText = `Напиток №${counter}`;
    counter++;
    formCounter++;
    form.insertBefore(beverageNodeClone, addButton.parentNode)
});

form.addEventListener('click', evt => {
    if (evt.target.className === 'delete-button' && formCounter > 1){
        form.removeChild(evt.target.parentNode);
        formCounter--;
    }
})

const modalCloseBtn = document.getElementById('closeButton');
const modalWindow = document.getElementById('modalWindow');
modalCloseBtn.addEventListener('click', function () {
    modalWindow.style.display = 'none';
})

const submitButton = document.getElementsByClassName('submit-button')[0];
submitButton.addEventListener('click', evt => {
    evt.preventDefault();
    modalWindow.style.display = 'block';
    let drinkWord = 'напитков';
    if (formCounter % 10 === 1 && formCounter % 100 !== 11){
        drinkWord = 'напиток';
    }
    else if (formCounter % 100 < 11 || formCounter % 100 > 19){
        drinkWord = 'напитка'
    }
    document.getElementsByClassName('drinkCount')[0].innerText = `Вы заказали ${formCounter} ${drinkWord}`;
    const table = createTable();
    const modalContent = document.getElementsByClassName('modal-content')[0];
    modalContent.appendChild(table);
})

function createTable() {
    const tableElement = document.createElement('table');
    for (const beverage of form.getElementsByClassName('beverage')){
        const fields = beverage.getElementsByClassName('field');
        let drinkName;
        let milk;
        const additions = [];
        for (const e of fields[0].querySelector('select')){
            if (e.selected){
                drinkName = e.innerText;
                break;
            }
        }

        for (const e of fields[1].querySelectorAll('label')){
            const input = e.querySelector('input');
            if (input.checked){
                const span = e.querySelector('span')
                milk = span.innerText;
            }
        }

        for (const e of fields[2].querySelectorAll('label')){
            const input = e.querySelector('input');
            if (input.checked){
                const span = e.querySelector('span')
                additions.push(span.innerText);
            }
        }

        let row = tableElement.insertRow();
        const drinkCell = row.insertCell(0);
        drinkCell.style.borderStyle = 'solid';
        drinkCell.innerText = drinkName;
        const milkCell = row.insertCell(1);
        milkCell.innerText = milk;
        milkCell.style.borderStyle = 'solid';
        const additionsCell = row.insertCell(2);
        additionsCell.innerText = additions.join(', ');
        additionsCell.style.borderStyle = 'solid';
    }

    return tableElement;
}
