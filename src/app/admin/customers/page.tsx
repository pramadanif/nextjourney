const CUSTOMERS = [
  { id: '1', name: 'Muhammad Bagus', email: 'bagus@experience.com', orders: 12, spent: 'IDR 14.550.000', lastOrder: 'Oct 24, 2023', segment: 'VIP' },
  { id: '2', name: 'Jane Doe', email: 'jane.doe@gmail.com', orders: 4, spent: 'IDR 2.480.000', lastOrder: 'Oct 24, 2023', segment: 'Regular' },
  { id: '3', name: 'Alex Smith', email: 'alex.smith@outlook.com', orders: 1, spent: 'IDR 975.000', lastOrder: 'Oct 23, 2023', segment: 'New' },
  { id: '4', name: 'Budi Gunawan', email: 'budi.g@company.co.id', orders: 8, spent: 'IDR 6.210.000', lastOrder: 'Oct 22, 2023', segment: 'Loyal' },
  { id: '5', name: 'Sarah Connor', email: 'sarah@resistance.net', orders: 24, spent: 'IDR 42.000.000', lastOrder: 'Oct 22, 2023', segment: 'VIP' },
];

export default function CustomersPage() {
  return (
    <div className="animate-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Customers</h1>
          <p style={{ color: 'var(--text-muted)' }}>Understand and manage your customer base.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>Export List</button>
          <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Add Customer</button>
        </div>
      </header>

      <div className="admin-card" style={{ padding: '0' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Last Order</th>
              <th>Segment</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>
                      {c.name.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 600 }}>{c.name}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
                <td>{c.orders}</td>
                <td style={{ fontWeight: 600 }}>{c.spent}</td>
                <td style={{ color: 'var(--text-muted)' }}>{c.lastOrder}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '10px', 
                    fontWeight: 700,
                    backgroundColor: c.segment === 'VIP' ? '#fde68a' : c.segment === 'Loyal' ? '#d9f99d' : '#f3f4f6',
                    color: c.segment === 'VIP' ? '#92400e' : c.segment === 'Loyal' ? '#3f6212' : '#374151'
                  }}>
                    {c.segment.toUpperCase()}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button style={{ color: 'var(--text-muted)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
