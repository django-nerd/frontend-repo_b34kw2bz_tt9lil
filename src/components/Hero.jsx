import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/80 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            Coach better. Track progress. Win more.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Modern, clean tools for coaches and teachers to capture notes on athletes, build skill plans, and see development over time.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/app" className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 shadow-lg">
              Get Started
              <ArrowRight size={18} />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg">
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
