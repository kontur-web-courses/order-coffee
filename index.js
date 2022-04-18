drinkCounter = 1;

document.querySelector(".add-button")
        .addEventListener("click", () => {
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    let headerText = newForm.querySelector("h4").innerHTML;
    drinkCounter += 1;
    newForm.querySelector("h4").innerHTML = `Напиток №${drinkCounter}`;
    for (let radio of newForm.querySelectorAll("input[type=radio]")) {
        radio.name = "milk" + drinkCounter;
    }
    forms[forms.length - 1].after(newForm);
});

function removeDrink(target) {
    if (document.querySelectorAll(".beverage").length > 1) {
        target.parentElement.remove();
        drinkCounter -= 1;
        let forms = document.querySelectorAll('.beverage-count')
        for (let i = 0; i < forms.length; i++) {
            forms[i].innerHTML = `Напиток №${i+1}`;
        }
    }
}

document.querySelector(".submit-button")
        .addEventListener("click", (e) => {
    document.querySelector("#drinkConfDialog").showModal();

    document.querySelector(".modal-content").innerHTML = `Вы заказали ${drinkCounter} ${endOfBeverage()}`;
    document.querySelector(".close-dialog")
            .addEventListener("click", (e) => {
        document.querySelector("#drinkConfDialog").close();
    });
});

function endOfBeverage() {
    dC = drinkCounter % 100;
    if (dC > 10 && dC < 20) {
      return "напитков";
    }
    if (dC % 10 > 1 && dC % 10 < 5) {
      return "напитка";
    }
    if (dC % 10 == 1) {
      return "напиток";
    }
    return "напитков";
  }
