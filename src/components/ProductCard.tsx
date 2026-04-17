"use client";

import { useState } from 'react';
import Image from 'next/image';

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  status?: 'sold_out' | 'sale' | 'available';
  delay?: number;
}

const SIZES = ['S', 'M', 'L', 'XL'];

export default function ProductCard({ title, price, image, status, delay = 0 }: Product) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="product-card" style={{ animationDelay: `${delay}s` }}>
      <div className="product-img-wrapper">
        {status === 'sold_out' && <span className="badge sold-out">Sold Out</span>}
        {status === 'sale' && <span className="badge sale">Sale</span>}
        
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="product-img"
        />

        {status !== 'sold_out' && (
          <div className="size-selector">
            {SIZES.map(size => (
              <button 
                key={size} 
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        <button className="product-add-btn">
          {status === 'sold_out' ? 'Notify Me' : 'Add to Bag'}
        </button>
      </div>
      <div className="product-meta">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}
