const butt = document.querySelector(".add-button");
let count = 1;
butt.addEventListener("click", () => {
    count++;
    const forms = document.querySelectorAll(".beverage");
    const clonesForm = forms[forms.length - 1].cloneNode(true);
    clonesForm.querySelector("h4").textContent = `Напиток №${count}`;
    forms[forms.length - 1].after(clonesForm);
});
function remove(elem) {
    const forms = document.querySelectorAll('.beverage');
    if (forms.length > 1) {
        elem.parentElement.remove();
    }
}