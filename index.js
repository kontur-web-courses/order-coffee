let modal = document.getElementById("my_modal");
let btn = document.getElementsByClassName("submit-button")[0];
let span = document.getElementsByClassName("close_modal_window")[0];

btn.addEventListener('click', (e) => {
    document.getElementById("my_modal").style.display = "block";
});

span.addEventListener('click', (e) => {
    document.getElementById("my_modal").style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById("my_modal")) {
        document.getElementById("my_modal").style.display = "none";
    }
});