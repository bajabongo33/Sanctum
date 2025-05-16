import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { missionText, communityText, wisdomText, creativityText } from '../data/content';

export default function Sanctuary() {
  return (
    <>
      <Navbar />
      <Hero
        image="/hero-sanctuary-xl.webp"
        mobileImage="/hero-sanctuary-sm.webp"
        title="Eldar’s Sanctuary"
        subtitle={missionText}
      />
      <section className="values">
        <div className="value">
          <Image src="/icon-community.png" width={64} height={64} alt="Community"/>
          <h3>Community</h3><p>{communityText}</p>
        </div>
        <div className="value">
          <Image src="/icon-creativity.png" width={64} height={64} alt="Creativity"/>
          <h3>Creativity</h3><p>{creativityText}</p>
        </div>
        <div className="value">
          <Image src="/icon-wisdom.png" width={64} height={64} alt="Wisdom"/>
          <h3>Wisdom</h3><p>{wisdomText}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
