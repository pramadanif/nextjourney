"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.navContainer}>
        <div className="container">
          <nav className={styles.nav}>
            {/* Left Desktop Menu */}
            <div className={styles.leftMenu}>
              <Link href="/" className={styles.menuItem}>HOME</Link>
              <div 
                className={styles.menuItem}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                SHOP
              </div>
              <Link href="/" className={styles.menuItem}>LOOKBOOKS</Link>
            </div>

            {/* Logo */}
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                SNS-B
              </Link>
            </div>

            {/* Right Desktop Menu - Icons */}
            <div className={styles.rightMenu}>
              <button aria-label="Search" className={styles.iconBtn}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button aria-label="User Account" className={styles.iconBtn}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button aria-label="Shopping Cart" className={styles.iconBtn}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
}
