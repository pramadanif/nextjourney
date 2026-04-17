import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        {/* We use next/image for optimized rendering */}
        <Image 
          src="/images/hero-bg.png" 
          alt="Raya Collection 26 Streetwear" 
          fill
          priority
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroTextContainer}>
        <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
          RAYA COLLECTION 26
        </h1>
      </div>
    </section>
  );
}
