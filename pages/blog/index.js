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
        image="/blog-hero-xl.jpg"
        mobileImage="/blog-hero-sm.webp"
        title="Eldar Speaks"
        subtitle="Thoughts and teachings from Eldar"
      />
      <section className="blog-list">
        {posts.map(p=>(
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <a className="post-card">
              <img src={p.cover} alt={p.title}/>
              <h3>{p.title}</h3><p>{p.excerpt}</p>
            </a>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}
