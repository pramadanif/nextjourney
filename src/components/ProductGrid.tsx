import styles from './ProductGrid.module.css';
import ProductCard, { Product } from './ProductCard';

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "BENZ CARDHOLDER BLACK",
    price: "IDR 210.000,00",
    image: "/images/cardholder.png",
    delay: 0.1
  },
  {
    id: "2",
    title: "BLACKOUT JACKET",
    price: "IDR 975.000,00",
    image: "/images/jacket.png",
    delay: 0.2
  },
  {
    id: "3",
    title: "BLACKOUT SWEATPANTS",
    price: "IDR 480.000,00",
    image: "/images/pants.png",
    delay: 0.3
  },
  {
    id: "4",
    title: "BRICK DENIM JACKET",
    price: "IDR 880.000,00",
    image: "/images/denim.png",
    status: "sold_out",
    delay: 0.4
  }
];

export default function ProductGrid() {
  return (
    <section className={`container ${styles.gridContainer}`}>
      <div className={styles.gridHeader}>
        <h2 className={styles.title}>Products</h2>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            Availability 
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.filterItem}>
            Price
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
