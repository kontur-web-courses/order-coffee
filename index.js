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
function handle(countOnClickAddButton) {
    let strNum = countOnClickAddButton.toString().slice(-2);
    if (countOnClickAddButton < 10) strNum = '0' + strNum;
    let correctEnd = strNum[0] !== '1' && nums234.includes(strNum[1]) ? 'ка' :
        strNum[0] !== '1' && num1.includes(strNum[1]) ? 'ок' : 'ков';
    console.log(`Вы заказали ${countOnClickAddButton} напит${correctEnd}`);
}

function remove(form){
    if (document.querySelectorAll('.beverage').length > 1) {
        form.parentElement.remove();
    }
}

let modal = document.getElementsByClassName('modal')[0];
let btn = document.getElementsByClassName('submit-button')[0];
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click" , (event) => {
    event.preventDefault();
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

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
