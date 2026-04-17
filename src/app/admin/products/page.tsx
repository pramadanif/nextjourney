import Image from 'next/image';

const PRODUCTS = [
  { id: '1', name: 'Essential Oversized Tee', price: 'IDR 320.000', stock: 42, category: 'Apparel', status: 'In Stock', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' },
  { id: '2', name: 'Blackout Premium Hoodie', price: 'IDR 850.000', stock: 18, category: 'Apparel', status: 'Low Stock', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200' },
  { id: '3', name: 'Vintage Wash Sweatshirt', price: 'IDR 680.000', stock: 0, category: 'Apparel', status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=200' },
  { id: '4', name: 'Street Graphic Tee', price: 'IDR 350.000', stock: 65, category: 'Apparel', status: 'In Stock', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=200' },
];

export default function ProductsPage() {
  return (
    <div className="animate-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>Products</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage your catalog and inventory.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Product
        </button>
      </header>

      <div className="admin-card" style={{ padding: '0' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '20px' }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="form-input" 
            style={{ maxWidth: '300px', backgroundColor: '#f9fafb' }}
          />
          <select className="form-input" style={{ maxWidth: '150px', backgroundColor: '#f9fafb' }}>
            <option>All Categories</option>
            <option>Apparel</option>
            <option>Accessories</option>
          </select>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.id}>
                <td>
                  <div style={{ width: '48px', height: '48px', position: 'relative', backgroundColor: 'var(--secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="48px" />
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td style={{ color: 'var(--text-muted)' }}>{p.category}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '10px', 
                    fontWeight: 700,
                    backgroundColor: p.status === 'In Stock' ? '#dcfce7' : p.status === 'Low Stock' ? '#fef9c3' : '#fee2e2',
                    color: p.status === 'In Stock' ? '#166534' : p.status === 'Low Stock' ? '#854d0e' : '#991b1b'
                  }}>
                    {p.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button style={{ color: 'var(--text-muted)', marginRight: '15px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </button>
                  <button style={{ color: 'var(--sold-out-red)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
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
