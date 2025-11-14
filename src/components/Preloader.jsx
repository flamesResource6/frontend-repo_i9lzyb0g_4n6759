import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#0F0F0F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 120 120" className="absolute inset-0">
              <defs>
                <linearGradient id="amber" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
              <rect x="30" y="20" width="60" height="80" rx="12" fill="none" stroke="url(#amber)" strokeWidth="2" />
              <motion.rect
                x="34"
                y="24"
                width="52"
                height="72"
                rx="10"
                fill="url(#amber)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1] }}
                style={{ transformOrigin: '50% 100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
              />
            </svg>
          </div>
          <motion.p className="mt-6 text-sm tracking-wide text-white/70">Pouring…</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
