const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, .reveal-group, .staff-divider').forEach(el => io.observe(el));

document.getElementById('ctaHero').addEventListener('click', () => {
  document.getElementById('cta').scrollIntoView({behavior:'smooth'});
});

(function(){
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('#carouselDots .dot');
  const slideCount = track.children.length;
  let index = 0;
  function update(){
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }
  document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + slideCount) % slideCount;
    update();
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % slideCount;
    update();
  });
  dots.forEach((d, i) => d.addEventListener('click', () => { index = i; update(); }));
})();
