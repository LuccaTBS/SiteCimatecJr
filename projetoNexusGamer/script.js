const openModalButtonH = document.querySelector("#open-modal-hardware");
const openModalButtonP = document.querySelector("#open-modal-perifericos");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function openModal(title, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    modal.style.display = "block";
    fade.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    fade.style.display = "none";
}

openModalButtonH.addEventListener("click", () => openModal("Produtos Disponiveis"));
openModalButtonP.addEventListener("click", () => openModal("Produtos Disponiveis"));

closeModalButton.addEventListener("click", closeModal);

fade.addEventListener("click", closeModal);
