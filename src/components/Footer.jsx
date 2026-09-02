import { site, footerNav } from '../data/site';
import { Brand } from './Brand';
import { SmoothLink } from './SmoothLink';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Brand style={{ color: 'var(--paper)' }} />
        <div className="foot-links">
          {footerNav.map((item) => (
            <SmoothLink key={item.to} to={item.to}>
              {item.label}
            </SmoothLink>
          ))}
        </div>
      </div>
      <p className="foot-bottom">{site.copyright}</p>
    </footer>
  );
}
