
let addButton = document.querySelector('.add-button');
let counter = 1;
addButton.addEventListener('click', function() {
    let beverage = document.getElementById(`fieldset${counter}`);//querySelector(`.beverage${counter-1}`);
    let newNode = beverage.cloneNode(true);
    newNode.id = `fieldset${counter + 1}`;
    newNode.querySelector('.beverage-count').textContent = `Напиток №${counter + 1}`;
    document.getElementById(`fieldset${counter}`).after(newNode);
    console.log(counter);
    counter++;
});

document.querySelector('.submit-button').onclick = function(){
    alert("Вы нажали на кнопку");
};