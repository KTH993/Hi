// Function to show content based on selected language
function showContent(lang) {
  // Remove 'active' class from both English and Burmese content
  document.querySelector('.en').classList.remove('active');
  document.querySelector('.mm').classList.remove('active');

  // Add 'active' class to the selected language content
  document.getElementById(lang).classList.add('active');
}

// Function to toggle the language between English and Burmese
const langToggleBtn = document.getElementById('langToggle');
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

// Optional: If you want to set the default language when the page loads
window.onload = function() {
  // Set default language to English
  showContent('en');
  langToggleBtn.textContent = 'Eng / MM'; // Ensure the button shows 'Eng / MM' initially
};
