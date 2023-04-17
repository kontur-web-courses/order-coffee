
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


function AddButtonListener() {
    formsCount++;
    let form = document.getElementsByTagName('form')[0].cloneNode(true);
    let header = form.getElementsByClassName('beverage-count')[0];
    let button = form.getElementsByClassName('add-button')[0];
    let cross = form.getElementsByClassName('form-close')[0];
    addToCrossCloseEvent(cross);
    button.addEventListener('click', AddButtonListener);
    header.textContent = `Напиток №${++currFormNum}`;
    document.body.appendChild(form);
}

function getCorrectFormToNapitok(count) {
    if (count % 10 === 1) {
        return 'напиток';
    }
    if (count % 10 in [2, 3, 4]) {
        return 'напитков';
    }

    return 'напитков';
}


addToCrossCloseEvent(document.getElementsByClassName('form-close')[0]);
let addButton = document.getElementsByClassName('add-button')[0];
addButton.addEventListener('click', AddButtonListener);