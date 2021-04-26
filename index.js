const choiceForm = document.getElementById('choiceForm');
const beverageList = document.getElementsByClassName('beverage');
let beverageAmount = 1;

document.querySelector('.add-button').addEventListener('click', () => {
    const newBeverage = document.querySelector('.beverage').cloneNode(true);
    const beverageCount = newBeverage.querySelector('.beverage-count');

    beverageCount.textContent = `Напиток №${++beverageAmount}`;

    choiceForm.insertBefore(newBeverage, document.getElementById('add-button-container'));

    if (beverageList.length > 1) {
        setDeleteButtonsDisabled(false);
    } else {
        setDeleteButtonsDisabled(true);
    }
});

choiceForm.addEventListener('click', (e) => {
    if (beverageList.length > 1 && e.target.id === 'delete-coffee-btn') {
        let forms = document.querySelectorAll('.beverage');
        let find = false;
        forms.forEach(f => {
            if (find) {
                f.querySelector('.beverage-count').textContent = `Напиток №${parseInt(f.querySelector('.beverage-count').innerHTML.split('№')[1]) - 1}`;
            } else if (f.querySelector('.beverage-count').textContent === e.target.parentNode.querySelector('.beverage-count').textContent) {
                find = true;
            }
        })
        e.target.parentNode.remove();
        beverageAmount--;
    }

    if (beverageList.length > 1) {
        setDeleteButtonsDisabled(false);
    } else {
        setDeleteButtonsDisabled(true);
    }
});

document.getElementById('orderSuccess').style.display = 'none';

choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('orderSuccess').style.display = 'block';
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('orderSuccess').style.display = 'none';
    });
});

function setDeleteButtonsDisabled(value) {
    document.querySelectorAll('.delete_btn')
        .forEach(btn => btn.disabled = value);
}
