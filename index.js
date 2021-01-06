function fillingTable(data) {
    let orders = [];
    let order = {};
    for (let [key, value] of data) {
        key = key.split(' ')[0];
        if (key === 'drink') {
            order = {
                drink: '',
                milk: '',
                options: [],
            }
            orders.push(order);
        }
        let r = (orders.length - 1) || '';
        if (key !== 'options') {
            order[key] = value
        } else {
            order[key].push(value);
        }
    }
    for (let e of orders) {
        let row = document.createElement("tr");
        row.innerHTML += `<td>${e.drink}</td><td>${e.milk}</td><td>${e.options.join(',')}</td>`;
        document.querySelector('table').appendChild(row);
    }
}

let s = document.querySelector('.add-button')
let startForm = document.querySelector('.beverage');
s.addEventListener("click", function() {
    let newForm = startForm.cloneNode(true);
    let counter = document.querySelectorAll('.beverage').length + 1;
    newForm.querySelector('.beverage-count').textContent = `Напиток №${counter}`;
    for (let e of newForm.querySelectorAll('input')) {
        e.name = e.name + ' ' + counter;
    }
    newForm.querySelector('.cross').addEventListener('click', () => newForm.remove());
    s.parentNode.before(newForm);
});

let dialog = document.querySelector('dialog');
document.querySelector('form').addEventListener('submit', (event) => {
    let countForms = document.querySelectorAll('.beverage').length;
    let word = 'напиток';
    if ([2, 3, 4].indexOf(countForms % 100) !== -1) {
        word = 'напитка';
    } else if (countForms % 100 !== 1) {
        word = 'напитков';
    }
    document.querySelector('.text1').textContent = `Вы заказали ${countForms} ${word}`

    let table = document.createElement('table');
    table.innerHTML += '<tr><th scope="col">Напиток</th><th scope="col">Молоко</th><th scope="col">Дополнительно</th></tr>';
    dialog.appendChild(table);
    let orders = new FormData(document.querySelector('form'));
    fillingTable(orders)

    event.preventDefault();
    dialog.showModal();
});

document.querySelector('.crossdialog').addEventListener('click', () => {
    dialog.close();
    dialog.querySelector('table').remove();
});