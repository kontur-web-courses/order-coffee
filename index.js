const fieldSet = document.querySelector('fieldset')
const addDrink = document.querySelector('button[class="add-button"]')
const readyButton = document.querySelector('button[class="submit-button"]')
let formCounter = 2;
addDrink.addEventListener('click', (evt) => {
    const newFieldSet = fieldSet.cloneNode(true);
    const closeButton = newFieldSet.querySelector('button[class="close"]');
    closeButton.addEventListener('click', (evt1 => {
        newFieldSet.style.display = 'none';
    }))
    const newh4 = document.createElement("h4");
    const oldh4 = newFieldSet.querySelector('h4[class="beverage-count"]')
    newh4.textContent = `Напиток №${formCounter}`;
    newh4.className = 'beverage-rcount';
    formCounter++;
    oldh4.remove();
    newFieldSet.prepend(newh4);
    document.body.append(newFieldSet);
});
const modal = document.querySelector('div[class="modal"]')
const span = document.querySelector('span[class="cross"]')
readyButton.addEventListener('click', (evt) => {
    modal.style.display = "block";
});
// span.addEventListener('click', (evt) => {
//     modal.style.display = "none";
// });
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }