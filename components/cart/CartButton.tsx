'use client';

import { useCart } from './CartContext';
import { CartDrawer } from './CartDrawer';

export const CartButton = () => {
  const { items, setOpen } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  return (
    <>
      <button className="relative border rounded-xl px-3 py-1" onClick={() => setOpen(true)}>
        Cart
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 grid place-items-center">{count}</span>
        )}
      </button>
      <CartDrawer />
    </>
  );
};
