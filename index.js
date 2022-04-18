let coffee_list = [];
let last_number = 1;
function getForm(e) {
    let kek = document.createElement("div");
    let number = last_number++;
    let number2 = +e.target.getAttribute("data-number") + 1;
    kek.innerHTML =
        `      <div class="coffee-item">\n` +
        `      <fieldset class="beverage">\n` +
        `        <h4 class="beverage-count">Напиток № ${number2}</h4>\n` +
        `        <label class="field">\n` +
        `          <span class="label-text">Я буду</span>\n` +
        `          <select>\n` +
        `            <option value="espresso">Эспрессо</option>\n` +
        `            <option value="capuccino" selected>Капучино</option>\n` +
        `            <option value="cacao">Какао</option>\n` +
        `          </select>\n` +
        `        </label>\n` +
        `        <div class="field">\n` +
        `          <span class="checkbox-label">Сделайте напиток на</span>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="radio" name="milk-${number}" value="usual" checked />\n` +
        `            <span>обычном молоке</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="radio" name="milk-${number}" value="no-fat" />\n` +
        `            <span>обезжиренном молоке</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="radio" name="milk" value="soy" />\n` +
        `            <span>соевом молоке</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="radio" name="milk-${number}" value="coconut" />\n` +
        `            <span>кокосовом молоке</span>\n` +
        `          </label>\n` +
        `        </div>\n` +
        `        <div class="field">\n` +
        `          <span class="checkbox-label">Добавьте к напитку:</span>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="checkbox" name="options-${number}" value="whipped cream" />\n` +
        `            <span>взбитых сливок</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="checkbox" name="options-${number}" value="marshmallow" />\n` +
        `            <span>зефирок</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="checkbox" name="options-${number}" value="chocolate" />\n` +
        `            <span>шоколад</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="checkbox" name="options-${number}" value="cinnamon" />\n` +
        `            <span>корицу</span>\n` +
        `          </label>\n` +
        `        </div>\n` +
        `      </fieldset>\n` +
        `      <div>\n` +
        `        <button type="button" class="add-button" data-number="${number}">+ Добавить напиток</button>\n` +
        `      </div>\n` +
        `      </div>\n`;
    coffee_list.push(kek);
    document.querySelector(".coffee-list").appendChild(kek);
    kek.querySelector(".add-button").addEventListener('click', e => getForm(e));
    let counter = 0;
    document.querySelectorAll(".beverage-count").forEach(a => a.innerText = `Напиток № ${++counter}`)
}

document.querySelector(".add-button").addEventListener('click', e => getForm(e));