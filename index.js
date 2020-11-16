const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');
const fieldset = document.querySelector('.beverage');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const textarea = document.querySelector('.textarea');
const resultTable = document.querySelector('.result-table').cloneNode(true);
const wordsToBoldPattens = [/побыстрее/gi, /срочно/gi, /быстрее/gi, /скорее/gi, /поскорее/gi, /очень нужно/gi ];
const wordsToBold = ['побыстрее', 'срочно', 'быстрее', 'скорее', 'поскорее', 'очень нужно' ];
resultTable.removeAttribute('id');
let count = 1;

const boldingText = function(str){
    for(let i = 0; i < wordsToBoldPattens.length; i++){
        str = str.replaceAll(wordsToBoldPattens[i], `<b>${wordsToBold[i]}</b>`);
    }
    return str;
}

closeModal.addEventListener('click', () => {
    modal.close();
});

const lableTextChange = function(input){
    input.addEventListener('input', () => {
        input.nextSibling.innerHTML = boldingText(input.value);
    })
}

lableTextChange(textarea);

const pluralizer = function(number) {
    let unit = number % 10;
    let decimal = parseInt(number % 100 / 10);
    if( decimal !== 1 && unit === 1)
        return 'напиток';
    else if(decimal !== 1 && (unit === 2 || unit === 3 || unit === 4))
        return 'напитка';
    return 'напитков';
}

const getOrderCountLine = function() {
    let newChild = document.createElement("p");
    newChild.textContent = `Вы заказали ${count} ${pluralizer(count)}`;
    newChild.id = 'orderCount';
    return newChild;
}

const coffeeName = function(coffee){
    switch(coffee){
        case 'espresso':
            return 'эспрессо';
        case 'capuccino':
            return 'капучино';
        case 'cacao':
            return 'какао';
    }
}

const milkName = function(milk){
    switch(milk){
        case 'usual':
            return 'обычное';
        case 'no-fat':
            return 'обезжиренное';
        case 'soy':
            return 'соевое';
        case 'coconut':
            return 'кокосовое';
    }
}

const optionsNames = function(options){
    let result = [];
    for(let option of options){
        switch(option){
            case 'whipped cream':
                result.push('взбитые сливки');
                break;
            case 'marshmallow':
                result.push('зефирки');
                break;
            case 'chocolate':
                result.push('шоколад');
                break;
            case 'cinnamon':
                result.push('коррица');
                break;
        }
    }
    return result.join(', ');
}

const getOrderArray = function(form) {
    let result= [];
    formData = new FormData(form);
    for(let i = 0; i < formData.getAll('coffee').length; i++){
        result.push([
            `${coffeeName(formData.getAll('coffee')[i])}`,
            `${milkName(formData.get(`milk${i + 1}`))}`,
            `${optionsNames(formData.getAll(`options${i + 1}`))}`,
            `${boldingText(formData.get(`wishes${i + 1}`))}`])
    }
    return result
}

const fillResultTable = function(table, form) {
    let resultTableCur = table.cloneNode(true);
    let order = getOrderArray(form);
    let tableBody = document.createElement('tbody');
    for(let i = 0; i <  order.length; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < order[i].length; j++){
            let th = document.createElement('th');
            th.innerHTML = order[i][j];
            tr.appendChild(th);
        }
        tableBody.appendChild(tr);
    }
    resultTableCur.appendChild(tableBody);
    return resultTableCur;
}

submitButton.addEventListener('click', e => {
    e.preventDefault();
    let orderCountP = document.getElementById('orderCount');
    if(orderCountP != null)
        orderCountP.remove();
    let modalTable = modal.querySelector('.result-table');
    if(modalTable != null)
        modalTable.remove();
    modal.appendChild(getOrderCountLine());
    modal.appendChild(fillResultTable(resultTable, form));
    modal.showModal();
});

const updateForm = function() {
    let fieldsets = document.querySelectorAll('.beverage');
    for(let i = 0; i < count; i++){
        fieldsets[i].querySelector('.beverage-count').textContent = `Напиток №${i + 1}`;
        let inputs = fieldsets[i].querySelectorAll('input');
        for (let input of inputs){
            input.name = `${input.name.substring(0, input.name.length - 1)}${i + 1}`;
        }
    }
}

const closeClick = function(button) {
    button.addEventListener('click', () => {
        if(count !== 1){
        button.parentElement.remove();
        count--;
        updateForm();
        }
    });
};

closeClick(closeButton);

addButton.addEventListener('click', () => {
    let newForm = fieldset.cloneNode(true);
    let cB = newForm.querySelector('.close');
    closeClick(cB);
    let ta = newForm.querySelector('.textarea');
    lableTextChange(ta);
    count++;
    newForm.querySelector('.beverage-count').textContent = `Напиток №${count}`;
    let inputs = newForm.querySelectorAll('input')
    for (let input of inputs){
        input.name = `${input.name.substring(0, input.name.length - 1)}${count}`
    }
    form.insertBefore(newForm, addButton.parentNode);
});