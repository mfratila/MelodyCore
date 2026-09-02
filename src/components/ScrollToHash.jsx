import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A multi-page site turned SPA still has to behave like one: jump to the top on a
 * plain route change, and to the anchor when the URL carries a hash.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    // Deferred by a tick so the freshly routed page is laid out before we measure.
    // A timer rather than rAF: rAF is paused in background tabs, which would drop
    // the scroll entirely when a link is opened in one.
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
