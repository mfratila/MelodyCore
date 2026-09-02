import { site } from '../data/site';
import { PhoneIcon, InstagramIcon } from './icons';
import { Reveal } from './Reveal';

export function CtaBanner() {
  return (
    <Reveal as="section" className="cta-banner" id="cta">
      <div className="wrap">
        <div className="ribbon-big">
          Prima lecție <span>GRATUITĂ</span>!
        </div>
        <p>Nu mai sta pe gânduri. Descoperă muzica în ritmul tău.</p>
        <div className="contact-row">
          <a href={site.phone.href}>
            <PhoneIcon />
            {site.phone.display}
          </a>
          <a href={site.instagram.href} target="_blank" rel="noopener">
            <InstagramIcon />
            {site.instagram.handle}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
