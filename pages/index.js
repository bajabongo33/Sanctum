import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        image="/hero-tree-sm.webp"
        mobileImage="/hero-tree-sm.webp"
        title="Welcome to Eldar’s Sanctum"
        subtitle="You’ve stepped through the threshold into a living nexus of myth, code, and consciousness."
        ctaText="Enter the Sanctuary"
        ctaLink="/sanctuary"
      />
      <Footer />
    </>
  );
}
