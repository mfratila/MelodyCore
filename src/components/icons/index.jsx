/**
 * Every icon below is the original inline SVG from the static site, wrapped in a
 * component. Stroke colours stay hard-coded to the CSS custom properties that the
 * stylesheet already defines, so the rendered output is byte-for-byte equivalent.
 */

const courseIconProps = {
  className: 'icon',
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'var(--maroon)',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const courseIcons = {
  piano: (
    <svg {...courseIconProps}>
      <path d="M4 32 L24 8 L44 32 Z" />
      <path d="M4 32 L44 32 L44 40 L4 40 Z" />
      <path d="M14 32 V40 M22 32 V40 M30 32 V40 M38 32 V40" strokeWidth="1.4" />
    </svg>
  ),
  mic: (
    <svg {...courseIconProps}>
      <rect x="17" y="4" width="14" height="20" rx="7" />
      <path d="M10 22 a14 14 0 0 0 28 0" />
      <path d="M24 36 V44 M17 44 H31" />
    </svg>
  ),
  staff: (
    <svg {...courseIconProps}>
      <path d="M6 10 H42 M6 18 H42 M6 26 H42 M6 34 H42" />
      <circle cx="30" cy="34" r="5" />
      <path d="M35 34 V12 C35 9 39 9 39 12" />
    </svg>
  ),
};

const featureIconProps = {
  className: 'icon',
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'var(--orange-deep)',
  strokeWidth: '2',
};

const featureIcons = {
  person: (
    <svg {...featureIconProps} strokeLinecap="round">
      <circle cx="24" cy="16" r="8" />
      <path d="M8 42 c0 -10 8 -16 16 -16 s16 6 16 16" />
      <path d="M36 14 c3 1 5 8 -1 12" />
    </svg>
  ),
  star: (
    <svg {...featureIconProps} strokeLinejoin="round">
      <path d="M24 4 L29 18 L44 18 L32 27 L37 42 L24 33 L11 42 L16 27 L4 18 L19 18 Z" />
    </svg>
  ),
  stage: (
    <svg {...featureIconProps} strokeLinecap="round">
      <circle cx="24" cy="14" r="7" />
      <path d="M24 21 V32 M24 24 L14 18 M24 24 L34 18 M24 32 L16 44 M24 32 L32 44" />
    </svg>
  ),
  heart: (
    <svg {...featureIconProps} strokeLinejoin="round">
      <path d="M24 42 C10 32 4 23 4 15 C4 8 10 4 15 6 C19 7 22 10 24 14 C26 10 29 7 33 6 C38 4 44 8 44 15 C44 23 38 32 24 42 Z" />
    </svg>
  ),
};

const credentialIconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--paper)',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const credentialIcons = {
  notes: (
    <svg {...credentialIconProps}>
      <circle cx="6" cy="17" r="2.3" />
      <circle cx="15" cy="15" r="2.3" />
      <path d="M8.3 17V5.5L17.3 4v10.5" />
      <path d="M8.3 8.5L17.3 7" />
    </svg>
  ),
  trophy: (
    <svg {...credentialIconProps}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4.5a2.5 2.5 0 0 0 2.5 4.5" />
      <path d="M17 5h2.5a2.5 2.5 0 0 1-2.5 4.5" />
      <path d="M12 13v3" />
      <path d="M9 20h6" />
      <path d="M9.7 16.5h4.6l.4 3H9.3l.4-3Z" />
    </svg>
  ),
  micStand: (
    <svg {...credentialIconProps}>
      <rect x="9" y="2" width="6" height="10" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21M9 21h6" />
    </svg>
  ),
  globe: (
    <svg {...credentialIconProps} strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </svg>
  ),
  graduation: (
    <svg {...credentialIconProps}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  ),
};

export function CourseIcon({ name }) {
  return courseIcons[name] ?? null;
}

export function FeatureIcon({ name }) {
  return featureIcons[name] ?? null;
}

export function CredentialIcon({ name }) {
  return credentialIcons[name] ?? null;
}

const contactIconProps = {
  className: 'icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--maroon)',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function PhoneIcon() {
  return (
    <svg {...contactIconProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...contactIconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}
