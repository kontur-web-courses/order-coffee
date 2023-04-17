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
        createTable();
    }
);

let createTable = function () {
    let selects = document.getElementsByTagName('select');
    let fields = document.getElementsByTagName('input');
    let areas = document.getElementsByTagName('textarea');
    for (let i = 0; i < document.querySelectorAll('.beverage').length; i++) {

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let selectElement = selects[i];
        td.textContent = selectElement.options[selectElement.selectedIndex].value;
        tr.append(td);
        let td1 = document.createElement('td');
        let flag = true;
        for (let j = 8 * i; j < 8 * i + 4; j++) {
            if (fields[j].checked) {
                td1.textContent = fields[j].value;
                flag = false;
            }
        }
        if (flag) td1.textContent = 'usual';
        tr.append(td1);
        let td2 = document.createElement('td');
        for (let j = 8 * i + 4; j < 8 * i + 8; j++) {
            if (fields[j].checked) {
                td2.textContent += `${fields[j].value}; `;
            }
        }
        tr.append(td2);
        let td3 = document.createElement('td');
        td3.textContent = areas[i].value;
        tr.append(td3);
        document.getElementsByClassName('body')[0].append(tr);
    }
}


const keywords = ['срочно', 'побыстрее', 'быстрее', 'поскорее', 'скорее', 'очень нужно'];

let textAreaFunc = function (textarea) {
    let text = textarea.value;
    let formattedText = ``;
    let paragraphs = textarea.parentElement.querySelectorAll('p');

    if (paragraphs.length > 0) {
        textarea.parentElement.removeChild(paragraphs[0]);
    }

    text.split(' ').forEach(word => {
        let f = true;
        for (let keyword of keywords) {
            let m = word.toLowerCase().match(keyword);
            if (m != null) {
                let start = word.slice(0, m.index);
                let middle = word.slice(m.index, m.index + m[0].length);
                let finish = word.slice(m.index + m[0].length, word.length);
                formattedText += ` ${start}<b>${middle}</b>${finish} `;
                f = false;
                break;
            }
        }
        if (f) formattedText += ` ${word} `;
    });

    let newParagraph = document.createElement('p');
    newParagraph.textContent = formattedText;
    textarea.parentElement.appendChild(newParagraph);
}
