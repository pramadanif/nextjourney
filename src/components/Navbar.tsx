"use client";

import { useState } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <>
      <header className="nav-header">
        <div className="container nav-container">
          {/* Left Desktop Menu */}
          <div className="nav-left">
            <Link href="/" className="nav-link">HOME</Link>
            <div 
              className="nav-link"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link href="/shop">SHOP</Link>
            </div>
            <Link href="/lookbooks" className="nav-link">LOOKBOOKS</Link>
          </div>

          {/* Logo */}
          <div className="nav-logo">
            <Link href="/">NEXTJOURNEY</Link>
          </div>

          {/* Right Desktop Menu - Icons */}
          <div className="nav-right">
            <button aria-label="Search" className="nav-icon-btn">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <Link href="/profile" aria-label="User Account" className="nav-icon-btn">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            <Link href="/cart" aria-label="Shopping Cart" className="nav-icon-btn">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
          </div>
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
