import Image from 'next/image';

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
