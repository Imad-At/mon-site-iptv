// components/Header.js
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logo}>
        <Image src="/logo.png" alt="Logo DOK PLAYER" width={180} height={180} priority />
      </Link>

      <nav style={styles.nav}>
        <Link href="/download" style={styles.link}>Téléchargement</Link>
        <Link href="/faq" style={styles.link}>FAQ</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: '95%',
    height: '70px',
    padding: '10px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff00',
    boxShadow: '0 0px 8px rgba(248, 4, 4, 0)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    fontSize: '16px',
    color: '#0070C0',
    textDecoration: 'none',
    fontWeight: '500',
  },
};
