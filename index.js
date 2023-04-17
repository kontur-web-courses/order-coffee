let orderCount = 1;

function closeLightbox() {
    document.getElementById("blur_panel").style.visibility = "hidden";
    document.getElementById("lightbox").style.visibility = "hidden";
}

function openLightbox() {
    document.getElementById("blur_panel").style.visibility = "visible";
    document.getElementById("lightbox").style.visibility = "visible";
    updateInfoAboutOrder();
}

function updateInfoAboutOrder() {
    let lightbox = document.getElementById("lightbox");
    let p = lightbox.querySelector('p');
    let text = `\nВы заказали ${orderCount} `;
    if ([2, 3, 4].includes(orderCount % 10) && Math.floor(orderCount / 10) % 10 !== 1)
        text += 'напитка.';
    else if(orderCount % 10 == 1 && Math.floor(orderCount / 10) % 10 !== 1)
        text += 'напиток.';
    else
        text += 'напитков.';
    p.innerText += text;
}

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
