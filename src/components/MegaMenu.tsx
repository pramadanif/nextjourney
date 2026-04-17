import Link from 'next/link';
import styles from './MegaMenu.module.css';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div 
      className={`${styles.megaMenuContainer} ${isOpen ? styles.open : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/" className={styles.link}>Coming Soon</Link>
            <Link href="/" className={styles.link}>New Arrival</Link>
            <Link href="/" className={styles.link}>RAYA COLLECTION 26</Link>
          </div>
          <div className={styles.column}>
            <span className={styles.columnTitle}>All Product</span>
            <Link href="/" className={styles.link}>T-Shirt</Link>
            <Link href="/" className={styles.link}>Pants</Link>
            <Link href="/" className={styles.link}>Outwear</Link>
            <Link href="/" className={styles.link}>Accessories</Link>
          </div>
          <div className={styles.column}>
            <Link href="/" className={`${styles.link} ${styles.saleLink}`}>Sale</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
