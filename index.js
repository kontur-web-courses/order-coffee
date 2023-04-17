const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');


let previousBeverage = form.firstElementChild;
let beverageCount = 1;

addButton.addEventListener('click', () => {
  const newBeverage = previousBeverage.cloneNode(true);
  beverageCount++;
  newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
  previousBeverage.after(newBeverage);
  previousBeverage = newBeverage;
});