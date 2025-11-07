import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Name — Business Analyst & ML Enthusiast
      </footer>
    </div>
  );
}
