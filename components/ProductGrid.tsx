import { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products, enableAdd=false }: { products: Product[], enableAdd?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(p => <ProductCard key={p.id} product={p} enableAdd={enableAdd} />)}
    </div>
  );
}
