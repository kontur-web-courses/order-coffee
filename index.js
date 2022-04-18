let fieldsCount = 1;
let fieldsets = [document.getElementsByTagName("fieldset")[0]];
let div = document.getElementsByClassName("fieldsets")[0];

function createNewFieldSet() {
    let newFieldset = document.createElement("fieldset");
    newFieldset.innerHTML = fieldsets[0].innerHTML;
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
    document.getElementById("modalWindowTextHUJ").innerText = `Вы заказали ${fieldsCount} ${getPadezh(fieldsCount)}`;
    document.getElementsByClassName("overlay")[0].style.setProperty("display", "flex");
}

function removeModalWindow() {
    document.getElementsByClassName("overlay")[0].style.setProperty("display", "none");
}

document.getElementById("modalWindowButtonHUJ").addEventListener("click", () => removeModalWindow());
document.getElementsByClassName("overlay")[0].style.setProperty("display", "none");
document.getElementsByClassName("closeButton")[0].addEventListener("click", () => deleteFieldSet(fieldsets[0]));
document.getElementsByClassName("add-button")[0].addEventListener("click", () => createNewFieldSet());
document.getElementsByClassName("submit-button")[0].addEventListener("click", () => callModalWindow());