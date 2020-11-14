let button = document.getElementsByClassName('add-button');
let formCount = 1;

button[0].addEventListener('click', function(){
    let newForm = document.querySelector('.beverage').cloneNode(true);
    formCount++;
    let inputs = newForm.querySelectorAll('input');
    for (let input of inputs){
        input.name += formCount;
    }
    let textarea = newForm.querySelector("textarea");
    textarea.name += formCount;
    textarea.value = null;
    result = newForm.querySelector(".result");
    result.innerHTML=null;
    textarea.oninput = oninput;
    let beverageCount = newForm.querySelector('.beverage-count');
    beverageCount.textContent = `Напиток №${formCount}`;
    button[0].before(newForm);
});

function remove(element){
    const count = document.querySelectorAll('.beverage').length;
    if (count > 1){
        element.parentNode.remove();
    }
}

let form = document.querySelector('form');
let modal = document.querySelector('.modal');
let table = document.querySelector('table');
let p = document.createElement('p');
let com = document.createElement('p');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    deleteRows();
    let count = document.querySelectorAll('.beverage').length;
    let n = count % 10;
    if ((n === 2 || n === 3 || n == 4) && (count < 10 || count > 20))
      p.textContent = `Вы заказали ${count} напитка`;
    else if (n === 1)
      p.textContent = `Вы заказали ${count} напиток`;
    else
      p.textContent = `Вы заказали ${count} напитков`;
    document.querySelector('.modal_window').querySelector('h3').after(p);
    modal.style.visibility = 'visible';
    let allForm =  document.querySelectorAll('.beverage');
    for (let form of allForm){
      let ind = form.querySelector('select').selectedIndex;
      let beverage = form.querySelector('select').options[ind].textContent;
      let beverage_count = form.querySelector('.beverage-count').textContent;
      let countOfForm = Number(beverage_count.slice(beverage_count.indexOf('№') + 1));
      let milk;
      let checkboxes;
      if (countOfForm === 1){
        milk = form.querySelector(`input[name=milk]:checked`).value;
        checkboxes = form.querySelectorAll(`input[name=options]:checked`);
      }
      else{
        milk = form.querySelector(`input[name=milk${countOfForm}]:checked`).value;
        checkboxes = form.querySelectorAll(`input[name=options${countOfForm}]:checked`);
      }
      switch (milk){
        case 'usual': milk = 'обычное';
          break;
        case 'no-fat': milk = 'обезжиренное';
          break;
        case 'soy': milk = 'соевое';
          break;
        case 'coconut': milk = 'кокосовое';
          break;
      }
      let options = [];
      for (let index = 0; index < checkboxes.length; index++) {
        let option = checkboxes[index].value
        switch (option){
          case 'whipped cream': option = ' взбитые сливки';
            break;
          case 'marshmallow': option = ' зефирки';
            break;
          case 'chocolate': option = ' шоколад';
            break;
          case 'cinnamon': option = ' корица';
            break;
        }
        options.push(option);
      }
      let comment = form.querySelector("textarea");
      let row = document.createElement('tr');
      row.innerHTML = `<td>${beverage}</td><td>${milk}</td><td>${options}</td><td>${comment.value}</td>`;
      document.querySelector('table').append(row);
    }
});
  
function deleteRows(){
    let table = document.querySelector('table');
    let rows = table.rows;
    i = rows.length - 1;
    while(rows.length > 1)
    {
        table.deleteRow(i);
        i--;
    }
}

document.querySelector("textarea").oninput = oninput;

function oninput (){
  let result = this.parentNode.querySelector(".result");
  let text = this.value;
  if(text.includes('побыстрее')) text = text.replaceAll('побыстрее','<b>побыстрее</b>');
  if(text.includes('быстрее')) text = text.replaceAll('быстрее','<b>быстрее</b>');
  if(text.includes('поскорее')) text = text.replaceAll('поскорее','<b>поскорее</b>');
  if(text.includes('скорее')) text = text.replaceAll('скорее','<b>скорее</b>');
  if(text.includes('очень нужно')) text = text.replaceAll('очень нужно','<b>очень нужно</b>');
  result.innerHTML = text;
};
