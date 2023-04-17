let numBeverages = 1;

const addBeverageButton = querySelector('add-button');
addBeverageButton.addEventListener('click', addBeverage);


function addBeverage() {
    const beverage = document.getElementsByClassName('beverage')[0];
    const clonedBeverage = beverage.cloneNode(true);
    const clonedCountObj = clonedBeverage.querySelectorAll(".beverage-count")[0];
    clonedCountObj.textContent = `Напиток №${++numBeverages}`;
    const form = document.getElementsByTagName('form')[0];
    form.insertBefore(clonedBeverage, form.children[form.children.length-2]);
}