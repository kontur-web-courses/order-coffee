let formsCount = 1;

document.querySelector(".add-button").addEventListener('click', () => {
    formsCount++;
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    newForm.querySelector("h4").innerHTML = `Напиток №${formsCount}`;
    forms[forms.length - 1].after(newForm);
});

// document.querySelector('.submit-button').addEventListener('click', () => {
//
// })