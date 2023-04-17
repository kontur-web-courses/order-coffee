function declensionOfWord(num) {
    const word = 'напиток';
    let result;
    if (num % 10 === 1 && num % 100 !== 11) {
        result = `${num} ${word}`;
    } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
        result = `${num} напитка`;
    } else {
        result = `${num} напитков`;
    }
    return `Вы заказали ${result}`;
}

let template = document.getElementById("template");
let form = document.getElementById("form")
let forms = [];
let count = 0;
let button = document.querySelector(".add-button")
button.addEventListener("click", () => {
    let temp = template.cloneNode(true);
    temp.classList.remove("hidden")
    temp.querySelector("h4").innerText = `Напиток №${++count}`;

    for (const input of temp.querySelectorAll("input, select")) {
        input.name += count;
    }

    forms.push(temp);
    form.prepend(...forms);
});

let event = new Event("click");
button.dispatchEvent(event);

function remove(el) {
    if (forms.length <= 1) return;
    let fieldset = el.parentNode.parentNode;
    const index = forms.indexOf(fieldset);
    forms.splice(index, 1);
    form.removeChild(fieldset);
}


const openModalBtn = document.getElementById("open-modal-button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
let c = document.createElement("p");

openModalBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
    c.innerText = declensionOfWord(forms.length);
    modal.querySelector("h2").after(c);
    for (const form1 of forms) {
        let f = document.createElement("form");
        f.append(form1.cloneNode(true));
        console.log(...(new FormData(f)));
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}





