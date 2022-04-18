let size = 1;
let coffee_map = {};
let last_number = 1;
function getForm(e) {
    let kek = document.createElement("div");
    let number = last_number++;
    size++;
    let number2 = +e.target.getAttribute("data-number") + 1;
    kek.innerHTML =
        `      <div class="coffee-item" id="coffee-item-${number}">\n` +
        `      <fieldset class="beverage">\n` +
        `                      <button id="closeForm" class="delete-item" data-coffee-item="coffee-item-${number}">&times;</button>` +
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
    coffee_map[`coffee-item-${number}`] = kek;
    document.querySelector(".coffee-list").appendChild(kek);
    kek.querySelector(".add-button").addEventListener('click', e => getForm(e));
    kek.querySelector(".delete-item").addEventListener('click', e => deleteCoffee(e));

    let counter = 0;
    document.querySelectorAll(".beverage-count").forEach(a => a.innerText = `Напиток № ${++counter}`)
}

function deleteCoffee(e) {
    e.preventDefault();
    e.stopPropagation();
    if (size <= 1) {
        return;
    }
    size--;
    let id_for_delete = e.target.getAttribute("data-coffee-item");
    delete coffee_map[id_for_delete];
    document.getElementById(id_for_delete).remove();
    let counter = 0;
    document.querySelectorAll(".beverage-count").forEach(a => a.innerText = `Напиток № ${++counter}`)
}

document.querySelector(".add-button").addEventListener('click', e => getForm(e));
document.querySelector(".delete-item").addEventListener('click', e => deleteCoffee(e));


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("close");


btn.onclick = function(e) {
    modal.style.display = "block";
    e.preventDefault();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}