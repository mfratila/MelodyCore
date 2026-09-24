import { Link } from 'react-router-dom';
import { LegalPage } from './LegalPage';
import { site } from '../data/site';

export default function Confidentialitate() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      description="Cum folosește Melody Core datele trimise prin formularul de contact: ce date colectăm, de ce, cât timp le păstrăm și ce drepturi ai conform GDPR."
      canonical="/politica-de-confidentialitate"
      updated="24 septembrie 2026"
    >
      <p>
        Această politică explică ce date personale colectăm prin site-ul Melody Core, de ce le
        colectăm și ce drepturi ai, conform Regulamentului (UE) 2016/679 (GDPR).
      </p>

      <h2>Cine este operatorul datelor</h2>
      <p>
        Operatorul datelor este {site.legal.operator}, {site.address.street}, {site.address.city}.
        Ne poți contacta la <a href={site.phone.href}>{site.phone.display}</a> sau pe Instagram, la{' '}
        <a href={site.instagram.href} target="_blank" rel="noopener">
          @{site.instagram.handle}
        </a>
        .
      </p>

      <h2>Ce date colectăm</h2>
      <p>Prin formularul de contact colectăm doar datele pe care ni le trimiți tu:</p>
      <ul>
        <li>numele și prenumele;</li>
        <li>numărul de telefon;</li>
        <li>adresa de e-mail (opțional);</li>
        <li>cursul dorit și, dacă alegi, un mesaj.</li>
      </ul>
      <p>
        Nu folosim conturi de utilizator, nu facem plăți online și nu folosim cookie-uri de
        marketing.
      </p>

      <h2>De ce folosim datele</h2>
      <p>
        Folosim datele exclusiv pentru a te contacta înapoi, pentru a răspunde întrebărilor tale și
        pentru a programa prima lecție. Temeiul legal este consimțământul tău (art. 6 alin. (1)
        lit. a) GDPR), exprimat prin bifarea căsuței din formular, și demersurile făcute la cererea
        ta înainte de o eventuală înscriere (art. 6 alin. (1) lit. b) GDPR). Nu trimitem newsletter
        și nu folosim datele în scop publicitar.
      </p>

      <h2>Cât timp păstrăm datele</h2>
      <p>
        Datele nu sunt salvate într-o bază de date a site-ului. Formularul le trimite pe e-mail
        către noi, iar după ce te-am contactat le ștergem. Dacă nu devii elev, datele sunt șterse în
        cel mult 30 de zile de la trimiterea formularului. Dacă te înscrii la cursuri, păstrăm doar
        datele necesare desfășurării lecțiilor, pe durata colaborării.
      </p>

      <h2>Cine mai are acces la date</h2>
      <p>Nu vindem și nu dăm datele altor persoane. Folosim doar furnizori tehnici necesari:</p>
      <ul>
        <li>
          <strong>Web3Forms</strong> — transmite mesajul din formular pe e-mail către noi;
        </li>
        <li>
          <strong>furnizorul nostru de e-mail</strong> — unde primim mesajul;
        </li>
        <li>
          <strong>Vercel</strong> — găzduiește site-ul și măsoară anonim numărul de vizite, fără
          cookie-uri.
        </li>
      </ul>
      <p>
        Unii dintre acești furnizori pot prelucra date în afara Spațiului Economic European; în
        acest caz transferul se face pe baza garanțiilor prevăzute de GDPR (de exemplu, clauzele
        contractuale standard ale Comisiei Europene).
      </p>
      <p>
        Harta din secțiunea „Locație” este afișată de Google Maps, iar fonturile site-ului sunt
        încărcate de la Google Fonts. Când le accesezi, Google poate primi adresa ta IP și poate
        folosi propriile cookie-uri, conform politicii Google.
      </p>

      <h2>Copiii</h2>
      <p>
        Cursurile sunt deschise și copiilor de la 4 ani. Pentru elevii sub 16 ani, te rugăm ca
        formularul să fie completat de un părinte sau tutore.
      </p>

      <h2>Drepturile tale</h2>
      <p>Ai dreptul:</p>
      <ul>
        <li>să afli ce date avem despre tine și să primești o copie a lor;</li>
        <li>să ceri corectarea sau ștergerea lor;</li>
        <li>să restricționezi prelucrarea sau să te opui acesteia;</li>
        <li>la portabilitatea datelor;</li>
        <li>
          să îți retragi consimțământul oricând, fără a afecta prelucrarea făcută înainte de
          retragere.
        </li>
      </ul>
      <p>
        Pentru oricare dintre acestea, ne poți contacta telefonic sau pe Instagram și îți răspundem
        în cel mult o lună. Dacă vei considera că drepturile tale nu au fost respectate, poți depune
        o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
        Personal (
        <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">
          www.dataprotection.ro
        </a>
        ).
      </p>

      <p>
        Vezi și <Link to="/termeni-si-conditii">Termenii și condițiile</Link>.
      </p>
    </LegalPage>
  );
}
