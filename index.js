document.querySelector(".add-button").addEventListener('click', addDrink);

let drinks = `<tr><td>Напиток</td><td>Молоко</td><td>Дополнительно</td><td>Пожелания</td></tr>`;
function updateDelete(){
    let deletes = document.getElementsByClassName("delete");
    for (let elem of deletes){
        elem.addEventListener('click', function(event){
            event.preventDefault();
            if (event.target.parentNode.id !='drink1'){
                event.target.parentNode.remove();
            };    
        });
    };
}

function addDrink(){
    let initialDrink = Array.from(document.getElementsByClassName("beverage"))[document.getElementsByClassName("beverage").length-1];
    let newDrink = initialDrink.cloneNode(true); 
    newDrink.id = 'drink' + (+initialDrink.id.slice(5) + 1);
    initialDrink.after(newDrink);
    console.log(newDrink)
    document.querySelector(`#${newDrink.id} .beverage-count`).innerHTML = ('Напиток №' + newDrink.id.slice(5));
    let initialName = document.querySelector(`#${initialDrink.id}  .milk-selection input`).name;
    Array.from(document.querySelectorAll(`#${newDrink.id}  .milk-selection input`)).map((element)=> element.name = 'milk' + (+initialName.slice(4) + 1));
    initialDrink = newDrink;
    updateDelete();
}

class Information{
    constructor(id){
        this.id = id;
        this.drink = (Array.from(document.querySelectorAll(`#${this.id}  .drink-selection option`)).map((element)=> {
            if (element.selected)
            return element.value;})).toString().replace(/[\s.,%]/g, '');

        this.milk =  (Array.from(document.querySelectorAll(`#${this.id}  .milk-selection input`)).map((element)=> {
            if (element.checked)
            return element.value;})).toString().replace(/[\s.,%]/g, '');
        this.adds = [];
        this.wish = document.querySelector(`#${this.id} textarea`).value;
    }
}

 document.forms.drinks.onsubmit = function(event){
    event.preventDefault();
    let forms = Array.from(document.getElementsByClassName("beverage"));
    for (let form of forms){
        let formId = form.getAttribute('id');
        let information = new Information(formId);
        Array.from(document.querySelectorAll(`#${formId} .add-selection input`)).map((element)=> {
            if (element.checked) information.adds.push(element.value);
            return;
            })
        drinks+=`<tr><td>${information.drink}</td><td>${information.milk}</td><td>${information.adds}</td><td>${information.wish}</td></tr>`;
    }
    document.querySelector('.modal-body table').innerHTML=drinks;
    let sumOfDrinks = Array.from(document.getElementsByClassName("beverage")).length.toString();
    let sc = '';
    let lastNum = sumOfDrinks[sumOfDrinks.length-1];
    if (lastNum == 1 & sumOfDrinks!=11) sc = 'напиток'
    else if (lastNum == 2 || lastNum == 3 || lastNum == 4) sc = 'напитка'
    else sc = 'напитков'
    document.querySelector('.modal-body p').innerHTML=`Вы заказали ${sumOfDrinks} ${sc}`;
    drinks = `<tr><td>Напиток</td><td>Молоко</td><td>Дополнительно</td><td>Пожелания</td></tr>`;
 }

let keyWords = ["срочно", "быстрее", "побыстрее", "скорее", "поскорее", "очень нужно"]
function changeText(event){
    let content = event.target.value.toString();
    console.log(event.target)
    for (let word of keyWords){
        if (content.includes(word)) {
            let start = content.indexOf(word);
            let end = content.indexOf(word)+ word.length-1;
            let newContent = content.substring(0,start)+'<b>'+word+'</b>'+content.substring(end+1, content.length);
            content = newContent;
        }
    }
    document.querySelector('.textAreaContent').innerHTML = "Ваши пожелания: " + content;
}
document.forms.modalForm.onsubmit = function(event){
    event.preventDefault();
    let timeValue = document.querySelector(`#${event.target.id} input`).value;
    let now = new Date().getHours() +':'+new Date().getMinutes();
    if (timeValue<now) alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее");
    else {
        alert(`Заказ оформлен на ${timeValue}!`)
        document.querySelector(".modal-footer button").click();
    }
}