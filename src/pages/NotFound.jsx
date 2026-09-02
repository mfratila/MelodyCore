import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Pagina nu a fost găsită — Melody Core"
        description="Pagina căutată nu există. Întoarce-te la pagina principală Melody Core."
        canonical="/"
      />
      <section className="section about-hero-section">
        <div className="wrap">
          <p className="eyebrow">Eroare 404</p>
          <h1 style={{ fontSize: 44, margin: '10px 0 18px' }}>Pagina nu a fost găsită</h1>
          <p style={{ maxWidth: 520, lineHeight: 1.85, marginBottom: 26 }}>
            Se pare că nota aceasta nu există în partitură. Hai înapoi la început.
          </p>
          <Link className="btn btn-outline" to="/">
            ← Înapoi la pagina principală
          </Link>
        </div>
      </section>
    </>
  );
}
