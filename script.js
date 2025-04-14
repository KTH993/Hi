// Function to show content based on selected language
function showContent(lang) {
  // Remove 'active' class from both English and Burmese content
  document.querySelector('.en').classList.remove('active');
  document.querySelector('.mm').classList.remove('active');

  // Add 'active' class to the selected language content
  document.getElementById(lang).classList.add('active');
}

// Optional: If you want to set the default language when the page loads
window.onload = function() {
  // Set default language to English
  showContent('en');
}
