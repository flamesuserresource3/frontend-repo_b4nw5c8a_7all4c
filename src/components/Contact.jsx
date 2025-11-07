import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // For now, fake a delay to simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Let’s build something great</h2>
        <p className="mt-3 text-neutral-700">Tell me about your challenge and the outcomes you’re aiming for.</p>

        <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
          />
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white sm:col-span-2"
          />
          <textarea
            required
            name="message"
            placeholder="What would you like to achieve?"
            rows={5}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white sm:col-span-2"
          />
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-neutral-800"
            >
              <Send size={18} /> Send message
            </button>
            <p className="text-sm text-neutral-600">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
