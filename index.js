let beverageCounter = 2;

let closeButtons = document.querySelectorAll('.delete');

for (let closeButton of closeButtons) {
    closeButton.addEventListener('click', (evt) => deleteFieldset(closeButton));
}

function deleteFieldset(button) {
    if (beverageCounter === 1) {
        return;
    }
    let fieldset = button.closest('.beverage');
    let h = fieldset.querySelector('H4');
    let deletedNumber = parseInt(h.textContent.slice(9), 10);
    fieldset.remove();
    beverageCounter--;

    let hs = document.querySelectorAll('H4');
    for (let h of hs) {
        let content = h.textContent;
        let title = content.slice(0, 9);
        let number = content.slice(9);
        if (number < deletedNumber) {
            continue;
        }
        let newNumber = (parseInt(number, 10) - 1).toString();
        h.textContent = title + newNumber;
    }
}

let modal = document.getElementById('myModal');

let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.style.display = 'block';
});

let modalCloseButton = document.querySelector('.close');
modalCloseButton.addEventListener('click', (evt) => {
    modal.style.display = 'none';
})