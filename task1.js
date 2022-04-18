'use strict';

/**
 * @param {number} id
 */
const FIELDSET_TEMPLATE = id => `
<h4 class="beverage-count">Напиток №${(id + 1)}</h4>
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
        const btn = fieldset.querySelector('button');
        btn.addEventListener('click', e => this.addElementAfterContext(e));


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

            const nextValue = i + 1;

            currentElement.setAttribute('id', `fieldset_${nextValue}`);
            const header = currentElement.querySelector('h4');
            header.innerText = `Напиток №${i + 1}`;

            const select = currentElement.querySelector(`select[name="drink_${(i - 1)}"]`);
            select.setAttribute('name', nextValue.toString());

            const allRadios = currentElement.querySelectorAll(`input[name="milk_${(i - 1)}"]`);
            for (const radio of allRadios) {
                radio.setAttribute('name', nextValue.toString());
            }

            const button = currentElement.querySelector('button');
            button.setAttribute('data-id', nextValue.toString());
        }
    }
}

const storage = new Storage();
storage.init();
