import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div 
      className={`mega-menu ${isOpen ? 'open' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container">
        <div className="mega-grid">
          <div className="mega-col">
            <Link href="/shop" className="mega-link">New Arrival</Link>
            <Link href="/lookbooks" className="mega-link">RAYA COLLECTION 26</Link>
          </div>
          <div className="mega-col">
            <span className="mega-title">All Product</span>
            <Link href="/shop?category=tshirt" className="mega-link">T-Shirt</Link>
            <Link href="/shop?category=pants" className="mega-link">Pants</Link>
            <Link href="/shop?category=outwear" className="mega-link">Outwear</Link>
            <Link href="/shop?category=accessories" className="mega-link">Accessories</Link>
          </div>
          <div className="mega-col">
            <Link href="/shop?sale=true" className="mega-link" style={{ color: 'var(--sale-green)' }}>Sale</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
