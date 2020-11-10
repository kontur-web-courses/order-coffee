const beverages = document.querySelector('.beverages');
const beverageTemplate = document.getElementById('beverage-template').cloneNode(true);
beverageTemplate.removeAttribute('id');
document.getElementById('beverage-template').remove();

const modal = document.getElementById('modal');
const resultParagraph = modal.querySelector('p');
const resultTable = modal.querySelector('table');

let countBeverage = 0;
let globalId = 0;

function addBeverage() {
    const newBeverage = beverageTemplate.cloneNode(true);
    countBeverage++;
    const header = newBeverage.querySelector('.beverage-count');
    header.textContent += countBeverage;
    const inputs = newBeverage.querySelectorAll('input[name]');
    newBeverage.querySelector('.cross')
        .addEventListener('click', closeBeverage);
    newBeverage.querySelector('.textarea-field')
        .addEventListener('keyup', updateTextareaText);
    for (let input of inputs) {
        input.name = `${input.name}_${globalId}`;
    }
    globalId++;
    beverages.append(newBeverage);
}

function closeBeverage(event) {
    if (countBeverage < 2 || event.target.className !== 'cross') return;
    const beverage = event.target.parentNode;
    beverage.remove();
    countBeverage--;
    let templateString = beverageTemplate.querySelector('.beverage-count').textContent;
    const headers = document.querySelectorAll('.beverage-count');
    for (let i = 0; i < headers.length; i++) {
        headers[i].textContent = templateString + (i + 1);
    }
}

function openModal() {
    updateParagraph();
    updateTable();
    modal.showModal();
}

function closeModal() {
    modal.close();
}

function updateParagraph() {
    let endingFlag1 = Math.round(countBeverage % 100 / 10) == 1
        || countBeverage % 10 >= 5
        || countBeverage % 10 == 0;
    let endingFlag2 = countBeverage % 10 == 1;
    let word = 'напит' + (endingFlag1 ? 'ков' : (endingFlag2 ? 'ок' : 'ка'));
    resultParagraph.textContent = `Вы заказали ${countBeverage} ${word}`;
}

function updateTable() {
    const tbody = resultTable.querySelector('tbody');
    while (tbody.children.length != 1) {
        tbody.removeChild(tbody.lastChild);
    }
    for (let beverage of beverages.children) {
        let select = beverage.querySelector('select');
        let radio = beverage.querySelector('input:checked[type=radio]');
        let checkBoxes = beverage.querySelectorAll('input:checked[type=checkbox]');
        let text = '';
        for (let i = 0; i < checkBoxes.length; i++) {
            text += `${checkBoxes[i].value}`;
            if (i + 1 < checkBoxes.length)
                text += ', ';
        }
        const tr = document.createElement('tr');
        tr.append(createTd(select.value));
        tr.append(createTd(radio.value));
        tr.append(createTd(text));
        tbody.append(tr);
    }
}

function createTd(text) {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

function updateTextareaText(event) {
    if (event.target.className !== 'textarea-field') return;
    const field = event.target.parentNode.parentNode;
    field.querySelector('.textarea-text').remove();
    field.append(createSpan(event.target.value));
}

function createSpan(text) {
    const span = document.createElement('span');
    span.className = 'textarea-text';
    let lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let posObjects = findPositionsWordsInText(lines[i]);
        let lastPosition = 0;
        for (let obj of posObjects) {
            if (obj.pos < lastPosition) continue;
            span.append(document.createTextNode(lines[i].slice(lastPosition, obj.pos)));
            lastPosition = obj.pos + obj.word.length;
            const b = document.createElement('b');
            b.textContent = lines[i].slice(obj.pos, lastPosition);
            span.append(b);
        }
        span.append(document.createTextNode(lines[i].slice(lastPosition)));
        if (i + 1 < lines.length) {
            span.append(document.createElement('br'));
        }
    }
    return span;
}

function findPositionsWordsInText(text) {
    let result = [];
    let words = ['срочно', 'быстрее', 'побыстрее', 'скорее', 'поскорее', 'очень нужно'];
    for (let word of words) {
        let lastPosition = 0;
        while (true) {
            let newPosition = text.toLowerCase().indexOf(word, lastPosition);
            if (newPosition !== -1) {
                result.push({ word: word, pos: newPosition });
                lastPosition = newPosition + word.length;
            }
            else break;
        }
    }
    result.sort((a, b) => a.pos - b.pos);
    return result;
}

document.getElementById('successButton')
    .addEventListener('click', openModal);

modal.querySelector('.cross')
    .addEventListener('click', closeModal);

document.querySelector('.add-button')
    .addEventListener('click', addBeverage);

addBeverage();