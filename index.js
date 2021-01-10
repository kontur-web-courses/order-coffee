let addBtn = document.getElementsByClassName("add-button")[0];
let submitBtn = document.getElementsByClassName("submit-button")[0];
let beverageItemFirst = document.getElementsByClassName("beverage-item")[0];
let beverageCount = 1;
let orderList = document.getElementsByClassName("order-list")[0];
let lightboxBack = document.getElementsByClassName("lightbox-back")[0]

beverageOptions = {
    espresso: "Эспрессо",
    capuccino: "Каппучино",
    cacao: "Какао",
  };
  
milkOptions = {
    usual: "Обычное",
    "no-fat": "Обезжиренное",
    coconut: "Кокосовое",
    soy: "Соевое",
  };
  
extraOptions = {
    "whipped cream": "взбитые сливки",
    marshmallow: "зефирки",
    chocolate: "крошки шоколада",
    cinnamon: "корица",
    "": "Ничего",
  };

function addBeverage() {
    let beverageCopy = beverageItemFirst.cloneNode(true);
    beverageCount += 1;
    beverageCopy.getElementsByClassName("beverage-count")[0].textContent = `Напиток №${beverageCount}`;
    orderList.appendChild(beverageCopy);
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function removeBeverage(node) {
    if (beverageCount === 1) {
        alert ("Единственный заказ!");
        return;
    }
    findAncestor(node, "beverage-item").remove();
    beverageCount -= 1;
    recalculateBeverageNumbers();
}

function recalculateBeverageNumbers() {
    let l = orderList.getElementsByClassName("beverage-item");
    for (let i = 0; i < beverageCount; i++){
        l[i].getElementsByClassName("beverage-count")[0].textContent = `Напиток №${i + 1}`;
    }
}

function closeLightbox(){
    lightboxBack.classList.toggle("hidden");
    let table = document.getElementsByClassName("lightbox-table")[0];
    table.innerHTML = "<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th></tr>";
}

function showLightbox() {
    let countName = "напитков"

    if (beverageCount === 1)
        countName="напиток";
    else if (beverageCount < 5)
        countName="напитка";

    lightboxBack.getElementsByClassName("lightbox-total")[0].textContent = `В корзине ${beverageCount} ${countName}`;

    let beverages = document.getElementsByClassName("beverage-item")

    let table = document.getElementsByClassName("lightbox-table")[0];

    for (let i = 0; i < beverageCount; i++) {
        let form = beverages[i].getElementsByTagName("form")[0];
        let data = new FormData(form);
        let row = table.insertRow();
        row.insertCell(0).innerHTML = beverageOptions[data.getAll("beverage")];
        row.insertCell(1).innerHTML = milkOptions[data.getAll("milk")];
        row.insertCell(2).innerHTML = data.getAll("options").map(x => extraOptions[x]).join(", ");
    }


    lightboxBack.classList.toggle("hidden");
}
