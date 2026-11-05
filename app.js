document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", event => {
  if (nav.classList.contains("mobile-open") &&
      !nav.contains(event.target) &&
      !menuToggle.contains(event.target)) {
    nav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
