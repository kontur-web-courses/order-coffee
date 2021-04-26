
let initFieldSet = document.querySelector(".beverage");

// let inputs = initFieldSet.querySelectorAll("input");
let counter = 1;

function updateInputs(fieldsetElem) {
    let inputs = fieldsetElem.querySelectorAll("input");
    for(let input of inputs) {
        let nameAttr = input.getAttribute("name");
        let newAttr = `${nameAttr}-${counter}`;
        input.setAttribute("name", newAttr);
    }

    let selects = fieldsetElem.querySelectorAll("select");
    for (let select of selects) {
        select.setAttribute("name", `coffe-${counter}`);
    }
}

function addRemoveBtn(fieldsetElem) {
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.id = `${counter}`;
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", removeFieldset);
    removeBtn.pre
    removeBtn.style.cssFloat = 'right';
    fieldsetElem.querySelector("h4").before(removeBtn);
}




let clonedFieldset = initFieldSet.cloneNode(true);



updateInputs(initFieldSet);
addRemoveBtn(initFieldSet);
let fieldsets = []
fieldsets.push(initFieldSet);

function addFieldset() {
    counter++;
    let newForm = clonedFieldset.cloneNode(true);
    updateInputs(newForm);
    addRemoveBtn(newForm);
    // newForm.querySelector('.removeBtn').id = counter;
    let beverageNumberHeader = newForm.querySelector(".beverage-count");
    beverageNumberHeader.textContent = `Напиток №${counter}`;
    console.log(newForm);
    fieldsets[fieldsets.length - 1].after(newForm);
    fieldsets.push(newForm);
}

let addButton = document.querySelector('.add-button');
addButton.addEventListener("click", addFieldset);


function removeFieldset(event) {
    event.preventDefault();
    console.log(event);
    if (fieldsets.length <= 1) {
        return;
    }

    let id = event.target.id;
    

    console.log("deleting ", id);
    let parentFieldset = event.target.parentElement;
    // fieldsets.splice(index - 1, 1);
    // fieldsets.remove(parentFieldset);
    var index = fieldsets.indexOf(parentFieldset);
    if (index !== -1) {
        fieldsets.splice(index, 1);
    }
    parentFieldset.remove();
    // let lastFieldset = fieldsets.pop();
    // lastFieldset.remove();
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    ShowModalWndow("Заказ принят!");
});


function ShowModalWndow(text) {
    let modalWindowDiv = document.createElement('div');
    modalWindowDiv.id = "modalWindow";
    modalWindowDiv.style.width = "100%";
    modalWindowDiv.style.height = "100%";
    modalWindowDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modalWindowDiv.style.position = "absolute";
    modalWindowDiv.style.top = "0";
    modalWindowDiv.style.left = "0";
    modalWindowDiv.style.zIndex = 1;
    modalWindowDiv.style.display = "flex";
    // modalWindowDiv.style.justifyContent = "center";
    // modalWindowDiv.style.ele = "center";

    let dialogDiv = document.createElement("div");
    dialogDiv.style.backgroundColor = "white";
    dialogDiv.style.width = "400px";
    dialogDiv.style.height = "auto";
    dialogDiv.style.position = "fixed";
    dialogDiv.style.top = "100px";
    dialogDiv.style.margin = "auto";
    dialogDiv.textContent = text;

    let closeBtn = document.createElement("button");
    closeBtn.id = "close-modal";
    closeBtn.textContent = "X";
    closeBtn.style.cssFloat = 'right';
    closeBtn.addEventListener("click", function(event) {
        event.target.parentElement.parentElement.remove();
    });
    dialogDiv.appendChild(closeBtn);
    modalWindowDiv.appendChild(dialogDiv);

    let body = document.querySelector("body");
    body.appendChild(modalWindowDiv);
}
