import { Reveal } from '../../components/Reveal';
import { SectionHead } from '../../components/SectionHead';

export function MariaPhilosophy() {
  return (
    <Reveal as="section" className="section" id="filozofie">
      <div className="wrap">
        <SectionHead eyebrow="Cum predă" title="O abordare adaptată fiecărui elev" />
        <div className="philosophy">
          <p>
            Pentru Maria, muzica înseamnă mai mult decât tehnică. Fiecare elev are propriul ritm de
            învățare, propria personalitate și propriul mod de a se exprima, iar lecțiile sunt
            adaptate în funcție de acestea.
          </p>
          <p>
            Formarea ei muzicală, experiența de scenă și pregătirea complementară în evaluare
            comportamentală, public speaking și gestionarea emoțiilor îi permit să acorde atenție
            deopotrivă dezvoltării artistice și încrederii pe care elevul o capătă în propriile
            forțe.
          </p>
          <p className="script">
            Scopul Mariei este să îi ajute pe elevi să descopere nu doar abilități muzicale, ci și
            încredere, creativitate și bucuria de a face muzică.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
