import { Seo } from '../components/Seo';

/** Shared shell for the plain-text legal pages. */
export function LegalPage({ title, description, canonical, updated, children }) {
  return (
    <>
      <Seo title={`${title} — Melody Core`} description={description} canonical={canonical} />
      <section className="section about-hero-section">
        <div className="wrap legal">
          <p className="eyebrow">Informații legale</p>
          <h1>{title}</h1>
          <p className="legal-updated">Ultima actualizare: {updated}</p>
          {children}
        </div>
      </section>
    </>
  );
}
