function addBeverage() {
    const fieldSets = document.querySelectorAll('.beverage');
    const count = fieldSets.length;
    const newFieldSet = fieldSets[0].cloneNode(true);
    newFieldSet.querySelector('.beverage-count').textContent = `Напиток №${count + 1}`;
    newFieldSet.querySelector('.remove-button').addEventListener('click', removeBeverage);
    const lastFieldSet = fieldSets[fieldSets.length - 1];
    lastFieldSet.after(newFieldSet);
}

function removeBeverage(e) {
    if (document.querySelectorAll('.beverage').length > 1) {
        e.target.parentElement.remove();
        refreshTitles();
    }
}

function refreshTitles() {
    const fieldSets = document.querySelectorAll('.beverage');
    let currentBeverageNumber = 1;
    for (const fieldSet of fieldSets) {
        fieldSet.querySelector('.beverage-count').textContent = `Напиток №${currentBeverageNumber}`;
        currentBeverageNumber++;
    }
}

function createModal() {
    const outer = document.createElement('div');
    const inner = document.createElement('div');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', function (){
        outer.remove();
    });
    inner.append(closeButton);
    const content = document.createElement('p');
    content.textContent = 'Заказ принят!';
    inner.append(content);
    outer.append(inner);
    document.body.append(outer);
}

function main() {
    document.querySelector('.add-button').addEventListener('click', addBeverage);
    document.querySelector('.beverage').querySelector('.remove-button').addEventListener('click', removeBeverage);
    document.querySelector('form').addEventListener('submit', function (evt){
        evt.preventDefault();
        evt.target.submit();
        createModal();
    });
}


main();