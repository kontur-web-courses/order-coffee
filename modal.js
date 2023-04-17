document.getElementById("submit").addEventListener('click', showModalWindow);
drinks = []


function showModalWindow(){
let content = `<div class="modal" id="modalWindow">
<a onclick="hideModalWindow()">X</a>
<p>"Вы заказали ${drinksCount} напитков"</p>
</div>`
document.body.insertAdjacentHTML('afterbegin', content)

}

function hideModalWindow(){
  document.getElementById("modalWindow").remove();
}