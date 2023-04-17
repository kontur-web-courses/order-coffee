let docForm = document.querySelector('form');
let beverageCount = 1;
let beveragePattern = docForm.querySelector('.beverage').cloneNode(true);

docForm
    .querySelector('.beverage')
    .querySelector('.close-fieldset-button')
    .addEventListener('click', (e) => {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    );

for (let checkBoxField of beveragePattern.querySelectorAll('.checkbox-field')) {
    let inputField = checkBoxField.querySelector('input');
    inputField.name = inputField.name + '1';
}

function AddNewBeverage () {
    beverageCount++;

    let newBeverage = beveragePattern.cloneNode(true);

    let submitBlocks = docForm.querySelectorAll('div');
    let newChildren = [];
    for (let child of docForm.children) {
        if (child.className === "beverage") {
            newChildren.push(child);
        }
    }

    docForm.replaceChildren(...newChildren);

    newBeverage.querySelector(".beverage-count").textContent = `Напиток №${beverageCount}`;
    for (let checkBoxField of beveragePattern.querySelectorAll('.checkbox-field')) {
        let checkField = checkBoxField.querySelector('input');
        checkField.name = checkField.name + beverageCount.toString();
    }

    docForm.appendChild(newBeverage);
    let newCross = document.createElement('div');
    newCross.className = 'lose-fieldset-button';
    newBeverage.appendChild(newCross);
    newBeverage
        .querySelector('.close-fieldset-button')
        .addEventListener('click', (e) => {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            }
        );

    for (let block of submitBlocks) {
        if (block.className !== "field" && block.className !== 'close-fieldset-button')
            docForm.appendChild(block);
    }
}

document
    .querySelector(".add-button")
    .addEventListener("click", (e) => AddNewBeverage()
)
