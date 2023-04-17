let addButton = document.getElementsByClassName('add-button')[0];
let countOnClickAddButton = 1;
addButton.addEventListener('click', e => {
    let beverages = document.querySelectorAll('.beverage');
    let beverage = beverages[beverages.length - 1];
    let clone = beverage.cloneNode(true);
    countOnClickAddButton++;
    clone.querySelector('.beverage-count').textContent = `Напиток №${countOnClickAddButton}`;
    beverage.after(clone);
})