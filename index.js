
let formsCount = 1;

function addToCrossCloseEvent(){
    let crosses = document.getElementsByClassName('form-close');
    for (let i = 0; i < crosses.length; i++) {
        crosses[i].addEventListener('click', (event) => {
            if (formsCount === 1)
                return;
            let cureNode = crosses[i];
            while (cureNode.tagName !== 'FORM') {
                cureNode = cureNode.parentNode;
            }
            cureNode.remove();
            formsCount--;
        })
    }
}


function AddButtonListener() {
    formsCount++;
    let form = document.getElementsByTagName('form')[0].cloneNode(true);
    let header = form.getElementsByClassName('beverage-count')[0];
    let button = form.getElementsByClassName('add-button')[0];
    button.addEventListener('click', AddButtonListener);
    header.textContent = `Напиток №${formsCount}`;
    document.body.appendChild(form);
    addToCrossCloseEvent();
}


addToCrossCloseEvent();
let addButton = document.getElementsByClassName('add-button')[0];
addButton.addEventListener('click', AddButtonListener);