let buttonAddDrink = document.getElementsByClassName('add-button')[0];
let drinksCount = () => document.getElementsByClassName('beverages')[0].childElementCount;

let btnCloseFieldset = document.getElementsByClassName('cl-btn-fs')[0];
btnCloseFieldset.onclick = () => closeBtnAction(btnCloseFieldset);

const titles = ['Напиток', 'Молоко', 'Дополнительно', 'Пожелания'];

let russianGlossary = {
    'espresso': 'Эспрессо',
    'capuccino': 'Капучино',
    'cacao': 'Какао',
    'usual' : 'Обычное',
    'no-fat' : 'Обезжиренное',
    'soy' : 'Соевое',
    'coconut' : 'Кокосовое',
    'whipped cream' : 'взбитые сливки',
    'marshmallow' : 'зефирки',
    'chocolate' : 'шоколад',
    'cinnamon' : 'корица',
}

function closeBtnAction(button) {
    if (drinksCount() > 1) {
        button.parentElement.remove();
        changeAllDrinksInfo();
    }
}


function changeAllDrinksInfo() {
    let drinks = document.getElementsByClassName('beverage');
    let i = 1;
    for (let drink of drinks) {
        changeDrinkTitle(drink, i);
        changeDrinkRadioInputName(drink, i);
        i++;
    }
}




buttonAddDrink.onclick = () => {
    addNewDrinkForm();
}

function addNewDrinkForm() {
    let lastDrink = document.getElementsByClassName('beverages')[0].lastElementChild;
    let newDrink = getChangedDrinkForm(lastDrink.cloneNode(true));
    let clButton = newDrink.getElementsByClassName('cl-btn-fs')[0];
    clButton.onclick = () => closeBtnAction(clButton);
    lastDrink.parentElement.append(newDrink);
}

function getChangedDrinkForm(clonedDrink) {
    let newNumber = drinksCount() + 1;
    changeDrinkTitle(clonedDrink, newNumber);
    changeDrinkRadioInputName(clonedDrink, newNumber);
    return clonedDrink;
}

function changeDrinkTitle(drink, number) {
    drink.firstElementChild.innerHTML = 'Напиток №' + number;
}

function changeDrinkRadioInputName(drink, number) {
    let value = 'milk-' + number;
    let radioInputList = drink.querySelectorAll('input[type="radio"]');
    radioInputList.forEach(input => {
        input.setAttribute("name", value)
    })
}

function confirmOrder() {
    openLightBox();
}

function openLightBox() {
    createContentLightbox();
    document.getElementById('overlay').classList.remove('hidden');
}

function createContentLightbox() {
    let lightbox = document.getElementById('lightboxOrder');
    appendElementWithContent(lightbox, 'p', getMessageCountDrinks());
    appendOrdersTable(lightbox);
    appendElementWithContent(lightbox, 'p', 'Выберите время для заказа:<br>');
    lightbox.append(getTimeInput());
    lightbox.append(document.createElement('br'));
    lightbox.append(getButton());
}

function getButton() {
    let input = document.createElement('button');
    input.innerHTML = 'Оформить';
    input.onclick = () => checkAndCloseLightbox();
    return input;
}

function checkAndCloseLightbox() {
    let lightbox = document.getElementById('lightboxOrder');
    let timeInput = lightbox.getElementsByTagName('input')[0];
    if (timeIsCorrect(timeInput.value))
        closeLightBox();
    else {
        timeInput.classList.add('wrongInput')
        alert('Мы не умеем перемещаться во времени. Выберите время позже, чем текущее. Минимальное время доставки: 30 минут')
    }
}

function timeIsCorrect(inputTimeValue) {
    let element = inputTimeValue;

    if (element === "") {
        return false;
    }
    else {

        let d = new Date();
        let m = d.getMinutes();
        let h = d.getHours();
        if(h === '00') {h = 24}

        let currentTime = h+"."+m;

        // get input time
        let time = element.split(":");
        let hour = time[0];
        if(hour === '00') {hour = 24}
        let min = time[1];

        let inputTime = hour+"."+min;

        let totalTime = currentTime - inputTime;

        return totalTime < 0;
    }
}

function getTimeInput() {
    let input = document.createElement('input');
    input.type = 'time';
    input.step = '1800';
    return input;
}

function appendOrdersTable(lightbox) {
    let table = createTable();
    lightbox.append(table);
    fillTable(table);
}

function fillTable(table) {
    fillTitles();
    fillInfoOrders(table);
}

function fillTitles() {
    for (let i=0; i<4; i++) {
        let td = document.getElementById(`row_0_col_${i}`);
        td.innerHTML = titles[i];
    }
}

function fillInfoOrders(table) {
    let fieldsets = document.getElementsByClassName('beverage');
    let orderNumber = 1;
    for (let fieldset of fieldsets) {
        fillOrderLine(fieldset, orderNumber);
        orderNumber++;
    }
}

function fillOrderLine(fieldset, orderNumber) {
    let orderInfo = getOrderInfo(fieldset);
    for (let i=0; i<4; i++) {
        let td = document.getElementById(`row_${orderNumber}_col_${i}`);
        td.innerHTML = orderInfo[i];
    }
}


function getOrderInfo(fieldset) {
    let info = [];
    info.push(russianGlossary[fieldset.elements.drinkType.value]);
    for (let element of fieldset.elements) {
        if (element.type === 'radio' && element.checked)
            info.push(russianGlossary[element.value])
    }
    let additives = [];
    for (let element of fieldset.elements) {
        if (element.type === 'checkbox' && element.checked)
            additives.push(russianGlossary[element.value])
    }
    info.push(additives.join(', '));
    info.push(fieldset.getElementsByClassName('valueTextarea')[0].innerHTML);
    return info;
}

function createTable() {
    let table = document.createElement('table');
    for (let i = 0; i < drinksCount() + 1; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 4; j++) {
            let td = document.createElement('td');
            td.id = `row_${i}_col_${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function appendElementWithContent(container, tag, innerHTML) {
    let newElement = document.createElement(tag);
    newElement.innerHTML = innerHTML;
    container.append(newElement);
}

function getMessageCountDrinks() {
    return `Вы заказали ${drinksCount()} ${declOfNum(drinksCount(),['напиток', 'напитка', 'напитков'])}`;
}


function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}


function closeLightBox() {
    clearOrderInfo();
    document.getElementById('overlay').classList.add('hidden');
}

function clearOrderInfo() {
    let lightbox = document.getElementById('lightboxOrder');
    for (let element of lightbox.children) {
        if (element.tagName === 'P' || element.tagName === 'BUTTON') {
            element.remove();
        }
    }
    document.getElementsByTagName('table')[0].remove();
    let brs = lightbox.getElementsByTagName('br');
    while (brs.length) {
        brs[0].parentNode.removeChild(brs[0]);
    }
    let times = lightbox.getElementsByTagName('input');
    while (times.length) {
        times[0].parentNode.removeChild(times[0]);
    }
}

document.getElementById('closeLBXButton')
    .onclick = () => closeLightBox();

function updateText() {
    for (let i=0; i<drinksCount(); i++) {
        let nearTextArea = document.getElementsByClassName('valueTextarea')[i];
        let textAreaValue = document.getElementsByTagName('textarea')[i];
        let text = textAreaValue.value;
        for (let word of ["срочно", "побыстрее", "быстрее", "скорее", "поскорее", "очень нужно"])
            text = text.replace(word, `<strong>${word}</strong>`);
        nearTextArea.innerHTML = text;
    }
}
