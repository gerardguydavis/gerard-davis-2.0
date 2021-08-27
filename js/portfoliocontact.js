const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const email = document.getElementById("email")

email.addEventListener("click", function () {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
        popup.classList.add("open")
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeWindow();
    }
})

closeButton.addEventListener("click", function () {
    closeWindow();
});

function closeWindow() {
    if (popup.classList.contains("open")) {
        popup.classList.remove("open");
        popup.classList.add("hide");
    }
}