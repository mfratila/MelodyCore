import { FreeLessonButton } from '../components/FreeLessonButton';

const floatingNotes = [
  { glyph: '♪', style: { top: '12%', left: '8%', animationDelay: '0s' } },
  { glyph: '♫', style: { top: '22%', left: '88%', animationDelay: '1.2s' } },
  { glyph: '♪', style: { top: '60%', left: '92%', animationDelay: '2.4s' } },
  { glyph: '♫', style: { top: '75%', left: '6%', animationDelay: '.6s', fontSize: 20 } },
];

// Black keys sit at indexes 1, 4, 6, 9, 12, 14 of the decorative keyboard.
const blackKeys = new Set([1, 4, 6, 9, 12, 14]);
const keys = Array.from({ length: 16 }, (_, i) => blackKeys.has(i));

export function Hero() {
  return (
    <section className="hero">
      <div className="notes" aria-hidden="true">
        {floatingNotes.map((note, index) => (
          <span key={index} className="note" style={note.style}>
            {note.glyph}
          </span>
        ))}
      </div>

      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Școală de muzică · București</p>
          <h1>
            Muzica începe
            <br />
            <em>cu tine.</em>
          </h1>
          <p className="hero-tagline">Descoperă muzica în ritmul tău</p>
          <p className="hero-sub">
            Lecții de pian, canto și teoria muzicii pentru copii de la 4 ani, adolescenți și adulți —
            într-un studio în care fiecare voce își găsește locul.
          </p>
          <div className="hero-ctas">
            <FreeLessonButton />
            <a className="link-scroll" href="#cursuri">
              Vezi cursurile ↓
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-frame">
            <img
              src="/assets/images/maria-mic.jpeg"
              alt="Maria Chicoș cântând la microfon într-un cadru de concert"
            />
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>învață</span>
            <strong>cu bucurie</strong>
            <span>și curaj</span>
          </div>
          <p className="hero-caption">
            De la prima notă
            <br />
            <strong>la propria ta voce.</strong>
          </p>
        </div>
      </div>

      <div className="keys" aria-hidden="true">
        {keys.map((isBlack, index) => (
          <div key={index} className={isBlack ? 'key black' : 'key'} />
        ))}
      </div>
    </section>
  );
}
