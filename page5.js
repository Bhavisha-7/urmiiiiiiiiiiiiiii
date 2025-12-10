const music = document.getElementById('bgMusic');

function playSong(song){
  music.src = song;
  music.play();
}

function goNext(){
  window.location.href = 'page6.html';
}

// tiny hearts
const bg = document.querySelector('.tiny-hearts-bg');

function createHeart(){
  const heart = document.createElement('div');
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.animationDuration = (6 + Math.random()*6) + 's';
  bg.appendChild(heart);
  setTimeout(()=>heart.remove(),12000);
}

for(let i=0;i<35;i++) createHeart();
setInterval(createHeart,500);
