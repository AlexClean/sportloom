'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logoFont } from '../../../../public/fonts/logoFont';

export default function Header() {
  const pathName = usePathname();
  const links = [
    { href: "/reviews", label: "Reviews" },
    { href: "/articles", label: "Articles" },
  ]

  return (
    <header className="app-header fixed top-0 inset-x-0 z-50 bg-[#1C1F26] text-[#E6E7EB] shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className={`${logoFont.className} font-bold sm:text-2xl lg:text-3xl`}>SportLoom</Link>
        <ul className="flex space-x-4 text-sm sm:text-xl lg:text-2xl text-shadow-amber-50">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-white transition duration-300 ${pathName.includes(href) ? "underline underline-offset-4" : "text-white hover:underline underline-offset-4"}`}>{label}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  )
}
