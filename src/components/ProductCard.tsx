import Image from 'next/image';
import styles from './ProductCard.module.css';

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  status?: 'sold_out' | 'sale' | 'available';
  delay?: number;
}

export default function ProductCard({ title, price, image, status, delay = 0 }: Product) {
  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.imageContainer}>
        {status === 'sold_out' && <span className={`${styles.badge} ${styles.soldOut}`}>Sold Out</span>}
        {status === 'sale' && <span className={`${styles.badge} ${styles.sale}`}>Sale</span>}
        
        <Image 
          src={image} 
          alt={title} 
          fill
          className={styles.image}
        />

        <button className={styles.addToBag}>
          {status === 'sold_out' ? 'Notify Me' : 'Add to Bag'}
        </button>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
