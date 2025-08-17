import { Product } from './types';

export const products: Product[] = [
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    price: 199,
    image: 'https://images.unsplash.com/photo-1631452180519-3f4d2b87af3f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Traditional',
    description: 'Soft, spongy and soaked in light sugar syrup.'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    price: 229,
    image: 'https://images.unsplash.com/photo-1625928435232-3f0bd08d3966?q=80&w=1200&auto=format&fit=crop',
    badge: 'Chef’s Pick',
    category: 'Traditional',
    description: 'Melt-in-mouth milk solids fried golden and soaked in rose syrup.'
  },
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    price: 349,
    image: 'https://images.unsplash.com/photo-1615485737671-b9827f7a1a21?q=80&w=1200&auto=format&fit=crop',
    category: 'Cashew',
    description: 'Thin diamond slices of rich cashew fudge.'
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    price: 299,
    image: 'https://images.unsplash.com/photo-1615486363814-f5ab07d3fda4?q=80&w=1200&auto=format&fit=crop',
    category: 'Traditional',
    description: 'Cottage cheese patties soaked in saffron milk with pistachios.'
  },
  {
    id: 'besan-ladoo',
    name: 'Besan Ladoo',
    price: 179,
    image: 'https://images.unsplash.com/photo-1601050690597-9f7c5f4b5c4a?q=80&w=1200&auto=format&fit=crop',
    category: 'Ladoo',
    description: 'Gram flour ladoos roasted with ghee and cardamom.'
  }
];
