import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-lg font-bold">SportLoom</Link>
        <ul className="flex space-x-4 text-sm">
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/categories/boxing">Categories</Link></li>
        </ul>
      </nav>
    </header>
  )
}
