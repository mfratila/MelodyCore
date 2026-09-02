import { Reveal } from '../components/Reveal';
import { site } from '../data/site';

export function Location() {
  return (
    <Reveal as="section" className="section cream" id="locatie">
      <div className="wrap locatie">
        <div className="map-card">
          <iframe
            src={site.address.mapEmbed}
            title="Locația Melody Core pe hartă"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <p className="eyebrow">Unde ne găsești</p>
          <h2 style={{ margin: '10px 0 18px' }}>Locație</h2>
          <p className="addr">
            <strong>{site.address.street}</strong>
            {site.address.city}
          </p>
          <p className="hint">
            Lecțiile au loc exclusiv față în față, la studio. Programează prima lecție gratuită și
            stabilim împreună cel mai bun interval orar.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
