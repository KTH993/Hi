// Header Shrink on Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  const sections = document.querySelectorAll(".content-section");
  const buttons = document.querySelectorAll(".nav-btn");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom > 100) {
      buttons.forEach((btn) => btn.classList.remove("active"));
      buttons[index].classList.add("active");
    }
  });
});

// Navigation button scroll
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop - 120,
      behavior: "smooth",
    });
  });
});

// Language toggle
const toggleBtns = document.querySelectorAll(".language-toggle button");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const lang = btn.id === "btn-mm" ? "mm" : "en";
    document.querySelectorAll("[data-en]").forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });
});
