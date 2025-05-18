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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <Image src="/icon-community.png" width={64} height={64} alt="Community"/>
          <h3 className="font-bold text-lg mt-2">Community</h3>
          <p className="text-center mt-1">{communityText}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/icon-creativity.png" width={64} height={64} alt="Creativity"/>
          <h3 className="font-bold text-lg mt-2">Creativity</h3>
          <p className="text-center mt-1">{creativityText}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/icon-wisdom.png" width={64} height={64} alt="Wisdom"/>
          <h3 className="font-bold text-lg mt-2">Wisdom</h3>
          <p className="text-center mt-1">{wisdomText}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
