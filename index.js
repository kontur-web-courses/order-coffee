// 1
const fields = document.querySelector('.beverage');
let bevCount = 1;

const addButton = document.querySelector('.add-button');
addButton.addEventListener(
    'click',
    function () {
        const newNode = fields.cloneNode(true);
        bevCount++;
        const beverageCount = newNode.querySelector('.beverage-count');
        // console.log(beverageCount);
        beverageCount.textContent = `Напиток №${bevCount}`;
        addButton.parentNode.insertBefore(newNode, addButton);
    }
)
