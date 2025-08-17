import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/components/cart/CartContext';

export const metadata: Metadata = {
  title: 'Sweet Haven | Premium Indian Sweets',
  description: 'Elegant, modern sweet shop built with Next.js, TypeScript, Tailwind, and Framer Motion.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
