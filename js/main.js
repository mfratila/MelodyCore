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
  const section = document.getElementById('testimoniale');
  const track = document.getElementById('carouselTrack');
  const viewport = document.querySelector('.testimonials-viewport');
  if (!section || !track || !viewport) return;

  const dots = document.querySelectorAll('#carouselDots .dot');
  const slides = Array.from(track.children);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function updateCarouselProgress() {
    const scrollDistance = Math.max(0, section.offsetHeight - window.innerHeight);
    const progress = scrollDistance > 0 ? clamp((window.scrollY - section.offsetTop) / scrollDistance, 0, 1) : 0;
    const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
    track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;

    if (dots.length) {
      const nextIndex = Math.min(slides.length - 1, Math.round(progress * (slides.length - 1)));
      dots.forEach((dot, index) => dot.classList.toggle('active', index === nextIndex));
    }
  }

  window.addEventListener('scroll', updateCarouselProgress, { passive: true });
  window.addEventListener('resize', updateCarouselProgress);
  updateCarouselProgress();
})();
