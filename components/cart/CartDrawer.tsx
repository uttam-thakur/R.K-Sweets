'use client';

import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const { items, setOpen, open, inc, dec, removeItem, clear } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
console.log("--->",items);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-soft p-4 flex flex-col"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: 'tween' }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">Your Cart</h3>
              <button onClick={() => setOpen(false)} className="text-sm text-gray-500">Close</button>
            </div>
            <div className="flex-1 overflow space-y-3 bg-gray-100 ">
              {items.length === 0 && <p className="text-sm text-gray-500">Your cart is empty.</p>}
              {items.map(i =>{ 
                 console.log("Cart Item:", i); 
             
             return (
                
                <div key={i.id} className="border rounded-xl p-3 ">
                  <div className="font-medium ">{i.name}</div>
                  <div className="text-sm text-gray-500">₹{i.price}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="border rounded-lg px-2" onClick={() => dec(i.id)}>-</button>
                    <span>{i.qty}</span>
                    <button className="border rounded-lg px-2" onClick={() => inc(i.id)}>+</button>
                    <button className="ml-auto text-red-600 text-sm" onClick={() => removeItem(i.id)}>Remove</button>
                  </div>
                </div>
              

              )})}


            </div>
            <div className="mt-3 border-t pt-3 bg-gray-100  p-3 ">
              <div className="flex items-center justify-between font-semibold ">
                <span >Total</span><span>₹{total}</span>
              </div>
              <button className="btn btn-primary w-full mt-3" onClick={() => { clear(); setOpen(false); alert('Checkout demo complete!'); }}>Checkout</button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
