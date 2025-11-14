import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ModalVideo from './ModalVideo'
import { useNavigate } from 'react-router-dom'

const headline = 'CLOUDBAR'
const subline = 'Order real drinks. Delivered in sync. Toast with friends 3,000 miles away.'

export default function Hero() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const letters = useMemo(() => headline.split(''), [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/70 to-[#0F0F0F]/30 pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-[120px] pb-24 grid place-items-center text-center">
        <div className="max-w-5xl">
          <h1 className="text-[44px] md:text-[72px] font-black tracking-[-0.08em] text-white select-none">
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-6 md:mt-4 text-[18px] md:text-[24px] text-white/80 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.08 + 0.1 }}
          >
            {subline}
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.08 + 0.25 }}
          >
            <button
              className="px-6 md:px-8 py-3 md:py-3.5 rounded-full text-white font-medium bg-[#D97706] hover:scale-[1.03] hover:shadow-[0_0_0_4px_rgba(217,119,6,0.25)] transition-all"
              onClick={() => navigate('/waitlist')}
            >
              Join the Waitlist
            </button>
            <button
              className="px-6 md:px-8 py-3 md:py-3.5 rounded-full text-white/90 font-medium border border-[#0D9488] hover:bg-[#0D9488]/10 backdrop-blur-xl"
              onClick={() => navigate('/how-it-works')}
            >
              How It Works
            </button>
          </motion.div>
        </div>
      </div>

      <ModalVideo open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
