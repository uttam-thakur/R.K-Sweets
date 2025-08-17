'use client';

import { products } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';
import { useState } from 'react';

export default function MenuPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category || 'Other')))];

  const filtered = products.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container-responsive section">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <h1 className="section-title">Menu</h1>
        <div className="flex gap-2">
          <input
            className="border rounded-xl px-3 py-2 w-56"
            placeholder="Search sweets…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select
            className="border rounded-xl px-3 py-2"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <ProductGrid products={filtered} enableAdd />
    </div>
  );
}
