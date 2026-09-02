import { Reveal } from '../../components/Reveal';
import { SectionHead } from '../../components/SectionHead';
import { CredentialIcon } from '../../components/icons';
import { credentials } from '../../data/credentials';

export function MariaExperience() {
  return (
    <Reveal as="section" className="section" id="experienta">
      <div className="wrap">
        <SectionHead eyebrow="Parcurs" title="Experiență și formare" />
        <Reveal className="credential-list" group>
          {credentials.map((item) => (
            <div key={item.id} className="credential-item">
              <div className="credential-icon" aria-hidden="true">
                <CredentialIcon name={item.icon} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
