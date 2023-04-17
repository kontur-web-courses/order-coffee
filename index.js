let addButton = document.getElementsByClassName('add-button')[0];
let countOnClickAddButton = 1;
addButton.addEventListener('click', e => {
    let beverages = document.querySelectorAll('.beverage');
    let beverage = beverages[beverages.length - 1];
    let clone = beverage.cloneNode(true);
    countOnClickAddButton++;
    clone.querySelector('.beverage-count').textContent = `Напиток №${countOnClickAddButton}`;
    beverage.after(clone);
})

nums234 = ['2', '3', '4']
num1 = ['1']

function handle(count) {
    let strNum = count.toString().slice(-2);
    if (count < 10) strNum = '0' + strNum;
    let correctEnd = strNum[0] !== '1' && nums234.includes(strNum[1]) ? 'ка' :
        strNum[0] !== '1' && num1.includes(strNum[1]) ? 'ок' : 'ков';
    return `Вы заказали ${count} напит${correctEnd}`;
}

let countOnClickRemoveButton = 0;

function remove(form) {
    if (document.querySelectorAll('.beverage').length > 1) {
        form.parentElement.remove();
        countOnClickRemoveButton++;
    }
}


let modal = document.getElementsByClassName('modal')[0];
let btn = document.getElementsByClassName('submit-button')[0];
let span = document.getElementsByClassName("close")[0];
let table = document.getElementsByClassName('body')[0];
span.addEventListener("click", () => {
    modal.style.display = "none";
});

btn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
        let modalContent = document.querySelector('.beverage-count-in-order');
        modalContent.innerText = handle(countOnClickAddButton - countOnClickRemoveButton);
        func();
    }
);

let func = function () {
    for (let beverage of document.querySelectorAll('.beverage')) {
        let tr = document.createElement('tr');
        let currentBeverage = beverage.getElementsByClassName('field');
        let td = document.createElement('td');
        let e = document.getElementsByTagName('select');
        td.innerText = e.options[e.selectedIndex].text;
        tr.append(td);
        td = document.createElement('td');
        let elems = currentBeverage.getElementsByClassName('milk');
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].checked) {
                td.innerText = elems[i].value;
                tr.append(td);
            }
        }
        td = document.createElement('td');
        let elem = currentBeverage.getElementsByClassName('options');
        for (let i = 0; i < elem.length; i++) {
            if (elem[i].checked) {
                td.innerText += elem[i].value;
                tr.append(td);
            }
        }
        document.getElementsByClassName('body')[0].append(tr);
    }
}

const textarea = document.getElementsByClassName('textarea')[0];
const userText = document.getElementsByClassName('checkbox-field-textarea')[0];
const keywords = ['срочно', 'быстрее', 'побыстрее', 'скорее', 'поскорее', 'очень нужно'];

textarea.addEventListener('input', () => {
    let text = textarea.value;
    let formattedText = ``;
    let paragraphs = userText.querySelectorAll('p');

    if (paragraphs.length > 0) {
        userText.removeChild(paragraphs[0]);
    }

    text.split(' ').forEach(word => {
        if (keywords.includes(word.toLowerCase())) {
            formattedText += ` <b>${word}</b> `;
        } else {
            formattedText += ` ${word} `;
        }
    });

    let newParagraph = document.createElement('p');

    newParagraph.textContent = formattedText;
    userText.appendChild(newParagraph);
});
>>>>>>> ef0ae7c65fa2992d10c94f7195f11a8a48f1aabe
