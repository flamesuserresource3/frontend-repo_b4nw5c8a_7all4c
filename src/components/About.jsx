import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">About Me</h2>
          <p>
            I’m a business analyst who loves making sense of messy data. My work sits at the intersection of
            analytics, product, and storytelling — translating insights into clear, confident decisions.
          </p>
          <p>
            I’m comfortable moving through the full workflow: framing the question, shaping the data, modeling with
            pragmatic ML, and presenting an intuitive narrative. I care about solving the right problem — not just the hard one.
          </p>
          <ul>
            <li>Data wrangling and exploration with Python</li>
            <li>Practical ML for classification, NLP, and forecasting</li>
            <li>Experiment design and simple causal thinking</li>
            <li>Clear stakeholder communication and prioritization</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 ring-1 ring-neutral-200 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6 opacity-80">
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200 col-span-2" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200 col-span-2" />
              <div className="rounded-xl bg-white/60 ring-1 ring-neutral-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
