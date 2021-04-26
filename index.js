document.querySelector('.add-button').addEventListener('click', addForm);

let totalBeverageCount = 1;
const defaultBeverage = document.querySelector('.beverage');

function addForm() {
    totalBeverageCount++;
    const newBeverage = defaultBeverage.cloneNode(true);
    newBeverage.querySelector('.beverage-count').textContent = 'Напиток №' + totalBeverageCount;
    for (const elem of newBeverage.querySelectorAll('*')) {
        if (elem.hasAttribute('name')) {
            elem.setAttribute('name',
                getSliceOfName(elem.getAttribute('name')) + totalBeverageCount);
        }
    }
    document.querySelectorAll('.beverage')[totalBeverageCount - 2].after(newBeverage);
}

function getSliceOfName(name) {
    return name.slice(0, name.indexOf('-') + 4);
}