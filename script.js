document.addEventListener('DOMContentLoaded',()=>{
  const envelope = document.getElementById('envelope');
  const continueBtn = document.getElementById('continueBtn');

  const cardPart1 = document.getElementById('cardPart1');
  const cardPart2 = document.getElementById('cardPart2');

  // Envelope click: open and show first part
  envelope.addEventListener('click', ()=>{
    envelope.classList.add('open');
    cardPart1.classList.remove('hidden');
    // After clicking card, show second part
    cardPart1.addEventListener('click',()=>{
      cardPart2.classList.remove('hidden');
    }, {once:true});
  });

  // Continue button
  continueBtn.addEventListener('click',()=>{
    window.location.href='page2.html';
  });

  // Tiny hearts all over screen
  const tinyBg = document.querySelector('.tiny-hearts-bg');
  function createTinyHeart(){
    const heart=document.createElement('div');
    const size=6+Math.random()*8;
    heart.style.width=heart.style.height=size+'px';
    heart.style.background = `linear-gradient(145deg,#ff7fa8,#ffb3d1)`;
    heart.style.borderRadius='50%';
    heart.style.position='absolute';
    heart.style.left=Math.random()*100+'vw';
    heart.style.top=Math.random()*100+'vh';
    heart.style.opacity = Math.random()*0.8+0.2;
    heart.style.pointerEvents='none';
    heart.style.animation = `floatTiny ${6 + Math.random()*6}s linear infinite`;
    tinyBg.appendChild(heart);
    setTimeout(()=>heart.remove(),15000);
  }
  for(let i=0;i<40;i++) createTinyHeart();
  setInterval(createTinyHeart,500);
});
