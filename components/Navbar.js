import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex gap-2 md:gap-6 bg-black/30 backdrop-blur rounded-full p-2 mt-4 z-30">
      <Link href="/"><a className="px-4 py-2 rounded-full hover:bg-teal-800 hover:text-white transition">Home</a></Link>
      <Link href="/sanctuary"><a className="px-4 py-2 rounded-full hover:bg-teal-800 hover:text-white transition">Sanctuary</a></Link>
      <Link href="/vault"><a className="px-4 py-2 rounded-full hover:bg-teal-800 hover:text-white transition">Vault</a></Link>
      <Link href="/blog"><a className="px-4 py-2 rounded-full hover:bg-teal-800 hover:text-white transition">Blog</a></Link>
    </nav>
  );
}
