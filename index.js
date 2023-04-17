let number = 1;
document.querySelector('.add-button')
    .addEventListener('click', () => {
        let deepCopy = document.querySelector('.beverage').cloneNode(true);
        number += 1;
        deepCopy.querySelector('h4').textContent = `Напиток №${number}`;
        for (let milk of deepCopy.querySelectorAll('[name="milk"]')) {
            milk.name = `milk-${number}`;
        }

        deepCopy.querySelector('.del-button')
            .addEventListener('click', () => {
                if (document.querySelectorAll('.del-button').length !== 1) {
                    deepCopy.querySelector('.del-button').closest('fieldset').remove();
                }

            })

        document.querySelector('form').insertBefore(deepCopy, document.querySelector('.add-button-container'));

    })


document.getElementById('closeButton').addEventListener('click', () =>
    document.getElementById('modalWindow').style.display = 'none'
)

document.querySelector('.submit-button')
    .addEventListener('click', (event) => {
        let counter =document.querySelectorAll('.del-button').length;
        if (counter % 10 === 1 && (counter < 10 || counter > 20)) {
            text = `Вы заказали ${counter} напиток`;
        } else if (counter % 10 > 1 && counter % 10 < 5 &&(counter < 10 || counter > 20)) {
            text = `Вы заказали ${counter} напитка`;
        }
        else {
            text = `Вы заказали ${counter} напитков`;
        }
        document.querySelector('.count-orger').textContent = text;

        let table = document.querySelector('.table');

        for (let order of document.querySelectorAll('.beverage')) {
            let sets = order.querySelectorAll('.field')
            let text = table.insertRow()

            let cell1 = text.insertCell(0)

            let check = sets[0].querySelector('select');
            cell1.innerHTML = check.querySelector(`option[value="${check.value}"]`).textContent;

            let cell2 = text.insertCell(1)
            for (let milk of sets[1].querySelectorAll('label')) {
                if (milk.querySelector('input').checked){
                    cell2.innerHTML = milk.querySelector('span').textContent;
                }
            }
            let cell3 = text.insertCell(2)
            for (let ingredient of sets[2].querySelectorAll('label')) {
                if (ingredient.querySelector('input').checked){
                    cell3.innerHTML += ingredient.querySelector('span').textContent + ' ';
                }
            }
        }

        document.getElementById('modalWindow').style.display = 'block';
        event.preventDefault();
    })

let loveWords = ["срочно", "быстрее", "побыстрее", "скорее", "поскорее", "очень нужно"];
let userComment = document.querySelector('.user-comment');
let bufferComment = document.querySelector('textarea');
bufferComment.addEventListener('input', () => {
    let wordsArr = bufferComment.value.split(' ');
    let res = [];
    let flag = false;
    for(let word of wordsArr){
        for(let loveWord of loveWords){
            if (word.includes(loveWord)){
                res.push(`<b>${word}</b>`);
                flag = true;
                break;
            }
        }
        if(!flag) res.push(word);
        flag = false;
    }
    userComment.textContent = '';
    userComment.insertAdjacentHTML("afterbegin", `<p>${res.join(' ')}</p>`);
})
