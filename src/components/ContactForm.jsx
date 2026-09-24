import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

// Web3Forms relays each submission to the school's inbox by e-mail; nothing is kept
// in a database of ours. The access key is public by design (it only allows sending
// to the address it was created for), so it is fine in the client bundle.
const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const courseOptions = ['Canto', 'Pian', 'Teorie muzicală', 'Nu știu încă'];

export function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!ACCESS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Cerere nouă de pe site — ${data.name}`,
          from_name: 'Site Melody Core',
          ...data,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form contact-form-done" role="status">
        <p className="script">Mulțumim!</p>
        <p>Am primit datele tale și te contactăm în curând pentru a stabili prima lecție.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Nume și prenume *</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label className="field">
          <span>Telefon *</span>
          <input name="phone" type="tel" autoComplete="tel" required maxLength={20} />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" maxLength={120} />
        </label>
        <label className="field">
          <span>Curs dorit</span>
          <select name="course" defaultValue={courseOptions[0]}>
            {courseOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field field-wide">
          <span>Mesaj (opțional)</span>
          <textarea
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="Ex.: vârsta elevului, intervalele orare potrivite"
          />
        </label>
      </div>

      {/* Honeypot: hidden from people, filled in by bots; Web3Forms drops those. */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} aria-hidden="true" />

      <label className="consent">
        <input type="checkbox" name="consent" value="da" required />
        <span>
          Sunt de acord ca datele de mai sus să fie folosite doar pentru a fi contactat(ă) în
          legătură cu cursurile, conform{' '}
          <Link to="/politica-de-confidentialitate">Politicii de confidențialitate</Link>. *
        </span>
      </label>

      <button type="submit" className="btn btn-ribbon" disabled={status === 'sending'}>
        {status === 'sending' ? 'Se trimite…' : 'Trimite'}
      </button>

      {status === 'error' && (
        <p className="form-error" role="alert">
          Mesajul nu a putut fi trimis. Te rugăm să ne suni la{' '}
          <a href={site.phone.href}>{site.phone.display}</a> sau să ne scrii pe Instagram.
        </p>
      )}
    </form>
  );
}
