const header = document.getElementById('header');
const engBtn = document.getElementById('engBtn');
const mmBtn = document.getElementById('mmBtn');
const engTexts = document.querySelectorAll('.eng');
const mmTexts = document.querySelectorAll('.mm');
const navLinks = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

// Language toggle
function setLanguage(lang) {
  if (lang === 'eng') {
    engBtn.classList.add('active');
    mmBtn.classList.remove('active');
    engTexts.forEach(el => el.style.display = 'block');
    mmTexts.forEach(el => el.style.display = 'none');
  } else {
    mmBtn.classList.add('active');
    engBtn.classList.remove('active');
    mmTexts.forEach(el => el.style.display = 'block');
    engTexts.forEach(el => el.style.display = 'none');
  }
}
engBtn.addEventListener('click', () => setLanguage('eng'));
mmBtn.addEventListener('click', () => setLanguage('mm'));

// ScrollSpy for nav
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 200; // Adjust for fixed header
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
