let formsCount = 1;
let currFormNum = 1

function addToCrossCloseEvent(cross){
    cross.addEventListener('click', () => {
        if (formsCount === 1)
            return;
        let cureNode = cross;
        while (cureNode.tagName !== 'FORM') {
            cureNode = cureNode.parentNode;
        }
        cureNode.remove();
        formsCount--;
    });
}

function getCorrectFormToNapitok(count) {
    if (count % 10 === 1) {
        return 'напиток';
    }
    if (count % 10 in [2, 3, 4]) {
        return 'напиткa';
    }

    return 'напитков';
}

function AddNewForm() {
    formsCount++;
    let form = document.getElementsByTagName('form')[0].cloneNode(true);
    let header = form.getElementsByClassName('beverage-count')[0];
    let button = form.getElementsByClassName('add-button')[0];
    let cross = form.getElementsByClassName('form-close')[0];
    let submitButton = form.getElementsByClassName('submit-button')[0];
    submitButton.addEventListener('click', function(event) { event.preventDefault(); });
    submitButton.addEventListener('click', () => openModal());
    addToCrossCloseEvent(cross);
    button.addEventListener('click', AddNewForm);
    header.textContent = `Напиток №${++currFormNum}`;
    document.body.appendChild(form);
}

function closeModal() {
    document.querySelectorAll('.modal__container').forEach(overlay => overlay.style.display = 'none')
}

function openModal() {
    let modalWindow = document.querySelector('.modal__container');
    modalWindow.getElementsByTagName('p')[0]
        .textContent = `Вы заказали ${formsCount} ${getCorrectFormToNapitok(formsCount)}`;

    document.querySelectorAll('.modal__container').forEach(overlay => {
        overlay.style.display = 'block';
        overlay.style.visibility = 'visible';
    })
}

addToCrossCloseEvent(document.getElementsByClassName('form-close')[0]);

let addButton = document.getElementsByClassName('add-button')[0];
addButton.addEventListener('click', AddNewForm);

let submitButton = document.getElementsByClassName('submit-button')[0];
submitButton.addEventListener('click', function(event) { event.preventDefault(); });
submitButton.addEventListener('click', () => openModal());

document.querySelectorAll('.modal__close').forEach(closeButton => {
    closeButton.addEventListener('click', () => closeModal())
})
