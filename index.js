let count = 1;
const button = document.querySelector('.add-button');
const fieldset = document.querySelector('.beverage');
let deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const beverageFieldset = button.parentElement;
        if (count > 1) {
            beverageFieldset.remove();
            count--;
            console.log(1)
        }
    });
});
button.addEventListener('click', function (){
    count++;
    let newFieldset = fieldset.cloneNode(true)
    newFieldset.querySelector('.beverage-count').textContent = `Напиток №${count}`;

    fieldset.after(newFieldset);
});




