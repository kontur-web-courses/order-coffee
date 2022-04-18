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
   document.querySelector('.close-dialog').addEventListener('click', ()=>{
       document.querySelector('#drinkDialog').close();
   })
});

function remove(smt){
    if(document.querySelectorAll('.beverage').length > 1)
        smt.parentElement.remove();
}