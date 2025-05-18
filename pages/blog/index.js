import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import posts from '../../data/posts';

export default function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        image="/blog-hero-xl.webp"
        mobileImage="/blog-hero-sm.webp"
        title="Eldar Speaks"
        subtitle="Thoughts and teachings from Eldar"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-6 max-w-6xl mx-auto">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} legacyBehavior>
            <a className="block border border-teal-700 rounded-xl overflow-hidden hover:scale-105 transition bg-black/10 shadow-md">
              <img src={p.cover} alt={p.title} className="w-full h-48 object-cover"/>
              <h3 className="text-xl font-bold px-4 pt-2">{p.title}</h3>
              <p className="px-4 pb-3">{p.excerpt}</p>
            </a>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}
