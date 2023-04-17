const addButton = document.querySelector('.add-button');

let count = 1;
addButton.onclick = function () {
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
            e.onclick = function () {
                node.remove();
                count--;
            }
        }
    }

    fieldset.after(node);
}
