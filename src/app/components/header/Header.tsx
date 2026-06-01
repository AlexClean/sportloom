'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logoFont } from '../../../../public/fonts/logoFont';
import styles from './Header.module.css';

export default function Header() {
  const pathName = usePathname();
  const links = [
    { href: "/reviews", label: "Reviews" },
    { href: "/articles", label: "Guides" },
    { href: "/boxing", label: "Boxing" }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={logoFont.className + " " + styles.navigation_logo}>
          SportLoom
        </Link>
        <ul className={styles.navigation_links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-white transition duration-300 ${pathName.startsWith(href) ? "underline underline-offset-4" : "text-white hover:underline underline-offset-4"}`}>{label}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  )
}
