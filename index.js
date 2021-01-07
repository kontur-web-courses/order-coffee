let addButtons = document.querySelectorAll('.add-button');
let addButton = addButtons[addButtons.length-1];

addButton.onclick = function() {
    MakeNewForm();
}

function HideForm(button_close_form)
{
    button_close_form.parentNode.parentNode.classList.add("hide")
}


function MakeNewForm()
{
    let forms = document.querySelectorAll("form");
    let form = forms[0].cloneNode(true);
    form.querySelector(".beverage-count").innerHTML="Напиток №"+String(document.querySelectorAll("form").length+1);
    document.body.append(form);
    addButton = document.querySelectorAll('.add-button')[document.querySelectorAll('.add-button').length-1];
    addButton.onclick = function() {
        MakeNewForm();
    }
    //показывает закрывающую кнопку
    form.querySelector('.close-form').classList.remove("hide");
    //при нажатии кнопки скрывается форма
    form.querySelector('.close-form').onclick  = function() {
        HideForm( form.querySelector('.close-form'));
    }; 

    form.querySelector('.submit-button').onclick = ShowLightbox;
}

function fullTable()
{
    let forms = document.querySelectorAll("form");

    for (let form of forms) 
    {
        var table = document.getElementById('table');
        var row = document.createElement("TR");
        table.appendChild(row);

       // Создаем ячейки в вышесозданной строке

        var td1 = document.createElement("TD");
        var td2 = document.createElement("TD");
        var td3 = document.createElement("TD");

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        let drink = '';
        if (form.drink.value ==="espresso")
        drink='Эспрессо';
        if (form.drink.value ==="capuccino")
        drink='Капучино';
        if (form.drink.value ==="cacao")
        drink='Какао';

        td1.innerHTML = drink;

        let milk ='';

        if (form.milk.value =="usual")
        milk='обычное';
        if (form.milk.value ==="no-fat")
        milk='обезжиренное';
        if (form.milk.value ==="soy")
        milk='соевое молоко';
        if (form.milk.value ==="coconut")
        milk='кокосовое молоко';

        td2.innerHTML = milk;

        let extra ='';
        if (form.querySelector('input[value="whipped cream"]').checked == true)
        extra+=" взбитые сливки";

        if (form.querySelector('input[value="marshmallow"]').checked == true)
        extra+=" зефирки";

        if (form.querySelector('input[value="chocolate"]').checked == true)
        extra+=" шоколад";

        if (form.querySelector('input[value="cinnamon"]').checked == true)
        extra+=" корица";

        td3.innerHTML = extra;
    }
}



function ShowLightbox()
{

    let lightbox = document.getElementById('lightbox');
    document.getElementById("count-drink").innerHTML=MakeStringForLightbox();
    let hidden = document.getElementById('hidden');
    lightbox.classList.remove("hide"); 
    hidden.classList.remove("hide");

    let row = document.createElement("TR");
    document.getElementById('table').appendChild(row);
    let th1 = document.createElement("TH");
    let th2 = document.createElement("TH");
    let th3 = document.createElement("TH");
    row.appendChild(th1);
    th1.innerHTML = "Напиток";
    row.appendChild(th2);
    th2.innerHTML = "Молоко";
    row.appendChild(th3);
    th3.innerHTML = "Дополнительно";
    fullTable();
    
    let button_close = document.getElementById('close');
    button_close.onclick  = function() 
    {
        document.getElementById('hidden').classList.add("hide");
        document.getElementById('lightbox').classList.add("hide"); 
        document.getElementById('table').innerHTML='';

        let forms = document.querySelectorAll("form");
        for (let form of forms) 
        {
            form.submit();
        }
        
    };
}

function MakeStringForLightbox()
{
    let count =String(document.querySelectorAll("form").length);
    let end='';
    if (count[count.length-1]=='1' && count[count.length-2]!='1')
        end=' напиток"';
    else
    if (count=='3'|| count=='2' || count=='4')
        end=' напитка"';
    else
    end=' напитков"';
    return `"Вы заказали `+String(count)+end;
}

