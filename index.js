const addButton = document.getElementsByClassName("add-button")[0];
addButton.addEventListener("click", () => addBevarageToOrder());

drinkNamesDict = {
  espresso: "Эспрессо",
  capuccino: "Каппучино",
  cacao: "Какао",
};

milkNamesDict = {
  usual: "Обычное",
  "no-fat": "Обезжиренное",
  coconut: "Кокосовое",
  soy: "Соевое",
};

optionNamesDict = {
  "whipped cream": "Cо взбитыми сливками",
  marshmallow: "С зефирками",
  chocolate: "С крошками шоколада",
  cinnamon: "С корицей",
  "": "Без добавок",
};

let bevarageCount = 1;
const defaultBevarage = document
  .getElementsByClassName("beverage-form")[0]
  .cloneNode(true);

function addBevarageToOrder() {
  const newBevarage = defaultBevarage.cloneNode(true);
  const name = newBevarage.getElementsByClassName("beverage-count")[0];
  name.textContent = `Напиток №${++bevarageCount}`;

  const list = document.getElementsByClassName("beverage-list")[0];

  list.appendChild(newBevarage);
}

function removeBevarage(elem) {
  if (bevarageCount == 1) {
    alert("Нельзя удалить единственный напиток");
    return;
  }

  elem.parentNode.parentNode.remove();
  bevarageCount--;
}

const orderContainer = document.getElementsByClassName("order-container")[0];
const orderTable = document.getElementsByClassName("order-table")[0];

function makeOrder() {
  const countItem = orderContainer.getElementsByClassName("order-count")[0];
  countItem.textContent = `Вы заказали ${bevarageCount} напит${getCountWordPostfix(
    bevarageCount
  )}`;

  for (const beverageForm of document.getElementsByClassName("beverage-form")) {
    const formData = new FormData(beverageForm);
    const newRow = orderTable.insertRow();
    const drinkCell = newRow.insertCell(0);
    const milkCell = newRow.insertCell(1);
    const optionsCell = newRow.insertCell(2);

    drinkCell.appendChild(
      document.createTextNode(drinkNamesDict[formData.getAll("drink")])
    );
    milkCell.appendChild(
      document.createTextNode(milkNamesDict[formData.getAll("milk")])
    );
    optionsCell.appendChild(
      document.createTextNode(optionNamesDict[formData.getAll("options")])
    );
  }

  const list = document.getElementsByClassName("beverage-list")[0];
  list.innerHTML = "";
  list.appendChild(defaultBevarage);

  orderContainer.style.visibility = "visible";
}

function closeOrder() {
  orderContainer.style.visibility = "hidden";
  for (let i = 0; i < bevarageCount; i++) {
    orderTable.deleteRow(-1);
  }
  bevarageCount = 1;
}

function getCountWordPostfix(number) {
  if ((number % 10 == 1) & (parseInt(number / 10) % 10 !== 1)) return "ок";
  if ((number % 10 < 5) & (parseInt(number / 10) !== 1)) return "ка";
  return "ков";
}
