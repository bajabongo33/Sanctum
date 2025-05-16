import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/sanctuary"><a>Sanctuary</a></Link>
      <Link href="/vault"><a>Vault</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
    </nav>
  );
}
