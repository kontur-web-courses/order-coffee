const addPoint = document.querySelector(".add-button");
const formFieldset = document.querySelector(".beverage").cloneNode(true);
document.querySelector(".add-button").addEventListener("click", () => {
    const formFieldset = document.querySelector(".beverage").cloneNode(true);
    const len = document.querySelectorAll(".beverage").length;
    formFieldset.querySelector(".beverage-count").innerText = (`Напиток №${len + 1}`);
    addPoint.parentNode.before(formFieldset);
});