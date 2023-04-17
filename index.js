let template = document.getElementById("template");
let form = document.getElementById("form")
let forms = [];

let button = document.querySelector(".add-button")
button.addEventListener("click", () => {
    let temp = template.cloneNode(true);
    temp.classList.remove("hidden")
    temp.querySelector("h4").innerText = `Напиток №${forms.length+1}`;
    forms.push(temp);
    form.prepend(...forms);
})

function remove(el) {
    let fieldset = el.parentNode.parentNode;
    const index = forms.indexOf(fieldset);
    forms.splice(index, 1);
    form.removeChild(fieldset);
}


const openModalBtn = document.getElementById("open-modal-button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


