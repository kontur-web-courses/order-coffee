let addButton = document.getElementsByClassName('add-button')[0];

let count = 1;
function AddButtonListener() {
    count++;
    let form = document.getElementsByTagName('form')[0].cloneNode(true);
    let header = form.getElementsByClassName('beverage-count')[0];
    let button = form.getElementsByClassName('add-button')[0];
    button.addEventListener('click', AddButtonListener);
    header.textContent = `Напиток №${count}`;
    document.body.appendChild(form);
}

addButton.addEventListener('click', AddButtonListener);