
let orderCount = 1;
document.querySelector('.add-button')
    .addEventListener('click', () => createNewForm());

function createNewForm(){
    let beverages = document.querySelectorAll('.beverage');
    let last = beverages[beverages.length-1];
    let newOrder = last.cloneNode(true);
    orderCount++;

    for (let querySelectorElement of newOrder.querySelector('div.field').childNodes) {
        for (let querySelectorElementElement of querySelectorElement.childNodes) {
            querySelectorElementElement.name = `milk${orderCount}`;
        }
    }
    // newOrder.getElementsByName(`milk${orderCount}`).forEach(x => x.name = `milk${++orderCount}`);

    newOrder.querySelector('.beverage-count').innerText = `Напиток №${orderCount}`;

    last.after(newOrder);
}
