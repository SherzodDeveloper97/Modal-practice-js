// Selectors
const btnsOpenModal = document.querySelectorAll(".btn");
const modalContainer = document.querySelector(".modal__container");
const closes = document.querySelectorAll(".close__icon");
const modalBlock = document.querySelector(".modal__block");



// add Event Listener
for (let key of btnsOpenModal) {
    key.addEventListener("click", modalWindow);
}

for (let value of closes) {
    value.addEventListener("click", modalClose)
}

modalContainer.addEventListener("click", modalClose);

modalBlock.addEventListener("click", function(e) {
    e.stopPropagation();
})

document.addEventListener("keydown", function(e) {
    for (let i in e) {
        // console.log(e.key);
        if (e.key === "Escape" && modalContainer.classList.contains("active")) {
            modalClose();
        }
    }

})


// Functions
function modalWindow() {
    modalContainer.classList.add("active");
}

function modalClose() {
    modalContainer.classList.remove("active");
}