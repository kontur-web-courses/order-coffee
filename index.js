let totalBeverages = 1;
let curNumBeverages = 1;

const doneBtn = document.getElementById("submit-button");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const addBeverageButton = document.querySelector('.add-button');
const beverage = document.querySelector('.beverage');
const closeBtn = document.getElementById("close-btn");
let differentValues = new Set([2, 3, 4]);
let differentValues2 = new Set([11, 12, 13, 14]);
let differentValues3 = new Set([1]);


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
});
modalOverlay.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
});

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.add("hidden");
    modal.classList.add("hidden");
});

addBeverageButton.addEventListener('click', addBeverage);
initBeverage(beverage);

function initBeverage(beverage) {
  const removeBeverageButton = beverage.querySelector('.remove-beverage');
  removeBeverageButton.addEventListener('click', (e) => {
    removeBeverage(e);
  });
}

function addBeverage() {
    const beverage = document.getElementsByClassName('beverage')[0];
    const clonedBeverage = beverage.cloneNode(true);
    const clonedCountObj = clonedBeverage.querySelectorAll(".beverage-count")[0];
    clonedCountObj.textContent = `Напиток №${++totalBeverages}`;
    const form = document.getElementsByTagName('form')[0];
    form.insertBefore(clonedBeverage, form.children[form.children.length-1]);
    initBeverage(clonedBeverage);
    curNumBeverages++;
}

function removeBeverage(e) {
    if(curNumBeverages <= 1) {
        return;
    }

    const bev = e.target.parentNode;
    bev.parentNode.removeChild(bev);
    curNumBeverages--;
}
