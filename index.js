let listOfMenu = {"espresso": "Эспрессо", "capuccino": "Капучино", "cacao": "Какао",
    "usual": "обычном молоке", "no-fat": "обезжиренном молоке", "soy": "соевом молоке", "coconut":"кокосовом молоке",
    "whipped cream": "взбитых сливок", "marshmallow": "зефирок", "chocolate":"шоколад", "cinnamon":"корицу"};
let lightbox = document.querySelector(".darkening");
const coffeeBlank = String(document.querySelector("fieldset").innerHTML);

document.querySelector('.add-button').addEventListener("click", ()=>{
    let count = document.querySelectorAll("fieldset").length;
    let newCoffee = document.createElement('fieldset');
    newCoffee.className = "beverage";
    newCoffee.innerHTML = coffeeBlank
        .replace("Напиток №1", `Напиток №${count+1}`)
        .replace(/milk1/g, `milk${count+1}`)
        .replace(/options1/g, `options${count+1}`)
        .replace("type1", `type${count+1}`)
        .replace("textarea1",`textarea${count+1}`);
    let lastCoffee = document.querySelectorAll("fieldset")[count-1];
    lastCoffee.after(newCoffee);
});

function generateTextForOrder(count){
    if (count % 10 == 1 && count % 100 != 11)
        return `Вы заказали ${count} напиток`;
    else if(count % 10 >=2 && count % 10 <= 4 && (count % 100 <12 || count % 100>14))
        return `Вы заказали ${count} напитка`;
    else return `Вы заказали ${count} напитков`;
}
function makeListOfOptinos(options){
    let result = [];
    for (option of options){
        result.push(listOfMenu[option]);
    }
    return result.join(", ");
}
function generateTable(count){
    const form = new FormData(document.forms[1]);
    let table = document.querySelector("table");
    let rows = '<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th><th>Комментарий</th></tr>';
    for (let i=1;i<=count;i++){
        rows +="\n<tr><td>" + listOfMenu[form.get(`type${i}`)] + "</td>" +
        "<td>" + listOfMenu[form.get(`milk${i}`)] + "</td>" +
        "<td>" + makeListOfOptinos(form.getAll(`options${i}`)) + "</td>" +
        "<td>" + form.get(`textarea${i}`)+"</td></tr>";
    }
    table.innerHTML = rows;
    return table;
}

function closeLightbox(){
    lightbox.style.display = "none";
}

document.querySelectorAll("form")[1].onsubmit = () => {
    let count = document.querySelectorAll("fieldset").length;
    document.querySelector(".ammountOfCoffee").innerHTML = generateTextForOrder(count);
    lightbox.style.display = "flex";
    generateTable(count);
    return false;
};

function getNumber(e){
    return +e.innerHTML.substr(e.innerHTML.indexOf("Напиток №")+9,10).match(/\d+/)[0];
}

function replaceCoffee(coffee,numOfCoffee){
    let milk = new RegExp(`milk${numOfCoffee}`,"g");
    let options = new RegExp(`options${numOfCoffee}`,"g");
    console.log(coffee.innerHTML.indexOf(`textarea${numOfCoffee}`));
    coffee.innerHTML = coffee.innerHTML
        .replace(`Напиток №${numOfCoffee}`, `Напиток №${numOfCoffee-1}`)
        .replace(milk,`milk${numOfCoffee-1}`)
        .replace(options,`options${numOfCoffee-1}`)
        .replace(`type${numOfCoffee}`, `type${numOfCoffee-1}`)
        .replace(`textarea${numOfCoffee}`,`textarea${numOfCoffee-1}`);
}

function closeCoffee(e){
    let count = document.querySelectorAll(".beverage").length;
    if (count == 1){
        return;
    }
    let numOfDelCoffee = getNumber(e);
    let listOfCoffee = e.parentNode;
    e.parentNode.removeChild(e);
    for (coffee of listOfCoffee.querySelectorAll(".beverage")){
        let numOfCoffee = getNumber(coffee);
        if(numOfCoffee>numOfDelCoffee){
            replaceCoffee(coffee, numOfCoffee);
        }
    }
}
function copyText(textarea){
    text = textarea.value
        .replace("срочно","<b>срочно</b>")
        .replace("быстрее","<b>быстрее</b>")
        .replace("побыстрее","<b>побыстрее</b>")
        .replace("скорее","<b>скорее</b>")
        .replace("поскорее","<b>поскорее</b>")
        .replace("очень нужно","<b>очень нужно</b>");
    console.log(textarea.parentNode);
    textarea.parentNode.querySelector("span").innerHTML = text;
}
document.querySelectorAll("form")[0].onsubmit = ()=>{
    const now = new Date();
    let input_time = document.querySelector(".order-time");
    let orderTime = input_time.value.split(":").map(num=>+num);
    let nowTime = [now.getHours(),now.getMinutes()];
    if (orderTime[0] < nowTime[0] || orderTime[0] == nowTime[0] && orderTime[1] < nowTime[1]){
        input_time.style.border = "1px red solid";
        alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее");
        return false;
    }
}