// Restore animated bubbly background
(function() {
  const bgAnim = document.querySelector('.bg-anim');
  if (bgAnim) {
    for (let i = 0; i < 14; i++) {
      const shape = document.createElement('span');
      shape.className = 'bg-shape';
      shape.style.left = Math.random()*100 + '%';
      shape.style.top = Math.random()*100 + '%';
      shape.style.width = (60 + Math.random()*120) + 'px';
      shape.style.height = shape.style.width;
      shape.style.opacity = 0.18 + Math.random()*0.18;
      shape.style.animationDelay = (Math.random()*12) + 's';
      bgAnim.appendChild(shape);
    }
  }
})();

// Animate main objects (container, title, buttons) to float up/down in a looping, teleporter/train-like vibe
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const buttons = document.querySelectorAll('.infhub-btn');

// Floating animation for container
if (container) {
  container.style.animation = 'floatTeleport 3.6s ease-in-out infinite alternate';
}
// Floating animation for title
if (title) {
  title.style.animation = 'teleTitle 2.2s cubic-bezier(.7,-0.3,.3,1.3) infinite alternate';
}
// Floating animation for buttons (with delay for "train" effect)
buttons.forEach((btn, i) => {
  btn.style.animation = `teleBtn 2.5s ${0.15*i}s cubic-bezier(.7,-0.3,.3,1.3) infinite alternate`;
  // Restore explosion effect
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('explode');
    setTimeout(()=>btn.classList.remove('explode'), 700);
  });
});

// Fill background with animated green shapes
const bgAnim = document.querySelector('.bg-anim');
if (bgAnim) {
  for (let i = 0; i < 14; i++) {
    const shape = document.createElement('span');
    shape.className = 'bg-shape';
    shape.style.left = Math.random()*100 + '%';
    shape.style.top = Math.random()*100 + '%';
    shape.style.width = (60 + Math.random()*120) + 'px';
    shape.style.height = shape.style.width;
    shape.style.opacity = 0.15 + Math.random()*0.18;
    shape.style.animationDelay = (Math.random()*12) + 's';
    bgAnim.appendChild(shape);
  }
}
