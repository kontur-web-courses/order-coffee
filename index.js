for (let button of document.querySelectorAll(".close-button")) {
    button.addEventListener("click", function (event) {
       const count = document.querySelectorAll("form").length;
       if (count > 1) {
           button.closest("form").remove();
       }
    });
}

for (let area of document.querySelectorAll("textarea")) {
    area.addEventListener("input", function (event) {
        const boldWords = ["срочно", "быстрее", "побыстрее", "скорее", "поскорее"];
        const boldWords2 = ["очень нужно"];

        const s = event.target.value.split(' ');

        function toBold(value) {
            return `<b>${value}</b> `;
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
                if (boldWords2.includes(phrase)) {
                    content += toBold(phrase);
                    needSkip = true;
                    continue;
                }
            }

            const word = s[i];

            if (!boldWords.includes(word)) {
                content += word + " ";
                continue;
            }

            content += toBold(word);
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
    // newOrder.getElementsByName(`milk${orderCount}`).forEach(x => x.name = `milk${++orderCount}`);

    newOrder.querySelector('.beverage-count').innerText = `Напиток №${orderCount}`;

    last.after(newOrder);
}
