import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { badges } from '../data/credentials';

export function About() {
  return (
    <Reveal as="section" className="section" id="despre">
      <div className="wrap despre">
        <div className="despre-photo">
          <img
            src="/assets/images/maria-portrait.jpeg"
            alt="Maria Chicoș, profesoară de canto, pian și teorie muzicală la Melody Core"
          />
        </div>
        <div>
          <p className="eyebrow">Despre profesoară</p>
          <h2 style={{ margin: '10px 0 20px' }}>Despre Maria</h2>
          <p>
            Maria Chicoș este studentă a Universității Naționale de Muzică din București și are peste
            15 ani de experiență în domeniul muzical. Activitatea sa reunește experiență scenică,
            numeroase premii obținute în urma participării la peste 100 de concursuri, atestarea în
            canto clasic, și peste 4 ani dedicați predării.
          </p>
          <div className="badge-row">
            {badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
          <p className="script">Fiecare elev are propria melodie de descoperit.</p>
          <Link className="btn btn-outline" to="/despre-maria" style={{ marginTop: 8 }}>
            Citește povestea Mariei →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
