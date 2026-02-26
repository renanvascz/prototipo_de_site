// === Efeito de header ao rolar ===
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// === Menu responsivo ===
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-center");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});


