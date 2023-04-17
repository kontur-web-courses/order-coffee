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


const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal-overlay');

submitButton.addEventListener('click', event => {
    modal.style.display = 'block';
    event.preventDefault();
});

const closeButton = document.querySelector('.modal-close');

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});
