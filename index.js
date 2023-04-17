let countOrders = 1;
document.querySelector(".overlay").style.display = "none";
function closeClone(button){
    const parent = button.parentElement;
    if (countOrders>1){
        parent.remove()
        countOrders--;
    }
    let beverages = document.querySelectorAll(".beverage");
    for (let i = 1; i < beverages.length+1; i++) {
        beverages[i-1].querySelector(".beverage-count").textContent = `Напиток №${i}`
    }
}

document.querySelector(".add-button").addEventListener("click", function () {
    let beverage = document.querySelectorAll(".beverage");
    let clone = beverage[beverage.length - 1].cloneNode(true);
    countOrders++;
    clone.querySelector(".beverage-count").textContent = `Напиток №${countOrders}`;
    beverage[beverage.length - 1].after(clone);
})

document.querySelector(".submit-button").addEventListener("click", function () {
    let lb = document.querySelector(".lightbox");
    document.querySelector(".overlay").style.display = "flex";
    const p = document.createElement('p');

    if (countOrders % 10 > 1 && countOrders % 10 < 5 && (countOrders < 10 || countOrders > 20))
        p.textContent = `Вы заказали ${countOrders} напитка`;
    else
        p.textContent = `Вы заказали ${countOrders} напитков`;
    lb.appendChild(p);

    let beverages = document.querySelectorAll(".beverage");
    for (const beverage of beverages) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = beverage.querySelector('[name="type-coffee"]').value

        tr.appendChild(td1)

        const td2 = document.createElement('td');
        td2.textContent = beverage.querySelector('[name="milk"]').value

        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = beverage.querySelector('[name="options"]').value

        tr.appendChild(td3);
        document.querySelector(".table").appendChild(tr);
    }
});

function closeBox() {
    document.querySelector(".overlay").style.setProperty("display", "none");
}