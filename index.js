let countOrders = 1;
document.querySelector(".overlay").style.display = "none";
function closeClone(button) {
    let parent = button.parentElement;
    let beverages = document.querySelectorAll(".beverage");

    if (countOrders > 1) {
        parent.remove();
        countOrders--;
    }

    for (let i = 1; i < beverages.length + 1; i++) {
        beverages[i - 1].querySelector(".beverage-count").textContent = `Напиток № ${i}`;
    }
}

document.querySelector(".add-button").addEventListener("click", function () {
    let beverage = document.querySelectorAll(".beverage");
    let clone = beverage[beverage.length - 1].cloneNode(true);
    let milks = clone.querySelectorAll("*[name='milk']");

    let buttons = clone.querySelectorAll('input[type=radio]');
    for(let btn of buttons)
        btn.name = 'milk' + countOrders + 1;

    countOrders++;
    clone.querySelector(".beverage-count").textContent = `Напиток №${countOrders}`;
    beverage[beverage.length - 1].after(clone);

})

document.querySelector(".submit-button").addEventListener("click", function (ev) {
    ev.preventDefault();
    let lb = document.querySelector(".lightbox");

    document.querySelector(".overlay").style.display = "flex";
    let p = document.createElement('p');

    if (countOrders % 10 > 1 && countOrders % 10 < 5 && (countOrders < 10 || countOrders > 20))
        p.textContent = `Вы заказали ${countOrders} напитка`;
    else
        if (countOrders % 10 == 1 && countOrders != 11)
            p.textContent = `Вы заказали ${countOrders} напиток`;
        else
            p.textContent = `Вы заказали ${countOrders} напитков`;

    lb.appendChild(p);

    let beverages = document.querySelectorAll(".beverage");
    console.log(beverages);
    let dict = {"usual": "обычное", "no-fat": "обезжиренное", "soy": "соевое", "coconut": "кокосовое", "espresso": "Эспрессо", "capuccino": "Капучино", "cacao": "Какао", "whipped cream": "взбитые сливки", "marshmallow": "зефир", "chocolate": "шоколад", "cinnamon":"корица"};
    for (let beverage of beverages) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        td.textContent = dict[beverage.querySelector('*[name="type-coffee"]').value];
        tr.appendChild(td);

        td = document.createElement('td');
        beverage.querySelectorAll('*[type="radio"]').forEach((x) => {
            if (x.checked) {
                td.innerText += dict[x.parentElement.querySelector('*[type="radio"]').value];
            }
        });
        tr.append(td);

        td = document.createElement('td');
        beverage.querySelectorAll('*[name="options"]').forEach((x) => {
            if (x.checked) {
                if (td.innerText.length !== 0) {
                    td.innerText += ", ";
                }
                td.innerText += dict[x.parentElement.querySelector('*[name="options"]').value];
            }
        });
        tr.append(td);

        document.querySelector(".table").appendChild(tr);
        document.querySelector(".table").style.display = "table";
    }
});

function closeBox() {
    document.querySelector(".overlay").style.setProperty("display", "none");
}
