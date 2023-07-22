const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')

const openModal = ()=>{
    console.log("Modal is open");
    modal.classList.add("active")
    overlay.classList.add("overlayactive")
}

const closeModal = () => {
    console.log("Modal is close");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}