import { useScrolled } from '../hooks/useScrolled';
import { mainNav } from '../data/site';
import { Brand } from './Brand';
import { FreeLessonButton } from './FreeLessonButton';
import { SmoothLink } from './SmoothLink';

export function Header({ showNav = true }) {
  const scrolled = useScrolled(40);

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : undefined}>
      <div className="wrap">
        <Brand />
        {showNav && (
          <nav className="site-nav" aria-label="Navigație principală">
            {mainNav.map((item) => (
              <SmoothLink key={item.to} to={item.to}>
                {item.label}
              </SmoothLink>
            ))}
          </nav>
        )}
        <FreeLessonButton />
      </div>
    </header>
  );
}
