import Image from 'next/image';

export default function LookbooksPage() {
  return (
    <div className="page-wrapper animate-in">
      <div className="page-header" style={{ padding: '80px 0', marginBottom: '80px', backgroundColor: 'var(--background)' }}>
        <h1 className="page-title" style={{ fontSize: '56px' }}>LOOKBOOKS</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
          Explore our seasonal campaigns and the creative vision behind NEXTJOURNEY.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          
          <div style={{ width: '100%', position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600" alt="Raya Collection 26" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <h2 style={{ color: 'white', fontSize: '24px', textTransform: 'uppercase' }}>RAYA COLLECTION 26</h2>
              <a href="/shop" style={{ color: 'white', textDecoration: 'underline', fontSize: '14px', marginTop: '10px', display: 'inline-block' }}>Shop Category</a>
            </div>
          </div>
          
          {/* Placeholder for a second lookbook/campaign. We'll reuse the jacket mockup creatively. */}
          <div style={{ width: '100%', position: 'relative', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--secondary)' }}>
            <Image src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600" alt="Urban Essentials" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <h2 style={{ color: 'white', fontSize: '24px', textTransform: 'uppercase' }}>URBAN ESSENTIALS</h2>
              <a href="/shop" style={{ color: 'white', textDecoration: 'underline', fontSize: '14px', marginTop: '10px', display: 'inline-block' }}>Shop Category</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
