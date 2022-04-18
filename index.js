let size = 1;
let coffee_map = {};
let last_number = 1;
let milk_types = {
    "soy": "соевое",
    "usual": "обычное",
    "no-fat": "обезжиренное",
    "cocount": "кокосовое",
};

let additional_types = {
    "whipped cream": "сливки",
    "marshmallow": "зефирок",
    "chocolate": "шоколад",
    "cinnamon": "корицу",
}

function getForm(e) {
    let kek = document.createElement("div");
    let number = last_number++;
    size++;
    let number2 = +e.target.getAttribute("data-number") + 1;
    kek.id = `coffee-item-${number}`;
    kek.classList = ['coffee-item'];
    kek.innerHTML =
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
        `        <div class="field field-1">\n` +
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
        `            <input type="radio" name="milk-${number}" value="soy" />\n` +
        `            <span>соевом молоке</span>\n` +
        `          </label>\n` +
        `          <label class="checkbox-field">\n` +
        `            <input type="radio" name="milk-${number}" value="coconut" />\n` +
        `            <span>кокосовом молоке</span>\n` +
        `          </label>\n` +
        `        </div>\n` +
        `        <div class="field field-2">\n` +
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
        `      </div>\n`;
    coffee_map[`coffee-item-${number}`] = kek;
    document.querySelector(".coffee-list").insertBefore(kek, document.getElementById(`coffee-item-${number2 - 1}`));
    // document.querySelector(".coffee-list").appendChild(kek);
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

function getNumberInForm(count) {
    let cc = count % 100;
    if (cc === 1) {
        return "напиток";
    } else if (cc <= 4) {
        return "напитка";
    } else {
        return "напитков";
    }
}

document.querySelector(".add-button").addEventListener('click', e => getForm(e));
document.querySelector(".delete-item").addEventListener('click', e => deleteCoffee(e));

coffee_map['coffee-item-0'] = document.getElementById("coffee-item-0")

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("close");


btn.onclick = function (e) {
    modal.style.display = "block";
    e.preventDefault();

    document.querySelector(".count-coffee").innerText = `Вы заказали ${size} ${getNumberInForm(size)}`;
    let kek = document.querySelector(".table-body")

    for (const coffee of Object.keys(coffee_map)) {
        let line = document.createElement("tr");
        let coffeType = document.createElement("td");
        coffeType.innerText = coffeType.innerText = coffee_map[coffee].querySelector("select").selectedOptions[0].innerText;
        line.appendChild(coffeType);
        let milkType = document.createElement("td");
        console.log(coffee);
        milkType.innerText = milk_types[coffee_map[coffee].querySelector(".field-1  input:checked").value];
        line.appendChild(milkType);

        let additionals = document.createElement("td");
        let ans = ""
        document.querySelectorAll(".field-2  input:checked").forEach(a => ans += additional_types[a.value] + ",");

        additionals.innerText = ans.slice(0, ans.length - 1);
        line.appendChild(additionals);
        kek.appendChild(line);
    }
    document.querySelector("p.wish-list").innerText = document.querySelector("textarea.wish-list-area").value;
    document.querySelector(".table-body")

}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var btnSub = document.getElementById("submit");

btnSub.onclick = function(e) {
    let time = document.getElementById("time");
    let value = time.value.split(':')
    let now = new Date().toLocaleString().split(' ')[1].split(':');
    if (++value[0] > ++ now[0] || (value[0] === now[0] && ++value[1] >= ++ now[1])){
        modal.style.display = "none";
    }
    else{
        alert("Мы не умеем перемещаться во времени. Выберите время позже, чем текущее")
        time.style.border = "1px solid red"
    }
}