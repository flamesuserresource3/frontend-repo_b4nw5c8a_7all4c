import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Bot, BarChart3, Sliders } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'Customer Churn NLP Insights',
    tags: ['NLP', 'LSTM', 'EDA'],
    description:
      'Modeled customer feedback using NLP to predict churn risk and surface emerging themes that drive retention actions.',
  },
  {
    icon: Bot,
    title: 'Support Ticket Triage',
    tags: ['Transformers', 'FastAPI', 'Queueing'],
    description:
      'Built an inference API that classifies and routes support tickets using a lightweight transformer with confidence thresholds.',
  },
  {
    icon: BarChart3,
    title: 'Pricing Elasticity Dashboard',
    tags: ['Time-series', 'Dashboards', 'Causal'],
    description:
      'Estimated price sensitivity and simulated scenarios to balance revenue and conversion with interactive visuals.',
  },
  {
    icon: Sliders,
    title: 'Automation of Business Reports',
    tags: ['Pandas', 'Airflow', 'Reporting'],
    description:
      'Automated weekly operations reports with anomaly flags and a succinct narrative summary for leadership.',
  },
];

function ProjectCard({ item, i }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -60 : 60]);

  const Icon = item.icon;
  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-neutral-900 text-white p-3">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-900">{item.title}</h3>
          <p className="mt-1 text-neutral-600 text-sm">{item.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs ring-1 ring-neutral-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Featured Work</h2>
          <p className="mt-3 text-neutral-700">
            A selection of projects that blend analytical rigor with creative problem-solving.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ProjectCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
