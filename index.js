let totalBeverages = 1;
let curNumBeverages = 1;

const doneBtn = document.getElementById("submit-button");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const addBeverageButton = document.querySelector('.add-button');
const beverage = document.querySelector('.beverage');

doneBtn.addEventListener("click", (e) => {
    console.log(modal, modalOverlay);
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
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