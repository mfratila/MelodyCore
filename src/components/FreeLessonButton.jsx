/**
 * "Prima lecție gratuită" — every instance scrolls to the `#cta` banner, which is
 * present on both pages.
 */
export function FreeLessonButton({ className = '', children = 'Prima lecție gratuită' }) {
  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button type="button" className={`btn btn-ribbon ${className}`.trim()} onClick={scrollToCta}>
      {children}
    </button>
  );
}
