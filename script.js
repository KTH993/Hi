// Shrink header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Language switcher button active toggle
const langButtons = document.querySelectorAll(".lang-btn");
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    // You can add your language switching logic here
    console.log("Language selected:", btn.dataset.lang);
  });
});

// Navigation link active state
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
