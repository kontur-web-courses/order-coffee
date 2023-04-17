let countOrders = 1;
document.querySelector(".overlay").style.display = "none";
document.querySelector(".add-button").addEventListener("click", function () {
    let beverage = document.querySelector(".beverage");
    let clone = beverage.cloneNode(true);
    countOrders++;
    clone.querySelector(".beverage-count").textContent = `Напито №${countOrders}`;
    beverage.after(clone);
})

document.querySelector(".submit-button").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "flex";
});
