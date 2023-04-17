let numBeverages = 1;

const doneBtn = document.getElementById("submit-button");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const addBeverageButton = document.querySelector('.add-button');
const closeBtn = document.getElementById("close-btn");


doneBtn.addEventListener("click", (e) => {
    console.log(modal, modalOverlay);
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
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

