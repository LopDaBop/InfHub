// Add epic sparkly, wavy, and glow effects to the title
const title = document.querySelector('.title');
if (title) {
  // Sparkle effect
  setInterval(() => {
    title.style.textShadow = `0 0 ${Math.random()*40+10}px #00c9a7, 0 0 12px #2193b0, 0 0 18px #00c9a799`;
    setTimeout(()=>{title.style.textShadow = '';}, 350);
  }, 1200);

  // Floating sparkles
  for (let i = 0; i < 12; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'title-sparkle';
    sparkle.style.left = Math.random()*90 + '%';
    sparkle.style.animationDelay = `${Math.random()*4}s`;
    title.appendChild(sparkle);
  }
}

// Button ripple, glow, and explode effect
const buttons = document.querySelectorAll('.infhub-btn');
buttons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #00ffb0 0%, #00c96b 80%, #0f4027 100%)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = '';
  });
  // Ripple effect
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.left = `${e.clientX - btn.getBoundingClientRect().left}px`;
    ripple.style.top = `${e.clientY - btn.getBoundingClientRect().top}px`;
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 700);
  });
  // Explode effect
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('explode');
    setTimeout(()=>btn.classList.remove('explode'), 600);
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
