const slides = document.querySelectorAll('.slide');
let index = 0;

// play music on first interaction
window.addEventListener('click', () => {
  const music = document.getElementById('slideshowMusic');
  music.play();
}, { once
