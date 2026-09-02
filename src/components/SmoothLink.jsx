import { Link, useLocation } from 'react-router-dom';

/**
 * Links of the form `/#cursuri` are in-page anchors when we are already on `/`
 * (the browser handles the smooth scroll via `html { scroll-behavior: smooth }`)
 * and route changes otherwise — `ScrollToHash` finishes the job after navigation.
 */
export function SmoothLink({ to, children, ...rest }) {
  const { pathname } = useLocation();
  const hashIndex = to.indexOf('#');

  if (hashIndex === -1) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }

  const targetPath = to.slice(0, hashIndex) || '/';
  const hash = to.slice(hashIndex);

  if (targetPath === pathname) {
    return (
      <a href={hash} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
