let addButton = document.querySelector('.add-button');
let counter = 2;

addButton.onclick = function() {
    MakeNewForm();
}

function MakeNewForm()
{
    let form = document.querySelector('form');
    let fields = document.querySelectorAll("fieldset");
    let field = fields[0].cloneNode(true);
    let addBs = document.querySelector('.add-button');
    field.querySelector(".beverage-count").innerHTML="Напиток №"+String(document.querySelectorAll("fieldset").length+1);
    for (let attr of field.querySelectorAll('[name="milk"]')){
        attr.name = `milk${counter}`;
    }
    counter++;
    form.insertBefore(field, addBs.parentNode);
    addButton = document.querySelectorAll('.add-button')[document.querySelectorAll('.add-button').length-1];
    addButton.onclick = function() {
        MakeNewForm();
    }
    field.querySelector('.close-button').onclick = function (){
        field.querySelector('.close-button').closest('fieldset').remove();
    }
}
