let totalBeverages = 1;
let curNumBeverages = 1;

const doneBtn = document.getElementById("submit-button");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const addBeverageButton = document.querySelector('.add-button');
const firstBeverage = document.querySelector('.beverage');
const beveragePrototype = firstBeverage.cloneNode(true);
const closeBtn = document.getElementById("close-btn");
let differentValues = new Set([2, 3, 4]);
let differentValues2 = new Set([11, 12, 13, 14]);
let differentValues3 = new Set([1]);
let coffeesDict = {"espresso":"Эспрессо", "capuccino": "Капуччино", "cacao": "Какао"};
milksDict = {"usual": "обычное", "no-fat": "обезжиренное", "soy": "соевое", "coconut": "кокосовое"};
extrasDict = {"whipped cream": "взбитые сливки", "marshmallow": "зефирки", "chocolate": "шоколад", "cinnamon": "корица"};


doneBtn.addEventListener("click", (e) => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    let p = document.getElementById('count_beverage');
    console.log(p);
    if (differentValues.has(curNumBeverages % 10) && !differentValues2.has(curNumBeverages % 100)) {
        p.textContent = `Вы заказали ${curNumBeverages} напитка`;
    }
    else if (differentValues3.has(curNumBeverages % 10) && !differentValues2.has(curNumBeverages % 100)) {
        p.textContent = `Вы заказали ${curNumBeverages} напиток`;
    }
    else {
        p.textContent = `Вы заказали ${curNumBeverages} напитков`;
    }
    let beverages = document.getElementsByClassName('beverage');
    for (let i = 0; i < beverages.length; i++) {
        let beverage = beverages[i];
        let body = document.createElement('tbody');
        let row = document.createElement('tr');
        let coffee = beverage.querySelector('.coffee');
        let td = document.createElement('td');
        td.textContent = `${coffeesDict[coffee.value]}`;
        row.appendChild(td);
        let milks = beverage.querySelectorAll('.milk');
        milks.forEach((milk) => {
            if (milk.checked) {
                let td = document.createElement('td');
                td.textContent = `${milksDict[milk.value]}`;
                row.appendChild(td);
            }
        });
        let extras = beverage.querySelectorAll('.extra');
        let queryArray = [];
        extras.forEach((extra) => {
            if (extra.checked) {
                queryArray.push(extrasDict[extra.value]);
            }});
        let td2 = document.createElement('td');
        td2.textContent = `${queryArray.join(', ')}`;
        row.appendChild(td2);
        body.appendChild(row);
        let table = document.querySelector('table');
        table.appendChild(body);
    }
});
modalOverlay.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
    let bodies = document.querySelectorAll('tbody');
    let emptyBody = document.createElement('tbody');
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].remove();
    }
    let table = document.querySelector('table');
    table.appendChild(emptyBody);
});

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
    let bodies = document.querySelectorAll('tbody');
    let emptyBody = document.createElement('tbody');
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].remove();
    }
    let table = document.querySelector('table');
    table.appendChild(emptyBody);
});

addBeverageButton.addEventListener('click', addBeverage);
initBeverage(beveragePrototype);
initBeverage(firstBeverage);

function initBeverage(beverage) {
    const clonedCountObj = beverage.querySelectorAll(".beverage-count")[0];
    clonedCountObj.textContent = `Напиток №${totalBeverages}`;
    const removeBeverageButton = beverage.querySelector('.remove-beverage');
    removeBeverageButton.addEventListener('click', (e) => {
        removeBeverage(e);
    });
    renameRadioButtons(beverage, totalBeverages);
}

function addBeverage() {
    const clonedBeverage = beveragePrototype.cloneNode(true);
    const form = document.getElementsByTagName('form')[0];
    totalBeverages++;
    curNumBeverages++;
    clonedBeverage.id = 'bev' + totalBeverages;
    initBeverage(clonedBeverage);
    form.insertBefore(clonedBeverage, form.children[form.children.length-1]);
}

function renameRadioButtons(beverage, index) {
    const buttons = beverage.querySelectorAll('input[type=radio]');
    for(const btn of buttons)
        btn.name = 'milk' + index;
}

function removeBeverage(e) {
    if(curNumBeverages <= 1) {
        return;
    }
  
    const bev = e.target.parentNode;
    bev.parentNode.removeChild(bev);
    curNumBeverages--;
}
