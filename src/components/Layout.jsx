import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToHash } from './ScrollToHash';

export function Layout() {
  const { pathname } = useLocation();

  // The "Povestea Mariei" page ships a bare header, exactly like the static site.
  const showNav = pathname === '/';

  return (
    <>
      <ScrollToHash />
      <Header showNav={showNav} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
