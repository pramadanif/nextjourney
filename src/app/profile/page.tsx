"use client";

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'orders' | 'details' | 'addresses' | 'payments';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>('orders');

  return (
    <div className="page-wrapper animate-in">
      <div className="page-header" style={{ padding: '40px 0', marginBottom: '40px' }}>
        <h1 className="page-title" style={{ fontSize: '32px' }}>My Account</h1>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <div className="profile-grid">
          {/* Profile Sidebar */}
          <aside className="profile-menu">
            <button 
              onClick={() => setActiveTab('orders')}
              className={`profile-menu-link ${activeTab === 'orders' ? 'active' : ''}`}
              style={{ textAlign: 'left' }}
            >
              Order History
            </button>
            <button 
              onClick={() => setActiveTab('details')}
              className={`profile-menu-link ${activeTab === 'details' ? 'active' : ''}`}
              style={{ textAlign: 'left' }}
            >
              Account Details
            </button>
            <button 
              onClick={() => setActiveTab('addresses')}
              className={`profile-menu-link ${activeTab === 'addresses' ? 'active' : ''}`}
              style={{ textAlign: 'left' }}
            >
              Saved Addresses
            </button>
            <button 
              onClick={() => setActiveTab('payments')}
              className={`profile-menu-link ${activeTab === 'payments' ? 'active' : ''}`}
              style={{ textAlign: 'left' }}
            >
              Payment Methods
            </button>
            <button className="profile-menu-link" style={{ textAlign: 'left', marginTop: '40px', color: 'var(--sold-out-red)' }}>Log Out</button>
          </aside>

          {/* Profile Content */}
          <main className="profile-content-box animate-in">
            {activeTab === 'orders' && (
              <>
                <h2 style={{ fontSize: '20px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Order History</h2>
                <div style={{ padding: '60px 0', textAlign: 'center', border: '1px dashed var(--border-color)' }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>You haven't placed any orders yet.</p>
                  <Link href="/shop" className="btn-secondary">Start Shopping</Link>
                </div>
              </>
            )}

            {activeTab === 'details' && (
              <>
                <h2 style={{ fontSize: '20px', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Details</h2>
                <div style={{ maxWidth: '500px' }}>
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" defaultValue="Muhammad" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" defaultValue="Bagus" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" defaultValue="user@nextjourney.com" />
                  </div>
                  <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>Save Changes</button>
                </div>
              </>
            )}

            {activeTab === 'addresses' && (
              <>
                <h2 style={{ fontSize: '20px', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Saved Addresses</h2>
                <div className="address-card">
                  <span className="address-tag">Default</span>
                  <p style={{ fontWeight: 600, marginBottom: '10px' }}>Home</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Jl. Jendral Sudirman No. 123<br />
                    Jakarta Selatan, 12190<br />
                    Indonesia
                  </p>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                    <button style={{ fontSize: '12px', textDecoration: 'underline' }}>Edit</button>
                    <button style={{ fontSize: '12px', textDecoration: 'underline', color: 'var(--sold-out-red)' }}>Delete</button>
                  </div>
                </div>
                <button className="btn-secondary" style={{ width: '100%', marginTop: '20px' }}>Add New Address</button>
              </>
            )}

            {activeTab === 'payments' && (
              <>
                <h2 style={{ fontSize: '20px', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Payment Methods</h2>
                <div style={{ padding: '60px 0', textAlign: 'center', border: '1px dashed var(--border-color)' }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>No payment methods saved.</p>
                  <button className="btn-primary">Add Payment Card</button>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
