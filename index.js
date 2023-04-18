let docForm = document.querySelector('form');
let beverageCount = 1;
let beveragePattern = docForm.querySelector('.beverage').cloneNode(true);

docForm
    .querySelector('.beverage')
    .querySelector('.close-fieldset-button')
    .addEventListener('click', (e) => {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    );

for (let checkBoxField of beveragePattern.querySelectorAll('.checkbox-field')) {
    let inputField = checkBoxField.querySelector('input');
    inputField.name = inputField.name + '1';
}

function AddNewBeverage () {
    beverageCount++;

    let newBeverage = beveragePattern.cloneNode(true);

    let submitBlocks = docForm.querySelectorAll('div');
    let newChildren = [];
    for (let child of docForm.children) {
        if (child.className === "beverage") {
            newChildren.push(child);
        }
    }

    docForm.replaceChildren(...newChildren);

    newBeverage.querySelector(".beverage-count").textContent = `Напиток №${beverageCount}`;
    for (let checkBoxField of beveragePattern.querySelectorAll('.checkbox-field')) {
        let checkField = checkBoxField.querySelector('input');
        checkField.name = checkField.name + beverageCount.toString();
    }

    docForm.appendChild(newBeverage);
    let newCross = document.createElement('div');
    newCross.className = 'lose-fieldset-button';
    newBeverage.appendChild(newCross);
    newBeverage
        .querySelector('.close-fieldset-button')
        .addEventListener('click', (e) => {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                beverageCount--;
            }
        );

    for (let block of submitBlocks) {
        if (block.className !== "field" && block.className !== 'close-fieldset-button')
            docForm.appendChild(block);
    }
}
docForm
    .querySelector(".add-button")
    .addEventListener("click", (e) => AddNewBeverage()
)

let readyModal = document.querySelector(".ready-modal");
let readyModalContent = document.querySelector(".ready-modal-content");
let closeReadyModel = document.querySelector(".close-ready-modal");
let readyModalText = document.querySelector(".ready-modal-text");
let table = document.createElement("table");
table.style.borderCollapse = "collapse";
docForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let row = table.insertRow();
    row.style.border = '1px solid black';
    let col = row.insertCell();
    col.textContent = "Напиток"
    col.style.border = '1px solid black'
    col = row.insertCell();
    col.textContent = "Молоколол"
    col.style.border = '1px solid black'
    col = row.insertCell();
    col.textContent = "Дополнительно"
    col.style.border = '1px solid black'
    for (let beverage of document.getElementsByClassName("beverage")) {
        let coffeeType = beverage.querySelector("select").value;
        let fields = beverage.querySelectorAll(".field");
        let milkType = '';
        for (let variant of fields[1].querySelectorAll('.checkbox-field')) {
            if (!variant.querySelector("input:checked"))
                continue;
            milkType = variant.querySelector("span").textContent;
            break;
        }
        let addons = [];
        for (let variant of fields[2].querySelectorAll('.checkbox-field')) {
            if (!variant.querySelector("input:checked"))
                continue;
            addons.push(variant.querySelector("span").textContent);
        }

        row = table.insertRow();
        row.style.border = '1px solid black';
        col = row.insertCell();
        col.textContent = coffeeType;
        col.style.border = '1px solid black';
        col = row.insertCell();
        col.textContent = milkType;
        col.style.border = '1px solid black';
        col = row.insertCell();
        col.textContent = addons.join(', ');
        col.style.border = '1px solid black';
    }
    readyModalContent.appendChild(table);
    readyModalContent.style.height = (20 + 8 * beverageCount).toString() + '%';

    let beverageWord = 'напитков';
    if (beverageCount % 10 === 1)
        beverageWord = 'напиток';
    if (beverageCount % 10 === 2 || beverageCount % 10 === 3 || beverageCount % 10 === 4)
        beverageWord = 'напитка';
    readyModalText.textContent = `Вы заказали ${beverageCount} ${beverageWord}`;
    readyModal.style.display = "block";
});

function closeModal() {
    readyModal.style.display = "none";
    table.textContent = '';
}

window.addEventListener("click", (e) => {
    if (e.target === readyModal || e.target === closeReadyModel) {
        closeModal();
    }
});

let timeKek = document.querySelector(".time-kek");
timeKek.querySelector("button").addEventListener('click', (e) => {
    let dateInput = timeKek.querySelector("input");
    let dateStr = dateInput.value;
    let [hours, minutes] = dateStr.split(':').map(Number);
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    console.log(date);
    console.log(date < new Date());
    if (date < new Date()) {
        dateInput.style.borderColor = 'red';
        alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее");
    }
    else {
        closeModal();
    }
})
