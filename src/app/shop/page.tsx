import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/components/ProductGrid';

export default function ShopPage() {
  return (
    <div className="page-wrapper animate-in">
      <div className="page-header">
        <h1 className="page-title">Shop All</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>Discover the full NEXTJOURNEY collection.</p>
      </div>

      <div className="container" style={{ display: 'flex', gap: '60px', paddingBottom: '120px' }}>
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">Category</h3>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> T-Shirts
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> Outerwear
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> Pants
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> Accessories
            </label>
          </div>
          
          <div className="filter-group">
            <h3 className="filter-title">Availability</h3>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> In Stock
            </label>
            <label className="filter-label">
              <input type="checkbox" className="filter-checkbox" /> Out of Stock
            </label>
          </div>
          
          <div className="filter-group">
            <h3 className="filter-title">Sort By</h3>
            <select style={{ width: '100%', padding: '10px', border: '1px solid var(--border-color)', outline: 'none' }}>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </aside>

        {/* Product Grid section */}
        <div style={{ flex: 1 }}>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {/* Duplicating mock products to simulate a fuller shop */}
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id + 'a'} {...product} />
            ))}
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id + 'b'} {...product} delay={product.delay ? product.delay + 0.2 : 0} />
            ))}
            {MOCK_PRODUCTS.slice(0, 2).map((product) => (
              <ProductCard key={product.id + 'c'} {...product} delay={product.delay ? product.delay + 0.4 : 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
