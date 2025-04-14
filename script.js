// Function to show content based on selected language
function showContent(lang) {
  // Remove 'active' class from both English and Burmese content
  document.querySelector('.en').classList.remove('active');
  document.querySelector('.mm').classList.remove('active');

  // Add 'active' class to the selected language content
  document.getElementById(lang).classList.add('active');

  // Update language switcher button styles
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (lang === 'en') {
    document.getElementById('enBtn').classList.add('active');
  } else {
    document.getElementById('mmBtn').classList.add('active');
  }
}

// Function to toggle the language between English and Burmese (for toggle-style button)
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const currentLang = langToggleBtn.textContent.trim();

    if (currentLang === 'Eng / MM') {
      showContent('mm');
      langToggleBtn.textContent = 'MM / Eng';
    } else {
      showContent('en');
      langToggleBtn.textContent = 'Eng / MM';
    }
  });
}

// Language switcher buttons (if separate buttons exist)
const enBtn = document.getElementById('enBtn');
const mmBtn = document.getElementById('mmBtn');

if (enBtn && mmBtn) {
  enBtn.addEventListener('click', () => {
    showContent('en');
  });

  mmBtn.addEventListener('click', () => {
    showContent('mm');
  });
}

// Header shrink on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Optional: Set default language on page load
window.onload = function() {
  showContent('en');
  if (langToggleBtn) langToggleBtn.textContent = 'Eng / MM';
};
