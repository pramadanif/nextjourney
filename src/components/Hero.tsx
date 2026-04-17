import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-img-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image 
          src="/images/hero-bg.png" 
          alt="NextJourney Collection" 
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
          className="hero-img"
        />
      </div>
      <div className="hero-overlay">
        <div className="container">
          <div className="animate-in">
            <h1 className="hero-title">NEXTJOURNEY<br/>COLLECTION 26</h1>
            <p className="hero-subtitle">Elevate your streetwear game with our premium, carefully curated pieces designed for the modern urban explorer.</p>
            <a href="/shop" className="btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
