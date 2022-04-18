let firstForm = document.querySelector('fieldset');
let formOriginal = firstForm.cloneNode(true);
let orders = new Set();
initFieldset(firstForm);

document.querySelector('#order-form').onsubmit = (e) => e.preventDefault();
document.querySelector('.add-button').addEventListener('click', () => {
    let newForm = formOriginal.cloneNode(true);
    initFieldset(newForm);
});

document.querySelector('.submit-button').addEventListener('click', () => {
    let count = orders.size;
    let num = count % 10;
    let text;
    if (count >= 10 && count < 20) {
        text = `Вы заказали ${count} напитков`
    }
    else {
        if (num > 1 && num < 5)
            text =`Вы заказали ${count} напитка`
        else if (num === 1)
            text = `Вы заказали ${count} напиток`
        else
            text = `Вы заказали ${count} напитков`
    }
    document.querySelector('.total-drinks').innerText = text;
    for (const order of orders) {
        let row = document.createElement('tr');
        let type = document.createElement('th');
        let milk = document.createElement('th');
        let additional = document.createElement('th');
        let order_id = order.querySelector('.drink-count').innerText;
        type.innerText = order.querySelector('.type-select').value;
        milk.innerText = order.querySelector(`input[name="milk${order_id}"]:checked`).value
        let result = '';
        order.querySelectorAll(`input[name="options${order_id}"]:checked`).forEach(item => result += item.value + ', ')
        result = result.slice(0, -2)
        additional.innerText = result;
        row.append(type);
        row.append(milk);
        row.append(additional);
        document.querySelector('.drinks-table').append(row);
    }
    openModal();
})


function initFieldset(fieldset){
    orders.add(fieldset);
    fieldset.querySelector('.drink-count').innerText = orders.size;
    console.log(fieldset.querySelectorAll('input[name="milk"]'));
    fieldset.querySelectorAll('.milk-choose').forEach(item => item.name = 'milk' + orders.size);
    fieldset.querySelectorAll('.additional-choose').forEach(item => item.name = 'options' + orders.size);
    fieldset.querySelector('.btn-close').addEventListener('click', () => {
        if (orders.size > 1) {
            orders.delete(fieldset);
            fieldset.remove()
            let counter = 1;
            for (const order of orders) {
                order.querySelector('.drink-count').innerText = counter;
                order.querySelectorAll('.milk-choose').forEach(item => item.name = 'milk' + counter);
                order.querySelectorAll('.additional-choose').forEach(item => item.name = 'options' + counter);
                counter++;
            }
        }
    });
    document.querySelector('#additional_drink').append(fieldset);
}

function closeModal(){
    const element = document.querySelector('.overlay');
    element.classList.add('hidden');
    document.querySelector('.drinks-table').innerHTML = "";
}

function openModal(){
    const element = document.querySelector('.overlay');
    element.classList.remove('hidden');

}

