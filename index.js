let fieldsCount = 1;
let fieldsets = [document.getElementsByTagName("fieldset")[0]];
let div = document.getElementsByClassName("fieldsets")[0];

function createNewFieldSet() {
    let newFieldset = document.createElement("fieldset");
    newFieldset.setAttribute("class", "beverage");
    newFieldset.innerHTML = fieldsets[0].innerHTML;
    for (let input of newFieldset.getElementsByTagName("input")) {
        if (input.getAttribute("type") === "radio") {
            input.setAttribute("name", `milk${fieldsCount + 1}`);
        }
    }
    let id = fieldsCount++;
    newFieldset.getElementsByClassName("closeButton")[0].addEventListener("click", () => deleteFieldSet(newFieldset));
    newFieldset.getElementsByTagName("h4")[0].innerText = `Напиток №${id + 1}`;
    fieldsets.push(newFieldset);
    div.appendChild(newFieldset);

    console.log(fieldsCount);
}

function deleteFieldSet(element) {
    if (fieldsCount === 1) {
        return;
    }
    let index = Number(element.getElementsByTagName("h4")[0].innerText.split(' ')[1].slice(1)) - 1;
    div.removeChild(fieldsets[index]);
    for (let i = index; i < fieldsets.length - 1; i++) {
        fieldsets[i] = fieldsets[i + 1];
    }
    for (let i = index; i < fieldsets.length - 1; i++) {
        fieldsets[i].getElementsByTagName("h4")[0].innerHTML = `Напиток №${i + 1}`;
    }
    fieldsets.pop();
    fieldsCount--;
    console.log(fieldsCount);
}

function getPadezh(i) {
    let mod = i % 100;
    if (mod % 10 >= 5 || mod % 10 === 0) {
        return "напитков";
    }
    if (Math.trunc(i / 10) === 1) {
        return "напитков";
    }
    if (mod % 10 > 1 && mod % 10 <= 4) {
        return "напитка";
    }
    return "напиток";
}

function callModalWindow() {
    document.getElementById("modalWindowText").innerText = `Вы заказали ${fieldsCount} ${getPadezh(fieldsCount)}`;
    document.getElementsByClassName("overlay")[0].style.setProperty("display", "flex");
    let tbody = document.getElementsByClassName("overlay")[0].getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    const toRussian = {"usual": "обычное", "no-fat": "обезжиренное", "soy": "соевое", "coconut": "кокосовое"};
    for (let fieldset of fieldsets) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = fieldset.getElementsByTagName("select")[0].selectedOptions[0].textContent
        let td2 = document.createElement("td");
        fieldset.querySelectorAll('input[type="radio"]').forEach((x) => {
            if (x.checked) {
                td2.innerText = toRussian[x.value];
            }
        });
        let td3 = document.createElement("td");
        fieldset.querySelectorAll('input[type="checkbox"]').forEach((x) => {
            if (x.checked) {
                if (td3.innerText.length !== 0) {
                    td3.innerText += ", ";
                }
                td3.innerText += x.parentElement.querySelector('span').textContent;
            }
        });
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
}

function removeModalWindow() {
    document.getElementsByClassName("overlay")[0].style.setProperty("display", "none");
}

document.getElementById("modalWindowCloseButton" +
    "").addEventListener("click", () => removeModalWindow());
document.getElementsByClassName("overlay")[0].style.setProperty("display", "none");
document.getElementsByClassName("closeButton")[0].addEventListener("click", () => deleteFieldSet(fieldsets[0]));
document.getElementsByClassName("add-button")[0].addEventListener("click", () => createNewFieldSet());
document.getElementsByClassName("submit-button")[0].addEventListener("click", () => callModalWindow());