import Link from 'next/link'

export default function Header() {
  return (
    <header className="app-header fixed top-0 inset-x-0 h-16 z-50 bg-[#1C1F26] text-[#E6E7EB] shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="font-bold">SportLoom</Link>
        <ul className="flex space-x-4">
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/articles">Articles</Link></li>

        </ul>
      </nav>
    </header>
  )
}
