import { useReveal } from '../hooks/useReveal';

/**
 * Wraps the `.reveal` / `.reveal-group` scroll animation from the stylesheet.
 * `group` staggers the direct children instead of fading the element itself.
 */
export function Reveal({ as: Tag = 'div', className = '', group = false, children, ...rest }) {
  const [ref, visible] = useReveal();

  const classes = [className, group ? 'reveal-group' : 'reveal', visible && 'visible']
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
