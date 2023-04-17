function addNewOrder() {
    orderCount++;
    let array = document.getElementsByClassName("beverage");
    let old = array[array.length - 1];
    let newOrder = old.cloneNode(true);
    newOrder.getElementsByClassName("beverage-count")[0].innerHTML = "Напиток №" + orderCount;
    addCrossListener(newOrder.getElementsByClassName("cross-button")[0]);
    old.after(newOrder);
}

function addCrossTo(form) {
    let cross = document.createElement("button");
    cross.className = "cross-button";
    cross.textContent = "X";
    cross.style.float = "right";
    form.prepend(cross);
    return cross;
}

function addCrossListener(cross) {
    cross.addEventListener("click", function(e) {
        e.preventDefault();
        if (orderCount > 1) {
            e.target.parentNode.remove();
            orderCount--;
            switchOrderNumbers();
        }
    });
}

function addModalCrossListener(cross) {
    cross.addEventListener("click", function(e) {
        e.preventDefault();
        e.target.parentNode.parentNode.style.display = "none";;
    });
}

function switchOrderNumbers() {
    let array = document.getElementsByClassName("beverage");
    for(let i = 0; i < array.length; i++) {
        array[i].getElementsByClassName("beverage-count")[0].innerHTML = "Напиток №" + (i + 1);
    }
}

function createModal() {
    let modalOverlay = document.createElement("div");
    modalOverlay.style.display = "none";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.position = "fixed";
    modalOverlay.style.zIndex = 1;
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    let modal = document.createElement("div");
    modal.style.display = "inline-block";
    modal.style.zIndex = 2;
    modal.style.backgroundColor = "lightskyblue";
    modal.style.position = "fixed";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.width = "500px";
    modal.style.padding = "10px";

    document.body.prepend(modalOverlay);
    modalOverlay.appendChild(modal);

    return modal;
}

function showModal(modal) {
    modal.parentNode.style.display = "inline-block";
    modal.innerHTML = "Заказ принят! \nВы заказали " + drinksNumber(orderCount);
    let cross = addCrossTo(modal);
    addModalCrossListener(cross);
}

function drinksNumber(drinks) {
    let number = " напитков";
    if (drinks % 10 == 1 && drinks != 11) {
        number = " напиток";
    }
    else if (drinks % 10 >= 2 && drinks % 10 <= 4 && (drinks < 12 || drinks > 14)) {
        number = " напитка";
    }
    return drinks + number;
}


var orderCount = 1;
document.getElementsByClassName("add-button")[0].addEventListener("click", addNewOrder);

let array = document.getElementsByClassName("beverage");
let firstOrder = array[array.length - 1];
let cross = addCrossTo(firstOrder);
addCrossListener(cross);

let modal = createModal();
addEventListener("submit", function(e) {
    e.preventDefault();
    showModal(modal);
});