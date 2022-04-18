let drinkCount = 1;
const drinkForm = document.querySelector(".beverage-form");

function addCoffee(){
    drinkCount++;
    const newDrink = drinkForm.cloneNode(true);
    newDrink.id = `form${drinkCount}`;
    newDrink.innerHTML = newDrink.innerHTML.replace("Напиток №1", `Напиток №${drinkCount}`);
    document.querySelector(".beverages").append(newDrink);
}

function deleteCoffee(element){
    if (drinkCount === 1)
        return;
    drinkCount--;
    let deleteDrinkNum = getDrinkNumber(element);
    element.parentNode.removeChild(element);
    for (drink of document.querySelectorAll(".beverage-form")){
        const drinksNum = getDrinkNumber(drink);
        if (drinksNum > deleteDrinkNum){
            drink.id = `form${drinksNum-1}`;
            drink.querySelector(".beverage-count").textContent = `Напиток №${drinksNum-1}`;
        }
    }
}

function getDrinkNumber(element){
    return +element.id.slice(4);
}


function showLightbox(){
    document.querySelector(".hidden").style.display = "flex";
    document.querySelector(".countOfCoffee").textContent = getCountString(drinkCount);
    document.querySelector("table").innerHTML = getModalTable(document.querySelectorAll(".beverage-form"));
}

function getCountString(countOfCoffee){
    if (countOfCoffee % 10 === 1 && !(countOfCoffee % 100 === 11))
        return `Вы заказали ${countOfCoffee} напиток`;
    else if (countOfCoffee % 10 > 1 && countOfCoffee % 10 < 5 && (countOfCoffee % 100 < 12 || countOfCoffee % 100 > 14))
        return `Вы заказали ${countOfCoffee} напитка`;
    else return `Вы заказали ${countOfCoffee} напитков`;
}

function getModalTable(forms){
    let content = '<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th><th>Пожелания</th></tr>';
    for (form of forms){
        const fromData = new FormData(form);
        content += "<tr>" + getTableContent(fromData) + "</tr>";
    }
    return content;
}

const translationDict = {
    "espresso": "Эспрессо",
    "capuccino": "Капучино",
    "cacao": "Какао",
    "usual": "Обычное",
    "no-fat": "Обезжиренное",
    "soy": "Соевое",
    "coconut":"Кокосовое",
    "whipped cream": "взбитые сливки",
    "marshmallow": "зефирки",
    "chocolate": "шоколад",
    "cinnamon":"корица"};


function getTableContent(formData) {
    return `<td>${translationDict[formData.get('type')]}</td><td>${translationDict[formData.get('milk')]}</td><td>${formData.getAll('options').map(option => translationDict[option]).join(", ")}</td><td>${formData.get('comment')}</td>`;
}

function duplicateTextWithBold(textarea){
    textarea.parentNode.querySelector("span").innerHTML = textarea.value.replace(/(срочно)|(быстрее)|(побыстрее)|(скорее)|(поскорее)|(очень нужно)/gi,"<b>$&</b>");
}


const lightboxForm = document.querySelector(".lightbox-form");
lightboxForm.addEventListener('submit', function(event){
    const form = new FormData(lightboxForm);
    const orderTime = form.get('order-time').split(':').map(num => +num);
    const now = new Date();
    const hoursTime = now.getHours();
    if (orderTime.length === 1 || hoursTime > orderTime[0] || hoursTime === orderTime[0] && now.getMinutes() > orderTime[1]){
        lightboxForm.querySelector("input").style.border = "5px red solid";
        alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее");
    }
})
