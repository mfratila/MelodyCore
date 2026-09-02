import { Reveal } from '../components/Reveal';
import { useCarousel } from '../hooks/useCarousel';
import { testimonials } from '../data/testimonials';

const TRANSITION_MS = 520;

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === 'prev' ? <path d="M15 5 L8 12 L15 19" /> : <path d="M9 5 L16 12 L9 19" />}
    </svg>
  );
}

export function Testimonials({ items = testimonials }) {
  const count = items.length;
  const { index, goTo, next, prev, canPrev, canNext, trackRef, onKeyDown } = useCarousel({
    count,
    transitionMs: TRANSITION_MS,
  });

  return (
    <Reveal
      as="section"
      className="section testimonials-section testimonials-carousel"
      id="testimoniale"
      role="region"
      aria-roledescription="carusel"
      aria-label="Testimoniale elevi"
      onKeyDown={onKeyDown}
    >
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Din sala de studiu</p>
          <h2>Povești care se aud</h2>
          <p className="testimonial-intro">
            Primele acorduri se transformă, pas cu pas, în curaj și încredere.
          </p>
        </div>

        <div className="carousel-stage">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Testimonialul anterior"
          >
            <span className="carousel-arrow-glyph">
              <Chevron direction="prev" />
            </span>
          </button>

          <div className="carousel-viewport">
            <div className="carousel-track" ref={trackRef}>
              {items.map((item, slideIndex) => {
                const isActive = slideIndex === index;

                return (
                  <article
                    key={item.id}
                    className={`testimonial-slide${isActive ? ' is-active' : ''}`}
                    aria-hidden={!isActive}
                    aria-roledescription="testimonial"
                    aria-label={`${slideIndex + 1} din ${count}`}
                  >
                    <div className="slide-photo">
                      <img
                        src={item.photo}
                        alt={item.alt}
                        loading={slideIndex === 0 ? 'eager' : 'lazy'}
                        draggable="false"
                      />
                    </div>

                    <div className="slide-body">
                      <blockquote className="slide-quotes">
                        {item.quotes.map((quote, quoteIndex) => (
                          <p key={quoteIndex} className="testimonial-quote">
                            {quote}
                          </p>
                        ))}
                      </blockquote>

                      <div className="testimonial-meta">
                        <div className="testimonial-avatar" aria-hidden="true">
                          {item.initial}
                        </div>
                        <div>
                          <p className="testimonial-name">{item.name}</p>
                          <p className="testimonial-role">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={next}
            disabled={!canNext}
            aria-label="Testimonialul următor"
          >
            <span className="carousel-arrow-glyph">
              <Chevron direction="next" />
            </span>
          </button>
        </div>

        <div className="carousel-footer">
          <div className="carousel-progress" role="group" aria-label="Alege un testimonial">
            {items.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                aria-current={dotIndex === index ? 'true' : undefined}
                aria-label={`Testimonialul ${dotIndex + 1}: ${item.name}`}
                className={`carousel-dot${dotIndex === index ? ' is-active' : ''}`}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Testimonialul {index + 1} din {count}: {items[index]?.name}
        </p>
      </div>
    </Reveal>
  );
}
