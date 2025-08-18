'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CartButton } from './cart/CartButton';
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg">R.K Sweets</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <div className="relative group">
            <button className="hover:underline">Categories</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-soft border rounded-xl p-2 w-44">
              <Link href="/menu" className="block px-3 py-2 hover:bg-gray-50 rounded-lg">Traditional</Link>
              <Link href="/menu" className="block px-3 py-2 hover:bg-gray-50 rounded-lg">Dry Fruit</Link>
              <Link href="/menu" className="block px-3 py-2 hover:bg-gray-50 rounded-lg">Ladoo</Link>
            </div>
          </div>
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <CartButton />
          <button 
  onClick={() => setOpen(!open)} 
  className="md:hidden  px-3 py-1 flex items-center justify-center"
>
  <Menu size={24} />  {/* 3-line burger icon */}
</button>
          {/* <button onClick={() => setOpen(!open)} className="md:hidden border rounded-xl px-3 py-1">Menu</button> */}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-responsive py-3 flex flex-col gap-2">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};
