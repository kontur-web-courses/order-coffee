
let orderCount = 1;
let exampleOrder = document.querySelector('.beverage').cloneNode(true);
document.querySelector('.add-button')
    .addEventListener('click', () => createNewForm());

function createNewForm(){
    let beverages = document.querySelectorAll('.beverage');
    let last = beverages[beverages.length-1];
    let newOrder = exampleOrder.cloneNode(true);
    orderCount++;

    for (let querySelectorElement of newOrder.querySelector('div.field').childNodes) {
        for (let querySelectorElementElement of querySelectorElement.childNodes) {
            querySelectorElementElement.name = `milk${orderCount}`;
        }
    }

    newOrder.querySelector('.beverage-count').innerText = `Напиток №${orderCount}`;

    last.after(newOrder);
}
