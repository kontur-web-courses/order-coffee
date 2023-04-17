<<<<<<< Updated upstream
=======
const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');
let count = 1;
let previousBeverage = form.firstElementChild;
let beverageCount = 1;
let fieldset = document.querySelector('.beverage');

addButton.addEventListener('click', () => {
  const newBeverage = previousBeverage.cloneNode(true);
  beverageCount++;
  count++
  newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
  previousBeverage.after(newBeverage);
  previousBeverage = newBeverage;
});

function Delete(button)
{
  const beverageFieldset = button.parentElement;
  if (beverageCount > 1) {
    fieldset = beverageFieldset.previousSibling;
    beverageFieldset.remove();
    beverageCount--;
    console.log(beverageCount)
  }
}
>>>>>>> Stashed changes
