'use client';

import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { Product } from '@/lib/types';

export type CartItem = Product & { qty: number };

type State = { items: CartItem[]; open: boolean };
type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; id: string }
  | { type: 'INC'; id: string }
  | { type: 'DEC'; id: string }
  | { type: 'CLEAR' }
  | { type: 'OPEN' }
  | { type: 'CLOSE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const found = state.items.find(i => i.id === action.product.id);
      const items = found
        ? state.items.map(i => i.id === found.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.items, { ...action.product, qty: 1 }];
      return { ...state, items };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'INC':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i) };
    case 'DEC':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i) };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'OPEN':
      return { ...state, open: true };
    case 'CLOSE':
      return { ...state, open: false };
    default:
      return state;
  }
}

const CartCtx = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: { items: [], open: false }, dispatch: () => {} });

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [state, dispatch] = useReducer(reducer, { items: [], open: false });

  useEffect(() => {
    const raw = localStorage.getItem('cart');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        dispatch({ type: 'CLOSE' });
        // restore items without open state
        (parsed.items || []).forEach((p: any) => {
          for (let i = 0; i < (p.qty || 1); i++) {
            dispatch({ type: 'ADD', product: p });
          }
        });
      } catch {}
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem('cart', JSON.stringify({ items: state.items }));
  }, [state.items, hydrated]);

  return <CartCtx.Provider value={{ state, dispatch }}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const { state, dispatch } = useContext(CartCtx);
  return {
    items: state.items,
    open: state.open,
    addItem: (p: Product) => dispatch({ type: 'ADD', product: p }),
    removeItem: (id: string) => dispatch({ type: 'REMOVE', id }),
    inc: (id: string) => dispatch({ type: 'INC', id }),
    dec: (id: string) => dispatch({ type: 'DEC', id }),
    clear: () => dispatch({ type: 'CLEAR' }),
    setOpen: (v: boolean) => dispatch({ type: v ? 'OPEN' : 'CLOSE' })
  };
}
