drinkCounter = 1;

document.querySelector(".add-button")
    .addEventListener("click", () => {
        let forms = document.querySelectorAll(".beverage");
        let newForm = forms[forms.length - 1].cloneNode(true);
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
        constructTable();
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


function constructTable() {
  let table = document.querySelector("table");
  table.innerHTML = "";
  table.border = 12;
  table.style.borderColor = "aquamarine";


  let header = document.createElement("tr");
  header.classList.add("order-cell");
  for (let headerStr of ["Напиток", "Молоко", "Дополнительно"]) {
    let column = document.createElement("th");
    column.innerHTML = headerStr;
    header.append(column);
  }
  table.append(header);

  for (let form of document.querySelectorAll(".beverage")) {
    let line = document.createElement("tr");
    let drink = document.createElement("td");

    let drinkName = '';
    let select = form.getElementsByTagName('select')[0];
    for (let i = 0; i < 4; i++)
        if (select[i].selected === true)
            drinkName = select[i].innerHTML;

    drink.innerHTML = drinkName;
    line.append(drink);

    let milk = document.createElement("td");
    milk.innerHTML = form.querySelector("input[type=radio]:checked + span").innerHTML;
    line.append(milk);

    let additional = document.createElement("td");
    for (let additionalObj of form.querySelectorAll("input[type=checkbox]:checked + span")) {
        additional.innerHTML += `${additionalObj.innerHTML}\n`;
    }
    line.append(additional);
    table.append(line);
  }
}