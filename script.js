const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav_bar ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav_bar ul li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}))

// Image Changing

