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
function Delete(button)
{
    const beverageFieldset = button.parentElement;
    if (count > 1) {
        fieldset = beverageFieldset.previousSibling;
        beverageFieldset.remove();
        count--;
        console.log(1)
    }
}
button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    fieldset.after(newFieldset);
    fieldset = newFieldset;
});
