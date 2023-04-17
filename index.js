let addButton = document.querySelector(".add-button");
let bev = document.querySelector('.beverage');
addRemoveEvent(bev);
addOnChangeEvent(bev);
let drinksCount = 0;

addButton.addEventListener('click', () => {
    let fieldSet = document.querySelector("form");
    let elements = document.querySelectorAll(".beverage");
    let element = elements[elements.length - 1];
    let newElement = element.cloneNode(true);
    addRemoveEvent(newElement);
    addOnChangeEvent(newElement);
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

function createModalWindow(event) {
    drinksCountInfoSpan.textContent = getDrinksInfoStr();
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

function updateText(node, text) {
    text = text.replace('\n', '<br>')
    text = text.replace('срочно', '<b>срочно</b>')
    text = text.replace('быстрее', '<b>быстрее</b>')
    text = text.replace('побыстрее', '<b>побыстрее</b>')
    text = text.replace('скорее', '<b>скорее</b>')
    text = text.replace('поскорее', '<b>поскорее</b>')
    text = text.replace('очень нужно', '<b>очень нужно</b>')
    node.innerHTML = '';
    let element = document.createElement('div')
    element.innerHTML = text;
    node.parentNode.insertBefore(element, node.nextSibling)
}

function addOnChangeEvent(node) {
    node.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.addEventListener('change', () => updateText(node.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling, node.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.value));

}