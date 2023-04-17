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


// temp.id = "form1";
