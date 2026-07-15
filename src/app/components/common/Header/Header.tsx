'use client'
import Link from 'next/link'
import { logoFont } from '../../../../../public/fonts/logoFont';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const nestedLinks = [
    { href: "/boxing/gloves", label: "Gloves", value: "gloves" },
    { href: "/boxing/shoes", label: "Shoes", value: "shoes" },
    { href: "/boxing/brands", label: "Brands", value: "brands" },
    { href: "/boxing/headgear", label: "Headgear", value: "headgear" },
    { href: "/boxing/training", label: "Training", value: "training" }
  ]

  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const [, sport, subcategory] = pathname.split("/");
  const active = subcategory ?? sport;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={logoFont.className + " " + styles.navigation_logo}>
          SportLoom
        </Link>
        <ul className={styles.navigation_links}>
          <li>
            <Link
              href="/reviews"
              className={active === "reviews" ? styles.active : ""}>
              Reviews
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className={active === "articles" ? styles.active : ""}>
              Articles
            </Link>
          </li>
          <li className={styles.nestedLinks_wrapper}>
            <div className={styles.chevron_wrapper}>
              <Link
                href="/boxing"
                className={active === "boxing" ? styles.active : ""}>
                Boxing
              </Link>
              <button
                type="button"
                className={styles.chevronButton}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <ChevronDown size={22} />
              </button>
            </div>
            <ul className={`${styles.nestedLinks} ${open ? styles.open : ''}`}>
              {nestedLinks.map(({ href, label, value }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={active === value ? styles.active : ""}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
