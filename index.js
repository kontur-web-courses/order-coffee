let identity = 1;
let beverageCount = 1;
let beverage = document.querySelector('.beverage');

document.querySelector('form').addEventListener('click', deleteBeverage)

function deleteBeverage(event) {
    let target = event.target
    switch(target.className) {
        case 'close-button':
            if(document.querySelectorAll('.beverage').length != 1) {
                beverageCount -= 1;
                target.parentElement.remove();
                for(let i = 0; i < beverageCount; i++) {
                    document.querySelectorAll('.beverage-count')[i].textContent = `Напиток №${i + 1}`
                }
            }   
            break;
        case 'add-button':
            identity++;
            beverageCount++;
            let currentBeverage = beverage.cloneNode(true);
            for(let i of currentBeverage.querySelectorAll('input[name]')) {
                i.name = `${i.name}_${identity}`;
            }
            currentBeverage.querySelector('.beverage-count').textContent = `Напиток №${beverageCount}`;
            target.before(currentBeverage);
            break;
    }

}

function declination(beverageCount){
	let phrase = `Вы заказали ${beverageCount} `;
	if (beverageCount % 10 > 1 && beverageCount % 10 < 5 && (beverageCount % 100 > 14 || beverageCount % 100 < 12)){
		return phrase + "напитка";
    }
    else if (beverageCount % 10 == 1 && beverageCount % 100 != 11){
        return phrase + "напиток";
    }
	return phrase + 'напитков';
}

function addRow(info){
    let order = {"beverage":"capuccino", "milk": "usual", "options": []}
    let data = new FormData(info);
    let order_size = 0;
    for (let [key, value] of data) {
        if(key==="beverage"){
            order_size++;
        }
        if(key == "options"){
            order[key].push(value);
        }else{
            order[key] = value;
        }    
    }
    let option = Array.prototype.join.call(order.options, ", ");
    let row = `<tr><td>${order["beverage"]}</td><td>${order["milk"]}</td><td>${option}</td></tr>`;
    return row;

}

let dialog = document.querySelector(".dialog");
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    let headTable = "<thead><th>Напиток</th><th>Молоко</th><th>Дополнительно</th></thead>"
    let bodyTable = `<tbody>${addRow(event.target)}</tbody>`
    event.preventDefault();
    dialog.querySelector('p').textContent = `Заказ принят!\n${declination(beverageCount)}`;
    dialog.querySelector('table').innerHTML = headTable + bodyTable;
    dialog.showModal();
})
