import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="page-wrapper animate-in">
      <div className="page-header" style={{ padding: '40px 0', marginBottom: '40px' }}>
        <h1 className="page-title" style={{ fontSize: '32px' }}>My Account</h1>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <div className="profile-grid">
          {/* Profile Sidebar */}
          <aside className="profile-menu">
            <Link href="/profile" className="profile-menu-link active">Order History</Link>
            <Link href="/" className="profile-menu-link">Account Details</Link>
            <Link href="/" className="profile-menu-link">Saved Addresses</Link>
            <Link href="/" className="profile-menu-link">Payment Methods</Link>
            <button className="profile-menu-link" style={{ textAlign: 'left', marginTop: '20px' }}>Log Out</button>
          </aside>

          {/* Profile Content */}
          <main className="profile-content-box">
            <h2 style={{ fontSize: '24px', marginBottom: '20px', textTransform: 'uppercase' }}>Order History</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              You haven't placed any orders yet.
            </p>
            <Link href="/shop" className="btn-secondary">
              Start Shopping
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
}
