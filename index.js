let addBtn = document.querySelector(".add-button");
let counter = 1;
let closeBtns = document.querySelectorAll(".close");

addBtn.addEventListener("click", function() {
    let newCoffeeForm = document.createElement("fieldset");
    newCoffeeForm.classList.add("beverage");
    newCoffeeForm.innerHTML = `
    <span class="close">X</span>
    <h4 class="beverage-count"> Напиток № ${++counter}</h4>
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
        <input type="radio" name="milk${counter}" value="usual" checked />
        <span>обычном молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk${counter}" value="no-fat" />
        <span>обезжиренном молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk${counter}" value="soy" />
        <span>соевом молоке</span>
      </label>
      <label class="checkbox-field">
        <input type="radio" name="milk${counter}" value="coconut" />
        <span>кокосовом молоке</span>
      </label>
    </div>
    <div class="field">
      <span class="checkbox-label">Добавьте к напитку:</span>
      <label class="checkbox-field">
        <input type="checkbox" name="options${counter}" value="whipped cream" />
        <span>взбитых сливок</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options${counter}" value="marshmallow" />
        <span>зефирок</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options${counter}" value="chocolate" />
        <span>шоколад</span>
      </label>
      <label class="checkbox-field">
        <input type="checkbox" name="options${counter}" value="cinnamon" />
        <span>корицу</span>
      </label>
    </div>`;
    let parentDiv = document.querySelector("form");
    parentDiv.insertBefore(newCoffeeForm, addBtn.parentNode);

    closeBtns = document.querySelectorAll(".close");

    closeBtns.forEach(function(el) {
        el.addEventListener("click", function() {
            if(document.querySelectorAll("fieldset").length > 1)
                el.parentElement.remove();
        })
    });
});

let submitBtn = document.querySelector(".submit-button");

function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

submitBtn.addEventListener("click", function() {
    document.querySelector("#modal").showModal();
    let coctailsData = document.querySelectorAll("fieldset");
    let numOfCoctails = coctailsData.length;
    let tableRows = "";
    coctailsData.forEach(function(el) {
        let order = parseInt(el.querySelector(".beverage-count").innerText.substr(9));
        let milks = el.querySelectorAll(`input[name=milk${order}]:checked`);
        for(let m of milks)
            alert(m.nextSibling.innerText);
        tableRows += "<tr>";
        tableRows += `<td></td>`;
        tableRows += `<td></td>`;
        tableRows += `<td></td>`;
        tableRows += "</tr>";
    });
    
    let endText = declOfNum(numOfCoctails, ['ок', 'ка', 'ков']);
    document.querySelector("#modal").childNodes[3].innerHTML = `
    Вы заказали ${numOfCoctails} напит${endText}

    <table class="coctailsTable">
        <tbody>
            <th>
                <td>Напиток</td>
                <td>Молоко</td>
                <td>Дополнительно</td>
            </th>
            ${tableRows}
        </tbody>
    </table>
    `;
});





function openAd()
{
    const modalDiv = document.getElementById('modal');
    modalDiv.style.display = 'block';
}

function closeAd()
{
    const modalDiv = document.getElementById('modal');
    modalDiv.style.display = 'none';
}


