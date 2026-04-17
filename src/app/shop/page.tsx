"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/components/ProductGrid';

export default function ShopPage() {
  const [gridColumns, setGridColumns] = useState(4);

  return (
    <div className="page-wrapper animate-in" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ paddingBottom: 'var(--section-padding)', paddingTop: '40px' }}>
        
        {/* Minimalist Top Content */}
        <h1 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 'clamp(30px, 8vw, 60px)' }}>
          Products
        </h1>

        {/* Filter Toolbar */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--border-color)',
          fontSize: '13px',
          gap: '20px'
        }}>
          {/* Left: Dropdown Filters */}
          <div style={{ display: 'flex', gap: '30px', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              Availability 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              Price
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right: Meta & View Toggles */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', color: 'var(--text-muted)' }}>
            <span>125 items</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              Sort 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="view-toggles" style={{ display: 'flex', gap: '15px' }}>
              {[2, 4, 6].map((cols) => (
                <button 
                  key={cols}
                  onClick={() => setGridColumns(cols)} 
                  style={{ color: gridColumns === cols ? 'var(--foreground)' : 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.3s' }}
                  aria-label={`${cols} columns grid`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                    {cols === 2 && <><rect width="8" height="8"/><rect x="10" width="8" height="8"/><rect y="10" width="8" height="8"/><rect x="10" y="10" width="8" height="8"/></>}
                    {cols === 4 && <><rect width="4" height="4"/><rect x="5" width="4" height="4"/><rect x="10" width="4" height="4"/><rect x="14" width="4" height="4"/><rect y="5" width="4" height="4"/><rect x="5" y="5" width="4" height="4"/><rect x="10" y="5" width="4" height="4"/><rect x="14" y="5" width="4" height="4"/><rect y="10" width="4" height="4"/><rect x="5" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="14" y="10" width="4" height="4"/></>}
                    {cols === 6 && <rect width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1"/>}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className={`responsive-product-grid columns-${gridColumns}`}>
          {MOCK_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id + i} {...product} />
          ))}
          {MOCK_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id + i + 'b'} {...product} delay={0.2} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .responsive-product-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(${gridColumns}, 1fr);
          transition: all 0.5s var(--ease-expo);
        }
        
        @media (max-width: 1024px) {
          .responsive-product-grid {
            grid-template-columns: repeat(min(${gridColumns}, 3), 1fr);
          }
          .view-toggles { display: none; }
        }
        
        @media (max-width: 768px) {
          .responsive-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .responsive-product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
