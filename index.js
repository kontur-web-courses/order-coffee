function handleClick() {
    if (document.querySelectorAll(".beverage").length !== 1) {
        this.parentNode.remove();
    }
}

const addPoint = document.querySelector(".add-button");
document.querySelector(".add-button").addEventListener("click", () => {
    const formFieldset = document.querySelector(".beverage").cloneNode(true);
    const len = document.querySelectorAll(".beverage").length;
    formFieldset.querySelector(".beverage-count").innerText = (`Напиток №${len + 1}`);
    addPoint.parentNode.before(formFieldset);
    const cross = document.querySelectorAll(".cross");
    for (const el of cross) {
        el.addEventListener("click", handleClick);
    }
});