document.querySelector('.add-button').addEventListener('click', addForm);
document.querySelector('.close-button').addEventListener('click', ev => deleteForm(ev.target));

let totalBeverageCounter = 1;
let totalBeverageCount = 1;
const defaultBeverage = document.querySelector('.beverage').cloneNode(true);

function addForm() {
    totalBeverageCounter++;
    totalBeverageCount++;
    const newBeverage = defaultBeverage.cloneNode(true);
    newBeverage.querySelector('.beverage-count').textContent = 'Напиток №' + totalBeverageCounter;
    for (const elem of newBeverage.querySelectorAll('*')) {
        if (elem.hasAttribute('name')) {
            elem.setAttribute('name',
                getSliceOfName(elem.getAttribute('name')) + totalBeverageCounter);
        }
    }
    newBeverage.querySelector('.close-button').addEventListener('click', ev => deleteForm(ev.target));
    document.querySelectorAll('.beverage')[totalBeverageCount - 2].after(newBeverage);
}

function getSliceOfName(name) {
    return name.slice(0, name.indexOf('-') + 4);
}

function deleteForm(target) {
    if (totalBeverageCount <= 1) {
        return;
    }
    target.parentElement.remove();
    totalBeverageCount--;
}