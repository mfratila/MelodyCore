import { Reveal } from '../../components/Reveal';

export function MariaHero() {
  return (
    <Reveal as="section" className="section about-hero-section" id="intro">
      <div className="wrap about-hero">
        <div className="despre-photo">
          <div className="despre-tape" />
          <img
            src="/assets/images/maria-casual.jpeg"
            alt="Maria Chicoș, profesoară de canto, pian și teorie muzicală"
          />
        </div>
        <div>
          <p className="eyebrow">Despre profesoară</p>
          <h1>Maria Chicoș</h1>
          <p className="about-subtitle">Profesor de canto · pian · teorie muzicală</p>
          <p>
            Studentă a Universității Naționale de Muzică din București, la specializarea Compoziție –
            Muzică Ușoară, Maria are peste 15 ani de experiență în domeniul muzical, dintre care
            peste 4 ani de experiență în predare.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
