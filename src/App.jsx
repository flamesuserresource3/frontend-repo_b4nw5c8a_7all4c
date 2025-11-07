import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-16">
        <ErrorBoundary fallback={<SectionCrashFallback section="Hero" />}> 
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrashFallback section="Projects" />}> 
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrashFallback section="About" />}> 
          <About />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrashFallback section="Contact" />}> 
          <Contact />
        </ErrorBoundary>
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Name — Business Analyst & ML Enthusiast
      </footer>
    </div>
  );
}

function SectionCrashFallback({ section }) {
  return (
    <div className="mx-auto max-w-3xl p-6 my-8 rounded-xl bg-red-50 text-red-800 ring-1 ring-red-200">
      <p className="font-semibold">A section failed to load.</p>
      <p className="text-sm mt-1">Please reload the page. If the issue persists, the {section} section may have an issue.</p>
    </div>
  );
}
