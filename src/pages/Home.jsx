import { Seo } from '../components/Seo';
import { StaffDivider } from '../components/StaffDivider';
import { CtaBanner } from '../components/CtaBanner';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Courses } from '../sections/Courses';
import { WhyUs } from '../sections/WhyUs';
import { Testimonials } from '../sections/Testimonials';
import { Location } from '../sections/Location';

export default function Home() {
  return (
    <>
      <Seo
        title="Melody Core — Școală de muzică în București"
        description="Lecții de pian, canto și teoria muzicii în București, pentru copii de la 4 ani, adolescenți și adulți. Prima lecție este gratuită — programează-te la Melody Core."
        canonical="/"
        image="/assets/images/maria-mic.jpeg"
      />
      <Hero />
      <StaffDivider />
      <About />
      <Courses />
      <WhyUs />
      <Testimonials />
      <Location />
      <CtaBanner />
    </>
  );
}
