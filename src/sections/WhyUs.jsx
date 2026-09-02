import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { FeatureIcon } from '../components/icons';
import { features } from '../data/features';

export function WhyUs() {
  return (
    <Reveal as="section" className="section">
      <div className="wrap">
        <SectionHead eyebrow="De ce Melody Core" title="Un mediu gândit pentru tine" />
        <Reveal className="features" group>
          {features.map((feature) => (
            <div key={feature.id} className="feature">
              <FeatureIcon name={feature.icon} />
              <p>{feature.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
