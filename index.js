let formsCount = 1;

document.querySelector(".add-button").addEventListener('click', () => {
    formsCount++;
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    newForm.querySelector("h4").innerHTML = `Напиток №${formsCount}`;
    forms[forms.length - 1].after(newForm);
});



var modal = document.getElementById("myModal");

var btn = document.querySelector(".submit-button");
btn.onclick = e => e.preventDefault();
// btn.parentElement.submit(function(e) {
//     e.preventDefault();
// })

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}