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
    let selects = document.getElementsByTagName('select');
    let fields = document.getElementsByTagName('input');
    for (let i = 0; i < document.querySelectorAll('.beverage').length; i++) {

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let selectElement = selects[i];
        td.textContent = selectElement.options[selectElement.selectedIndex].value;
        tr.append(td);
        let td1 = document.createElement('td');
        let flag = true;
        for (let j = 8 * i; j < 8 * i + 4; j++) {
            console.log(fields[j]);
            if (fields[j].checked) {
                td1.textContent = fields[j].value;
                flag = false;
            }
        }
        if (flag) td1.textContent = 'usual';
        tr.append(td1);
        let td2 = document.createElement('td');
        for (let j = 8 * i + 4; j < 8 * i + 8; j++) {
            console.log(fields[j]);
            if (fields[j].checked) {
                td2.textContent += `${fields[j].value}; `;
            }
        }
        tr.append(td2);
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
