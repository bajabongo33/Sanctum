import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import posts from '../../data/posts';

export default function PostPage() {
  const { slug } = useRouter().query;
  const post = posts.find(p => p.slug === slug);
  if (!post) return <p className="text-center p-16">Loading…</p>;
  return (
    <>
      <Navbar />
      <article className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
        <img src={post.cover} alt={post.title} className="rounded-xl w-full h-72 object-cover mb-6"/>
        {post.content.map((para, i) => <p className="mb-4" key={i}>{para}</p>)}
      </article>
      <Footer />
    </>
  );
}
