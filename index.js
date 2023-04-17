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
    node.querySelector('.beverage-count').textContent = node.querySelector('.beverage-count').textContent.slice(0, -1)
        + lambda(+node.querySelector('.beverage-count').textContent.at(-1));
}

function addRemoveEvent(newElement) {
    newElement.querySelector('.remove-button').addEventListener('click', () => removeNodeEvent(newElement.querySelector('.remove-button')));
}

function updateText(node, text) {
    text = text.replaceAll('\n', '<br>')
    text = text.replaceAll('срочно', '<b>срочно</b>')
    text = text.replaceAll('быстрее', '<b>быстрее</b>')
    text = text.replaceAll('побыстрее', '<b>побыстрее</b>')
    text = text.replaceAll('скорее', '<b>скорее</b>')
    text = text.replaceAll('поскорее', '<b>поскорее</b>')
    text = text.replaceAll('очень нужно', '<b>очень нужно</b>')
    let element = document.createElement('div')
    element.innerHTML = text;
    if (node.firstChild !== null)
        node.firstChild.remove();
    node.appendChild(element)
}

function addOnChangeEvent(node) {
    node.querySelector('.anything-else').addEventListener('change', () => updateText(node.querySelector('.anything-else-value'), node.querySelector(".anything-else-area").value));

}