window.onload = function () {
    let countBeverages = 1;
    const beverage = document.querySelector('.beverage');
    const beverages = beverage.parentElement;
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const bgModal = modal.parentNode;
    const doneSubmit = document.querySelector('#done');

    const addBeverage = () => {
        countBeverages++;
        const clone = beverage.cloneNode(true);
        clone.setAttribute('data-beverage-number', countBeverages);
        setNumberBeverage(clone, countBeverages);
        resetBeverage(clone);
        clone.querySelector('.beverage__close').addEventListener('click', removeBeverage);
        clone.querySelector('.wishes>div>textarea').addEventListener('input', processText);
        clone.querySelector('.wishes>div>textarea').addEventListener('keydown', disableEnter);
        beverages.append(clone);
    };

    const removeBeverage = (event) => {
        if (countBeverages > 1) {
            countBeverages--;
            const currentBeverage = event.target.parentNode.parentNode;
            currentBeverage.remove();
            const currentNumber = currentBeverage.getAttribute('data-beverage-number');
            beverages.querySelectorAll('.beverage').forEach(beverage => {
                const number = beverage.getAttribute(('data-beverage-number'));
                if (number > currentNumber) {
                    setNumberBeverage(beverage, number - 1);
                }
            });
        } else if (countBeverages === 1) {
            const currentBeverage = event.target.parentNode.parentNode;
            resetBeverage(currentBeverage);
        }
    };

    const setNumberBeverage = (beverage, number) => {
        beverage.setAttribute('data-beverage-number', number);
        beverage.querySelector('.beverage-count>span').textContent = `${number}`;
        beverage.querySelectorAll('.type>select').forEach(el => el.setAttribute('name', `type-${number}`));
        beverage.querySelectorAll('.milk>label>input').forEach(el => el.setAttribute('name', `milk-${number}`));
        beverage.querySelectorAll('.options>label>input').forEach(el => el.setAttribute('name', `options-${number}`));
        beverage.querySelector('.wishes>div>textarea').setAttribute('name', `options-${number}`);
    };

    const resetBeverage = (beverage) => {
        beverage.querySelector('.type>select>option').removeAttribute('selected');
        beverage.querySelector('.milk>label>input:checked').removeAttribute('checked');
        beverage.querySelector('.milk>label>input:first-child').checked = true;
        beverage.querySelectorAll('.options>label>input:checked').forEach(el => el.checked = false);
        beverage.querySelector('.wishes>div>textarea').value = '';
        beverage.querySelector('.wishes>div>.result').innerHTML = '';
    };

    const closeModal = (event) => {
        body.classList.remove('overflow-hidden');
        bgModal.classList.add('d-none');
    };

    const openModal = (event) => {
        event.preventDefault();

        body.classList.add('overflow-hidden');
        bgModal.classList.remove('d-none');

        const _ = countBeverages % 10;
        modal.querySelector('.modal__title>span').textContent
            = `${countBeverages} ${countBeverages <= 10 || countBeverages >= 20 ? _ === 1 ? 'напиток' : _ >= 2 && _ <= 4 ? 'напитка' : 'напитков' : 'напитков'}`;
        const modalBody = modal.querySelector('.modal__body');
        modalBody.innerHTML = '';
        modalBody.append(createTable())
    };

    const createTable = () => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        thead.append(trHead);
        ['Напиток', 'Молоко', 'Дополнительно', 'Пожелания'].forEach(el => {
            trHead.insertAdjacentHTML('beforeend', `<th>${el}</th>`);
        });
        const tbody = document.createElement('tbody');

        beverages.querySelectorAll('.beverage').forEach(beverage => {
            const number = beverage.getAttribute('data-beverage-number');
            const tr = document.createElement('tr');

            const _type = beverage.querySelector(`[name="type-${number}"]`).value;
            const _milk = beverage.querySelector(`[name="milk-${number}"]:checked`).value;
            const _options = [];

            beverage.querySelectorAll(`[name="options-${number}"]:checked`)
                .forEach(el => _options.push(el.value === 'whipped cream' && 'взбитых сливок'
                    || el.value === 'marshmallow' && 'зефирок'
                    || el.value === 'chocolate' && 'шоколад'
                    || el.value === 'cinnamon' && 'корицу'));

            const type = _type === 'espresso' && 'Экспрессо'
                || _type === 'capuccino' && 'Капучино'
                || _type === 'cacao' && 'Какао';
            const milk = _milk === 'usual' && 'Обычное'
                || _milk === 'no-fat' && 'Обезжиренное'
                || _milk === 'soy' && 'Соевое'
                || _milk === 'coconut' && 'Кокосовое';
            const options = _options.join(', ');
            const wishes = beverage.querySelector(`.result`).outerHTML;

            tr.insertAdjacentHTML('beforeend', `<td>${type}</td>`);
            tr.insertAdjacentHTML('beforeend', `<td>${milk}</td>`);
            tr.insertAdjacentHTML('beforeend', `<td>${options}</td>`);
            tr.insertAdjacentHTML('beforeend', `<td>${wishes}</td>`);
            tbody.append(tr);
        });

        // TODO body
        table.append(thead);
        table.append(tbody);
        return table;
    };

    const processText = (event) => {
        event.target.parentNode.querySelector('.result').innerHTML =
            event.target.value.replace(/срочно|быстрее|побыстрее|скорее|поскорее|очень нужно/ig, (match) => `<b>${match}</b>`);
        event.target.parentNode.querySelector('.result').scrollTo(0, 1000);
    };

    const disableEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    const createOrder = (event) => {
        closeModal();
        setTimeout(() => alert('order created!'), 0);
    };

    const checkTime = (event) => {
        const now = new Date();
        const [hours, minutes] = event.target.value.split(':', 2).map(el => parseInt(el));
        console.log(hours * 60 + minutes > now.getHours() * 60 + now.getMinutes());
        if (hours * 60 + minutes > now.getHours() * 60 + now.getMinutes()) {
            doneSubmit.disabled = false;
            event.target.setCustomValidity('');
            // document.querySelector('#alert').classList.add('d-none');
        } else {
            doneSubmit.disabled = true;
            event.target.setCustomValidity('Мы не умеем перемещаться во времени. Выберите время позже, чем текущее');
            // document.querySelector('#alert').classList.remove('d-none');
        }
    }


    document.querySelector('#add-button').addEventListener('click', addBeverage);
    document.querySelector('.beverage__close').addEventListener('click', removeBeverage);
    document.querySelector('.modal__close').addEventListener('click', closeModal);
    document.querySelector('#submit-button').addEventListener('click', openModal);
    document.querySelector('.wishes>div>textarea').addEventListener('input', processText);
    document.querySelector('.wishes>div>textarea').addEventListener('keydown', disableEnter);
    document.querySelector('#done').addEventListener('click', createOrder);
    document.querySelector('.modal [name="time"]').addEventListener('input', checkTime);
};