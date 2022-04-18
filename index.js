const modalContent = document.querySelector('.modal-content');
const modalMessage = document.querySelector('.modal-content .message');
let beverages = document.querySelectorAll('.beverage');
const table = document.querySelector('table');
const englishToRussian = {
        "capuccino": "капучино",
        "espresso": "эспрессо",
        "cacao": "какао",
        "usual": "обычное",
        "soy": "соевое",
        "no-fat": "обезжиренное",
        "coconut": "кокосовое",
        "cinnamon": "корица",
        "marshmallow": "зефирки",
        "chocolate": "шоколад",
        "whipped cream": "взбитые сливки",
};


function updateOrdersNumbers (){
        beverages = document.querySelectorAll('.beverage');
        for (let i = 0; i < beverages.length; i++){
                beverages[i].querySelector('.beverage-count').innerText = `Напиток №${i + 1}`;
        }
}

function updateCrossListeners() {
        document
            .querySelectorAll('.cross')
            .forEach(cross => {
                    cross.addEventListener('click', evt => {
                            if (beverages.length > 1){
                                    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
                                    updateOrdersNumbers();
                            }
                    })});
}

function getWordInCorrectDeclension(number){
        if (number % 10 === 1 && number % 100 !== 11) return `напиток`;
        else if (10 < number % 100 && number % 100 < 20 || (number - 1) % 10 >= 4) return `напитков`;
        return `напитка`;
}

function updateModalContent() {
        modalMessage.innerText = `Вы заказали ${beverages.length} ${getWordInCorrectDeclension(beverages.length)}`;
        updateTable();
}

function updateTable() {
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = "";
        for (let beverage of beverages)
                tbody.innerHTML += `<tr>
                                    <td>${englishToRussian[beverage.querySelector('option:checked').value]}</td>
                                    <td>${englishToRussian[beverage["form"]['milk'].value]}</td>
                                    <td>${[...beverage.querySelectorAll('input[type=checkbox]:checked')]
                                                .map(c => englishToRussian[c.value]).join(', ')}</td>
                                    </tr>`;
}

document.querySelector('.add-button')
    .addEventListener('click', evt => {
        let fieldset = document.querySelector('.beverage');
        let form = fieldset.parentNode;
        let newFieldSet = fieldset.cloneNode(true);
        form.insertBefore(newFieldSet, fieldset);
        updateOrdersNumbers();
        updateCrossListeners();
    }
);

document.querySelector('form')
    .addEventListener('submit', evt => {
            modalContent.style.display = 'flex';
            updateModalContent();
            evt.preventDefault();
    });

document.querySelector('.modal-window .cross')
    .addEventListener('click', evt => {
            modalContent.style.display = 'none';
    });