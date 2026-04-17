"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-wrapper animate-in">
      {/* Infinite Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">New Arrivals: STREET COLLECTION 2024</span>
          <span className="marquee-item">World Wide Shipping Available</span>
          <span className="marquee-item">Premium Streetwear Boutique</span>
          <span className="marquee-item">NextJourney: The Narrative in Motion</span>
          {/* Duplicate for seamless loop */}
          <span className="marquee-item">New Arrivals: STREET COLLECTION 2024</span>
          <span className="marquee-item">World Wide Shipping Available</span>
          <span className="marquee-item">Premium Streetwear Boutique</span>
          <span className="marquee-item">NextJourney: The Narrative in Motion</span>
        </div>
      </div>

      <Hero />

      {/* Featured Collection Section */}
      <section className="section-padding container">
        <div className="shop-header animate-in stagger-1" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <div>
            <span className="badge-small" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '10px', display: 'block' }}>CURATED SELECTION</span>
            <h2 className="shop-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>Featured Drop</h2>
          </div>
          <Link href="/shop" className="nav-link">Explore Collection</Link>
        </div>
        <div className="animate-in stagger-2" style={{ marginTop: '40px' }}>
          <ProductGrid limit={4} />
        </div>
      </section>

      {/* COMMUNITY ARCHIVE / VISUAL NARRATIVE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
        <div className="container">
          <div className="animate-in stagger-1" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, textTransform: 'uppercase' }}>Community Archive</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '20px auto 0', fontSize: 'clamp(14px, 2vw, 16px)' }}>
              The journey is best shared. A visual narrative of our community, captured in motion.
            </p>
          </div>

          <div className="editorial-grid">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`editorial-item animate-in stagger-${num + 1}`}>
                <Image 
                  src={`/images/editorial/community-${num}.jpg`} 
                  alt={`Community Narrative ${num}`} 
                  fill 
                  className="image-mono-reveal"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="editorial-caption">
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>ARCHIVE vol. 0{num}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Motion & Stillness</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Editorial */}
      <section className="section-padding container">
        <div className="responsive-story-grid animate-in stagger-1">
          <div className="story-content">
            <span className="badge-small" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>01 // OUR IDENTITY</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, margin: '20px 0', lineHeight: 1.1 }}>More than just a brand. It's a journey.</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.6 }}>
              Crafted for those who move with purpose. NextJourney represents the intersection of premium quality and raw street culture. Every piece tells a story of evolution.
            </p>
            <Link href="/lookbooks" className="btn-secondary">Read The Full Story</Link>
          </div>
          <div className="story-image-wrapper">
            <Image 
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800"
              alt="Brand Editorial"
              fill
              style={{ objectFit: 'cover' }}
              className="animate-in stagger-2"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="animate-in stagger-1">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, marginBottom: '20px' }}>Join The Journey</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px', fontSize: '14px' }}>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto', gap: '10px' }}>
              <input type="email" placeholder="Your email address" className="form-input" style={{ flex: '1 1 300px' }} />
              <button className="btn-primary" style={{ flex: '1 1 100px', padding: '16px 30px' }}>Join</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .responsive-story-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 40px;
          align-items: center;
        }
        .story-content {
          grid-column: 1 / 6;
        }
        .story-image-wrapper {
          grid-column: 7 / 13;
          position: relative;
          height: 600px;
        }
        
        @media (max-width: 1024px) {
          .story-content { grid-column: 1 / 7; }
        }
        
        @media (max-width: 768px) {
          .responsive-story-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .story-content { grid-column: 1 / -1; }
          .story-image-wrapper { 
            grid-column: 1 / -1; 
            height: 400px;
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
