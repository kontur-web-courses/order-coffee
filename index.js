const addButton = document.querySelector('.add-button');

let count = 1;
addButton.onclick = function () {
    const fieldsets = document.querySelectorAll('fieldset');
    const fieldset = fieldsets[fieldsets.length - 1];
    const newNode = document.querySelector('fieldset').cloneNode(true);

    const milk = newNode.querySelectorAll("*[name='milk']");
    for (const e of milk) {
        e.name = `milk${count}`;
    }

    for (const e of newNode.children) {
        console.log(e.tagName)
        if (e.className === 'beverage-count') {
            e.textContent = `Напиток №${++count}`;
        }

        if (e.className === 'close-button') {
            e.onclick = function () {
                newNode.remove();
            }
        }
    }

    fieldset.after(newNode);
}

const submitButton = document.querySelector('.submit-button');
submitButton.onclick = function (event) {
    event.preventDefault()
    const overlay = document.querySelector('.overlay');
    overlay.style.visibility = 'visible';
    const modal = document.querySelector('.modal');

    for (const child of modal.children) {
        if (child.className === 'status-order') {
            const num = document.querySelectorAll('fieldset').length;
            const mod = num % 10;
            child.textContent = `Заказ принят! Вы заказали ${num} ${num !== 11 && mod === 1 ?
                'напиток'
                : (num > 20 && (mod === 2 || mod === 3 || mod === 4)) || (num >= 2 && num <= 4) ?
                    'напитка'
                    : 'напитков'}`;
        }
    }
}

const closeNodeButton = document.querySelector('.close-model');
closeNodeButton.onclick = function () {
    let overlay = document.querySelector('.overlay');
    overlay.style.visibility = 'hidden';
}

