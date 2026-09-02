import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

const FALLBACK_LENGTH = 1400;

/**
 * Draws the wavy staff divider in as it scrolls into view.
 *
 * The static version scheduled an unthrottled rAF on every scroll event and
 * assigned an undeclared `staffFrame` variable; under ES modules that throws.
 * This coalesces to a single frame per scroll burst and cancels on unmount.
 */
export function useStaffProgress() {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const path = pathRef.current;
    if (!wrapper || !path) return;

    const length =
      typeof path.getTotalLength === 'function' ? path.getTotalLength() : FALLBACK_LENGTH;
    path.style.strokeDasharray = String(length);

    if (reducedMotion) {
      path.style.strokeDashoffset = '0';
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const dividerTop = wrapper.getBoundingClientRect().top;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - dividerTop) / (window.innerHeight * 0.65)),
      );
      path.style.strokeDashoffset = String(length * (1 - progress));
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [reducedMotion]);

  return { wrapperRef, pathRef };
}
