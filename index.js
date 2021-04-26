const firstBeverage = document.querySelector('.beverage');
const beverageTemplate = firstBeverage.cloneNode(true);

const beverages = [firstBeverage];


function getCount(beverage) {
    const beverageTitle = beverage.querySelector('.beverage-count').textContent
    return parseInt(beverageTitle.split('№')[1]);
}

function changeBeverageCount(beverage, newCount) {
    const oldCount = getCount(beverage);

    beverage.querySelector('.beverage-count').textContent = getNewBeverageHeader(newCount);

    for (const coffeeType of beverage.querySelectorAll(`[name=coffee-type_${oldCount}]`)) {
        coffeeType.setAttribute('name', `coffee-type_${newCount}`);
    }
    for (const milkType of beverage.querySelectorAll(`[name=milk_${oldCount}]`)) {
        milkType.setAttribute('name', `milk_${newCount}`);
    }
    for (const option of beverage.querySelectorAll(`[name=options_${oldCount}]`)) {
        option.setAttribute('name', `options_${newCount}`);
    }
    return beverage;
}

function onDelete(event){
    console.log('hi');
    const beverage = event.target.parentElement;
    const beverageCount = getCount(beverage);

    beverages.splice(beverageCount - 1, 1);
    event.target.parentElement.remove();

    for (let otherBeverageCount = beverageCount - 1; otherBeverageCount < beverages.length; otherBeverageCount++) {
        changeBeverageCount(beverages[otherBeverageCount], otherBeverageCount + 1)
    }

    if (beverages.length === 1) {
        beverages[0].querySelector('.delete-beverage').disabled = true;
    }
}

const delButton=document.querySelector('.delete-beverage');
delButton.addEventListener('click', onDelete);

function getNewBeverageHeader(count) {
    return `Напиток №${count}`;
}


function getNewBeverage(count) {
    const newBeverage = beverageTemplate.cloneNode(true);
    newBeverage.querySelector('.delete-beverage').addEventListener('click', onDelete);
    return changeBeverageCount(newBeverage, count);
}

function insertBeverage(e) {
    const newBeverage = getNewBeverage(beverages.length + 1);
    beverages[beverages.length - 1].after(newBeverage);
    beverages.push(newBeverage);

    if (beverages.length === 2) {
        document.querySelector('.delete-beverage').disabled = false;
    }
}

const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', insertBeverage);
