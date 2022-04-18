const addButton = document.getElementsByClassName('add-button')[0];
const fieldsetClone = document.getElementsByClassName('beverage')[0];
const div = document.getElementById('div');
let counter = 2;
addButton.addEventListener('mousedown', function (){
    const fieldset = fieldsetClone.cloneNode(true);
    let replaceHeader = `Напиток №${counter}`;
    let replaceName = `milk${counter}`;
    let replace1 = fieldset.querySelector('.beverage-count');
    let replace2 = fieldset.querySelectorAll('input[name="milk"]');
    replace1.textContent = replaceHeader;
    for (let el of replace2){
        el.setAttribute('name', replaceName);
    }
    div.before(fieldset);
    counter ++;
});