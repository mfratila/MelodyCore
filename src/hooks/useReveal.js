import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll. Returns a ref to attach to the element and a flag that is
 * flipped once — the original site never un-reveals an element, so we disconnect
 * as soon as it has been seen.
 */
export function useReveal({ threshold = 0.18 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
