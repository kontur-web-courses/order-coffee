let addButton = document.querySelector(".add-button");
let bev = document.querySelector('.beverage');
addRemoveEvent(bev);
let drinksCount = 0;

addButton.addEventListener('click', () => {
    let fieldSet = document.querySelector("form");
    let elements = document.querySelectorAll(".beverage");
    let element = elements[elements.length - 1];
    let newElement = element.cloneNode(true);
    addRemoveEvent(newElement);
    updateNodeCounter(newElement, (int) => int + 1);
    let parent = document.querySelector('form')
    element.parentNode.insertBefore(newElement, element.nextSibling);
});

function removeNodeEvent(button) {
    if (document.querySelectorAll('.beverage').length === 1)
        return
    let element = button.parentNode.parentNode;
    let curr = element.nextSibling;
    element.remove();
    while (curr != null) {
        updateNodeCounter(curr, (int) => int - 1);
        curr = curr.nextSibling;
    }
}


const createDrinkButton = document.getElementById('submit-button');
const modalWindow = document.getElementById('modal-window');
const modalCloseButton = document.getElementById('modal-close');
const overlay = document.getElementById('fixed-overlay');
const drinksCountInfoSpan = document.getElementById('drinks-count');
const drinksTableInfo = document.getElementById('drinks-info');
const forms = document.querySelectorAll("form");


function getDrinksInfoStr() {
    let drinksCount = document.querySelectorAll('.beverage').length;
    let result = `${drinksCount} напит`;

    if (drinksCount % 10 === 1 && drinksCount !== 11)
        result += 'ок';
    else if (2 <= drinksCount % 10 && drinksCount % 10 <= 4 && Math.floor(drinksCount / 10) % 10 !== 1)
        result += 'ка';
    else
        result += 'ков';

    return result;
}

function fillDrinksTableInfo() {
    let idx = 0;

    drinksTableInfo.innerHTML = "";

    let drinks = document.querySelectorAll('.beverage');
    for (let drink of drinks) {
        let newRow = drinksTableInfo.insertRow(idx++);
        let drinkCell = newRow.insertCell(0);


        let choosen = "";
        let selected = drink.getElementsByTagName('select')[0].value;
        if (selected === 'capuccino')
            choosen = 'Капучино';
        else if (selected === 'cacao')
            choosen = 'Какао';
        else if (selected === 'espresso')
            choosen = 'Эспрессо';

        let drinkText = document.createTextNode(choosen);
        drinkCell.appendChild(drinkText);

        let milk ='';
        if (drink.elements[1].checked)
            milk='обычное';
        if (drink.elements[2].checked)
            milk='обезжиренное';
        if (drink.elements[3].checked)
            milk='соевое молоко';
        if (drink.elements[4].checked)
            milk='кокосовое молоко';

        let milkCell = newRow.insertCell(1);
        let milkText = document.createTextNode(milk);
        milkCell.appendChild(milkText);

        let extra = [];
        if (drink.elements[5].checked)
            extra.push("Сливки");
        if (drink.elements[6].checked)
            extra.push("Зефирки");
        if (drink.elements[7].checked)
            extra.push("Шоколад");
        if (drink.elements[8].checked)
            extra.push("Корица");

        let addCell = newRow.insertCell(2);
        let addText = document.createTextNode(extra.join(', '));
        addCell.appendChild(addText);
    }
}

function createModalWindow(event) {
    drinksCountInfoSpan.textContent = getDrinksInfoStr();
    fillDrinksTableInfo();
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

function modalClose(event) {
    event.preventDefault();
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}

createDrinkButton.addEventListener('click', createModalWindow);
modalCloseButton.addEventListener('click', modalClose)

function updateNodeCounter(node, lambda) {
    node.firstChild.nextSibling.firstChild.textContent = node.firstChild.nextSibling.firstChild.textContent.slice(0, -1)
        + lambda(+node.firstChild.nextSibling.firstChild.textContent.at(-1));
}

function addRemoveEvent(newElement) {
    newElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.addEventListener('click', () => removeNodeEvent(newElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild));
}