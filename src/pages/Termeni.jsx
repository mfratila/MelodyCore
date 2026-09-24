import { Link } from 'react-router-dom';
import { LegalPage } from './LegalPage';
import { site } from '../data/site';
import { standardPrice } from '../data/pricing';

export default function Termeni() {
  return (
    <LegalPage
      title="Termeni și condiții"
      description="Termenii și condițiile de folosire a site-ului Melody Core și condițiile abonamentelor pentru cursurile de canto, pian și teorie muzicală."
      canonical="/termeni-si-conditii"
      updated="24 septembrie 2026"
    >
      <p>
        Acești termeni se aplică folosirii site-ului Melody Core și cursurilor oferite de{' '}
        {site.legal.operator}, la studioul din {site.address.street}, {site.address.city}.
      </p>

      <h2>Cursurile</h2>
      <p>
        Melody Core oferă lecții de canto, pian și teorie muzicală pentru copii de la 4 ani,
        adolescenți și adulți. Lecțiile au loc exclusiv față în față, la studio, în intervale orare
        stabilite de comun acord. Prima lecție este gratuită și nu implică nicio obligație.
      </p>

      <h2>Prețuri și abonamente</h2>
      <p>
        Prețurile în vigoare sunt afișate pe pagina <Link to="/preturi">Prețuri</Link> și sunt
        exprimate în lei. Prețurile includ materialele didactice și suportul profesorului pe toată
        durata abonamentului. Abonamentele (lunar, bianual și anual) oferă o reducere față de
        prețul standard al unei ședințe, de {standardPrice} lei.
      </p>

      <h2>Rezilierea abonamentului</h2>
      <p>
        Abonamentul poate fi reziliat oricând, cu un preaviz de 15 zile. În acest caz, ședințele
        deja efectuate se recalculează la prețul standard ({standardPrice} lei/ședință), iar
        diferența dintre suma plătită și valoarea ședințelor efectuate se rambursează.
      </p>

      <h2>Formularul de contact</h2>
      <p>
        Trimiterea formularului nu reprezintă o înscriere și nu creează nicio obligație de plată;
        este doar o cerere de a fi contactat. Datele trimise sunt folosite conform{' '}
        <Link to="/politica-de-confidentialitate">Politicii de confidențialitate</Link>.
      </p>

      <h2>Conținutul site-ului</h2>
      <p>
        Textele, fotografiile și logo-ul Melody Core sunt protejate de drepturi de autor și nu pot
        fi copiate sau folosite fără acordul nostru scris.
      </p>

      <h2>Legea aplicabilă și soluționarea litigiilor</h2>
      <p>
        Acești termeni sunt guvernați de legea română. Orice neînțelegere o rezolvăm, în primul
        rând, pe cale amiabilă. Consumatorii se pot adresa și Autorității Naționale pentru
        Protecția Consumatorilor, inclusiv pentru soluționarea alternativă a litigiilor (
        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener">
          anpc.ro/ce-este-sal
        </a>
        ).
      </p>

      <h2>Contact</h2>
      <p>
        Pentru orice întrebare ne poți suna la <a href={site.phone.href}>{site.phone.display}</a>{' '}
        sau ne poți scrie pe Instagram, la{' '}
        <a href={site.instagram.href} target="_blank" rel="noopener">
          @{site.instagram.handle}
        </a>
        .
      </p>
    </LegalPage>
  );
}
