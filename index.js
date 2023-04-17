const addButton = document.querySelector('.add-button');

const deleteButton = document.querySelector('.delete-button');
const submitButton = document.querySelector('.submit-button');
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно

let popupText = document.querySelector('.popup_text');

let count = 1;
addButton.addEventListener('click', function () {
    const sets = document.querySelectorAll('fieldset');
    const fieldset = sets[sets.length - 1];
    const node = document.querySelector('fieldset').cloneNode(true);

    const milks = node.querySelectorAll("*[name='milk']");
    for (const milk of milks) {
        milk.name = `milk${count}`;
    }

    for (const e of node.children) {
        console.log(e.tagName)
        if (e.className === 'beverage-count') {
            e.textContent = `Напиток №${++count}`;
        }

        if (e.className === 'close-button') {
            e.addEventListener('click', function () {
                node.remove();
                count--;
            });
        }
    }

    fieldset.after(node);
});

function declOfNum(n) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
        return 'напитков';
    }
    if (n1 > 1 && n1 < 5) {
        return 'напитка';
    }
    if (n1 === 1) {
        return 'напиток';
    }
    return 'напитков';
}

deleteButton.addEventListener('click', function () {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
    popupText.textContent += ' Вы заказали ' + declOfNum(count);
})

let data = new FormData(document.querySelector('form'));

let table = document.querySelector('.table');
submitButton.addEventListener('click', () => {
    for (let el of data) {
        console.log(el);
    }
    const row = table.insertRow(-1);
    const type = row.insertCell(0);
    const milk = row.insertCell(1);
    const options = row.insertCell(2);
    type.innerHTML = document.getElementById("type").value;
    milk.innerHTML = document.getElementById("milk").value;
    options.innerHTML = document.getElementById("options").value;
})

// function add() {
//     document.getElementById("show").value = document.getElementById("milk").textContent;
//     document.getElementById("show").value = document.getElementById("options").textContent;
//     document.getElementById("show").value = document.getElementById("additive").textContent;
// }