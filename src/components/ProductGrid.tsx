import ProductCard, { Product } from './ProductCard';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "ESSENTIAL OVERSIZED TEE",
    price: "IDR 320.000,00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
    delay: 0.1
  },
  {
    id: "2",
    title: "BLACKOUT PREMIUM HOODIE",
    price: "IDR 850.000,00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
    delay: 0.2
  },
  {
    id: "3",
    title: "VINTAGE WASH SWEATSHIRT",
    price: "IDR 680.000,00",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
    delay: 0.3
  },
  {
    id: "4",
    title: "STREET CULTURE GRAPHIC TEE",
    price: "IDR 350.000,00",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800",
    status: "sold_out",
    delay: 0.4
  }
];

export default function ProductGrid({ limit }: { limit?: number }) {
  const products = limit ? MOCK_PRODUCTS.slice(0, limit) : MOCK_PRODUCTS;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
