class Beverages{

    constructor() {
        this.count = 1;
        this._selector = ".beverage-form";
        const firstElement = document.querySelector(this._selector);
        this._setOnRemoveEvent(this.count);
        this._addId(firstElement, this.count);
        this._changeRemoveButtonVisibility(true);
    }

    _addId(node, beverageNumber){
        node.setAttribute('id',`form${beverageNumber}`)
    }

    _setOnRemoveEvent(beverageNumber){
        const removeImage = document.querySelector(`#form${beverageNumber} .remove`)
        if (!removeImage){
            throw new Error("Не найден класс remove");
        }
        removeImage.onclick = ()=> this.remove(beverageNumber);
    }

    add(){
        this._changeRemoveButtonVisibility();
        const source = document.querySelector(this._selector);
        const clone = source.cloneNode(true);
        const beverage = this._get_beverage(clone);
        const beverageCountNode = this._get_count_node(beverage);
        this.count++;
        beverageCountNode.textContent = `Напиток №${this.count}`;
        source.parentElement.appendChild(clone);
        clone.setAttribute('id',`form${this.count}`)
        this._setOnRemoveEvent(this.count);
    }


    _get_beverage(form) {
        let beverage = null;
        form.childNodes.forEach(node => {
            if (node.classList?.contains("beverage")) beverage = node
        });
        return beverage;
    }

    _get_count_node(beverage) {
        let beverageCountNode = null;
        beverage.childNodes.forEach(node => {
            if (node.classList?.contains("beverage-count")) beverageCountNode = node
        });
        return beverageCountNode;
    }

    remove(beverage_number){
        if (this.count === 1){
            throw new Error("Нельзя удалять последний напиток");
        }
        document.querySelector(`#form${beverage_number}`).remove();
        this.count--;
        if (this.count === 1){
            this._changeRemoveButtonVisibility(true);
        }
        this._update_beverages_number()
    }


    _update_beverages_number(){
        document.querySelectorAll('.beverage-form').forEach((form, index)=>{
            const number = index+1;
            form.setAttribute('id',`form${number}`)
            let countNode = this._get_count_node(this._get_beverage(form));
            countNode.textContent = `Напиток №${number}`;
            this._setOnRemoveEvent(number);
        })
    }

    _changeRemoveButtonVisibility(hide=false){
        const removeButton = document.querySelector('.remove');
        if (hide) {
            removeButton.classList.add('hide');
        }else removeButton.classList.remove('hide');
    }
}

// window.onload = function () {
//     let form = document.querySelector("#form1");
//     form.onsubmit = onSubmit.bind(form);
// };

const overlay = document.querySelector('#overlay');
const lightbox = document.querySelector('#lightbox');
beverages = new Beverages();


function onCloseLightbox(){
    overlay.classList.remove("blur");
    overlay.onclick = undefined;
    lightbox.style.display = 'none';
}

function _getTable(forms){
    let rows = '<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th></tr>';
    forms.forEach(form=>{
        const formData = new FormData(form);
        rows += `<tr>
<td>${formData.get('beverage')}</td>
<td>${formData.get('milk')}</td>
<td>${formData.getAll('options')}</td>
</tr>`
    })


    return `<table>${rows}</table>`
}

function onSubmit(event){
    overlay.classList.add("blur");
    event.cancelBubble = "true";
    overlay.onclick = ()=> onCloseLightbox()
    lightbox.style.display = 'block';
    lightbox.innerHTML = _getTable(document.querySelectorAll('.beverage-form'));
    const height =lightbox.clientHeight / 2;
    lightbox.style.marginTop = `-${height}px`;
}


