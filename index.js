const addButton = document.querySelector('.add-button');
const deleteButton = document.querySelector('.delete-button');
const submitButton = document.querySelector('.submit-button');
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно

let count = 1;
addButton.addEventListener('click', function () {
    const sets = document.querySelectorAll('fieldset');
    const fieldset = sets[sets.length - 1];
    const node = document.querySelector('fieldset').cloneNode(true);

    const milks = node.querySelectorAll("*[name='milk']");
    for (const milk of milks) {
        milk.name = `milk${count}`;
    }

    for (const e of node.children) {
        console.log(e.tagName)
        if (e.className === 'beverage-count') {
            e.textContent = `Напиток №${++count}`;
        }

        if (e.className === 'close-button') {
            e.addEventListener('click', function () {
                node.remove();
                count--;
            });
        }
    }

    fieldset.after(node);
});
deleteButton.addEventListener('click', function () {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
})

