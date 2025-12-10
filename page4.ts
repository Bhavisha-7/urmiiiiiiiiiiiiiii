document.addEventListener('DOMContentLoaded',()=>{
  const tinyBg = document.querySelector('.tiny-hearts-bg');
  
  function createTinyHeart(){
    const heart = document.createElement('div');
    const size = 6 + Math.random() * 8;
    heart.style.width = heart.style.height = size+'px';
    heart.style.background = `linear-gradient(145deg,#ff7fa8,#ffb3d1)`;
    heart.style.borderRadius = '50%';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.opacity = Math.random() * 0.8 + 0.2;
    heart.style.pointerEvents = 'none';
    heart.style.animation = `floatTiny ${6 + Math.random()*6}s linear infinite`;
    tinyBg.appendChild(heart);
    setTimeout(()=>heart.remove(),15000);
  }

  for(let i=0;i<40;i++) createTinyHeart();
  setInterval(createTinyHeart,500);
});
