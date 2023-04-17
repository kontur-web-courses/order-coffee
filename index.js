const doneBtn = document.getElementById("submit-button");

const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");

doneBtn.addEventListener("click", (e) => {
    console.log(modal, modalOverlay);
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("hidden");
});
