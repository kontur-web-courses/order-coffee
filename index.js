let count = 1;
const template = document.querySelector(".beverage-form");
const convertion = {"espresso": "Эспрессо", "capuccino": "Капучино", "cacao": "Какао",
"usual": "на обычном молоке", "no-fat": "на обезжиренном молоке", "soy": "на соевом молоке", "coconut":"на кокосовом молоке",
"whipped cream": "взбитых сливок", "marshmallow": "зефирок", "chocolate":"шоколад", "cinnamon":"корицу"};

function addCoffee(){
    count ++;
    const newCoffee = template.cloneNode(true);
    newCoffee.id = `form${count}`;
    newCoffee.innerHTML = newCoffee.innerHTML.replace("Напиток №1", `Напиток №${count}`);
    document.querySelector(".beverages").append(newCoffee);
}

function deleteCoffee(element){
    if (count === 1)
        return;
    count--;
    let numOfDel = getNumber(element);
    element.parentNode.removeChild(element);
    for (coffee of document.querySelectorAll(".beverage-form")){
        const numOfCoffee = getNumber(coffee);
        if (numOfCoffee > numOfDel){
            coffee.id = `form${numOfCoffee-1}`;
            coffee.querySelector(".beverage-count").textContent = `Напиток №${numOfCoffee-1}`;
        }
    }
}

getNumber = (element) => {return +element.id.slice(4)};

function showLightbox(){
    document.querySelector(".hidden").style.display = "flex";
    document.querySelector(".countOfCoffee").textContent = getText(count);
    document.querySelector("table").innerHTML = makeTable(document.querySelectorAll(".beverage-form"));
}

getText = (countOfCoffee) => {
    if (countOfCoffee % 10 == 1 && !(countOfCoffee % 100 == 11))
        return `Вы заказали ${countOfCoffee} напиток`;
    else if (countOfCoffee % 10 > 1 && countOfCoffee % 10 < 5 && (countOfCoffee % 100 < 12 || countOfCoffee % 100 > 14))
        return `Вы заказали ${countOfCoffee} напитка`;
    else return `Вы заказали ${countOfCoffee} напитков`;
}

makeTable = (forms) => {
    let rows = '<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th><th>Пожелания</th></tr>';
    forms.forEach(form=>{
        const fromData = new FormData(form);
        rows += "<tr>" + convertToRow(fromData) + "</tr>";
    })
    return rows;
}

convertToRow = (formData) => {
    return `<td>${convertion[formData.get('type')]}</td>
    <td>${convertion[formData.get('milk')]}</td>
    <td>${formData.getAll('options').map(option => convertion[option]).join(", ")}</td>
    <td>${formData.get('comment')}</td>`;
}

cloneText = (textarea) =>{
    text = textarea.value.replace(/(срочно)|(быстрее)|(побыстрее)|(скорее)|(поскорее)|(очень нужно)/gi,"<b>$&</b>");
    textarea.parentNode.querySelector("span").innerHTML = text;
}
const lightboxForm = document.querySelector(".lightbox-form");
lightboxForm.onsubmit = (el) =>{
    const form = new FormData(lightboxForm);
    const orderTime = form.get('order-time').split(':').map(num=>+num);
    const now = new Date();
    const nowTime = [now.getHours(), now.getMinutes()];
    if (orderTime.length == 1 || nowTime[0] > orderTime[0] || nowTime[0] == orderTime[0] && nowTime[1] > orderTime[1]){
        lightboxForm.querySelector("input").style.border = "1px red solid";
        alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее");
        return false;
    }
}
addCoffee();
deleteCoffee(template);//если не делать так, то тект из поля, которое дублирует из комментария, будет дублирован на новое кофе.