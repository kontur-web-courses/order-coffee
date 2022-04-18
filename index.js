let addButton = document.getElementsByClassName('add-button')[0];
let formContainer = document.getElementsByClassName('container')[0];
let beverageCounter = 1;

const milkValues = ['usual', 'no-fat', 'soy', 'coconut'];
const milkTexts = ['обычном молоке', 'обезжиренном молоке', 'соевом молоке', 'кокосовом молоке'];
const extraValues = ['whipped cream', 'marshmallow', 'chocolate', 'cinnamon'];
const extraTexts = ['взбитых сливок', 'зефирок', 'шоколад', 'корицу'];


addButton.addEventListener('click', (e) => {
  beverageCounter++;

  let fieldset = document.createElement('fieldset');
  fieldset.className = 'beverage';

  let h4 = document.createElement('h4');
  h4.className = 'beverage-count';
  h4.innerText = `Напиток №${beverageCounter}`;

  let beverageChooser = document.createElement('Label');
  beverageChooser.className = 'field';
  let chooserSpan = document.createElement('Span');
  chooserSpan.innerText = 'Я буду';
  chooserSpan.className = 'label-text';
  beverageChooser.appendChild(chooserSpan);
  let chooserSelector = document.createElement('Select');
  chooserSelector.appendChild(new Option('Эспрессо', 'espresso'));
  chooserSelector.appendChild(new Option('Капучино', 'capuccino', true, true));
  chooserSelector.appendChild(new Option('Какао', 'cacao'));
  beverageChooser.appendChild(chooserSelector);

  let milk = document.createElement('Div');
  milk.className = 'field';
  let milkSpan = document.createElement('Span');
  milkSpan.innerText = 'Сделайте напиток на';
  milk.appendChild(milkSpan);
  for (let i = 0; i < milkValues.length; i++) {
    let milkType = document.createElement('label');
    milkType.className = 'checkbox-field';
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'milk' + beverageCounter;
    radio.value = milkValues[i];
    if (i == 0) {
      radio.checked = true;
    }
    let span = document.createElement('span');
    span.innerText = milkTexts[i];
    milkType.appendChild(radio);
    milkType.appendChild(span);
    milk.appendChild(milkType);
  }

  let extras = document.createElement('Div');
  extras.className = 'field';
  let span = document.createElement('span');
  span.className = 'checkbox-label';
  span.innerText = 'Добавьте к напитку:';
  extras.appendChild(span);

  for (let i = 0; i < extraValues.length; i++) {
    let field = document.createElement('label');
    field.className = 'checkbox-field';
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'options' + beverageCounter;
    input.value = extraValues[i];
    let span = document.createElement('span');
    span.innerText = extraTexts[i];
    field.appendChild(input);
    field.appendChild(span);
    extras.appendChild(field);
  }

  let textarea = document.createElement('Div');
  textarea.className = 'field';
  let textareaLabel = document.createElement('label');
  textareaLabel.innerText = 'И еще вот что';
  let textFromInput = document.createElement('span');
  let textareaInput = document.createElement('input');
  textareaInput.type = 'textarea';
  textareaInput.name = 'text' + beverageCounter;
  textareaInput.oninput = function() {
    textFromInput.innerHTML = textareaInput.value;
  };
  textareaLabel.appendChild(textareaInput);
  textareaLabel.appendChild(textFromInput);
  textarea.appendChild(textareaLabel);

  fieldset.appendChild(h4);
  fieldset.appendChild(beverageChooser);
  fieldset.appendChild(milk);
  fieldset.appendChild(extras);
  fieldset.appendChild(textarea);
  formContainer.appendChild(fieldset);
});