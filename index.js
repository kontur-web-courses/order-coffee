let drinkCounter = 1;
document.querySelector('.add-button').addEventListener('click', ()=>generateFieldSet());

function generateFieldSet(){
    drinkCounter += 1;
    let fs = document.createElement('fieldset');
    fs.appendChild(header(drinkCounter));
    fs.appendChild(labelledSelect(drinkCounter));
    fs.innerHTML+= '        <div class="field">\n' +
        '          <span class="checkbox-label">Сделайте напиток на</span>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="radio" name=' + `milk${drinkCounter}`+ ' value="usual" checked />\n' +
        '            <span>обычном молоке</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="radio" name=' + `milk${drinkCounter}`+ ' value="no-fat" />\n' +
        '            <span>обезжиренном молоке</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="radio" name=' + `milk${drinkCounter}`+ ' value="soy" />\n' +
        '            <span>соевом молоке</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="radio" name=' + `milk${drinkCounter}`+ ' value="coconut" />\n' +
        '            <span>кокосовом молоке</span>\n' +
        '          </label>\n' +
        '        </div>\n' +
        '        <div class="field">\n' +
        '          <span class="checkbox-label">Добавьте к напитку:</span>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="checkbox" name=' + `options${drinkCounter}`+ ' value="whipped cream" />\n' +
        '            <span>взбитых сливок</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="checkbox" name=' + `options${drinkCounter}`+ ' value="marshmallow" />\n' +
        '            <span>зефирок</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="checkbox" name=' + `options${drinkCounter}`+ ' value="chocolate" />\n' +
        '            <span>шоколад</span>\n' +
        '          </label>\n' +
        '          <label class="checkbox-field">\n' +
        '            <input type="checkbox" name=' + `options${drinkCounter}`+ ' value="cinnamon" />\n' +
        '            <span>корицу</span>\n' +
        '          </label>\n' +
        '        </div>'
    //document.querySelector('form').appendChild(fs);
    let bt = document.body.querySelector('.add-button').parentElement
    let form = document.querySelector('form');
    form.insertBefore(fs, bt);
}

function header(count){
    let h = document.createElement('h4')
    h.classList.add('beverage-count');
    h.textContent = `Напиток №${drinkCounter}`
    return h;
}

function labelledSelect(count){
    let label = document.createElement('label');
    label.classList.add("field");
    let span = document.createElement('span');
    span.classList.add('label-text');
    span.textContent = 'Я буду';
    label.appendChild(span);
    label.appendChild(generateSelect());
    return label;
}

function generateSelect(){
    let sel = document.createElement('select')
    sel.appendChild(generateOption("espresso", "Эспрессо"));
    sel.appendChild(generateOption("capuccino", "Капучино"));
    sel.appendChild(generateOption("cacao", "Какао"));
    return sel;
}

function generateOption(val, text){
    let opt = document.createElement('option')
    opt.value = val;
    opt.textContent = text;
    return opt;
}