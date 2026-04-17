"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/components/ProductGrid';

export default function ShopPage() {
  const [gridColumns, setGridColumns] = useState(4);

  return (
    <div className="page-wrapper animate-in" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ paddingBottom: '120px', paddingTop: '40px' }}>
        
        {/* Minimalist Top Content */}
        <h1 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '60px' }}>
          Products
        </h1>

        {/* Filter Toolbar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--border-color)',
          fontSize: '13px'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', color: 'var(--text-muted)' }}>
            <span>125 items</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              Sort 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={() => setGridColumns(2)} 
                style={{ color: gridColumns === 2 ? 'var(--foreground)' : 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.3s' }}
                aria-label="2 columns grid"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><rect width="8" height="8"/><rect x="10" width="8" height="8"/><rect y="10" width="8" height="8"/><rect x="10" y="10" width="8" height="8"/></svg>
              </button>
              <button 
                onClick={() => setGridColumns(4)} 
                style={{ color: gridColumns === 4 ? 'var(--foreground)' : 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.3s' }}
                aria-label="4 columns grid"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><rect width="4" height="4"/><rect x="5" width="4" height="4"/><rect x="10" width="4" height="4"/><rect x="14" width="4" height="4"/><rect y="5" width="4" height="4"/><rect x="5" y="5" width="4" height="4"/><rect x="10" y="5" width="4" height="4"/><rect x="14" y="5" width="4" height="4"/><rect y="10" width="4" height="4"/><rect x="5" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="14" y="10" width="4" height="4"/><rect y="14" width="4" height="4"/><rect x="5" y="14" width="4" height="4"/><rect x="10" y="14" width="4" height="4"/><rect x="14" y="14" width="4" height="4"/></svg>
              </button>
              <button 
                onClick={() => setGridColumns(6)} 
                style={{ color: gridColumns === 6 ? 'var(--foreground)' : 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.3s' }}
                aria-label="6 columns grid"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect width="3" height="3"/><rect x="4" width="3" height="3"/><rect x="8" width="3" height="3"/><rect x="12" width="3" height="3"/><rect x="16" width="3" height="3"/><rect y="4" width="3" height="3"/><rect x="4" y="4" width="3" height="3"/><rect x="8" y="4" width="3" height="3"/><rect x="12" y="4" width="3" height="3"/><rect x="16" y="4" width="3" height="3"/><rect y="8" width="3" height="3"/><rect x="4" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="12" y="8" width="3" height="3"/><rect x="16" y="8" width="3" height="3"/><rect y="12" width="3" height="3"/><rect x="4" y="12" width="3" height="3"/><rect x="8" y="12" width="3" height="3"/><rect x="12" y="12" width="3" height="3"/><rect x="16" y="12" width="3" height="3"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className={`product-grid grid-${gridColumns}`} style={{ transition: 'all 0.5s var(--ease-expo)' }}>
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id + 'a'} {...product} />
          ))}
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id + 'b'} {...product} delay={product.delay ? product.delay + 0.1 : 0} />
          ))}
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id + 'c'} {...product} delay={product.delay ? product.delay + 0.2 : 0} />
          ))}
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id + 'd'} {...product} delay={product.delay ? product.delay + 0.3 : 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
