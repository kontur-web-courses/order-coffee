
let addForm = document.querySelector("button.add-button");
let countForms = 1;
addForm.addEventListener("click", () => {
    let formCoffee = document.querySelectorAll("fieldset.beverage")[countForms - 1];
    let newFormCoffee = formCoffee.cloneNode(true);

    countForms += 1;
    let head4 = newFormCoffee.querySelector("h4.beverage-count");
    head4.innerHTML = `Напиток №${countForms}`;
    formCoffee.parentNode.insertBefore(newFormCoffee, formCoffee.nextSibling);
})
