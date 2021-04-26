let beverage = document.querySelector('.beverage');
let beverageCount = 1;
const addButton = document.querySelector('.add-button');

function closeButtonHandler(currentBeverage) {
    currentBeverage.remove();
}

function addButtonHandler() {
    let newBeverage = beverage.cloneNode(true);
    beverageCount++;
    newBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
    if (beverageCount == 2) {
        newBeverage.insertAdjacentHTML('afterBegin', '<button style="margin-left: 95%" id="button-close">X</button>');
    }
    addButton.insertAdjacentElement('beforeBegin', newBeverage);
    newBeverage.querySelector('#button-close')
        .addEventListener('click', (event) => closeButtonHandler(newBeverage));
    beverage = newBeverage;
}

addButton.addEventListener('click', addButtonHandler);

document.querySelector('form').addEventListener('submit', function () {
    document.body.insertAdjacentHTML('afterbegin', '<div class="bluredbg" style="    width: 100vw;\n' +
        '    height: 100vh;\n' +
        '    background-color: rgba(0, 0, 0, 0.6);\n' +
        '    backdrop-filter: blur(3px);\n' +
        '    position: fixed;\n' +
        '    top: 0;\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '    align-items: center;">\n' +
        '    <div class="modal" style="    width: 650px;\n' +
        '    max-height: 300px;\n' +
        '    background-color: whitesmoke;\n' +
        '    overflow-y: auto;\n' +
        '    border-radius: 16px;\n' +
        '    display: flex;\n' +
        '    flex-direction: column;">\n' +
        '        <button style="    width: 30px;\n' +
        '    align-self: flex-end;\n' +
        '    border-radius: 16px;\n' +
        '    margin-top: 3px;\n' +
        '    margin-right: 3px;">&#10006;</button>\n' +
        '        <p>ЗАКАЗ ПРИНЯТ</p>\n' +
        '    </div>\n' +
        '</div>')
})



