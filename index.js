function getRightDrinks(drinksCount){
    const napitka = [2, 3, 4]
    const napitka100 = [12, 13, 14]
    if (drinksCount % 10 === 1 && drinksCount % 100 !== 11)
        return 'напиток';
    else if (drinksCount % 10 in napitka && (drinksCount % 100 in napitka100 || drinksCount % 100 < 10))
        return 'напитка';
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

let deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const beverageFieldset = button.parentElement;
        if (count > 1) {
            beverageFieldset.remove();
            count--;
            console.log(1)
        }
    });
});
button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    fieldset.after(newFieldset);
    fieldset = newFieldset;
});
