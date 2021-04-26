
let beverageCount = 1;
let lastBeverageNum = 1;
let deleteButtonActive = false;


let addDrinkButton = document.getElementById('addDrinkButton');
addDrinkButton.addEventListener('click', addDrinkForm);
document.getElementById('delete_1').addEventListener('click', () => {removeBlock(1);})
let availiableIDs = [1];

function addDrinkForm() {
    let beverageForm = document.getElementById(`beverage_${availiableIDs[0]}`).cloneNode(true);
    lastBeverageNum++;
    beverageCount++;
    availiableIDs.push(beverageCount);
    beverageForm.id = `beverage_${lastBeverageNum}`;
    beverageForm.innerHTML = beverageForm.innerHTML.replace(`Напиток №${availiableIDs[0]}`, `Напиток №${lastBeverageNum}`);
    beverageForm.innerHTML = beverageForm.innerHTML.replace(`beverage_${availiableIDs[0]}`, `beverage_${lastBeverageNum}`);
    beverageForm.innerHTML = beverageForm.innerHTML.split(`milk_${availiableIDs[0]}`).join(`milk_${lastBeverageNum}`);
    beverageForm.innerHTML = beverageForm.innerHTML.replace(`delete_${availiableIDs[0]}`, `delete_${lastBeverageNum}`);
    
    
    console.log(beverageForm.innerHTML);

    document.getElementById('addDrinkButton').before(beverageForm);
    document.getElementById(`delete_${lastBeverageNum}`).addEventListener('click', () => {removeBlock(lastBeverageNum);})

}

function removeBlock(id) {
    alert(availiableIDs);
    if (beverageCount == 1) 
        return;
    beverageCount -= 1;
    let pos = availiableIDs.findIndex(id);
    availiableIDs.splice(pos, 1);
    document.getElementById(`beverage_${id}`).remove();
}

    