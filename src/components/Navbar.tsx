"use client";

import { useState } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="nav-header">
        <div className="container nav-container">
          {/* Mobile Hamburger */}
          <button 
            className="nav-icon-btn hamburger-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>NEXTJOURNEY</Link>
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
          
          {/* Tablet/Mobile Right Icons (Always Visible) */}
          <div className="nav-right-mobile" style={{ display: 'none', gap: '5px' }}>
            <Link href="/cart" className="nav-icon-btn">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar & Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMobileMenu}
      />
      
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav style={{ flex: 1 }}>
          <Link href="/" className="mobile-menu-link animate-in stagger-1" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/shop" className="mobile-menu-link animate-in stagger-2" onClick={toggleMobileMenu}>Shop All</Link>
          <Link href="/lookbooks" className="mobile-menu-link animate-in stagger-3" onClick={toggleMobileMenu}>Lookbooks</Link>
          <Link href="/profile" className="mobile-menu-link animate-in stagger-4" onClick={toggleMobileMenu}>My Account</Link>
          <Link href="/admin" className="mobile-menu-link animate-in stagger-5" onClick={toggleMobileMenu}>Admin Portal</Link>
        </nav>
        
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '30px' }}>
          <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.1em' }}>NEXTJOURNEY STUDIO</p>
          <p style={{ fontSize: '12px', fontWeight: 600 }}>Couture & Culture © 2024</p>
        </div>
      </div>

      {/* Mega Menu Dropdown (Desktop Only) */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
}
