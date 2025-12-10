// index page interactions: envelope open, create sparkles, continue button
document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const continueBtn = document.getElementById('continueBtn');
  const sparkleLayer = document.getElementById('sparkle-layer');

  // toggle open
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
  });

  // create floating sparkles/hearts
  function makeSparkle(){ 
    const s = document.createElement('div');
    const size = Math.random()*10 + 6;
    s.style.width = s.style.height = size + 'px';
    s.style.position = 'absolute';
    s.style.left = (Math.random()*100) + 'vw';
    s.style.bottom = '-10vh';
    s.style.background = `radial-gradient(circle at 40% 30%, rgba(255,255,255,0.9), rgba(255,200,230,0.9))`;
    s.style.opacity = 0.9 - Math.random()*0.6;
    s.style.borderRadius = '50%';
    s.style.filter = 'blur(1px)';
    s.style.pointerEvents = 'none';
    s.style.transform = `translateY(0)`;
    s.style.animation = `floatUp ${8 + Math.random()*8}s linear forwards`;
    sparkleLayer.appendChild(s);
    setTimeout(()=> s.remove(), 18000);
  }

  // continuous generation
  setInterval(makeSparkle, 450);

  // continue navigation (also ensure envelope is open for fun)
  continueBtn.addEventListener('click', () => {
    envelope.classList.add('open'); // open for effect
    // small delay so user sees bounce then go
    setTimeout(()=> {
      window.location.href = 'page2.html';
    }, 550);
  });
});
