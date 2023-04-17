
let addForm = document.querySelector("button.add-button");
let countForms = 1;
addForm.addEventListener("click", () => {
    let formsCoffee = document.querySelectorAll("fieldset.beverage");
    let newFormCoffee = formsCoffee[0].cloneNode(true);
    let options = newFormCoffee.querySelectorAll("div.field > label > input");
    formsCoffee[countForms - 1].after(newFormCoffee);

    countForms += 1;
    let head4 = newFormCoffee.querySelector("h4.beverage-count");
    head4.innerHTML = `Напиток №${countForms}`;

    for (let i = 0; i < options.length; i++){
        options[i].name = `milk${countForms}`;
    }
});

function remove(form){
    if (countForms > 1){
        form.parentElement.remove();
        countForms -= 1;
    }
}
