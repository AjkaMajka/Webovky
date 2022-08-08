const toggleButton = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-links")
const menuIcon = document.querySelector(".fa-solid")

toggleButton.addEventListener("click", function () {
    navLinks.forEach(function(oneLink) {
        oneLink.classList.toggle("active")
    })

if (menuIcon.classList [1] == "fa-bars") {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-xmark")
}else {
    menuIcon.classList.remove ("fa-xmark")
    menuIcon.classList.add ("fa-bars")
    }
})