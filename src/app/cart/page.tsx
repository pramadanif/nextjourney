import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="page-wrapper animate-in">
      <div className="page-header" style={{ padding: '40px 0', marginBottom: '40px' }}>
        <h1 className="page-title" style={{ fontSize: '32px' }}>Shopping Cart</h1>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <div className="cart-grid">
          {/* Cart Items */}
          <div>
            <div className="cart-item">
              <div className="cart-img-wrapper">
                <Image src="/images/jacket.png" alt="Blackout Jacket" fill className="product-img" sizes="120px" />
              </div>
              <div className="cart-details">
                <h3 className="cart-item-title">BLACKOUT JACKET</h3>
                <p className="cart-item-price">IDR 975.000,00</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <select style={{ padding: '8px', border: '1px solid var(--border-color)', outline: 'none' }}>
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
                  </select>
                  <button style={{ fontSize: '13px', textDecoration: 'underline', color: 'var(--text-muted)' }}>Remove</button>
                </div>
              </div>
            </div>

            <div className="cart-item">
              <div className="cart-img-wrapper">
                <Image src="/images/pants.png" alt="Blackout Sweatpants" fill className="product-img" sizes="120px" />
              </div>
              <div className="cart-details">
                <h3 className="cart-item-title">BLACKOUT SWEATPANTS</h3>
                <p className="cart-item-price">IDR 480.000,00</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <select style={{ padding: '8px', border: '1px solid var(--border-color)', outline: 'none' }}>
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
                  </select>
                  <button style={{ fontSize: '13px', textDecoration: 'underline', color: 'var(--text-muted)' }}>Remove</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="cart-summary">
              <h3 style={{ fontSize: '20px', marginBottom: '30px', textTransform: 'uppercase' }}>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>IDR 1.455.000,00</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>IDR 1.455.000,00</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '30px' }}>Proceed to Checkout</button>
              
              <Link href="/shop" style={{ display: 'block', textAlign: 'center', marginTop: '20px', fontSize: '13px', textDecoration: 'underline' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
