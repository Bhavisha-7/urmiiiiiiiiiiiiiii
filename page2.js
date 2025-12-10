document.addEventListener('DOMContentLoaded', ()=>{

  const cards = document.querySelectorAll('.memory-card');
  let index = 0;

  const scrollLeft = document.getElementById('scrollLeft');
  const scrollRight = document.getElementById('scrollRight');
  const nextBtn = document.getElementById('nextBtn');

  function updateCards(){
    cards.forEach((card,i)=>{
      card.classList.remove('active','prev','next');
      if(i === index) card.classList.add('active');
      else if(i === index-1) card.classList.add('prev');
      else if(i === index+1) card.classList.add('next');
    });
  }

  updateCards();

  scrollLeft.addEventListener('click',()=>{
    if(index>0){ index--; updateCards(); }
  });

  scrollRight.addEventListener('click',()=>{
    if(index<cards.length-1){ index++; updateCards(); }
  });

  nextBtn?.addEventListener('click',()=>{
    window.location.href = "page4.html";
  });

  // Play music on first click
  document.body.addEventListener('click',()=>{
    const music=document.getElementById('bgMusic');
    music.play();
  },{once:true});

  // Tiny hearts
  const bg=document.querySelector('.tiny-hearts-bg');
  function makeHeart(){
    const h=document.createElement('div');
    h.style.width=h.style.height=6+Math.random()*8+'px';
    h.style.background='pink';
    h.style.position='absolute';
    h.style.left=Math.random()*100+'vw';
    h.style.borderRadius='50%';
    h.style.opacity=Math.random();
    h.style.animation=`floatTiny ${6+Math.random()*6}s linear infinite`;
    bg.appendChild(h);
    setTimeout(()=>h.remove(),12000);
  }
  for(let i=0;i<40;i++) makeHeart();
  setInterval(makeHeart,600);

});
