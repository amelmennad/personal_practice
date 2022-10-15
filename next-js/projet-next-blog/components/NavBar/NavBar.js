import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <a className='text-light'>Accueil</a>
      </Link>

      <Link href='/blog' className='nav-item'>
        <a className='text-light'>Blog</a>
      </Link>

      <Link href='/utilisateurs' className='nav-item'>
        <a className='text-light'>Liste</a>
      </Link>
    </nav>
  );
}
