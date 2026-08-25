const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, .reveal-group').forEach(el => io.observe(el));

const staffDivider = document.querySelector('.staff-divider');
const staffPath = staffDivider?.querySelector('.staff-path');
let staffLength = 1400;

if (staffDivider && staffPath) {
  staffLength = staffPath.getTotalLength();
  staffPath.style.strokeDasharray = staffLength;

  function updateStaffProgress() {
    staffFrame = undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const dividerTop = staffDivider.getBoundingClientRect().top;
    const progress = Math.min(1, Math.max(0, (window.innerHeight - dividerTop) / (window.innerHeight * 0.65)));
    staffPath.style.strokeDashoffset = staffLength * (1 - progress);
  }

  function requestStaffProgress() {
    updateStaffProgress();
    requestAnimationFrame(updateStaffProgress);
  }

  window.addEventListener('scroll', requestStaffProgress, {passive:true});
  window.addEventListener('resize', requestStaffProgress);
  updateStaffProgress();
}

const ctaHero = document.getElementById('ctaHero');
if (ctaHero) {
  ctaHero.addEventListener('click', () => {
    document.getElementById('cta').scrollIntoView({behavior:'smooth'});
  });
}

(function(){
  const track = document.getElementById('carouselTrack');
  if (!track) return;
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
