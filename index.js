let drinkNumber = 0
let drinksCount = 0
document.getElementById("add-button").addEventListener('click', addDrink);

function addDrink(){
    drinkNumber++;
    drinksCount++;
    let elem = document.getElementById('drinksSet');
    let drinkHTML = `<fieldset class="beverage" id="drink${drinkNumber}">
    <h4 class="beverage-count">Напиток №${drinkNumber}</h4>
    <label class="field">
      <span class="label-text">Я буду</span>
      <select>
        <option value="espresso">Эспрессо</option>
        <option value="capuccino" selected>Капучино</option>
        <option value="cacao">Какао</option>
      </select>
    </label>
    <div class="field">
      <span class="checkbox-label">Сделайте напиток на</span>
      <label class="checkbox-field">
        <input type="radio" name="milk" value="usual" checked />
        <span>обычном молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk" value="no-fat" />
        <span>обезжиренном молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk" value="soy" />
        <span>соевом молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk" value="coconut" />
        <span>кокосовом молоке</span>
      </label>
    </div>
    <div class="field">
      <span class="checkbox-label">Добавьте к напитку:</span>
      <label class="checkbox-field">
        <input type="checkbox" name="options" value="whipped cream" />
        <span>взбитых сливок</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options" value="marshmallow" />
        <span>зефирок</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options" value="chocolate" />
        <span>шоколад</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options" value="cinnamon" />
        <span>корицу</span>
      </label>
    </div>
  </fieldset>`


    elem.insertAdjacentHTML('beforeend', drinkHTML);
}

function removeDrink(id){

}