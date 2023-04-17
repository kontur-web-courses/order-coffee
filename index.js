let numBeverages = 1;

const doneBtn = document.getElementById("submit-button");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const addBeverageButton = document.querySelector('.add-button');
const closeBtn = document.getElementById("close-btn");
let differentValues = new Set([2, 3, 4]);
let differentValues2 = new Set([12, 13, 14]);
let differentValues3 = new Set([1]);


doneBtn.addEventListener("click", (e) => {
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    let p = document.getElementById('count_beverage');
    console.log(p);
    if (differentValues.has(numBeverages % 10) && !differentValues2.has(numBeverages % 100)) {
        p.textContent = `Вы заказали ${numBeverages} напитка`;
    }
    else if (differentValues3.has(numBeverages % 10) && !differentValues2.has(numBeverages % 100)) {
        p.textContent = `Вы заказали ${numBeverages} напиток`;
    }
    else {
        p.textContent = `Вы заказали ${numBeverages} напитков`;
    }
});
addBeverageButton.addEventListener('click', addBeverage);


function addBeverage() {
    const beverage = document.getElementsByClassName('beverage')[0];
    const clonedBeverage = beverage.cloneNode(true);
    const clonedCountObj = clonedBeverage.querySelectorAll(".beverage-count")[0];
    clonedCountObj.textContent = `Напиток №${++numBeverages}`;
    const form = document.getElementsByTagName('form')[0];
    form.insertBefore(clonedBeverage, form.children[form.children.length-1]);
}

modalOverlay.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
});

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
});

