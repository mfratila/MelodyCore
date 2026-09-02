import { Link } from 'react-router-dom';
import { site } from '../data/site';

export function Brand({ as = 'link', style }) {
  const inner = (
    <>
      <span className="brand-mark">
        <img src={site.logo} alt="" />
      </span>
      {site.name}
    </>
  );

  if (as === 'link') {
    return (
      <Link className="brand" to="/" style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <div className="brand" style={style}>
      {inner}
    </div>
  );
}
