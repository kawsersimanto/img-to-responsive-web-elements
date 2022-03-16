let toggleButton = document.querySelector(".toggle-button");
let navLinks = document.querySelector(".nav-links");
let navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", (e)=>{
  navLinks.classList.toggle("active");
  navbar.classList.toggle("react");
})