const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');
const protoBeverage = form.firstElementChild.cloneNode(true);



let previousBeverage = form.firstElementChild;
let beverageCount = 1;
let fieldset = document.querySelector('.beverage');
updateModalText();

addButton.addEventListener('click', () => {
  const newBeverage = protoBeverage.cloneNode(true);
  renameRadioButtons(newBeverage, beverageCount);
  beverageCount++;
  newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
  previousBeverage.after(newBeverage);
  previousBeverage = newBeverage;
  updateModalText();
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

function renameRadioButtons(beverage, index) {
    const buttons = beverage.querySelectorAll('input[type=radio]');
    for(const button of buttons) {
        button.name = 'milk' + index;
    }
}


const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal-overlay');

submitButton.addEventListener('click', event => {
    modal.style.display = 'block';
    event.preventDefault();
});

const closeButton = document.querySelector('.modal-close');

closeButton.addEventListener('click', () => {
    updateModalText();
    modal.style.display = 'none';
  });

  function pluralize(number, wordForms) {
    const cases = [2, 0, 1, 1, 1, 2];
    let wordFormIndex;
  
    if (number % 100 > 4 && number % 100 < 20) {
      wordFormIndex = 2;
    } else {
      if (number % 10 < 5) {
        wordFormIndex = cases[number % 10];
      } else {
        wordFormIndex = 2;
      }
    }
  
    return wordForms[wordFormIndex];
  }

function updateModalText() {
    document.querySelector('.modal-text').textContent = `Вы заказали ${beverageCount} ${pluralize(beverageCount, ['напиток', 'напитка', 'напитков'])}`;
}