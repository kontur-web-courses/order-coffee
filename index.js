
const cross = document.createElement('BUTTON');
cross.textContent = 'XX';
cross.onclick = undefined;
cross.addEventListener('click', event => {
    event.target.parent.remove();
});

document.getElementsByClassName("beverage")[0].childNodes[0].after(cross);


let beverageCount = 1;
let baseClone = document.getElementsByClassName("beverage")[0].cloneNode(true);

function cloneFieldSet(count) {
    let currentClone = baseClone.cloneNode(true);
    currentClone.children[1].textContent = `Напиток №${count}`;
    for (const child of currentClone.children[3].children) {
        if (child.tagName === 'LABEL') {
            child.firstChild.nextSibling.name = `milk${count}`;
        }
    }
    for (const child of currentClone.children[4].children) {
        if (child.tagName === 'LABEL') {
            child.firstChild.nextSibling.name = `options${count}`;
        }
    }
    return currentClone;
}

document.getElementsByClassName('add-button')[0].addEventListener('click', event => {
    document.getElementsByClassName('add-button')[0].parentElement.previousSibling.after(cloneFieldSet(++beverageCount));
});