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
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <CuteAnalyst />
            </motion.div>
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
          <stop offset="0%" stopColor="#f6d1a8" />
          <stop offset="100%" stopColor="#eab48a" />
        </linearGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111113" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="lensShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* back hair/ponytail */}
      <path d="M90 180 C100 110, 180 70, 230 90 C290 115, 310 170, 305 220 C300 270, 260 300, 220 310" fill="url(#hair)" opacity="0.9" />

      {/* head */}
      <circle cx="200" cy="170" r="92" fill="url(#skin)" stroke="#e2a979" strokeWidth="2" />

      {/* front hair fringe */}
      <path d="M110 150 C140 90, 220 80, 285 145 C260 132, 235 140, 205 145 C175 150, 145 155, 120 165" fill="url(#hair)" />

      {/* big round glasses */}
      <circle cx="160" cy="172" r="34" fill="none" stroke="#1f2937" strokeWidth="6" />
      <circle cx="240" cy="172" r="34" fill="none" stroke="#1f2937" strokeWidth="6" />
      <line x1="194" y1="172" x2="206" y2="172" stroke="#1f2937" strokeWidth="6" />
      {/* subtle lens shine */}
      <path d="M136 156 L152 140" stroke="url(#lensShine)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M248 140 L264 156" stroke="url(#lensShine)" strokeWidth="6" strokeLinecap="round"/>

      {/* eyes (with tiny blink animation using opacity) */}
      <g className="eye-group">
        <circle cx="160" cy="178" r="6" fill="#111" />
        <circle cx="240" cy="178" r="6" fill="#111" />
      </g>

      {/* nose and smile */}
      <path d="M196 182 Q200 187 204 182" stroke="#7a4a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M170 206 Q200 222 230 206" stroke="#b15858" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* earrings and bindi for Indian look */}
      <circle cx="200" cy="156" r="4.5" fill="#b10a0a" />
      <circle cx="142" cy="192" r="5" fill="#d19f75" stroke="#b5835a" />
      <circle cx="258" cy="192" r="5" fill="#d19f75" stroke="#b5835a" />

      {/* body with purple clothes */}
      <rect x="138" y="248" width="124" height="94" rx="22" fill="#7c3aed" />
      <rect x="138" y="236" width="124" height="22" rx="11" fill="#6d28d9" />
      {/* collar/neckline */}
      <path d="M160 248 Q200 265 240 248" fill="#8b5cf6" opacity="0.7" />

      {/* left arm */}
      <path d="M138 270 C120 275, 120 300, 140 305" stroke="url(#skin)" strokeWidth="18" strokeLinecap="round" />

      {/* magnifying glass in right hand */}
      <g className="magnifier">
        <circle cx="300" cy="230" r="28" fill="none" stroke="#7c3aed" strokeWidth="7" />
        <circle cx="300" cy="230" r="20" fill="none" stroke="#c4b5fd" strokeWidth="3" />
        <line x1="284" y1="248" x2="260" y2="280" stroke="#7c3aed" strokeWidth="10" strokeLinecap="round" />
        {/* highlight sweep */}
        <path d="M286 218 L294 210" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* hand holding magnifier */}
      <circle cx="260" cy="280" r="12" fill="url(#skin)" stroke="#e2a979" />

      {/* subtle shadow under character */}
      <g className="shadow-blob">
        <path d="M150 322 Q200 340 250 322" stroke="#111" strokeOpacity="0.08" strokeWidth="18" strokeLinecap="round" />
      </g>

      <style>{`
        .eye-group { animation: blink 6s ease-in-out infinite; transform-origin: 200px 170px; }
        @keyframes blink {
          0%, 92%, 100% { opacity: 1; }
          94%, 96% { opacity: 0; }
        }
        .magnifier { animation: glint 4s ease-in-out infinite; transform-origin: 300px 230px; }
        @keyframes glint {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </svg>
  );
}
