import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import posts from '../../data/posts';

export default function PostPage() {
  const { slug } = useRouter().query;
  const post = posts.find(p=>p.slug===slug);
  if(!post) return <p>Loading…</p>;
  return (
    <>
      <Navbar />
      <article className="post">
        <h1>{post.title}</h1>
        <img src={post.cover} alt={post.title}/>
        {post.content.map((para,i)=><p key={i}>{para}</p>)}
      </article>
      <Footer />
    </>
  );
}
