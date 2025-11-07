import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D scene background */}
        <Spline
          scene="https://prod.spline.design/6mGqH1Q0q9b8dE0w/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium">
            Business Analyst • ML • NLP
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Turning data into decisions with a curious mind
          </h1>
          <p className="mt-5 text-neutral-700 max-w-xl">
            I blend analytical thinking with modern AI to uncover insights, automate workflows, and craft impactful stories that drive business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-neutral-800">
              Explore Projects
            </a>
            <a href="#about" className="inline-flex items-center rounded-full bg-white text-neutral-900 ring-1 ring-neutral-200 px-5 py-3 text-sm font-medium shadow hover:bg-neutral-50">
              About Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square lg:aspect-[4/3]"
        >
          {/* Character illustration using SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <CuteAnalyst />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CuteAnalyst() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-lg drop-shadow-2xl">
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8d6b8" />
          <stop offset="100%" stopColor="#f0c29b" />
        </linearGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a2a20" />
          <stop offset="100%" stopColor="#2a1c14" />
        </linearGradient>
      </defs>

      {/* hair */}
      <ellipse cx="200" cy="150" rx="110" ry="120" fill="url(#hair)" />

      {/* face */}
      <circle cx="200" cy="170" r="90" fill="url(#skin)" stroke="#e9b78c" strokeWidth="2" />

      {/* glasses */}
      <circle cx="165" cy="170" r="28" fill="none" stroke="#222" strokeWidth="4" />
      <circle cx="235" cy="170" r="28" fill="none" stroke="#222" strokeWidth="4" />
      <line x1="193" y1="170" x2="207" y2="170" stroke="#222" strokeWidth="4" />
      <path d="M137 168 C145 150, 155 145, 165 150" fill="none" stroke="#222" strokeWidth="3" />
      <path d="M263 168 C255 150, 245 145, 235 150" fill="none" stroke="#222" strokeWidth="3" />

      {/* eyes */}
      <circle cx="165" cy="176" r="6" fill="#222" />
      <circle cx="235" cy="176" r="6" fill="#222" />

      {/* smile */}
      <path d="M170 205 Q200 220 230 205" stroke="#a35b5b" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* hair details */}
      <path d="M110 150 C150 80, 250 80, 290 150" fill="none" stroke="#2a1c14" strokeOpacity="0.4" strokeWidth="6" />

      {/* body */}
      <rect x="140" y="250" width="120" height="90" rx="20" fill="#5b7fff" />
      <rect x="140" y="240" width="120" height="20" rx="10" fill="#4158d0" />

      {/* magnifying glass */}
      <circle cx="300" cy="230" r="26" fill="none" stroke="#5b7fff" strokeWidth="6" />
      <line x1="282" y1="250" x2="260" y2="280" stroke="#5b7fff" strokeWidth="8" strokeLinecap="round" />
      <circle cx="300" cy="230" r="18" fill="none" stroke="#94b0ff" strokeWidth="3" />

      {/* hand holding magnifier */}
      <circle cx="260" cy="280" r="12" fill="url(#skin)" stroke="#e9b78c" />

      {/* earrings bindi hint for Indian look */}
      <circle cx="200" cy="155" r="4" fill="#b10a0a" />
      <circle cx="144" cy="190" r="5" fill="#d19f75" stroke="#b5835a" />
      <circle cx="256" cy="190" r="5" fill="#d19f75" stroke="#b5835a" />

      {/* subtle animation using CSS utility */}
      <g className="animate-bounce-slow origin-bottom">
        <path d="M150 320 Q200 340 250 320" stroke="#2b2b2b" strokeOpacity="0.08" strokeWidth="16" strokeLinecap="round" />
      </g>
      <style>{`
        .animate-bounce-slow { animation: bounce 4s ease-in-out infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </svg>
  );
}
