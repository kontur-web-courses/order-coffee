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

//2

const deleteButton = document.querySelector('.delete-beverage')
deleteButton.addEventListener(
    'click',
    function (e) {
            console.log(e.target.parentNode.parentNode);
            if (e.target.parentNode.parentNode.firstChild == e.target.parentNode)
                e.target.parentNode.remove();
    }
)
