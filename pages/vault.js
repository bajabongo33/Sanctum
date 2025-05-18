import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const items = [
  { title: 'Eldar T-Shirt', image: '/hero-vault-xl.jpg', link: 'https://redbubble.com/' },
  { title: 'Eldar Poster', image: '/hero-vault-sm.webp', link: 'https://redbubble.com/' }
];

export default function Vault() {
  return (
    <>
      <Navbar />
      <Hero
        image="/hero-vault-xl.jpg"
        mobileImage="/hero-vault-sm.webp"
        title="The Vault"
        subtitle="Digital relics to fund the Sanctuary"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-6 max-w-4xl mx-auto">
        {items.map((it, i) => (
          <a key={i} href={it.link} className="block border border-teal-600 rounded-xl overflow-hidden hover:scale-105 transition shadow-lg">
            <img src={it.image} alt={it.title} className="w-full h-56 object-cover"/>
            <h4 className="text-center py-3 font-semibold">{it.title}</h4>
          </a>
        ))}
      </section>
      <Footer />
    </>
  );
}
