'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert('Please fill all fields.');
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="container-responsive section">
      <h1 className="section-title mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <input
            className="border rounded-xl px-3 py-2 w-full"
            placeholder="Your name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border rounded-xl px-3 py-2 w-full"
            placeholder="Your email"
            type="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="border rounded-xl px-3 py-2 w-full min-h-[120px]"
            placeholder="Your message"
            required
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button className="btn btn-primary" disabled={status==='submitting'}>
            {status==='submitting' ? 'Sending…' : 'Send Message'}
          </button>
          {status==='success' && <p className="text-green-600">Thanks! We will get back to you soon.</p>}
          {status==='error' && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>

        <div className="space-y-4">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-2">Our Address</h2>
            <p className="text-gray-600">RK Sweets, Mahua Dangal, Railpar, India</p>
            <p className="text-gray-600">Open: 9:00 AM – 9:00 PM (Mon–Sun)</p>
            <p className="text-gray-600">Phone: +91-7384538258</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft border border-gray-100">
            <iframe
              title="Sweet Haven Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3831327395606!2d86.96389621100921!3d23.698008390696728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f580feb4f05%3A0x581836544193cb2f!2sR.k%20Sweets!5e0!3m2!1sen!2sin!4v1759311321140!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
