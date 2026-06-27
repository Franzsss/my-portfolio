console.log("Website Loaded");

const header = document.querySelector("h1");


header.addEventListener("click", () => {
    alert("Welcome to my portfolio");
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});