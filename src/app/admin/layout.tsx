"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin';
    return pathname.startsWith(path);
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="admin-layout" style={{ position: 'relative', zIndex: 200, backgroundColor: '#f9fafb' }}>
      
      {/* Mobile Admin Header */}
      <header className="admin-mobile-header" style={{ 
        display: 'none', 
        height: '60px', 
        backgroundColor: 'white', 
        borderBottom: '1px solid var(--border-color)',
        padding: '0 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50
      }}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ padding: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <span style={{ fontWeight: 800, fontSize: '14px' }}>NEXTJOURNEY ADMIN</span>
        <div style={{ width: '40px' }}></div>
      </header>

      {/* Admin Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ backgroundColor: '#ffffff', boxShadow: '10px 0 30px rgba(0,0,0,0.02)' }}>
        <div style={{ paddingBottom: '40px', borderBottom: '1px solid #f3f4f6', marginBottom: '30px' }}>
          <Link href="/" style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.02em' }}>NEXTJOURNEY <span style={{ fontSize: '10px', fontWeight: 500, color: 'var(--text-muted)' }}>ADMIN</span></Link>
        </div>
        
        <nav className="admin-nav">
          <Link href="/admin" className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`} onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </Link>
          <Link href="/admin/products" className={`admin-nav-item ${isActive('/admin/products') ? 'active' : ''}`} onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Products
          </Link>
          <Link href="/admin/orders" className={`admin-nav-item ${isActive('/admin/orders') ? 'active' : ''}`} onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Orders
          </Link>
          <Link href="/admin/customers" className={`admin-nav-item ${isActive('/admin/customers') ? 'active' : ''}`} onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Customers
          </Link>
        </nav>

        <div style={{ position: 'absolute', bottom: '40px', left: '20px', right: '20px' }}>
          <Link href="/login" className="admin-nav-item" style={{ color: 'var(--sold-out-red)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Logout
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          onClick={closeSidebar}
          style={{ 
            position: 'fixed', 
            top: 0, left: 0, 
            width: '100%', height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            zIndex: 900 
          }}
        />
      )}
      
      <main className="admin-main">
        {children}
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .admin-mobile-header { display: flex !important; }
          .admin-main { padding-top: 80px !important; }
        }
      `}</style>
    </div>
  );
}
