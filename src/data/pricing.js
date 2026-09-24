/** Standard price of one session, in lei — also the basis for early-cancellation refunds. */
export const standardPrice = 150;

export const cantoPianPlans = [
  {
    id: 'sedinta',
    name: 'Ședință individuală',
    detail: 'fără abonament',
    discount: null,
    perSession: 150,
    total: 150,
    totalUnit: '',
  },
  {
    id: 'lunar',
    name: 'Abonament lunar',
    detail: '4 ședințe',
    discount: 10,
    perSession: 135,
    total: 540,
    totalUnit: '/ lună',
  },
  {
    id: 'bianual',
    name: 'Abonament bianual',
    detail: '24 de ședințe (6 luni)',
    discount: 15,
    perSession: 127.5,
    total: 3060,
    totalUnit: '/ 6 luni',
  },
  {
    id: 'anual',
    name: 'Abonament anual',
    detail: '48 de ședințe (12 luni)',
    discount: 20,
    perSession: 120,
    total: 5760,
    totalUnit: '/ an',
  },
];

/** Price per person per session; columns follow `theoryColumns`. */
export const theoryColumns = [
  { id: 'standard', label: 'Preț standard', note: 'fără abonament' },
  { id: 'lunar', label: 'Lunar', note: '−10%' },
  { id: 'bianual', label: 'Bianual', note: '−15%' },
  { id: 'anual', label: 'Anual', note: '−20%' },
];

export const theoryGroups = [
  { id: 'unu', label: '1 persoană', detail: '1-la-1', prices: [150, 135, 127.5, 120] },
  { id: 'doi', label: '2 persoane', detail: 'în grup', prices: [125, 112.5, 106.25, 100] },
  { id: 'trei', label: '3 persoane', detail: 'în grup', prices: [100, 90, 85, 80] },
];

/** 5760 → "5.760", 127.5 → "127,50" — the Romanian notation used on the printed price list. */
export function formatLei(value) {
  const [int, dec] = (Number.isInteger(value) ? String(value) : value.toFixed(2)).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return dec ? `${grouped},${dec}` : grouped;
}
