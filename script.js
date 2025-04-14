function showContent(lang) {
  document.querySelector('.en').classList.remove('active');
  document.querySelector('.mm').classList.remove('active');
  document.getElementById(lang).classList.add('active');
}
