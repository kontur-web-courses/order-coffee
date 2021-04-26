let fieldSet = document.querySelector('.beverage');
let addBtn = document.querySelector('.add-button');
let divToInsertBefore = document.querySelector('form fieldSet ~ div');
let form = document.querySelector('form');
let counter = 1;

addBtn.addEventListener('click', addNewFieldSet);

function addNewFieldSet(){
	counter++;
	let resultFieldSet = fieldSet.cloneNode(true);
	resultFieldSet.querySelector('.beverage-count').textContent = `Напиток №${counter}`;
	let inputs = resultFieldSet.querySelectorAll('input');

	for (const input of inputs){
		if (input.name)
			input.name = input.name + '' + counter;
	}
	form.insertBefore(resultFieldSet, divToInsertBefore);
}

function createDeleteButton(fieldSet){
	var button = document.createD
}