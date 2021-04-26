let drinkCount = 0;

addDrink = function () {
    drinkCount++;
    let drink = document.getElementById('drink').cloneNode(true);
    drink.id += drinkCount + "";
    document.getElementById('order').appendChild(drink);
    // document.getElementById('order').child

    let inputs = drink.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].name += drinkCount + "";
    }
}

document.getElementById('add-button').addEventListener('click', addDrink);