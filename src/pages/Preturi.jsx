import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { CtaBanner } from '../components/CtaBanner';
import {
  cantoPianPlans,
  theoryColumns,
  theoryGroups,
  standardPrice,
  formatLei,
} from '../data/pricing';

export default function Preturi() {
  return (
    <>
      <Seo
        title="Prețuri — Melody Core"
        description="Prețurile lecțiilor de canto, pian și teorie muzicală la Melody Core: ședințe individuale de la 120 lei, abonamente cu reduceri de până la 20% și prima lecție gratuită."
        canonical="/preturi"
      />

      <section className="section about-hero-section cream" id="intro">
        <div className="wrap page-intro">
          <p className="eyebrow">Prețuri</p>
          <h1>Prețuri și abonamente</h1>
          <p>
            Poți veni la o ședință individuală sau poți alege un abonament — cu cât abonamentul este
            mai lung, cu atât reducerea este mai mare. Prețurile includ materialele didactice și
            suportul profesorului pe toată durata abonamentului.
          </p>
          <p className="script">Prima lecție este gratuită!</p>
        </div>
      </section>

      <Reveal as="section" className="section" id="canto-pian">
        <div className="wrap">
          <SectionHead eyebrow="Ședințe individuale" title="Canto & Pian" />
          <Reveal className="price-cards" group>
            {cantoPianPlans.map((plan) => (
              <article key={plan.id} className="price-card">
                {plan.discount && <span className="price-discount">−{plan.discount}%</span>}
                <h3>{plan.name}</h3>
                <p className="price-detail">{plan.detail}</p>
                <p className="price-amount">
                  <strong>{formatLei(plan.perSession)}</strong> lei
                  <span>/ ședință</span>
                </p>
                <p className="price-total">
                  Total: <strong>{formatLei(plan.total)} lei</strong> {plan.totalUnit}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section cream" id="teorie">
        <div className="wrap">
          <SectionHead eyebrow="Individual sau în grup" title="Teorie muzicală">
            <p className="section-lead">Prețul este per persoană, pentru o ședință.</p>
          </SectionHead>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Grupă</th>
                  {theoryColumns.map((column) => (
                    <th key={column.id} scope="col">
                      {column.label}
                      <span>{column.note}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {theoryGroups.map((group) => (
                  <tr key={group.id}>
                    <th scope="row">
                      {group.label}
                      <span>{group.detail}</span>
                    </th>
                    {group.prices.map((price, i) => (
                      <td key={theoryColumns[i].id}>
                        <strong>{formatLei(price)}</strong> lei
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="conditii">
        <div className="wrap price-notes">
          <p>
            Prețurile includ materialele didactice și suportul profesorului pe toată durata
            abonamentului.
          </p>
          <p>
            * Abonamentul poate fi reziliat oricând, cu un preaviz de 15 zile. Ședințele deja
            efectuate se recalculează la prețul standard ({standardPrice} lei/ședință), iar diferența
            se rambursează. Detalii în <Link to="/termeni-si-conditii">Termeni și condiții</Link>.
          </p>
        </div>
      </Reveal>

      <CtaBanner />
    </>
  );
}
