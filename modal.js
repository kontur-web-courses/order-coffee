document.getElementById("submit").addEventListener('click', showModalWindow);

function showModalWindow(){
let content = `<div class="modal" id="modalWindow">
<a onclick="hideModalWindow()">X</a>
<p>Текст модального окна</p>
</div>`
document.body.insertAdjacentHTML('afterbegin', content)

}

function hideModalWindow(){
  document.getElementById("modalWindow").remove();
}