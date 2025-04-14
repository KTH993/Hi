// Shrink header on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Toggle language
const engBtn = document.getElementById('engBtn');
const mmBtn = document.getElementById('mmBtn');
const engTexts = document.querySelectorAll('.eng');
const mmTexts = document.querySelectorAll('.mm');

engBtn.addEventListener('click', () => {
  engBtn.classList.add('active');
  mmBtn.classList.remove('active');
  engTexts.forEach(p => p.style.display = 'block');
  mmTexts.forEach(p => p.style.display = 'none');
});

mmBtn.addEventListener('click', () => {
  mmBtn.classList.add('active');
  engBtn.classList.remove('active');
  engTexts.forEach(p => p.style.display = 'none');
  mmTexts.forEach(p => p.style.display = 'block');
});

// Active nav highlighting based on scroll
const navLinks = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
