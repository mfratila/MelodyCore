export const site = {
  name: 'melody core',
  logo: '/assets/icons/logo-mark.png',
  phone: { display: '0734 098 077', href: 'tel:0734098077' },
  instagram: {
    handle: 'melody.core_music.school',
    href: 'https://instagram.com/melody.core_music.school',
  },
  address: {
    street: 'Drumul Gura Siriului 22',
    city: 'Sector 3, București',
    mapEmbed:
      'https://maps.google.com/maps?q=Drumul+Gura+Siriului+22%2C+Sector+3%2C+Bucure%C8%99ti&output=embed',
  },
  // Shown on the legal pages as the data controller / service provider. If the school
  // operates through a PFA or SRL, replace with its legal name and add the CUI.
  legal: {
    operator: 'Maria Chicoș (Melody Core)',
  },
  copyright: '© 2026 Melody Core — Maria Chicoș. Toate drepturile rezervate.',
};

export const mainNav = [
  { label: 'Povestea Mariei', to: '/despre-maria' },
  { label: 'Cursuri', to: '/#cursuri' },
  { label: 'Prețuri', to: '/preturi' },
  { label: 'Locație', to: '/#locatie' },
];

export const footerNav = [
  { label: 'Despre', to: '/#despre' },
  { label: 'Povestea Mariei', to: '/despre-maria' },
  { label: 'Cursuri', to: '/#cursuri' },
  { label: 'Prețuri', to: '/preturi' },
  { label: 'Locație', to: '/#locatie' },
  { label: 'Contact', to: '/#cta' },
];

export const legalNav = [
  { label: 'Politica de confidențialitate', to: '/politica-de-confidentialitate' },
  { label: 'Termeni și condiții', to: '/termeni-si-conditii' },
];
