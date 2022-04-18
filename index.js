let formCount = 1;

document.addEventListener('click', event =>{
    if(event.target.id === 'closeButton' && formCount>1){
        formCount--;
        event.target.parentElement.remove();
        console.log('here');
    }
})
let fss = document.querySelectorAll('fieldset');
for(let fs of fss){
    fs.style.position = 'relative';
    let button = CreateCloseButton();
    fs.appendChild(button);
}

function CreateCloseButton(){
    let CloseButton = document.createElement('button');
    CloseButton.id = 'closeButton';
    CloseButton.innerHTML = 'X';
    CloseButton.style.position = 'absolute';
    CloseButton.style.right = '0';
    CloseButton.style.top = '0';
    return CloseButton;
}

document.querySelector(".add-button").addEventListener('click', () => {
    formCount++;
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    newForm.appendChild(CreateCloseButton());
    newForm.querySelector("h4").innerHTML = `Напиток №${formCount}`;
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

