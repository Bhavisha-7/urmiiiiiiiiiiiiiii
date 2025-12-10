const music = document.getElementById('bgMusic');

// play music on first user click (browser safe)
document.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  }
}, { once: true });

// redirect to page 5
document.getElementById('goMusic').addEventListener('click', () => {
  window.location.href = 'page5.html';
});

// tiny hearts animation
const bg = document.querySelector('.tiny-hearts-bg');

function createHeart(){
  const heart = document.createElement('div');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';

  bg.appendChild(heart);
  setTimeout(()=>heart.remove(),12000);
}

for(let i=0;i<35;i++) createHeart();
setInterval(createHeart,500);
