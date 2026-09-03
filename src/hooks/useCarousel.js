import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Horizontal drag needed to commit a swipe on touch. */
const SWIPE_COMMIT_PX = 56;
/** Drag distance before we decide the gesture is horizontal rather than vertical. */
const DRAG_INTENT_PX = 10;
/** Dragging past the first/last card is damped rather than blocked. */
const EDGE_RESISTANCE = 0.35;

/** Touch devices additionally get swipe; everyone gets the arrows. */
const COARSE_QUERY = '(pointer: coarse), (max-width: 860px)';

/**
 * A plain click-driven carousel: arrows, dots, arrow keys, plus swipe on touch.
 *
 * It never touches page scrolling. Vertical scroll behaves exactly as it does
 * anywhere else on the site.
 */
export function useCarousel({ count, transitionMs = 520 } = {}) {
  const [index, setIndex] = useState(0);
  const [isCoarsePointer, setIsCoarsePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(COARSE_QUERY).matches,
  );

  const reducedMotion = useReducedMotion();

  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const hasAnimatedRef = useRef(false);

  /* --- transform ownership ---------------------------------------------- */
  // The hook is the only writer of track.style.transform, so swipe feedback and
  // the settled position can never fight each other.
  const applyTransform = useCallback(
    (offsetPx = 0, animate = true) => {
      const track = trackRef.current;
      if (!track) return;

      const shouldAnimate = animate && !reducedMotion && hasAnimatedRef.current;
      track.style.transition = shouldAnimate
        ? `transform ${transitionMs}ms var(--ease-out)`
        : 'none';
      track.style.transform = `translate3d(calc(${-indexRef.current * 100}% + ${offsetPx}px), 0, 0)`;
    },
    [reducedMotion, transitionMs],
  );

  const goTo = useCallback(
    (target) => setIndex(Math.min(Math.max(target, 0), Math.max(count - 1, 0))),
    [count],
  );

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  useEffect(() => {
    indexRef.current = index;
    applyTransform(0, true);
    hasAnimatedRef.current = true;
  }, [index, applyTransform]);

  // Keep the index valid if the list shrinks.
  useEffect(() => {
    if (index > count - 1) goTo(count - 1);
  }, [count, index, goTo]);

  /* --- pointer capability ------------------------------------------------ */
  useEffect(() => {
    const mql = window.matchMedia(COARSE_QUERY);
    const onChange = (event) => setIsCoarsePointer(event.matches);
    mql.addEventListener('change', onChange);
    setIsCoarsePointer(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  /* --- swipe (touch only) ------------------------------------------------ */
  useEffect(() => {
    if (!isCoarsePointer || count < 2) return;

    const track = trackRef.current;
    if (!track) return;

    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let dx = 0;
    let axis = null; // null (undecided) | 'x' | 'y'

    const reset = () => {
      pointerId = null;
      axis = null;
      dx = 0;
    };

    const onPointerDown = (event) => {
      if (!event.isPrimary || pointerId !== null) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      dx = 0;
      axis = null;
    };

    const onPointerMove = (event) => {
      if (event.pointerId !== pointerId) return;

      dx = event.clientX - startX;
      const dy = event.clientY - startY;

      if (axis === null) {
        if (Math.abs(dx) < DRAG_INTENT_PX && Math.abs(dy) < DRAG_INTENT_PX) return;
        // touch-action: pan-y leaves vertical panning to the browser; we only
        // claim clearly horizontal gestures.
        axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        if (axis === 'y') return;
        // Throws if the pointer was already released (a very fast flick).
        try {
          track.setPointerCapture(pointerId);
        } catch {
          /* capture is an optimisation, not a requirement */
        }
      }

      if (axis !== 'x') return;

      const atStart = indexRef.current === 0 && dx > 0;
      const atEnd = indexRef.current === count - 1 && dx < 0;
      applyTransform(atStart || atEnd ? dx * EDGE_RESISTANCE : dx, false);
    };

    const onPointerEnd = (event) => {
      if (event.pointerId !== pointerId) return;

      const committed = axis === 'x' && Math.abs(dx) > SWIPE_COMMIT_PX;
      const target = committed ? indexRef.current - Math.sign(dx) : indexRef.current;

      reset();

      if (committed && target >= 0 && target <= count - 1) {
        setIndex(target);
      } else {
        applyTransform(0, true); // snap back
      }
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerEnd);
    track.addEventListener('pointercancel', onPointerEnd);

    return () => {
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerEnd);
      track.removeEventListener('pointercancel', onPointerEnd);
    };
  }, [isCoarsePointer, count, applyTransform]);

  /* --- keyboard ----------------------------------------------------------- */
  // Bubbles up from the arrows and dots, so Tab order is untouched.
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
    },
    [next, prev],
  );

  /* --- resize -------------------------------------------------------------- */
  useEffect(() => {
    const onResize = () => applyTransform(0, false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [applyTransform]);

  return {
    index,
    goTo,
    next,
    prev,
    canPrev: index > 0,
    canNext: index < count - 1,
    trackRef,
    onKeyDown,
    isCoarsePointer,
  };
}
