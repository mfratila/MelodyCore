import { Reveal } from '../components/Reveal';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <Reveal as="section" className="section testimonials-section" id="testimoniale">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Din sala de studiu</p>
          <h2>Povești care se aud</h2>
          <p className="testimonial-intro">
            Primele acorduri se transformă, pas cu pas, în curaj și încredere.
          </p>
        </div>

        <div className="testimonials-grid" aria-label="Testimoniale elevi">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-item">
              <div className="testimonial-photo-wrap">
                <img src={item.photo} alt={item.alt} loading="lazy" />
              </div>
              <div className="testimonial-content">
                {item.quotes.map((quote, index) => (
                  <p key={index} className="testimonial-quote">
                    {quote}
                  </p>
                ))}
                <div className="testimonial-meta">
                  <div className="testimonial-avatar">{item.initial}</div>
                  <div>
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
