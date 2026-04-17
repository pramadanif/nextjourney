export default function AdminDashboard() {
  return (
    <div className="animate-in">
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Dashboard Overview</h1>
        <p style={{ color: 'var(--text-muted)' }}>Welcome back, Administrator. Here's what's happening today.</p>
      </header>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Revenue</p>
          <p className="stat-value">IDR 124.500.000</p>
          <p style={{ fontSize: '11px', color: 'var(--sale-green)', fontWeight: 600, marginTop: '8px' }}>+12.5% vs last month</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Orders</p>
          <p className="stat-value">842</p>
          <p style={{ fontSize: '11px', color: 'var(--sale-green)', fontWeight: 600, marginTop: '8px' }}>+5.2% vs last month</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Active Users</p>
          <p className="stat-value">2,420</p>
          <p style={{ fontSize: '11px', color: 'var(--sale-green)', fontWeight: 600, marginTop: '8px' }}>+18.1% vs last month</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Avg. Order Value</p>
          <p className="stat-value">IDR 147.862</p>
          <p style={{ fontSize: '11px', color: 'var(--sold-out-red)', fontWeight: 600, marginTop: '8px' }}>-2.1% vs last month</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        {/* Recent Orders Table */}
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' }}>Recent Orders</h2>
            <button style={{ fontSize: '12px', textDecoration: 'underline' }}>View All</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#OR-9241</td>
                <td>Muhammad Bagus</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, backgroundColor: '#dcfce7', color: '#166534' }}>DELIVERED</span></td>
                <td>IDR 1.455.000</td>
              </tr>
              <tr>
                <td>#OR-9240</td>
                <td>Jane Doe</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, backgroundColor: '#fef9c3', color: '#854d0e' }}>PROCESSING</span></td>
                <td>IDR 480.000</td>
              </tr>
              <tr>
                <td>#OR-9239</td>
                <td>Alex Smith</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, backgroundColor: '#f3f4f6', color: '#374151' }}>SHIPPED</span></td>
                <td>IDR 975.000</td>
              </tr>
              <tr>
                <td>#OR-9238</td>
                <td>Budi Gunawan</td>
                <td><span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, backgroundColor: '#fee2e2', color: '#991b1b' }}>CANCELLED</span></td>
                <td>IDR 210.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Top Products */}
        <div className="admin-card">
          <h2 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '30px' }}>Top Products</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--secondary)', borderRadius: '4px' }}></div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600 }}>BLACKOUT JACKET</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>142 Sales</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 700 }}>IDR 138.450k</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--secondary)', borderRadius: '4px' }}></div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600 }}>BLACKOUT SWEATPANTS</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>98 Sales</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 700 }}>IDR 47.040k</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--secondary)', borderRadius: '4px' }}></div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600 }}>BENZ CARDHOLDER</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>84 Sales</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', fontWeight: 700 }}>IDR 17.640k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
