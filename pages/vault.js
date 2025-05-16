import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Vault() {
  const items = [
    { title: 'Eldar T-Shirt', image: '/hero-vault-xl.jpg', link: 'https://redbubble.com/' },
    { title: 'Eldar Poster', image: '/hero-vault-sm.webp', link: 'https://redbubble.com/' }
  ];
  return (
    <>
      <Navbar />
      <Hero
        image="/hero-vault-xl.jpg"
        mobileImage="/hero-vault-sm.webp"
        title="The Vault"
        subtitle="Digital relics to fund the Sanctuary"
      />
      <section className="vault-grid">
        {items.map((it,i)=>(
          <a key={i} href={it.link} className="vault-item">
            <img src={it.image} alt={it.title}/><h4>{it.title}</h4>
          </a>
        ))}
      </section>
      <Footer />
    </>
  );
}
