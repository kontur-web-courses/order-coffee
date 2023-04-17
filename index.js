let addButton = document.querySelector(".add-button");
let bev = document.querySelector('.beverage');
addRemoveEvent(bev);
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

function updateNodeCounter(node, lambda) {
    node.firstChild.nextSibling.firstChild.textContent = node.firstChild.nextSibling.firstChild.textContent.slice(0, -1)
        + lambda(+node.firstChild.nextSibling.firstChild.textContent.at(-1));
}

function addRemoveEvent(newElement) {
    newElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.addEventListener('click', () => removeNodeEvent(newElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild));
}