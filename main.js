// Add a little sparkly effect to the title
const title = document.querySelector('.title');
if (title) {
  setInterval(() => {
    title.style.textShadow = `0 0 ${Math.random()*40+10}px #ffc371, 0 0 10px #ff5f6d`;
    setTimeout(()=>{title.style.textShadow = '';}, 300);
  }, 1400);
}

// Button pop effect
const buttons = document.querySelectorAll('.infhub-btn');
buttons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffc371 0%, #ff5f6d 80%, #1e1e60 100%)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = '';
  });
});
