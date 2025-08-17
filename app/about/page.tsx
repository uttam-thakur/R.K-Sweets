'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="section bg-black text-white">
      <div className="container-responsive">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-gray-300 leading-relaxed">
              Started as a humble kitchen in 1992, Sweet Haven blends tradition with modern flavors.
              We source premium ingredients and make fresh batches daily—no shortcuts, no compromises.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              From festive hampers to everyday indulgence, our sweets are crafted to make moments memorable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 sm:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1615485737671-b9827f7a1a21?q=80&w=1400&auto=format&fit=crop"
              alt="Sweet shop showcase"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
