let counter = 1;
let nameIndex = 0;
const form = document.querySelector('form');
const sourceBlock = document.querySelector(".beverage");
const pattern = document.querySelector(".beverage").cloneNode(true);
sourceBlock.querySelectorAll('input[name="milk"]').forEach(t => t.name = `milk${nameIndex}`);
sourceBlock.querySelectorAll('input[name="options"]').forEach(t => t.name = `options${nameIndex}`);
const el = document.querySelector("#overlay");
const tableBody = document.querySelector("tbody");

function fillTable() {
    for (let fieldset of form.querySelectorAll('.beverage')) {
        const selector = fieldset.querySelector('select');
        const drink = selector.options[selector.selectedIndex].text;

        const milk = fieldset.querySelector('.milk:checked')
            .parentNode
            .querySelector("span")
            .innerText;
        const adds = Array.from(fieldset.querySelectorAll('input[name="options"]:checked'))
            .map(add => add.value);

        const row = document.createElement('tr');
        row.innerHTML = `<td>${drink}</td><td>${milk}</td><td>${adds.join(', ')}</td>`
        tableBody.appendChild(row);
    }
}

function removeBlock(block) {
    return function () {
        if (counter > 1) {
            form.removeChild(block);
            counter--;
        }
    }
}

function hideAndShow(hide) {
    if (!hide) {
        form.classList.add('blurBackground');
        el.style.visibility = "visible";
    } else {
        form.classList.remove('blurBackground');
        el.style.visibility = "hidden";
    }
}

function getCorrectWord(number) {
    const lastDigit = number % 10;
    const secondLastDigit = Math.floor(number % 100 / 10);

    if (lastDigit === 1 && secondLastDigit !== 2) return "напиток";
    return (1 < lastDigit && lastDigit < 5) ? "напитка" : "напитков";
}

sourceBlock
    .querySelector('.delete-button')
    .addEventListener('click', removeBlock(sourceBlock));

const addButton = document.querySelector(".add-button");
const readyButton = document.querySelector(".submit-button");
const closeOverlayButton = document.querySelector("#overlay-close");

addButton
    .addEventListener("click", () => {
        const currentForm = pattern.cloneNode(true);
        currentForm.querySelector('.beverage-count').innerText = `Напиток №${++counter}`;
        currentForm
            .querySelector('.delete-button')
            .addEventListener('click', removeBlock(currentForm));
        form.insertBefore(currentForm, addButton.parentNode);
        nameIndex++;
        currentForm.querySelectorAll('input[name="milk"]').forEach(t => t.name = `milk${nameIndex}`);
        currentForm.querySelectorAll('input[name="options"]').forEach(t => t.name = `options${nameIndex}`);
    });

readyButton
    .addEventListener("click", (event) => {
        event.preventDefault();
        fillTable();
        el.querySelector("p").innerText += `\nВы заказали ${counter} ${getCorrectWord(counter)}`;
        hideAndShow(false);
    });

closeOverlayButton
    .addEventListener("click", () => hideAndShow(true));