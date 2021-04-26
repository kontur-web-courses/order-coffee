let originalDrink = document.getElementById('drink').cloneNode(true);
let drinkCount = 1;

addDrink = function () {
    let order = document.getElementById('order');
    let addButton = document.getElementById('add-button');
    addButton.remove();
    let submitButton = document.getElementById('submit-button');
    submitButton.remove();

    drinkCount++;
    let drink = originalDrink.cloneNode(true);
    drink.id += drinkCount + "";
    order.appendChild(drink);
    order.appendChild(addButton);
    order.appendChild(submitButton);

    let inputs = drink.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].name += drinkCount + "";
    }
    let h4 = drink.getElementsByClassName("beverage-count");
    h4[0].textContent = 'Напиток №' + drinkCount;

    drink.getElementsByClassName('delete-button')[0].addEventListener('click', (e) => {
        if (drinkCount > 1) {
            e.target.parentNode.remove();
            drinkCount--;
        }
    });
}

document.getElementById('add-button').addEventListener('click', addDrink);


let closeButtons = document.querySelectorAll('.delete-button');
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', (e) => {
        if (drinkCount > 1) {
            e.target.parentNode.remove();
        }
    });
}