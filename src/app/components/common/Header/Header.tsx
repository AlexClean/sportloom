'use client'
import Link from 'next/link'
import { logoFont } from '../../../../../public/fonts/logoFont';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const links = [
    { href: "/reviews", label: "Reviews", value: "reviews" },
    { href: "/articles", label: "Guides", value: "articles" },
    { href: "/boxing", label: "Boxing", value: "boxing" },
    { href: "/boxing/gloves", label: "Gloves", value: "gloves" },
    { href: "/boxing/training", label: "Training", value: "training" }
  ]

  const pathname = usePathname();
  const [, sport, subcategory] = pathname.split("/");
  const active = subcategory ?? sport;
  
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={logoFont.className + " " + styles.navigation_logo}>
          SportLoom
        </Link>
        <ul className={styles.navigation_links}>
          {links.map(({ href, label, value }) => {

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={active === value ? styles.active : ""}
                >{label}
                </Link>
              </li>
            )})}
        </ul>
      </nav>
    </header>
  )
}
