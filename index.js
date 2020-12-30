let index = 1;
let count = 1;

const firstFieldset = document.querySelector('fieldset');
console.log(firstFieldset)
const close = document.getElementsByClassName("close")[0];
console.log(close);
close.addEventListener('click', () => closeForm(firstFieldset));

document.querySelector('.add-button').addEventListener('click', () => {
    let coffee = document.querySelector('fieldset');
    let parent = coffee.parentElement;

    let next_coffee = coffee.cloneNode(true);
    next_coffee.setAttribute('id', ++index);

    let radioInputList = next_coffee.querySelectorAll('input[type="radio"]');
    radioInputList.forEach(input => {
        input.setAttribute("name", 'milk-' + index)
    })

    const close = next_coffee.getElementsByClassName("close")[0];

    close.addEventListener('click', () => closeForm(next_coffee));
    next_coffee.querySelector('.coffee_number').innerText = index;
    parent.appendChild(next_coffee);
    count++;

});

function closeForm(element) {
    console.log(count);
    if(count > 1) {
        element.remove();
        --count;
    }
}

let open_modal = document.getElementById('open_modal');
let close_modal = document.getElementById('close_modal');

open_modal.onclick = function() {
    createContentLightbox();
    document.getElementById('modal').classList.remove('hidden');
};

close_modal.onclick = function() { //
    document.getElementById('modal').classList.add('hidden');
};

let countDrinks = () => document.getElementsByClassName('beverages')[0].childElementCount;

function GetNoun(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

function createContentLightbox() {
    let lightbox = document.getElementById('modal_text');
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    let elem = document.createElement('p');
    elem.innerHTML = `Вы заказали ${countDrinks()} ${GetNoun(countDrinks(),['напиток', 'напитка', 'напитков'])}`;
    lightbox.append(elem);
    lightbox.append(createTable());
    fillOrder();
}

function createTable() {
    const titles = ['Напиток', 'Молоко', 'Дополнительно'];
    let table = document.createElement('table');
    for (let i = 0; i < countDrinks() + 1; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            td.id = `row-${i}_col-${j}`;
            if (i === 0) {
                td.innerHTML = titles[j];
            }
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    return table;
}

let complianceDictionary = {
    'espresso': 'Эспрессо',
    'capuccino': 'Капучино',
    'cacao': 'Какао',
    'usual' : 'Обычное',
    'no-fat' : 'Обезжиренное',
    'soy' : 'Соевое',
    'coconut' : 'Кокосовое',
    'whipped cream' : 'взбитые сливки',
    'marshmallow' : 'зефирки',
    'chocolate' : 'шоколад',
    'cinnamon' : 'корица',
}

function fillOrder() {
    let form = document.getElementsByClassName('beverage');
    let orderCounter = 1;
    for (let category of form) {

        let properties = [];
        let supplements = [];
        properties.push(complianceDictionary[category.elements.kind_of_drinks.value]);
        for (let element of category.elements) {
            if (element.type === 'radio' && element.checked)
                properties.push(complianceDictionary[element.value])
            if (element.type === 'checkbox' && element.checked)
                supplements.push(complianceDictionary[element.value])
        }
        properties.push(supplements.join(', '));

        for (let i=0; i < 3; i++) {
            let td = document.getElementById(`row-${orderCounter}_col-${i}`);
            td.innerHTML = properties[i];
        }
        orderCounter++;
    }
}