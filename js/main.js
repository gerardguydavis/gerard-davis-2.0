var contact = document.querySelector(".contact-button");
var popup = document.querySelector(".popup");
var closeButton = document.querySelector(".close");

contact.addEventListener("click", function () {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
        popup.classList.add("open")
    }
});

closeButton.addEventListener("click", function () {
    if (popup.classList.contains("open")) {
        popup.classList.remove("open");
        popup.classList.add("hide");
    }
});
