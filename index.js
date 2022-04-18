
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("close");


btn.onclick = function(e) {
    modal.style.display = "block";
    e.preventDefault();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}