document.querySelector('.add-button').addEventListener("click", ()=>{
    let forms = document.querySelectorAll('.beverage');
    let newForm = forms[forms.length - 1].cloneNode(true);
    let headerText = newForm.querySelector("h4").innerHTML;
    let newNumberDrink = parseInt(headerText.slice(headerText.indexOf('№') + 1, headerText.length)) + 1;
    newForm.querySelector("h4").innerHTML = `Напиток №${newNumberDrink}`;
    for(let radio of newForm.querySelectorAll('input[type=radio]'))
        radio.name = 'milk' + newNumberDrink;
    forms[forms.length - 1].after(newForm);
});

document.querySelector('.submit-button').addEventListener("click", ()=>{
   document.querySelector('#drinkDialog').showModal();
   let forms = document.querySelectorAll('.beverage');
   document.querySelector('.modal-content').innerHTML = `Вы заказали ${forms.length} ${getNapitok(forms.length)}`
   buildTable();
   document.querySelector('.close-dialog').addEventListener('click', ()=>{
       document.querySelector('#drinkDialog').close();
   })
});

function getNapitok(num){
    num = Math.abs(num)%100;
    if(num === 1)
        return 'напиток';
    if(num > 10 && num < 20)
        return 'напитков';
    if(num % 10 > 1 && num % 10 < 5)
        return 'напитка';
    return 'напитков';
}

function remove(smt){
    if(document.querySelectorAll('.beverage').length > 1)
        smt.parentElement.remove();
}

const columnHeaders = ['Напиток', "Молоко", "Дополнительно"];

function buildTable(){
    let table = document.querySelector('table');
    table.innerHTML = '';

    let header = document.createElement("tr");
    header.classList.add("order-cell");

    for(let columnStr of columnHeaders){
        let column = document.createElement("th");
        column.innerHTML = columnStr;
        column.classList.add("order-cell");
        header.append(column);
    }
    table.append(header)

    for(form of document.querySelectorAll('.beverage')){
        let str = document.createElement('tr');
        str.classList.add("order-cell");

        let drink = document.createElement('td');
        drink.innerHTML = form.querySelector("option[selected]").innerHTML;
        drink.classList.add("order-cell");
        str.append(drink);
    }
}