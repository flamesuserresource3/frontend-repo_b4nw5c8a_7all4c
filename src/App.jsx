import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />

        <section id="contact" className="py-24 bg-neutral-950 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s collaborate</h2>
            <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
              Have a challenge that needs clarity, automation, or a fresh analytical perspective? I’d love to hear about it.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow hover:bg-neutral-100"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Name — Business Analyst & ML Enthusiast
      </footer>
    </div>
  );
}
