'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from './cart/CartContext';
import { MotionButton } from './Button';

export function ProductCard({ product, enableAdd=false }: { product: Product, enableAdd?: boolean }) {
  const { addItem } = useCart();
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-lg">{product.badge}</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">₹{product.price}</span>
          {enableAdd && (
            <MotionButton onClick={() => addItem(product)}>
              Add to Cart
            </MotionButton>
          )}
        </div>
      </div>
    </div>
  );
}
