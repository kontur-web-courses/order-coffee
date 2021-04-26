const button = document.querySelector(".add-button");
button.addEventListener("click", () => {
    const forms = document.querySelectorAll(".beverage");
    const newForm = forms[forms.length - 1].cloneNode(true);
    const title = newForm.querySelector('.beverage-count').textContent;
    const numberOfDrink = title.slice(title.indexOf("№") + 1, title.length) - -1;
    newForm.querySelector("h4").textContent = `Напиток №${numberOfDrink}`;

    for (let radio of newForm.querySelectorAll("input[type=radio]")) {
        radio.name = "milk" + numberOfDrink;
    }
    forms[forms.length - 1].after(newForm);
});

function remove(obj) {
    const forms = document.querySelectorAll('.beverage');
    if (forms.length > 1) {
        obj.parentElement.remove();
    }
}

document.querySelector('.submit-button').addEventListener('click', () => {
    document.querySelector('#orderDialog').showModal();

    document.querySelector('.closeDialog').addEventListener('click',() => {
        document.querySelector('#orderDialog').close();
    });
});




