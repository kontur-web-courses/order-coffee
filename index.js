function getRightDrinks(drinksCount){
    const napitka = [2, 3, 4]
    const napitka100 = [12, 13, 14, 2, 3, 4]
    const mod10 = drinksCount % 10;
    const mod100 = drinksCount % 100;
    if (mod10 === 1 && mod100 !== 11)
        return 'напиток';
    else if (napitka.includes(mod10) && napitka100.includes(mod100)){
        if (mod100 > 10 && mod100 < 20)
            return 'напитков';
        return 'напитка';
        }
    return 'напитков'
}


let count = 1;
const button = document.querySelector('.add-button');
const readyButton = document.querySelector('.submit-button');
let fieldset = document.querySelector('.beverage');
const modal = document.querySelector('.hystmodal')

modal.querySelector('.hystmodal__close').addEventListener('click',
    function () {
    modal.style.display = 'none';
    })
readyButton.addEventListener('click', function (){
    modal.querySelector('.accept').textContent = `Вы заказали ${count} ${getRightDrinks(count)}!`;
    modal.style.display = 'flex';
});

function HandleTextArea(area){
    const words = ["срочно", "быстрее", "побыстрее", "скорее", "поскорее", "очень нужно"]
    const text = area.parentElement.querySelector('.changedAreaValue');
    let areaValue = area.value;
    for (let word of words){
        if (!areaValue.includes(word)) continue;
        let fIndex = areaValue.search(word);
        areaValue = areaValue.substring(0, fIndex) + '<b>'
            + areaValue.substring(fIndex, fIndex + word.length)
            + '</b>' + areaValue.substring(fIndex + word.length);
    }
    text.innerHTML = areaValue;
}

function Delete(button)
{
    const beverageFieldset = button.parentElement;
    if (count > 1) {
        fieldset = beverageFieldset.previousSibling;
        beverageFieldset.remove();
        count--;
        console.log(count)
    }
}
button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.changedAreaValue').textContent = '';
    newFieldset.querySelector('.textArea').value = '';
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    fieldset.after(newFieldset);
    fieldset = newFieldset;
});

function orderTable() {
    const table = document.createElement('table');

    for (const beverage of document.getElementsByClassName('beverage')){
        const fields = beverage.getElementsByClassName('field');
        let drinkName;
        let milk;
        for (const e of fields[0].querySelector('select')){
            if (e.selected){
                drinkName = e.innerText;
                break;
            }
        }

        for (const e of fields[1].querySelectorAll('label')){
            const input = e.querySelector('input');
            if (input.checked){
                const span = e.querySelector('span')
                milk = span.innerText;
            }
        }

        let row = table.insertRow();
        const drinkCell = row.insertCell(0);
        drinkCell.style.borderStyle = 'solid';
        drinkCell.innerText = drinkName;
        const milkCell = row.insertCell(1);
        milkCell.innerText = milk;
        milkCell.style.borderStyle = 'solid';
    }
    let table1 = document.querySelector('.table_origin')
    table1.parentNode.replaceChild(table, table1);

}