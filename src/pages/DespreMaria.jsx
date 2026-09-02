import { Seo } from '../components/Seo';
import { CtaBanner } from '../components/CtaBanner';
import { MariaHero } from '../sections/maria/MariaHero';
import { MariaBio } from '../sections/maria/MariaBio';
import { MariaExperience } from '../sections/maria/MariaExperience';
import { MariaPhilosophy } from '../sections/maria/MariaPhilosophy';

export default function DespreMaria() {
  return (
    <>
      <Seo
        type="profile"
        title="Despre Maria Chicoș — Melody Core"
        description="Maria Chicoș, profesor de canto, pian și teorie muzicală la Melody Core: peste 15 ani de experiență muzicală, atestare în canto clasic, trainer Erasmus și o abordare adaptată fiecărui elev."
        canonical="/despre-maria"
        image="/assets/images/maria-casual.jpeg"
      />
      <MariaHero />
      <MariaBio />
      <MariaExperience />
      <MariaPhilosophy />
      <CtaBanner />
    </>
  );
}
