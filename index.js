let formCount = 1;
let drinksCount = 1;

document.addEventListener('click', event =>{
    if(event.target.id === 'closeButton' && formCount>1){
        formCount--;
        event.target.parentElement.remove();
        console.log('here');
    }
})
let fss = document.querySelectorAll(".beverage")
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
    drinksCount++;
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    newForm.appendChild(CreateCloseButton());
    newForm.querySelector("h4").innerHTML = `Напиток №${drinksCount}`;
    for(let form of newForm.querySelectorAll('input[type=radio]')){
        form.name = `milk${drinksCount}`;
    }
    forms[forms.length - 1].after(newForm);
});


let modal = document.getElementById("myModal");
let btn = document.querySelector(".submit-button");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    const fss = document.querySelectorAll(".beverage");
    for(let fs of fss){
        let newRow = modal.querySelector('table').querySelector('tbody').insertRow();
        let cellName = newRow.insertCell();
        cellName.appendChild(document.createTextNode(fs.querySelector('#name').options[fs.querySelector('#name').selectedIndex].textContent));
        let cellMilk = newRow.insertCell();
        cellMilk.appendChild(document.createTextNode(fs.querySelectorAll('input[type=radio]:checked')[0].parentElement.querySelector('span').textContent));
        let cellAdditional = newRow.insertCell();
        cellAdditional.appendChild(document.createTextNode([...fs.querySelectorAll('input[type=checkbox]:checked')].map(function(v) {return v.parentElement.querySelector('span').textContent}).join(', ')));
    }
    modal.querySelector('p').textContent = DrinksOrdered();
}

span.onclick = function() {
    modal.style.display = "none";
    modal.querySelector('table').querySelector('tbody').remove();
    modal.querySelector('table').appendChild(document.createElement('tbody'));
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.querySelector('table').querySelector('tbody').remove();
        modal.querySelector('table').appendChild(document.createElement('tbody'));
    }
}

function DrinksOrdered(){
    const titles = ['напиток', 'напитка', 'напитков'];
    const cases = [2, 0, 1, 1, 1, 2];
    const number = formCount;
    let c = (number%100>4 && number%100<20)? 2 : cases[(number%10<5) ? number%10 : 5];
    return  `Вы заказали ${number} ${titles[c]}`;
}

