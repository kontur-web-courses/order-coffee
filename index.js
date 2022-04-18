let count = 1;
let orders = 0;

function myScript(){
    count += 1;
    const div = document.createElement("div");
    div.classList.add('black');
    document.body.append(div);
    div.innerHTML =
        "<div id=\"openModal\" class=\"modalDialog\">\n" + "      <div>\n" +
        "        <a href=\"#close\" title=\"Закрыть\" class=\"close\">X</a>\n" +
        "        <div id=\"container\">\n" +
        "          <div id=\"number\" style=\"width: 100%; height: 100%; position: absolute; text-align: center; \"></div>\n" +
        "          <div id=\"progress-bar\"></div>\n" +
        "        </div>\n" +
        "        <script src=\"index.js\"></script>\n" +
        "      </div>\n" +
        "    </div>" +
        "<form " + "id="+ String(count) + ">\n" +
        "      <fieldset class=\"beverage\">\n" +
        "        <span class=\"beverage-count\"><b>Напиток №" + count + "</b></span>\n" + "<button onclick='Delete(this)'>×</button>" +
        "        <label class=\"field\">\n" +
        "          <span class=\"label-text\">Я буду</span>\n" +
        "          <select>\n" +
        "            <option value=\"espresso\">Эспрессо</option>\n" +
        "            <option value=\"capuccino\" selected>Капучино</option>\n" +
        "            <option value=\"cacao\">Какао</option>\n" +
        "          </select>\n" +
        "        </label>\n" +
        "        <div class=\"field\">\n" +
        "          <span class=\"checkbox-label\">Сделайте напиток на</span>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"usual\" checked />\n" +
        "            <span>обычном молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"no-fat\" />\n" +
        "            <span>обезжиренном молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"soy\" />\n" +
        "            <span>соевом молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"coconut\" />\n" +
        "            <span>кокосовом молоке</span>\n" +
        "          </label>\n" +
        "        </div>\n" +
        "        <div class=\"field\">\n" +
        "          <span class=\"checkbox-label\">Добавьте к напитку:</span>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"whipped cream\" />\n" +
        "            <span>взбитых сливок</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"marshmallow\" />\n" +
        "            <span>зефирок</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"chocolate\" />\n" +
        "            <span>шоколад</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"cinnamon\" />\n" +
        "            <span>корицу</span>\n" +
        "          </label>\n" +
        "        </div>\n" +
        "      <div>\n" +
        "        <button type=\"button\" class=\"add-button\" onclick=\"myScript(count)\">+ Добавить напиток</button>\n" +
        "      </div>\n" +
        "      <div style=\"margin-top: 30px\">\n" +
        "        <button type=\"submit\" class=\"submit-button\" onclick=\"window.location.href = '#openModal';SetText();\">Готово</button>\n" +
        "      </div>\n" +
        "      </fieldset>\n" +
        "    </form>";
}

function Delete(elem) {
    elem.parentNode.remove();
}

function SetText() {
    document.getElementById("number").innerHTML = '123';
}