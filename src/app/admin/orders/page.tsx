const ORDERS = [
  { id: '#OR-9241', date: 'Oct 24, 2023', customer: 'Muhammad Bagus', payment: 'Paid', status: 'Delivered', total: 'IDR 1.455.000' },
  { id: '#OR-9240', date: 'Oct 24, 2023', customer: 'Jane Doe', payment: 'Paid', status: 'Processing', total: 'IDR 480.000' },
  { id: '#OR-9239', date: 'Oct 23, 2023', customer: 'Alex Smith', payment: 'Pending', status: 'Shipped', total: 'IDR 975.000' },
  { id: '#OR-9238', date: 'Oct 22, 2023', customer: 'Budi Gunawan', payment: 'Refunded', status: 'Cancelled', total: 'IDR 210.000' },
  { id: '#OR-9237', date: 'Oct 22, 2023', customer: 'Sarah Connor', payment: 'Paid', status: 'Delivered', total: 'IDR 3.200.000' },
];

export default function OrdersPage() {
  return (
    <div className="animate-in">
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Orders</h1>
        <p style={{ color: 'var(--text-muted)' }}>Track and fulfill customer orders.</p>
      </header>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        {['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((tab, i) => (
          <button 
            key={tab} 
            style={{ 
              padding: '8px 16px', 
              fontSize: '13px', 
              fontWeight: 600, 
              borderBottom: i === 0 ? '2px solid black' : '2px solid transparent',
              color: i === 0 ? 'black' : 'var(--text-muted)',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="admin-card" style={{ padding: '0' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Total</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td style={{ fontWeight: 700 }}>{o.id}</td>
                <td style={{ color: 'var(--text-muted)' }}>{o.date}</td>
                <td>{o.customer}</td>
                <td>
                  <span style={{ fontSize: '11px', fontWeight: 600 }}>
                    <span style={{ color: o.payment === 'Paid' ? 'var(--sale-green)' : o.payment === 'Pending' ? '#854d0e' : 'var(--sold-out-red)' }}>●</span> {o.payment}
                  </span>
                </td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '10px', 
                    fontWeight: 700,
                    backgroundColor: o.status === 'Delivered' ? '#dcfce7' : o.status === 'Processing' ? '#fef9c3' : o.status === 'Shipped' ? '#f3f4f6' : '#fee2e2',
                    color: o.status === 'Delivered' ? '#166534' : o.status === 'Processing' ? '#854d0e' : o.status === 'Shipped' ? '#374151' : '#991b1b'
                  }}>
                    {o.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ fontWeight: 600 }}>{o.total}</td>
                <td style={{ textAlign: 'right' }}>
                  <button style={{ fontSize: '12px', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '4px' }}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
