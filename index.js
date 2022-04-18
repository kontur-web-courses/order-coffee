'use strict';

/**
 * @param {number} id
 */
const FIELDSET_TEMPLATE = id => `
<h4 class="beverage-count">Напиток №${(id + 1)}</h4>
<button type="button" class="delete-button" data-id="${id}">X</button>
<label class="field">
    <span class="label-text">Я буду</span>
    <select name="drink_${id}">
        <option value="espresso">Эспрессо</option>
        <option value="capuccino" selected>Капучино</option>
        <option value="cacao">Какао</option>
    </select>
</label>
<div class="field">
    <span class="checkbox-label">Сделайте напиток на</span>
    <label class="checkbox-field">
        <input type="radio" name="milk_${id}" value="usual" checked/>
        <span>обычном молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk_${id}" value="no-fat"/>
        <span>обезжиренном молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk_${id}" value="soy"/>
        <span>соевом молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk_${id}" value="coconut"/>
        <span>кокосовом молоке</span>
    </label>
</div>
<div class="field">
    <span class="checkbox-label">Добавьте к напитку:</span>
    <label class="checkbox-field">
        <input type="checkbox" name="options_${id}" value="whipped cream"/>
        <span>взбитых сливок</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options_${id}" value="marshmallow"/>
        <span>зефирок</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options_${id}" value="chocolate"/>
        <span>шоколад</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options_${id}" value="cinnamon"/>
        <span>корицу</span>
    </label>
</div>
<div>
    <button type="button" data-id="${id}" class="add-button">+ Добавить напиток</button>
</div>`;


/**
 * @member {HTMLElement[]} elements
 */
class Storage {
    constructor() {
        this.elements = [];
    }

    init() {
        this.addElement(0, 0);
    }


    addElement(id, placeToAdd) {
        console.log({"foo": this.elements});
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id', `fieldset_${id}`);
        fieldset.setAttribute('class', 'beverage');

        fieldset.innerHTML = FIELDSET_TEMPLATE(id);
        const btn = fieldset.querySelector('button.add-button');
        btn.addEventListener('click', e => this.addElementAfterContext(e));

        const btnDelete = fieldset.querySelector('button.delete-button');
        btnDelete.addEventListener('click', e => this.deleteElement(e));

        const formElement = document.querySelector('#formFieldset');
        if (placeToAdd === 0) {
            formElement.appendChild(fieldset);
        } else {
            formElement.insertBefore(fieldset, this.elements[placeToAdd]);
        }

        this.elements = [...this.elements.slice(0, placeToAdd), fieldset, ...this.elements.slice(placeToAdd)];
        return fieldset;
    }

    addElementAfterContext(e) {
        const prevId = parseInt(e.target.dataset['id']);

        this.addElement(prevId + 1, prevId + 1);

        for (let i = prevId + 2; i < this.elements.length; i++) {
            const currentElement = this.elements[i];


            currentElement.setAttribute('id', `fieldset_${i}`);
            const header = currentElement.querySelector('h4');
            header.innerText = `Напиток №${i + 1}`;

            const select = currentElement.querySelector(`select[name="drink_${(i - 1)}"]`);
            select.setAttribute('name', `drink_${i}`);

            const allRadios = currentElement.querySelectorAll(`input[name="milk_${(i - 1)}"]`);
            for (const radio of allRadios) {
                radio.setAttribute('name', `milk_${i}`);
            }

            const button = currentElement.querySelector('button');
            button.setAttribute('data-id', (i + 1).toString());
        }
    }

    deleteElement(e) {
        const elementToDelete = parseInt(e.target.dataset['id']);

        if (this.elements.length === 1) {
            return;
        }

        for (let i = elementToDelete + 1; i < this.elements.length; i++) {
            const currentElement = this.elements[i];


            currentElement.setAttribute('id', `fieldset_${i}`);
            const header = currentElement.querySelector('h4');
            header.innerText = `Напиток №${i}`;

            const select = currentElement.querySelector(`select[name="drink_${(i)}"]`);
            select.setAttribute('name', `drink_${i - 1}`);

            const allRadios = currentElement.querySelectorAll(`input[name="milk_${(i)}"]`);
            for (const radio of allRadios) {
                radio.setAttribute('name', `milk_${i - 1}`);
            }

            const button = currentElement.querySelector('button');
            button.setAttribute('data-id', (i).toString());
        }

        const currentElement = this.elements[elementToDelete];
        currentElement.remove();

        this.elements = [...this.elements.slice(0, elementToDelete), ...this.elements.slice(elementToDelete + 1)];
    }
}

const storage = new Storage();
storage.init();




document.querySelector('.modal_close').addEventListener('click',  () => {
    document.querySelector('.modal-container').classList.toggle('hidden');
});

function pluralize(count, ...words) {
    if (count % 100 >= 5 && count % 100 <= 20 || count % 10 >= 5 || count % 10 === 0)
        return words[2];
    return count % 10 === 1 ? words[0] : words[1];
}

document.querySelector('.submit-button').addEventListener('click', e => {
    document.querySelector('.modal-container').classList.toggle('hidden');
    document.querySelector('.modal_header').textContent =
        `Вы заказали ${storage.elements.length} ${pluralize(storage.elements.length, 'напиток', 'напитка', 'напитков')}`;
    insertIntoTable(storage);
    e.preventDefault();
});

document.querySelector('form').addEventListener('submit', e => e.preventDefault());

// document.querySelector('.cccccccccc').addEventListener('change', e => {
//    document.querySelector('.bbbbbbb').textContent = parseTextArea(e.target.textContent);
// });

function parseTextArea(text) {
    return text.replace(/(срочно|быстрее|побыстрее|скорее|поскорее|очень нужно)/gi, '<b>$1<\b>');
}

document.querySelector('.order_submit').addEventListener('click', e => {
   const nowDate = new Date();
   const date = new Date();
   let timeInput = document.querySelector("#order_time");
   let time = timeInput.value.split(':');
   date.setHours(+time[0]);
   date.setMinutes(+time[1]);

   if (date <= nowDate) {
       timeInput.style.border = '2px solid red';
       setTimeout(() => alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее"), 0);
   } else {
       document.querySelector('.modal-container').classList.toggle('hidden');
   }
});

function insertIntoTable(storage) {
    let table = document.querySelector('.modal-table tbody');
    let str = "";
    for(let elem of storage.elements) {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.textContent = elem.querySelector('select').selectedOptions[0].textContent;
        tr.appendChild(tdName);

        let radioText = "";
        let tt = {'usual': 'обычное', 'no-fat': 'обезжиренное', 'soy': 'соевое', 'coconut': 'кокосовое'}
        elem.querySelectorAll('input[type="radio"]').forEach((x) => {
            if (x.checked){
                radioText = tt[x.value];
            }
        });
        let tdMilk = document.createElement('td');
        tdMilk.textContent = radioText;
        tr.appendChild(tdMilk);


        let dopText = [];
        elem.querySelectorAll('input[type="checkbox"]').forEach((x) => {
            if (x.checked){
                dopText.push(x.parentElement.querySelector('span').textContent);
            }
        });

        let tdDop = document.createElement('td');
        tdDop.textContent = dopText.join(', ');
        tr.appendChild(tdDop);

        table.appendChild(tr);
    }
}