for (let e of document.querySelectorAll(".beverage")) {
    addCloseButtonAction(e);
}

function addCloseButtonAction(a) {
    const button = a.querySelector(".close-button");
    button.onclick = function (event) {
        if (orderCount > 1) {
            orderCount--;
            button.closest(".beverage").remove();
        }
    };
}

for (let area of document.querySelectorAll("textarea")) {
    area.addEventListener("input", function (event) {
        const boldWords = ["срочно", "быстрее", "побыстрее", "скорее", "поскорее"];
        const boldWords2 = ["очень нужно"];

        const s = event.target.value.split(' ');

        function toBold(value) {
            return `<b>${value}</b> `;
        }

        function toStripped(word) {
            return word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        }

        let content = "";
        const len = s.length;
        let needSkip = false;

        for (let i = 0; i < len; i++) {
            if (needSkip) {
                needSkip = false;
                continue;
            }
            if (i !== len - 1) {
                const phrase = s[i] + " " + s[i+1];
                if (boldWords2.includes(toStripped(phrase))) {
                    content += toBold(phrase);
                    needSkip = true;
                    continue;
                }
            }

            if (!boldWords.includes(toStripped(s[i]))) {
                content += s[i] + " ";
                continue;
            }

            content += toBold(s[i]);
        }

        area.closest(".extra-input").querySelector(".bold-output").remove();

        const span = document.createElement("span");
        span.className = "bold-output";
        span.innerHTML = content;

        document.querySelector(".extra-input").append(span);
    });
}

let orderCount = 1;

function closeLightbox() {
    document.getElementById("blur_panel").style.visibility = "hidden";
    document.getElementById("lightbox").style.visibility = "hidden";
}

function openLightbox() {
    document.getElementById("blur_panel").style.visibility = "visible";
    document.getElementById("lightbox").style.visibility = "visible";
    updateInfoAboutOrder();
    updateTable();
}

function SendLightbox() {
    let form = document.querySelectorAll('form')[1];
    let formData = new FormData(form);
    let time = formData.get('time');
    let now = Date.now();
    console.log();
    closeLightbox();
}

function updateInfoAboutOrder() {
    let lightbox = document.getElementById("lightbox");
    let p = lightbox.querySelector('p');
    let text = `Заказ принят!\nВы заказали ${orderCount} `;
    if ([2, 3, 4].includes(orderCount % 10) && Math.floor(orderCount / 10) % 10 !== 1)
        text += 'напитка.';
    else if(orderCount % 10 === 1 && Math.floor(orderCount / 10) % 10 !== 1)
        text += 'напиток.';
    else
        text += 'напитков.';
    p.innerText = text;
}

function updateTable() {
    let a = getFormData();
    let tbody = document.querySelector('.drinks-table').querySelector('tbody');
    for (const el of a) {
        let tr = document.createElement('tr');
        for (const property in el) {
            let td = document.createElement('td');
            td.innerText = el[property];
            tr.append(td)
        }
        tbody.append(tr);
    }
}

let exampleOrder = document.querySelector('.beverage').cloneNode(true);
document.querySelector('.add-button')
    .addEventListener('click', function (event) {
        const form = createNewForm();
        addCloseButtonAction(form);
    });

function createNewForm(){
    let beverages = document.querySelectorAll('.beverage');
    let last = beverages[beverages.length-1];
    let newOrder = exampleOrder.cloneNode(true);
    orderCount++;
    let tmp = newOrder.querySelectorAll('div.field');
    for (let querySelectorElement of tmp[0].childNodes) {
        for (let querySelectorElementElement of querySelectorElement.childNodes) {
            querySelectorElementElement.name = `milk${orderCount}`;
        }
    }

    for (let querySelectorElement of tmp[1].childNodes) {
        for (let querySelectorElementElement of querySelectorElement.childNodes) {
            querySelectorElementElement.name = `options${orderCount}`;
        }
    }

    newOrder.querySelector('select').name = `coffee${orderCount}`;

    newOrder.querySelector('textarea').name = `textarea${orderCount}`;

    newOrder.querySelector('.beverage-count').innerText = `Напиток №${orderCount}`;

    last.after(newOrder);

    return newOrder;
}

function getFormData(){
    let form = document.querySelector('form');
    let result = [];
    for (let i = 1; i <= orderCount; i++) {
        let formData = new FormData(form);
        let element = {};
        element.coffee = formData.get(`coffee${i}`);
        element.milk = formData.get(`milk${i}`);
        element.options = formData.getAll(`options${i}`).join(', ');
        element.userInput = formData.get(`textarea${i}`);
        result.push(element);
    }
    return result;
}


